import { DataSource } from 'typeorm';
import { User } from '../entities/users.entity';
export declare const userProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<User>;
    inject: string[];
}[];
