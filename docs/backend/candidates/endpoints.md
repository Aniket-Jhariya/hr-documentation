---
sidebar_position: 1
---

# Endpoints 

### `filter/`
- **View:** CandidateFilterView
- Filters and retrieves a list of candidates created by requesting user and associated users in the organisation. Filters resumes based on job_id context.
- **Payload**
    - POST
    ```json 
    {
        "user":{
            ... 
            "user_id":123,
            "org":{
                ...
                "org_id":1234
            }           
        }
    }
    ```
    **Response**
    ```json
    [
        ...
        {
            "job_id":1234,
            "name":"John Doe",
            ...candidate details
        }
    ]
    ```
### `list/`
- **View:** CandidateListView
- Filters and retrieves a list of candidates under the same job they applied to and on resume basis, ordered on the basis of the time of creation.
- **Payload**
    - POST
    ```json 
    {
        "user":{
            ... 
            "user_id":123      
        }
    }
    ```
    **Response**
    ```json
    [
        ...
        {
            "job_id":1234,
            "name":"John Doe",
            ...candidate details
        }
    ]
    ```
### `stages/`
- **View:** CandidateStageProgressView
- Retrieves a the existing the stages of evaluation in the candidate records.
- **Payload**
    - GET
    ```json 
    {
        ...
       "job_id":123,
       "candidate_id":1234
    }
    ```
    **Response**
    ```json
     {
            "candidate_id": 1234,
            "stages": {
                "resume": {
                    "exists": true,
                    "key" : "resume-screening",
                    "stage_name" : "Resume Screening",
                    "service_id": 1,
                    "details": {
                        ..resume details
                    }
                },
                "assessment": {
                    "exists": true,
                    "key" : "assessment",
                    "stage_name" : "Assessments",
                    "service_id": 23,
                    "details": {
                        ...test log details
                    }
                },
                "video": {
                    "exists": true,
                    "key" : "automated-video-interview",
                    "stage_name" : "Automated Video Interview",
                    "service_id": 13,
                    "details":{
                        ...personality screening video details
                    }
                }
                
            }
        }
    ```
### `list-with-stages/`
- **View:** CandidateListWithStagesByJobProgressView
- Filters and retrieves a list of candidates under the same job_id and optionally on the stage_name, for only authenticated user.
- **Payload**
    - POST
    ```json 
    {
        ...
        "job_id": 1234,
        "stage_name":"assessment"
    }
    ```
    **Response**
    ```json
    [
        ...list of candidates
        {
            "job_id":1234,
            "name":"John Doe",
            ...candidate details
        }
    ]
    ```
    :::note
    Responds with an empty list if no matching candidate found.
    :::

### `list-with-stages/`
- **View:** CandidateListWithStagesByJobProgressView
- Filters and retrieves a list of candidates under the same job_id and optionally on the stage_name, for only authenticated user.
- **Payload**
    - list
    ```json 
    {
        ...
        "job_id": 1234,
        "stage_name":"assessment"
    }
    ```
    **Response**
    ```json
    [
        ...
        {
                "id": 123,
                "name": "John Doe",
                "email" : "johndoe@example.com",
                "location" : "India",
                "skills" : [...list of skills],
                "created_at" : "2024-11-25T14:30:00Z",
                "updated_at" : "2024-12-25T14:30:00Z",
                "current_stage" : "Automated Video Interview", 
                "stages": {
                    "resume": {
                        "exists": true,
                        "key": "resume-screening",
                        "stage_name": "Resume Screening",
                        "service_id": 1,
                        "details": ...resume details,
                    },
                    "assessment": {
                        "exists": true,
                        "key": "assessment",
                        "stage_name": "Assessments",
                        "service_id": 13,
                        "details": ...test log details,
                    },
                    "video": {
                        "exists": true,
                        "key": "automated-video-intervie",
                        "stage_name": "Automated Video Interview",
                        "service_id": 23,
                        "details": ...personality screening video details,
                    },
                },
            }
    ]
    ```
### `candidate-names-list/`
- **View:** 
- Retrieves a list of the candidates filtered by a user with admin or editor access.
- **Payload**
    - list
    ```json 
    {
        ...
        "name":"John Doe",
        "jobId":1234,
        "shortlisted":true
    }
    ```
    **Response**
    ```json
    [
        ...list of candidates
        {
            "name": "John Doe",
            "id": 123,
            ...candidate details
        }
    ]
    ```

### `candidates-for-job/<int:job_id>/`
- **View:** CandidatesForJobView
- Filters and retrieves a list of candidates by job_id for authenticated users in the order of latest updated.
- **Payload**
    - list
    ```json 
    {
        ...
        "job_id": 1234
    }
   
    ```
    **Response**
    ```json
    [
        ...list of job objects
    ]
    ```

### `download-resume/<str:pk>/`
- **View:** DownloadPDF
- Retrieves and downloads the resume from the candidate's user id for authenticated users.
- **Payload**
    - GET
    **Response**
    ```json
    {
        "file": ...resume downloaded
    }
    ```
### `check-email/<int:job_id>/<str:email>/`
- **View:** check_email_existence
- Checks if a candidate with the given email has applied to the specified job and their resume for that job.
- **Payload**
    - GET
    **Response**
    ```json
    {
        "exists": true,
        "id": 123,
        "applied_job": 1234,
        "resume": 12345,
        "retries": 2
    }
    ```
    |Response Code|Description|
    |---|---|
    |200|SUCCESS: Candidate and resume retrieved/Candidate or resume not found`(exists=false)`|
    |400|FAIL: Invalid email/|
    |404|FAIL: Job not found/Candidate with the email not found|

### `resume-screening-completed-candidates/<int:job_id>/`
- **View:** ResumeScreeningCompletedCandidates
- Filters and retrieves a list of candidates based on the specified job, interview step service being 'resume Screening', and are completed.
- **Payload**
    - list
    ```json 
    {
        "job_id": 1234
    }
   
    ```
    **Response**
    ```json
    [
        ...list of candidates
    ]
    ```

## ViewSet
### `CandidateViewSet`

Handles CRUD operations with custom logic for job access validation, dynamic serializer selection, and asynchronous file processing.

### Methods

#### `validate_job_access(self, job_id, user)`
- **Purpose**: 
  - Validates user access to a job.
  - Checks user role and organization.
  - Raises `PermissionDenied` if access is invalid.


#### `get_serializer_context(self)`
- **Purpose**: Adds `request` and `job_id` to serializer context.


#### `get_serializer_class(self)`
- **Purpose**: Selects serializer based on action.
- **Returns**:
  - `CandidateSerializer` for `retrieve`/`list`.
  - `BasicCandidateListSerializer` otherwise.


#### `get_queryset(self)`
- **Purpose**: Filters candidates based on user role and job access.
- **Returns**:
  - Admins: All candidates in their organization.
  - Editors/Participants: Candidates for owned or shared jobs.
  - Unauthenticated users: Empty queryset for `list`.


#### `create(self, request, *args, **kwargs)`
- **Purpose**: 
  - Creates a new candidate.
  - Processes resumes, profile pictures, and videos.
  - Triggers Celery tasks for file uploads and resume parsing.
  - Creates `JobUniversalStatus` and `CandidateStageEvent`.
- **Returns**:
|Response Code|Description|
|---|---|
|201|SUCCESS: Candidate created|
|400|FAIL: Invalid format|
|500|FAIL: Server error|

#### `perform_update(self, serializer)`
- **Purpose**: 
  - Updates an existing candidate.
  - Updates fields (e.g., `name`, `email`, `linkedin`).
  - Handles new resumes, profile pictures, and videos.
  - Updates stage events.

#### `perform_destroy(self, instance)`
- **Purpose**: 
  - Deletes a candidate.
  - Deletes associated resume and files from AWS S3.
  - Calls parent `perform_destroy` to delete the candidate.

### `get_count`

Returns aggregated counts for jobs, applicants, or both, based on the authenticated user's role and permissions.

- **Payload**
    - GET
    ```json
    {
        "user":{
            "id":123,
            "role":"Admin"
        },
        "field":"Editor"
    }
    ```
    **Response**
    ```json
    {
        "jobs": 123,
        "applicants":12
    }
    ```
|Response Code|Description|
|---|---|
|200|SUCCESS: Count retrieved|
|500|FAIL: Server error|