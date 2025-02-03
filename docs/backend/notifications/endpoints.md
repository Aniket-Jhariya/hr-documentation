---
sidebar_position: 1
---

# Endpoints

### `status-updates/`
- **View:** CandidateStatusEmailView
- Sends email to candidates notifying them about the updates in the status of the jobs that they have applied to.
- **Payload**
    - POST
    ```json
    {
        "body":"lorem ipsum dolor...",
        "subject":"Change in the status of job",
        "status_text":"On hold",
        "job_id":1234,
        "candidate_id":123
    }
    ```
|Response Code|Description|
|---|---|
|200|SUCCESS: Email sent|
|403|FAIL: Invalid Candidate id/ Not permitted to send email|
|404|FAIL: Job not found for candidate|

## ViewSets

### NotificationViewSet
Handles CRUD operations for the `NotificationLogs` model.

#### Purpose:
- Access Control:
  - Restricted to authenticated users (`permissions.IsAuthenticated`).
- QuerySet Filtering:
  - Filters notifications for the authenticated user.
  - Only returns unread notifications (`is_read=False`).
- Update Operation:
  - Allows updating notification details (e.g., marking as read).
  - Uses `NotificationSerializer` for serialization and validation.