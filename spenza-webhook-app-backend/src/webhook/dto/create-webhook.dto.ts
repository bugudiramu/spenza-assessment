import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWebhookDto {
  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsString()
  event: string;
}
