import { Module } from '@nestjs/common';
import { AudioController } from './audio.controller';
import { AudioProcessor } from './audio.processor';
import { BullModule } from '@nestjs/bull';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AudioConvertedListener } from './audio-converted-listener';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'audio-queue',
    }),
    EventEmitterModule.forRoot(),
  ],
  controllers: [AudioController],
  providers: [AudioProcessor, AudioConvertedListener],
})
export class AudioModule { }
