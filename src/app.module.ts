import { ConfigurationModuleType } from './module/configuration/types/configuration-params.module.interface';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './module/configuration/configuration.module';

@Module({
  imports: [
    ConfigurationModule.forRoot({
      type: ConfigurationModuleType.NEST_CONFIG,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
