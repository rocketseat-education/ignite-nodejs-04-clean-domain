import { Notification } from '../../enterprise/entities/notification'

export interface NotificationsRepository {
  create(notification: Notification): Promise<void>
}
