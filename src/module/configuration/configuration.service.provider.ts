import { IConfigurationServiceToken } from './configuration.service.interface';
import { MockConfigurationService } from './mock/mock-configuration.service';

export const configurationServiceProvider = {
  provide: IConfigurationServiceToken,
  useClass: MockConfigurationService,
};
