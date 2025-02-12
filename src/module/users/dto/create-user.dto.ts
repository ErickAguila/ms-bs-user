import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'El campo username no puede ser vacío' })
  @Length(4, 20, {
    message:
      'El campo username debe tener entre $constraint1 y $constraint2 caracteres',
  })
  @ApiProperty({
    description: 'Nombre de usuario',
    type: String,
    required: true,
    maxLength: 20,
    minLength: 4,
    example: 'johndoe',
  })
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'El campo password no puede ser vacío' })
  @Length(4, 20, {
    message:
      'El campo password debe tener entre $constraint1 y $constraint2 caracteres',
  })
  @ApiProperty({
    description: 'password',
    type: String,
    required: true,
    maxLength: 20,
    minLength: 4,
    example: '********',
  })
  password: string;

  @IsEmail({}, { message: 'El campo email debe ser un correo válido' })
  @IsNotEmpty({ message: 'El campo email no puede ser vacío' })
  @IsString()
  @Length(4, 50, {
    message:
      'El campo email debe tener entre $constraint1 y $constraint2 caracteres',
  })
  @ApiProperty({
    description: 'Correo electrónico',
    type: String,
    required: true,
    maxLength: 50,
    minLength: 4,
    example: 'jhon@dev.com',
  })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'El campo role no puede ser vacío' })
  @Length(4, 20, {
    message:
      'El campo role debe tener entre $constraint1 y $constraint2 caracteres',
  })
  @ApiProperty({
    description: 'Rol del usuario',
    type: String,
    required: true,
    maxLength: 20,
    minLength: 4,
    example: 'admin | cliente | vendor',
  })
  role: string;
}
