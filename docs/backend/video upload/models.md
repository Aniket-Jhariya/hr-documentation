---
sidebar_position: 2
---

# Models

## VideoUpload
Stores video upload session details, including uploaded parts and tracking information.

### Fields:
- `video_id` (CharField): The unique identifier for the video being uploaded.
- `upload_id` (CharField): The upload session ID used for multipart uploads.
- `parts` (JSONField): Stores part numbers and ETags for uploaded chunks (default: empty list).
- `created_at` (DateTimeField): Timestamp when the upload session was created.

### Methods:
- `__str__`: Returns a string representation of the video upload session.


