import { Module } from '@nestjs/common';
import { dataBase } from '../../config/dataSource';

@Module({
  providers: [...dataBase],
  exports: [...dataBase],
})
export class DatabaseModule {}
