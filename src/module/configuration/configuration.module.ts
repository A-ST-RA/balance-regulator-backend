import { DynamicModule, Module } from '@nestjs/common';
import {
  ConfigurationModuleParams,
  ConfigurationModuleType,
} from './types/configuration-params.module.interface';
import { ConfigModule } from '@nestjs/config';
import { NestConfigurationService } from './nest-config/nest-configuration.service';
import { MockConfigurationService } from './mock/mock-configuration.service';

@Module({})
export class ConfigurationModule {
  static forRoot(configParams: ConfigurationModuleParams): DynamicModule {
    return {
      module: ConfigurationModule,
      imports: this.requiredImports(configParams.type),
      providers: this.requiredProviders(configParams.type),
      exports: this.requiredProviders(configParams.type),
    };
  }

  private static requiredImports(type: ConfigurationModuleType) {
    const configModuleTypeImports = {
      [ConfigurationModuleType.NEST_CONFIG]: [ConfigModule.forRoot()],
      [ConfigurationModuleType.MOCK_CONFIG]: [],
    };

    return configModuleTypeImports[type];
  }

  private static requiredProviders(type: ConfigurationModuleType) {
    const configModuleTypeProviders = {
      [ConfigurationModuleType.NEST_CONFIG]: [NestConfigurationService],
      [ConfigurationModuleType.MOCK_CONFIG]: [MockConfigurationService],
    };

    return configModuleTypeProviders[type];
  }
}
