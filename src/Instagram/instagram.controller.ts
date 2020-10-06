import { Controller, Get, HttpService, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { InstagramService } from './instagram.service';

@Controller('Instagram')
export class InstagramController {
  constructor(
    private readonly instagramService: InstagramService,
    private readonly http: HttpService,
  ) {}

  @Get('/:account')
  @ApiTags('Instagram')
  @ApiOperation({
    summary: 'Pegar Json do perfil do instagram informado',
  })
  async GetProfile(@Param('account') accountName: string) {
    const response = await this.http
      .get('https://www.instagram.com/' + accountName + '/?__a=1')
      .toPromise();
    return response.data;
  }
}
