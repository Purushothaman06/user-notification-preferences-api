import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Preference extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({
    type: Object,
    required: true,
    default: {
      marketing: false,
      newsletter: false,
      updates: true,
      frequency: 'weekly',
      channels: { email: true, sms: false, push: true },
    },
  })
  preferences: Record<string, any>;

  @Prop({ required: true })
  timezone: string;

  @Prop({ required: true, default: new Date() })
  lastUpdated: Date;
}

export const PreferenceSchema = SchemaFactory.createForClass(Preference);
