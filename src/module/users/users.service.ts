import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { firebaseAdmin } from 'src/shared/config/firebase.config';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userFirebase = await firebaseAdmin.auth().createUser({
      email: createUserDto.email,
      password: createUserDto.password,
    });
    if (userFirebase.uid) {
      Logger.log(`Usuario creado en Firebase con ID: ${userFirebase.uid}`);
      const user = {
        username: createUserDto.username,
        email: createUserDto.email,
        role: createUserDto.role,
      } as User;
      const userDb = await this.usersRepository.save(user).catch((error) => {
        Logger.error(`Error al crear el usuario en la base de datos: ${error}`);
        throw new Error('Error al crear el usuario');
      });
      Logger.log(`Usuario creado en la base de datos con ID: ${userDb.userId}`);
      return userDb;
    }
    Logger.error('Error al crear el usuario en Firebase');
    throw new Error('Error al crear el usuario');
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<User | null> {
    const user = await this.usersRepository.findOneBy({ userId: id });
    if (!user) {
      Logger.error(`User #${id} not found`);
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async remove(id: number): Promise<{ message: string; status: number }> {
    //TODO: Manejo de transacciones
    const user = await this.findOne(id);
    await this.usersRepository
      .delete(id)
      .then(() => {
        Logger.log(`Usuario eliminado con ID: ${id}`);
      })
      .catch((error) => {
        Logger.error(`Error al eliminar el usuario: ${error}`);
        throw new Error('Error al eliminar el usuario');
      });
    await firebaseAdmin
      .auth()
      .getUserByEmail(user.email)
      .then((user) => {
        firebaseAdmin.auth().deleteUser(user.uid);
      })
      .catch((error) => {
        Logger.error(`Error al eliminar el usuario de Firebase: ${error}`);
        throw new Error('Error al eliminar el usuario de Firebase');
      });
    return { message: 'Usuario eliminado', status: 200 };
  }
}
