export enum ConfigurationModuleType {
  NEST_CONFIG = 'nestjs-config',
  MOCK_CONFIG = 'mock-config',
}

export interface ConfigurationModuleParams {
  type: ConfigurationModuleType;
}
