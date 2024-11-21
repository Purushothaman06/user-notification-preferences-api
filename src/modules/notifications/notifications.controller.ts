import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { NotificationsService } from './notifications.service';
import { SendNotificationDto } from './dto/send-notification.dto';

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('send')
  @ApiOperation({
    summary: 'Send a notification to a user',
    description:
      'Sends a notification via the specified channel (email, SMS, or push).',
  })
  @ApiResponse({
    status: 201,
    description: 'Notification sent successfully.',
  })
  @ApiResponse({
    status: 400,
    description: 'Validation error or invalid input.',
  })
  sendNotification(@Body() sendNotificationDto: SendNotificationDto) {
    return this.notificationsService.sendNotification(sendNotificationDto);
  }

  @Get(':userId/logs')
  @ApiOperation({
    summary: 'Retrieve notification logs for a user',
    description: 'Fetches the notification logs for a given user ID.',
  })
  @ApiParam({
    name: 'userId',
    description: 'The ID of the user whose logs are to be retrieved.',
    example: 'user123',
  })
  @ApiResponse({
    status: 200,
    description: 'Notification logs successfully retrieved.',
  })
  @ApiResponse({
    status: 404,
    description: 'Logs not found for the specified user ID.',
  })
  getNotificationLogs(@Param('userId') userId: string) {
    return this.notificationsService.getNotificationLogs(userId);
  }

  @Get('stats')
  @ApiOperation({
    summary: 'Get notification statistics',
    description: 'Provides an overview of notification delivery statistics.',
  })
  @ApiResponse({
    status: 200,
    description: 'Statistics retrieved successfully.',
  })
  getNotificationStats() {
    return this.notificationsService.getNotificationStats();
  }
}
