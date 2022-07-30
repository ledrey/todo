import { Record } from './records.entity';
export declare class User {
    id: number;
    name: Text;
    location: Text;
    createdAt: Date;
    updatedAt: Date;
    records: Record[];
}
