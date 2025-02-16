import { Module } from '@nestjs/common';
import { UsersModule } from './module/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { configEnv, configVar } from './config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../.env',
      load: [configEnv], // Carga la configuración de las variables de entorno
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: configVar.DATABASE.HOST,
      port: configVar.DATABASE.PORT,
      username: configVar.DATABASE.USERNAME,
      password: configVar.DATABASE.PASSWORD,
      database: configVar.DATABASE.DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
