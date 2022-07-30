import { User } from './users.entity';
export declare class Record {
    id: number;
    title: Text;
    content: Text;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    user: User;
}
