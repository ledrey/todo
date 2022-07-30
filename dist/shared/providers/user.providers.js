"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProviders = void 0;
const users_entity_1 = require("../entities/users.entity");
exports.userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(users_entity_1.User),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=user.providers.js.map