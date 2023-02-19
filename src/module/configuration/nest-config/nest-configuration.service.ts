import { Injectable } from '@nestjs/common';
import { IConfigurationService } from '../types/configuration.service.interface';

@Injectable()
export class NestConfigurationService implements IConfigurationService {
  getDbPort(): number {
    throw new Error('Method not implemented.');
  }
  getDbPassword(): string {
    throw new Error('Method not implemented.');
  }
  getDbName(): string {
    throw new Error('Method not implemented.');
  }
}
