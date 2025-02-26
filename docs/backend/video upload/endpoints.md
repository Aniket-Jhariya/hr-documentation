---
sidebar_position: 1
---
# Endpoints


### `upload-chunk/`
- **View:** VideoChunkUploadView
- Handles chunked video uploads.

#### **Payload**
- **POST**
```json
{
    "video_id": "abc123",
    "file": "binary data",
    "part_number": 1,
    "upload_id": "xyz456"
}
```

| Response Code | Description |
|--------------|-------------|
| 202 | SUCCESS: Upload part accepted |
| 404 | FAIL: Upload session not found |

---

### `complete-upload/`
- **View:** VideoChunkUploadView
- Completes multipart video uploads.

#### **Payload**
- **PUT**
```json
{
    "video_id": "abc123",
    "upload_id": "xyz456"
}
```

| Response Code | Description |
|--------------|-------------|
| 200 | SUCCESS: Video upload completed |
| 404 | FAIL :Upload session not found |

---

### `get-presigned-url/`
- **View:** GetPresignedUrlView
- Generates a pre-signed URL for file uploads to S3.

#### **Payload**
- **POST**
```json
{
    "file_name": "example.mp4",
    "content_type": "video/mp4"
}
```

| Response Code | Description |
|--------------|-------------|
| 200 | SUCCESS: Returns pre-signed URL |
| 400 | FAIL: File name is required |
| 500 | FAIL: Internal server error |

---

## ViewSets

### `VideoUploadViewSet`
Handles multipart video uploads.

#### **Purpose:**
- Initiates and completes multipart uploads.
- Generates pre-signed URLs for chunked uploads.
- Handles uploading individual parts and tracking progress.
- Restricted to authenticated users (`IsAuthenticated`).

