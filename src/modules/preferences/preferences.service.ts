import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePreferenceDto } from './dto/create-preference.dto';
import { UpdatePreferenceDto } from './dto/update-preference.dto';
import { Preference } from './schemas/preference.schema';

@Injectable()
export class PreferencesService {
  constructor(
    @InjectModel(Preference.name)
    private readonly preferenceModel: Model<Preference>,
  ) {}

  async create(createPreferenceDto: CreatePreferenceDto) {
    return this.preferenceModel.create(createPreferenceDto);
  }

  async findOne(userId: string) {
    const preference = await this.preferenceModel.findOne({ userId });
    if (!preference) {
      throw new NotFoundException('Preference not found');
    }
    return preference;
  }

  async update(userId: string, updatePreferenceDto: UpdatePreferenceDto) {
    const updatedPreference = await this.preferenceModel.findOneAndUpdate(
      { userId },
      updatePreferenceDto,
      { new: true },
    );
    if (!updatedPreference) {
      throw new NotFoundException('Preference not found');
    }
    return updatedPreference;
  }

  async remove(userId: string) {
    const deleted = await this.preferenceModel.findOneAndDelete({ userId });
    if (!deleted) {
      throw new NotFoundException('Preference not found');
    }
    return deleted;
  }
}
