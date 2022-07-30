"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProviders = void 0;
const records_entity_1 = require("../entities/records.entity");
exports.recordProviders = [
    {
        provide: 'RECORD_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(records_entity_1.Record),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=record.providers.js.map