---
sidebar_position: 1
---

# Endpoints


### `list/`
- **View:** WorkflowListView
- Filter and retrieve Interview module objects created by employees of the user's organization.
- **Payload**
    - list
    ```json
    {
        "user":{
            "org":{
                ...organisation object
            }
        }
    }
    ```
    **Response**
    ```json
    [
        ...list of Interview objects
    ]
    ```


### `job/<int:jobId>/interview-modules/`
- **View:** InterviewModuleByJobView
- Filter and retrieve Interview module objects by job.
- **Payload**
    - list

    **Response**
    ```json
    [
        ...list of Interview module objects
    ]
    ```
|Response Code|Description|
|---|---|
|200|SUCCESS: OK|
|404|FAIL: Job not found|

### `interview-module/<int:module_id>/service/<str:service_name>/steps/`
- **View:** ServiceInterviewStepListView
- 
- **Payload**
    - GET
    
    **Response**
    ```json
    {

    }
    ```

### `feedbacks/<int:job_id>/<int:candidate_id>/`
- **View:** FeedbackByJobAndCandidate
- Retrieves feedback based on the job id and candidate id.
- **Payload**
    - GET
    **Response**
    ```json
    [
        ...list of feedbacks
    ]
    ```
|Response Code|Description|
|---|---|
|200|SUCCESS: Feedback retrieve|
|404|FAIL: Feedback not found|

### `shortlist-candidate/`
- **View:** complete_resume_screening
- Sets the resume screening step to shortlisted status and initiates further new interview steps.
- **Payload**
    - POST
    ```json
    {
        "candidate_id": 1234,
        "job_id": 123,
        "module_id": 135,
        "service":{
            ...service object details
            "name": "Resume Screening"
        }
    }
    ```
    **Response**
    ```json
    {
        "message": "Resume screening completed successfully. Interview step updated.",
        "interview_step_id": 125,
        "candidate": ...candidate object
    }
    ```

    
|Response Code|Description|
|---|---|
|200|SUCCESS: Resume Screened/ interview step created/ interview step updated|
|400|FAIL: Invalid format|
|404|FAIL: User or Candidate or Service or Interview not found|

### `unshortlist-candidate/`
- **View:** unshortlist_candidate
- Sets the resume screening step to shortlisted status and initiates if no interview step already.
- **Payload**
    - POST
    ```json
    {
        "status":"Shortlisted",
        "candidate_id": 1234,
        "job_id": 123,
        "module_id": 135,
        "service":{
            ...service object details
            "name": "Resume Screening"
        }
    }
    ```
    **Response**
    ```json
    {
        "message": "Candidate unshortlisted successfully",
        "candidate" : ...candidate data
    }
    ```

### `update-step/`
- **View:** update_step
- Updates the interview step based on the candidate id or job id.
- **Payload**
    - POST
    ```json
    {
        "action":"Start",
        "order":12,
        "candidate_id": 1234,
        "job_id": 123,
        "module_id": 135,
        "service":{
            ...service object details
            "name": "Resume Screening"
        }
    }
    ```
    **Response**
    ```json
    {
        "message": ...interview step data
    }
    ```

|Response Code|Description|
|---|---|
|200|SUCCESS: Step updated|
|400|FAIL: Invalid choice/ duplicate instances|
|404|FAIL: Instance not found/ instance not selected|
|405|FAIL: Invalid HTTP method|
|500|FAIL: Server error|

### `update-status/`
- **View:** update_status
- Updates the interview status based on the candidate id or job id.
- **Payload**
    - PATCH
    ```json
    {
        "status":"Shortlisted",
        "candidate_id": 1234,
        "job_id": 123,
        "module_id": 135,
        "service":{
            ...service object details
            "name": "Resume Screening"
        }
    }
    ```
    **Response**
    ```json
    {
        "message": "Resume screening completed successfully. Interview step updated.",
        "interview_step_id": 125,
        "candidate": ...candidate object
    }
    ```

### `candidate/<int:candidate_id>/answers/` OR
### `candidate/<int:candidate_id>/job/<int:job_id>/service/<int:service_id>/answers/`
- **View:** CandidateAnswersAPIView
- Filters and retrieves answer sets of personality and resume screening based on candidate id and service id.
- **Payload**
    - list
    ```json
    {
        "candidate_id": 123,
        "job_id": 1234,
        "service_id": 135
    }
    ```
    **Response**
    ```json
    [
        ...list of answer objects
    ]
    ```

### `answers/<int:pk>/audio/`
- **View:** AudioView
- Retrieves the audio answer files in the answer set using id.
- **Payload**
    - GET
    **Response**
    ```http
    FileResponse: ...audio file as attachment
    ```
### `answers/<int:pk>/video/`
- **View:** VideoView
- Retrieves the video answer files in the answer set using id.
- **Payload**
    - GET
    **Response**
    ```http
    FileResponse: ...audio file as attachment
    ```

### `answers/<int:pk>/thumbnail/`
- **View:** ThumbnailView
- Retrieves the thumbnail file of video answers in the answer set using id.
- **Payload**
    - GET
    **Response**
    ```http
    FileResponse: ...audio file as attachment
    ```

### `get-upload-presigned-url/`
- **View:** GeneratePresignedURLView
- Creates connection with S3 client and generates a url for access to video responses. 
- **Payload**
    - 
    ```json
    {
        "video_filename":"xyz.mp4",
        "content_type": "video/*"
    }
    ```
    **Response**
    ```json
    {
        "key": ...video s3 path, 
        "presigned_upload_url": ...presigned upload url

    }
    ```

|Response Code|Description|
|---|---|
|201|SUCCESS: File path and upload url created|
|500|FAIL: URL not created|

## ViewSets

### InterviewModuleViewSet
Handles CRUD operations for the `InterviewModule` model.

#### Purpose:
- Serializer Selection:
  - Uses `InterviewModuleViewSerializer` for `list` and `retrieve` actions.
  - Uses `InterviewModuleSerializer` for other actions.
- QuerySet Filtering:
  - Filters modules based on the authenticated user's organization.
  - Returns an empty queryset for unauthenticated users.
- Update Operation:
  - Automatically sets the `updated_at` and `updated_by` fields during updates.

---

### InterviewStepViewSet
Handles CRUD operations for the `InterviewStep` model.

#### Purpose:
- Uses `InterviewStepSerializer` for all actions.
- No custom filtering or logic is applied.

---

### ServiceInterviewStepListView
Handles retrieval of interview step preferences for a specific service.

#### Purpose:
- Endpoint: `GET /service-interview-steps/<module_id>/<service_name>/`
- Parameters:
  - `module_id`: The ID of the interview module.
  - `service_name`: The name of the service.
- Response:
  - Returns the preferences for the specified service within the module.

---

### QuestionSetViewSet
Handles CRUD operations for the `QuestionSet` model.

#### Purpose:
- QuerySet Filtering:
  - Filters question sets based on the authenticated user's organization.
- Serializer:
  - Uses `QuestionSetSerializer` for all actions.

---

### QuestionViewSet
Handles CRUD operations for the `Question` model.

#### Purpose:
- QuerySet Filtering:
  - Filters questions based on `question_set_id` or `question_ids` provided in query parameters.
  - Excludes deleted questions (`is_deleted=False`).
- Serializer:
  - Uses `QuestionSerializer` for all actions.

---

### AnswerViewSet
Handles CRUD operations for the `Answer` model.

#### Purpose:
- File Upload:
  - Supports video file uploads for answers.
  - Processes video files and uploads them to S3 using a background task.
- Validation:
  - Ensures required fields (`screening_id`, `question`) are provided.
  - Prevents duplicate answers for the same question and screening.
- Error Handling:
  - Returns appropriate error responses for validation errors or processing failures.
- Serializer:
  - Uses `AnswerSerializer` for all actions.
