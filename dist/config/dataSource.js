"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataBase = void 0;
const typeorm_1 = require("typeorm");
exports.dataBase = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const postgresDB = new typeorm_1.DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 49153,
                username: 'postgres',
                password: 'postgrespw',
                database: 'postgres',
                entities: ['src/shared/entities/*.entity.{ts,js}'],
                migrations: ['src/shared/migrations/*.{ts,js}'],
                synchronize: false,
            });
            return postgresDB.initialize();
        },
    },
];
//# sourceMappingURL=dataSource.js.map