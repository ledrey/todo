import { Repository } from 'typeorm';
import { User } from '../../shared/entities/users.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
}
