import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RescuerService } from './rescuer.service';
import { RescuerResolver } from './rescuer.resolver';
import { Rescuer } from './entities/rescuer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rescuer])],
  providers: [RescuerService, RescuerResolver],
})
export class RescuerModule {}
