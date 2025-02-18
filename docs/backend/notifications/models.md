---
sidebar_position: 2
---

# Models

## NotificationLogs
Stores logs of user notifications.

### Fields:
- **`user`** (ForeignKey): The user receiving the notification.
- **`type`** (CharField): The type of notification.
- **`message`** (TextField): The notification message.
- **`timestamp`** (DateTimeField): Timestamp when the notification was created.
- **`is_read`** (BooleanField): Indicates if the notification has been read (default: `False`).

---

## EmailNotificationLogs
Stores logs of email notifications sent to users.

### Fields:
- **`user`** (ForeignKey): The user receiving the email notification (optional).
- **`type`** (CharField): The type of email notification.
- **`to_email`** (CharField): The recipient email address.
- **`subject`** (TextField): The email subject.
- **`timestamp`** (DateTimeField): Timestamp when the email was sent.
- **`sent`** (BooleanField): Indicates if the email was successfully sent (default: `False`).

---

## NotificationType
Defines different types of notifications and their templates.

### Fields:
- **`type_name`** (CharField): The name of the notification type (e.g., `new_applicant`).
- **`template`** (CharField): The HTML template for the notification.
- **`subject`** (CharField): The subject line of the notification (e.g., `CandidHR | New Applicant Summary`).

---

## NotificationSubscriptions
Stores user notification subscription preferences.

### Fields:
- **`user`** (ForeignKey): The user subscribing to notifications.
- **`type`** (CharField): The type of notification the user is subscribed to (e.g., `new_applicant`).

