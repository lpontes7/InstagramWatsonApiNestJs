import { Controller, Get, Param, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ConfigService } from 'src/Config/config.service';
import { WatsonService } from './watson.service';
import { Response } from 'express';

@Controller('Watson')
@ApiTags('Watson')
export class WatsonController {
  constructor(
    private readonly configService: ConfigService,
    private readonly watsonService: WatsonService,
  ) {}

  @Get('imagem/:url')
  @ApiOperation({
    summary: 'Inserir url da imagem e Pegar resposta do watson',
  })
  async getResponseWatson(
    @Param('url') urlImagem: string,
    @Res() res: Response,
  ) {
    var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

    const apiKey = `${this.configService.get('API_KEY')}`;

    var visualRecognition = new VisualRecognitionV3({
      version: '2018-03-19',
      iam_apikey: apiKey,
    });

    var url = urlImagem;

    var params = {
      url: url,
    };

    visualRecognition.classify(params, function (err, response) {
      if (err) {
        res.json(err);
      } else {
        res.json(response);
      }
    });
  }
}
