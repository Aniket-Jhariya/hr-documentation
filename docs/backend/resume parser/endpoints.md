---
sidebar_position: 1
---
# Endpoints

### `haiku/`
- **View:** ResumeHaikuView
- Generates structured resume insights using AI.
- **Payload**
    - POST
    
    **Response**
    ```json
    {
        "result": "Generated resume insights in structured format."
    }
    ```

### `analyze-audio/`
- **View:** DeepgramAnalytics
- Analyzes audio responses and provides transcription.
- **Payload**
    - POST

    **Response**
    ```json
    {
        "result": "Audio transcription and sentiment analysis."
    }
    ```

---

## ViewSets

### `ResumeViewSet`
Handles CRUD operations for the `Resume` model.

#### Purpose:
- Manages candidate resumes.
- Restricted to authenticated users (`IsAuthenticated`).
- Supports filtering by `job_id`.
- Allows partial updates, including candidate notifications.

- **Payload**
    - GET

    **Response**
    ```json
    {
        "id": 1,
        "candidate": 292,
        "job": 7,
        "status": "Reviewed",
        "created_at": "2025-02-17T05:49:40.039652Z",
        "updated_at": "2025-02-17T05:49:40.039652Z"
    }
    ```

### `ResumeScreeningPreferenceViewSet`
Handles CRUD operations for `ResumeScreeningPreference`.

#### Purpose:
- Manages resume screening preferences for jobs.
- Ensures access control based on job ownership.
- Restricts updates to Admin and Editor roles.


- **Payload**
    - GET

    **Response**
    ```json
    {
        "id": 1,
        "candidate": 292,
        "job": 7,
        "status": "Reviewed",
        "created_at": "2025-02-17T05:49:40.039652Z",
        "updated_at": "2025-02-17T05:49:40.039652Z"
    }
    ```

### `DeepgramAnalytics`
Handles audio processing for candidate responses.

#### Purpose:
- Processes audio responses using Deepgram API.
- Generates transcription, sentiment analysis, and insights.
- Returns structured response.

### `ResumeHaikuView`
Processes and structures resume data using AI.

#### Purpose:
- Converts raw resume text into structured JSON format.
- Uses AI-based processing for better insights.

