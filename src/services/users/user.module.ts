import { Module } from '@nestjs/common';
import { userProviders } from '../../shared/providers/user.providers';
import { UserService } from './user.service';
import { DatabaseModule } from '../db/db.module';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, UserService],
})
export class UserModule {}
