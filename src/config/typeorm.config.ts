import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 549,
    username: '',
    password: '',
    database: '',
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true,
};