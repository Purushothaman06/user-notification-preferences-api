import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PreferenceSchema } from './schemas/preference.schema';
import { PreferencesService } from './preferences.service';
import { PreferencesController } from './preferences.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Preference', schema: PreferenceSchema },
    ]),
  ],
  providers: [PreferencesService],
  controllers: [PreferencesController],
})
export class PreferencesModule {}
