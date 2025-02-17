---
sidebar_position: 1
---

# Endpoints

### `list/`
- **View:** JobListView
- Retrieves a list of all the owned and shared jobs of a user based on the user id. 
- **Payload**
    - X
    ```json
    {
        "user":{
        "id":123
        }
    }
    ```
    **Response**
    ```json
    [
        ...list of Job objects
    ]
    ```

### `job-names-list/`
- **View:** JobNamesListView
- Fetches jobs owned or shared with the user, and if the user is an admin, all jobs in their organization are included.
- **Payload**
    - X
    ```json
    {
        "user":{
            "role":{
                "name":"Editor"
            },
            "org":...organisation details
        },
        "title": "Software Tester"
    }
    ```
    **Response**
    ```json
    [
        ...list of job objects
    ]
    ```

### `candidate-view/<str:encrypted>/` OR
### `job-detail/<int:id>/`
- **View:** JobDetailView
- Get the job instance by ID or encrypted key
- **Payload**
    - GET
    **Response**
    ```json
   {
    "id": 123,
    "title": "Software tester",
    "description": "lorem ipsum dolor...",
    "jd_html": "</p>lorem ipsum dolor</p>",
    "experience": 5,
    "min_experience": 5,
    "must_have_skills": [
        {
            "label": "Testing",
            "value": "Software Testing",
            "__isNew__": true
        },
    ],
    "encrypted": "qwertyuiopasdfghjkl...",
    "owner": 2,
    "organization": {
        "id": 1,
        "name": "XYZ example pvt ltd",
        "description": "xyz-example.com",
        "location": "Pune"
    },
    "max_experience": 10,
    "interview_module": null,
    "employment_type": "Full Time",
    "location": "Pune / Remote",
    "published": false,
    "close_date": "2025-01-31T00:00:00Z",
    "created_at": "2024-09-27T06:11:18.952174Z"
    }
    ```

### `generate-job-description/`
- **View:** JobDetailView
- Validates and adds job data to the job.
- **Payload**
    - POST
    ```json
    {
        "job_title":"Software Tester",
        "must_have_skills":"Python, C++, Cybersecurity",
        "employment_type": "Internship",
        "min_experience":2,
        "max_experience":4,
        "user_id":123
    }
    ```
    **Response**
    ```json
    {
        "job_description":"lorem ipsum dolor..."
        ...job details
    }
    ```
|Response Code|Description|
|---|---|
|200|SUCCESS: Job details recorded|
|500|FAIL: Internal server error|

### `rewrite-job-description/`
- **View:** RewriteJobDescriptionAPIView
- Enhances job description and suggests relevant skills.
- **Payload**
    - POST
    ```json
    {
        "job_title": "Software tester",
        "job_description": "lorem ipsum dolor...",
        "user_prompt": "Software tester with 2+ years of experience..."
    }
    ```
    **Response**
    ```json
    {
        "job_description": "lorem ipsum dolor..."
    }
    ```
|Response Code|Description|
|---|---|
|201|SUCCESS: Job description rewritten|
|500|FAIL: Internal server error|

### `<int:job_id>/stage-filters/`
- **View:** StageFiltersView
- Filters and retrieves the details of candidates and stage within a job id.
- **Payload**
    - GET
    **Response**
    ```json
    [
        {"label": "Applied", "count": 123, "backgroundColor": "bg-blue-50", "color": "text-blue-500"},
        {"label": "Resume Screening", "count": 12, "backgroundColor": "bg-blue-50", "color": "text-blue-500"},
        {"label": "Assessments", "count": 2, "backgroundColor": "bg-blue-50", "color": "text-blue-500"},
        ...
    ]
    ```
|Response Code|Description|
|---|---|
|200|SUCCESS: Fetched filtered data|
|404|FAIL: Job id not found|

## ViewSets

### JobViewSet
Handles CRUD operations for the `Job` model.

#### Purpose:
- Access Control:
  - Validates job access based on user role and organization.
  - Admins and Editors can create, update, and delete jobs.
  - Users can only access jobs they own or have been shared with them.
- Serializer Selection:
  - Uses `JobListSerializer` for `list` and `retrieve` actions.
  - Uses `JobSerializer` for other actions.
- Create Operation:
  - Saves the job with the authenticated user as the owner.
  - Converts job descriptions to JSON format using a background task (`convert_jd_to_json`).
  - Associates the job with a `ResumeScoreWeights` instance.
- Update Operation:
  - Updates job details and associated `ResumeScoreWeights`.
  - Validates job access before allowing updates.
- Delete Operation:
  - Deletes the job and clears the cache for the user.

- **Payload**
  - GET
  ```json
  {
  "users_shared_with": [
        55
    ]
    }
  ```
  **Response**
  ```json
  {
    "id": 50,
    "score_weight": {
        "id": 1,
        "skills": "0.30",
        "work_experience": "0.30",
        "projects": "0.20",
        "education": "0.10",
        "certifications": "0.10",
        "user": null
    },
    "owner": {
        "id": 2,
        "name": "John Doe",
        "org": 1,
        "username": null,
        "email": "johndoe@example.com",
        "role": {
            "id": 1,
            "name": "Admin"
        },
        "profile_pic": ...link to S3 bucket,
        "is_active": true,
        "is_staff": true,
        "is_superuser": true,
        "last_login": "2025-02-17T06:32:33.883834Z",
        "last_seen": "7 minutes ago",
        "contact": 1234567890,
        "country": null,
        "invited_by": null,
        "created_at": "2024-12-02T12:33:13.659653Z"
    },
    "applicants_count": 15,
    "applicants_today_count": 0,
    "title": "Software tester",
    "description": "lorem ipsum dolor...",
    "jd_html": "<p>lorem ipsum dolor...</p>",
    "jd_json": null,
    "experience": 5,
    "min_experience": 5,
    "max_experience": 10,
    "employment_type": "Full Time",
    "location": "Pune / Remote",
    "must_have_skills": [
        {
            "label": "Testing",
            "value": "Software testing",
            "__isNew__": true
        },
    ],
    "encrypted": "gAAAAABm9kyGNR9Sw6iN50AF_afKXsVMKGUPMjDyCv2auOBmPmSR0Ot55yInwOa2eBb6RQiNqkTGUhAPLlCGolrq-LlMYVzX7w==",
    "published": false,
    "close_date": "2025-01-31T00:00:00Z",
    "new_applicant_notify": false,
    "created_at": "2024-09-27T06:11:18.952174Z",
    "updated_at": "2025-02-17T06:39:56.328584Z",
    "is_deleted": false,
    "interview_module": null,
    "workflow": null,
    "deleted_by": null,
    "users_shared_with": [
        55
    ]
    }
    ```
---

### FilterGroupViewSet
Handles CRUD operations for the `FilterGroup` model.

#### Purpose:
- Access Control:
  - Restricted to authenticated users.
- Create Operation:
  - Sets the authenticated user as the owner of the filter group.

---

### CriteriaViewSet
Handles CRUD operations for the `Criteria` model.

#### Purpose:
- Custom Actions:
  - `list_by_job`: Lists criteria associated with a specific job.
  - `bulk_create_or_update`: Creates or updates multiple criteria in bulk.
- QuerySet Filtering:
  - Excludes deleted criteria (`is_deleted=False`).

- **Payload**
  - GET
  **Response**
  ```json
  [
    {
        "id": 123,
        "job_id": 50,
        "question": "lorem ipsum dolor...",
        "response_type": "radio",
        "options": [
            "1",
            "2",
            "3"
        ],
        "expected_response": "1",
        "is_deleted": false
    }
    ]
  ```

---

### CandidateResponseViewSet
Handles CRUD operations for the `CandidateResponse` model.

#### Purpose:
- QuerySet Filtering:
  - Filters responses by `candidate_id` and `job_id` if provided in query parameters.
- Custom Actions:
  - `bulk_create`: Creates multiple candidate responses in bulk.

---

## Utility Function: 
### `create_or_update_candidate_responses`
#### Purpose:
- Input:
  - `candidate_id`: ID of the candidate.
  - `job_id`: ID of the job.
  - `responses`: List of response data (criteria ID and response value).
- Output:
  - Returns a status message indicating success or failure.
  - Handles cases where the candidate, job, or criteria do not exist.
  - Uses a transaction to ensure atomicity.

  