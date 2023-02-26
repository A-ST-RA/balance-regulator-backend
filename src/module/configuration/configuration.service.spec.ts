import { Test, TestingModule } from '@nestjs/testing';
import {
  IConfigurationService,
  IConfigurationServiceToken,
} from './types/configuration.service.interface';
import { ConfigurationModule } from './configuration.module';
import { ConfigurationModuleType } from './types/configuration-params.module.interface';

const moduleType = ConfigurationModuleType.NEST_CONFIG;

describe(`ConfigurationService: IMPL ${moduleType}`, () => {
  let service: IConfigurationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigurationModule.forRoot({
          type: moduleType,
        }),
      ],
    }).compile();

    service = module.get<IConfigurationService>(IConfigurationServiceToken);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get db port that should to be bigger than 0', () => {
    expect(service.getDbPort()).toBeGreaterThan(0);
  });

  it('should get db port that should to be integer', () => {
    const isDbPortInteger = Number.isInteger(service.getDbPort());

    expect(isDbPortInteger).toBeTruthy();
  });

  it('should get db name that should to be of type string', () => {
    const isString = typeof service.getDbName() === 'string';

    expect(isString).toBeTruthy();
  });

  it('should get db password that should to be a string', () => {
    const isString = typeof service.getDbPassword() === 'string';

    expect(isString).toBeTruthy();
  });
});
