import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';
import { ConfigModule } from './Config/Config.module';
import { InstagramModule } from './Instagram/instagram.module';
import { WatsonModule } from './Watson/watson.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'view'),
    }),
    ConfigModule,
    InstagramModule,
    WatsonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
