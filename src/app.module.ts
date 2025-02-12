import { Module } from '@nestjs/common';
import { UsersModule } from './module/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'roundhouse.proxy.rlwy.net',
      port: 27082,
      username: 'postgres',
      password: 'OzKkmRvXlvyuebpqmScLMeCbQEQCRbSt',
      database: 'railway',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
