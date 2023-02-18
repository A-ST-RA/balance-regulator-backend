import { Injectable } from '@nestjs/common';
import { IConfigurationService } from '../configuration.service.interface';

@Injectable()
export class MockConfigurationService implements IConfigurationService {
  public getDbPort(): number {
    return 1;
  }

  public getDbPassword(): string {
    throw new Error('Method not implemented.');
  }

  public getDbName(): string {
    throw new Error('Method not implemented.');
  }
}
