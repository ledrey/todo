import { DataSource } from 'typeorm';
import { Record } from '../entities/records.entity';
export declare const recordProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Record>;
    inject: string[];
}[];
