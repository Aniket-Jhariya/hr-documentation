---
sidebar_position: 3
---

# Tasks

### `assign_test_and_send_email`

This task assigns tests to candidates and sends them an email with the assessment link.

#### Parameters:
- `candidate_ids`: List of candidate IDs to whom the test will be assigned.
- `user_id`: ID of the user assigning the test.
- `valid_from`: Start date and time for the test validity.
- `valid_to`: End date and time for the test validity.
- `job_id`: ID of the job associated with the test.
- `user_owned_assessment_ids`: List of IDs for user-owned assessments.
- `prebuilt_assessment_ids`: List of IDs for prebuilt assessments.
- `preferences`: Test preferences.
- `assessments`: List of assessments to be assigned.
- `current_user_id`: ID of the current user performing the action.

---

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

---