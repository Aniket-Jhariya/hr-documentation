---
sidebar_position: 3
---

# Tasks

### Logging Configuration

- `logger = logging.getLogger("celery")`: Configures a logger for monitoring Celery tasks.

---

## `send_bulk_invite(emails)`
Sends bulk invitation emails to multiple users.

### Parameters:
- `emails (list)`: List of email addresses to send invitations to.

### Workflow:
1. Iterates over the provided `emails` list.
2. Retrieves the user associated with each email.
3. Generates a password reset link using `urlsafe_base64_encode` and `PasswordResetTokenGenerator`.
4. Sends an email containing the reset link using the `EmailMessage` class.

### Key Points:
- Utilizes `@shared_task` to define it as a Celery task.
- Skips non-existent users.

---

## `send_invite_to_organization_admin(email)`
Sends an invitation email to an organization admin to set their password.

### Parameters:
- **`email` (str)**: Email address of the organization admin.

### Workflow:
1. Retrieves the user associated with the provided email.
2. Generates a secure link for onboarding using `DOMAIN`, `urlsafe_base64_encode`, and `PasswordResetTokenGenerator`.
3. Creates an HTML email template, embedding the organization's logo if available.
4. Sends the email using the `send_email` utility function.

### Key Points:
- Uses a styled HTML template for the email body.
- Logs the generated link for debugging purposes.
- Handles cases where the organization does not have a logo.

---

## `send_password_reset_link(email)`
Sends a password reset link to a user.

### Parameters:
- **`email` (str)**: Email address of the user.

### Workflow:
1. Retrieves the user associated with the provided email.
2. Generates a secure reset link using `DOMAIN`, `urlsafe_base64_encode`, and `PasswordResetTokenGenerator`.
3. Creates an HTML email template with a reset password link.
4. Sends the email using the `send_email` utility function.

### Key Points:
- Includes responsive email design for better mobile compatibility.
- Logs the generated link for debugging.
- Similar structure to the `send_invite_to_organization_admin` task.

---

## Utility Functions Used

### `urlsafe_base64_encode`
Encodes a user ID into a URL-safe format for secure transmission.

### `PasswordResetTokenGenerator`
Generates a secure token for password reset or onboarding links.

### `send_email`
Custom utility for sending emails. Supports HTML email templates.
