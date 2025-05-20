<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

Microserevicio para la gestion de usuarios de la tienda online.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

## 🚀 Características

- Gestión completa de usuarios
- Autenticación JWT
- Roles y permisos
- Manejo de sesiones
- Validación y sanitización de datos
- Integración con Firebase
- Logging y auditoría

## 🛠️ Stack Tecnológico

- **Framework**: NestJS
- **Lenguaje**: TypeScript
- **Base de Datos**: PostgreSQL
- **Autenticación**: JWT
- **Validación**: Class Validator
- **Documentación**: Swagger
- **Testing**: Jest
- **Logging**: Winston

## 📋 Requisitos Previos

- Node.js (v18 o superior)
- npm
- PostgreSQL
- Docker (opcional para desarrollo)

## 🚀 Empezando

### Instalación

1. Clonar el repositorio:
```bash
git clone [repository-url]
cd ms-bs-user
```

2. Instalar dependencias:
```bash
npm install
```

### Desarrollo

1. Iniciar el servidor de desarrollo:
```bash
npm run start:dev
```

2. Documentación Swagger:
```bash
http://localhost:3002/doc
```

### Construcción en Producción

1. Construir para producción:
```bash
npm run build
```

2. Ejecutar en producción:
```bash
npm run start:prod
```

## 📦 Despliegue con Docker

El proyecto incluye un Dockerfile para despliegue en contenedor. Construir y ejecutar el contenedor:

```bash
npm run docker:build
npm run docker:run
```

## 🔐 Variables de Entorno

La aplicación utiliza variables de entorno para la configuración. Crea un archivo `.env` con las siguientes variables:

```env
PORT=3002
NODE_ENV=development

# Configuración de Firebase
FIREBASE_TYPE=xxxxx
FIREBASE_PROJECT_ID=xxxxx
FIREBASE_PRIVATE_KEY_ID=xxxxx
FIREBASE_PRIVATE_KEY=xxxxx
FIREBASE_CLIENT_EMAIL=xxxxx
FIREBASE_CLIENT_ID=xxxxx
FIREBASE_AUTH_URI=xxxxx
FIREBASE_TOKEN_URI=xxxxx
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=xxxxx
FIREBASE_CLIENT_X509_CERT_URL=xxxxx
FIREBASE_UNIVERSE_DOMAIN=xxxxx

# Base de datos
DB_HOST=xxxxx
DB_PORT=xxxxx
DB_USERNAME=xxxxx
DB_PASSWORD=xxxxx
DB_DATABASE=xxxxx
```

## 📝 Estructura del Proyecto

```
ms-bs-user/
├── src/              # Código fuente
│   ├── app/         # Módulo principal
│   ├── config/      # Configuración
│   ├── modules/     # Módulos de negocio
│   │   ├── users/   # Módulo de usuarios
│   ├── common/      # Utilidades compartidas
│   └── main.ts      # Punto de entrada
├── test/            # Tests
├── docker/          # Configuración Docker
├── .env             # Variables de entorno
├── docker-compose.yml # Compose para desarrollo
└── package.json     # Dependencias y scripts
```

## 🛠️ Herramientas de Desarrollo

- **Formateo de Código**: ESLint
- **Pruebas**: Jest
- **Documentación**: Swagger
- **Logging**: Winston

## 📝 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para detalles.

## 🤝 Contribuyendo

1. Fork del repositorio
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Añadir alguna AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre una Pull Request

## 👥 Autores

- Erick Aguila - Trabajo inicial

## 📚 Documentación

- [Documentación de NestJS](https://docs.nestjs.com)
- [Documentación de TypeScript](https://www.typescriptlang.org/docs)
- [Documentación de Swagger](https://swagger.io/docs)
- [Documentación de PostgreSQL](https://www.postgresql.org/docs)
- [Documentación de Firebase](https://firebase.google.com/docs)

## 🔍 Estado del Proyecto

[![GitHub issues](https://img.shields.io/github/issues/yourusername/ms-bs-user)](https://github.com/yourusername/ms-bs-user/issues)
[![GitHub license](https://img.shields.io/github/license/yourusername/ms-bs-user)](https://github.com/yourusername/ms-bs-user/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/yourusername/ms-bs-user)](https://github.com/yourusername/ms-bs-user/stargazers)

---

Hecho con ❤️ por Erick Aguila

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
