import { IsString } from 'class-validator';

export class ErrorDto {
  @IsString()
  errorMsg: string;
}

export class CreateErrorDto extends ErrorDto {}
