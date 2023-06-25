import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackServive } from './track.service';

@Module({
  controllers: [TrackController],
  providers: [TrackServive],
})
export class TrackModule {}
