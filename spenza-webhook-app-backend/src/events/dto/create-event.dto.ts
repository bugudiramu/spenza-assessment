import { IsString, IsNotEmpty } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  readonly user: string;

  @IsString()
  @IsNotEmpty()
  readonly eventType: string;

  @IsString()
  @IsNotEmpty()
  readonly payload: string;
}
