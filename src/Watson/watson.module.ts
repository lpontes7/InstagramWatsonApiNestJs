import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/Config/Config.module';
import { WatsonController } from './watson.controller';
import { WatsonService } from './watson.service';

@Module({
  imports: [ConfigModule],
  controllers: [WatsonController],
  providers: [WatsonService],
})
export class WatsonModule {}
