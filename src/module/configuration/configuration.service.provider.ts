import { IConfigurationServiceToken } from './types/configuration.service.interface';
import { MockConfigurationService } from './mock/mock-configuration.service';

export const configurationServiceProvider = {
  provide: IConfigurationServiceToken,
  useClass: MockConfigurationService,
};
