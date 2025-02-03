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
    ```json
    {
        "user": ...user object,
        "id": 1234,
        "encrypted": ...encrypted job key
    }
    ```
    **Response**
    ```json
    {
        "job":{
            "id":1234,
            ...job details
        }
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
        ...list of stages and details
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