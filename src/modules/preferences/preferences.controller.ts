import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PreferencesService } from './preferences.service';
import { CreatePreferenceDto } from './dto/create-preference.dto';
import { UpdatePreferenceDto } from './dto/update-preference.dto';

@ApiTags('Preferences')
@Controller('preferences')
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @Post()
  @ApiOperation({ summary: 'Create user notification preferences' })
  @ApiResponse({
    status: 201,
    description: 'User preferences successfully created.',
  })
  @ApiResponse({
    status: 400,
    description: 'Validation error or invalid input data.',
  })
  create(@Body() createPreferenceDto: CreatePreferenceDto) {
    return this.preferencesService.create(createPreferenceDto);
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Get user notification preferences by user ID' })
  @ApiResponse({
    status: 200,
    description: 'User preferences successfully retrieved.',
  })
  @ApiResponse({ status: 404, description: 'User preferences not found.' })
  findOne(@Param('userId') userId: string) {
    return this.preferencesService.findOne(userId);
  }

  @Patch(':userId')
  @ApiOperation({ summary: 'Update user notification preferences by user ID' })
  @ApiResponse({
    status: 200,
    description: 'User preferences successfully updated.',
  })
  @ApiResponse({
    status: 400,
    description: 'Validation error or invalid input.',
  })
  @ApiResponse({ status: 404, description: 'User preferences not found.' })
  update(
    @Param('userId') userId: string,
    @Body() updatePreferenceDto: UpdatePreferenceDto,
  ) {
    return this.preferencesService.update(userId, updatePreferenceDto);
  }

  @Delete(':userId')
  @ApiOperation({ summary: 'Delete user notification preferences by user ID' })
  @ApiResponse({
    status: 200,
    description: 'User preferences successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'User preferences not found.' })
  remove(@Param('userId') userId: string) {
    return this.preferencesService.remove(userId);
  }
}
