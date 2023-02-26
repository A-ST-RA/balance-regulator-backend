import { DynamicModule, Module } from '@nestjs/common';
import { ConfigurationModuleParams } from './types/configuration-params.module.interface';
import { configModule } from './configuration.module.map';

@Module({})
export class ConfigurationModule {
  static forRoot(configParams: ConfigurationModuleParams): DynamicModule {
    return {
      module: ConfigurationModule,
      ...configModule[configParams.type],
    };
  }
}
