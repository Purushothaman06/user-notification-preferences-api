import {
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class SendNotificationDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsEnum(['marketing', 'newsletter', 'updates'])
  type: string;

  @IsEnum(['email', 'sms', 'push'])
  channel: string;

  @IsObject()
  @IsNotEmpty()
  content: {
    subject: string;
    body: string;
  };

  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;
}
