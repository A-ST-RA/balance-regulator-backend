export const IConfigurationServiceToken = Symbol('IConfigurationService');

export interface IConfigurationService {
  getDbPort(): number;

  getDbPassword(): string;

  getDbName(): string;
}
