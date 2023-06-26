import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './track/file/file.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://hellray_xopc:JuVZV0t2MaWAXwU6@cluster0.zd3fqci.mongodb.net/?retryWrites=true&w=majority',
    ),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}
