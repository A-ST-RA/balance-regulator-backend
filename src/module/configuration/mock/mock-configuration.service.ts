import { Injectable } from '@nestjs/common';
import { IConfigurationService } from '../types/configuration.service.interface';

@Injectable()
export class MockConfigurationService implements IConfigurationService {
  public getDbPort(): number {
    return 1;
  }

  public getDbPassword(): string {
    return 'some-db-password';
  }

  public getDbName(): string {
    return 'some-db-name';
  }
}
