---
sidebar_position: 3
---

# Tasks

## NotificationsConsumer
Handles WebSocket connections for real-time notifications.

### Methods:
- **`connect`**: Establishes a WebSocket connection and adds the user to a notification group.
- **`disconnect`**: Removes the user from the notification group upon disconnection.
- **`receive`**: Handles incoming messages and broadcasts them to the group.
- **`send_notification`**: Sends notification messages to the WebSocket client.

---

## Email Notification System

### `generate_email_template`
Generates an HTML email template with dynamic placeholders.

#### Parameters:
- `job_name`: Job title.
- `company_logo`: URL to the company logo.
- `headline`: Main heading for the email.
- `receiver_name`: Recipient's name.
- `body`: Main email content.
- `company_name`: Name of the company.
- `support_email`: Contact email.

### `underreview_email`
Sends an email when a candidate's application is under review.

### `shortlisted_email`
Sends an email when a candidate is shortlisted.

### `unshortlisted_email`
Sends an email when a candidate is not shortlisted.

### `personality_screening_email`
Sends an email with a link to a personality screening test.

### `assessment_link_email`
Sends an email with a link to an online assessment.

### `assessment_reminder_link`
Sends a reminder email about an upcoming assessment.

### `personality_screening_completion_email`
Sends an email confirming the completion of a video interview.

### `send_failure_notification_email`
Notifies a recruiter about an error in a workflow process.

### `alert_email`
Sends an alert email when a candidate triggers specific conditions.

### `workflow_completion_email`
Notifies recruiters when a candidate completes a workflow.

### `send_resume_parser_failure_email_to_candidate`
Notifies a candidate when their resume submission fails.

### `send_resume_parser_failure_email_to_developer_team`
Notifies the development team about resume parsing errors.
