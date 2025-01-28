import { Module } from '@nestjs/common';
import { SitesService } from './sites.service';
import { SitesController } from './sites.controller';

@Module({
  providers: [SitesService],
  controllers: [SitesController]
})
export class SitesModule {}
