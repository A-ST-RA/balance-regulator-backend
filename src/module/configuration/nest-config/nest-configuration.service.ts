import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IConfigurationService } from '../types/configuration.service.interface';

@Injectable()
export class NestConfigurationService implements IConfigurationService {
  constructor(private configService: ConfigService) {}

  getDbPort(): number {
    return +this.configService.get<number>('DB_PORT');
  }

  getDbPassword(): string {
    return this.configService.get<string>('DB_PASSWORD');
  }

  getDbName(): string {
    return this.configService.get<string>('DB_NAME');
  }
}
