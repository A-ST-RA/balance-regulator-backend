import { ConfigurationModuleType } from './types/configuration-params.module.interface';
import {
  IConfigurationService,
  IConfigurationServiceToken,
} from './types/configuration.service.interface';
import { MockConfigurationService } from './mock/mock-configuration.service';
import { NestConfigurationService } from './nest-config/nest-configuration.service';
import { ConfigModule } from '@nestjs/config';
import { Type } from '@nestjs/common';

const configurationServiceProvider = (
  useClass: Type<IConfigurationService>,
) => ({
  provide: IConfigurationServiceToken,
  useClass,
});

export const configModule = {
  [ConfigurationModuleType.NEST_CONFIG]: {
    imports: [ConfigModule.forRoot()],
    providers: [configurationServiceProvider(NestConfigurationService)],
    exports: [configurationServiceProvider(NestConfigurationService)],
  },
  [ConfigurationModuleType.MOCK_CONFIG]: {
    providers: [configurationServiceProvider(MockConfigurationService)],
    exports: [configurationServiceProvider(MockConfigurationService)],
  },
};
