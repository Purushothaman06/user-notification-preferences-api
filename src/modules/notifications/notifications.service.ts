import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificationLog } from './schemas/notification-log.schema';
import { SendNotificationDto } from './dto/send-notification.dto';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel(NotificationLog.name)
    private readonly notificationLogModel: Model<NotificationLog>,
  ) {}

  async sendNotification(sendNotificationDto: SendNotificationDto) {
    const { userId, type, channel, content, metadata } = sendNotificationDto;

    // Simulate notification sending
    const isSent = Math.random() > 0.1; // 90% success rate for simulation
    const log = await this.notificationLogModel.create({
      userId,
      type,
      channel,
      status: isSent ? 'sent' : 'failed',
      sentAt: isSent ? new Date() : undefined,
      failureReason: isSent ? undefined : 'Simulated failure',
      metadata,
    });

    return {
      message: isSent
        ? 'Notification sent successfully'
        : 'Notification failed to send',
      log,
    };
  }

  async getNotificationLogs(userId: string) {
    const logs = await this.notificationLogModel.find({ userId });
    if (!logs.length) {
      throw new NotFoundException('No notification logs found for the user');
    }
    return logs;
  }

  async getNotificationStats() {
    const stats = await this.notificationLogModel.aggregate([
      {
        $group: {
          _id: { type: '$type', status: '$status' },
          count: { $sum: 1 },
        },
      },
    ]);
    return stats;
  }
}
