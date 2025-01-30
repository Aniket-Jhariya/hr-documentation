---
sidebar_position: 1
---

# Endpoints

### `candidate/<int:job_id>/`
- **View:** CandidateViewSet
- Handles common filtering logic for candidates by job, resumes, and stage. Fetch the base queryset for candidates with shared job filtering logic.
- **Payload**
    - X
    ```json
    {
        ...
        "status_text": "On Hold!",
        "job_id": 1234,
        "user":{
           ...
           "id": 123,
           "role":{
            "name": "User"
           },
           "org":{
            ...organisation details
           }
        }
    }
    ```
    **Response**
    ```json
    [
        ...list of candidates
    ]
    ```

### `testlog/<int:job_id>/`
- **View:** TestLogViewSet
- Filters and retrieves tests information of authenticated users with admin access.
- **Payload**
    - list
    ```json
    {
        "user":{
            "org":{
                ...organisation details
            },
            "role":{
                "name":"Admin"
            }
        }
    }
    ```
    **Response**
    ```json
    [
        ...list of candidate objects
    ]
    ```

### `personality_screening/<int:job_id>/`
- **View:** PersonalityScreeningViewSet
- Based on the job_id, filters and retrieves the personality screening information for authenticated users with admin access.
- **Payload**
    - list
    ```json
    {
        "user":{
            "org":{
                ...organisation details
            },
            "role":{
                "name":"Admin"
            }
        }
    }
    ```
    **Response**
    ```json
    [
        ...list of candidate objects
    ]
    ```

## ViewSet

### JobViewSet
Handles CRUD operations for the `Job` model.

#### Purpose:
- Manages job listings and filters them based on the user's role and organization.
- Can access all jobs within their organization.
- Can access jobs they own or have been shared with them.
- Uses `JobDataFilter` to filter jobs based on query parameters.
- Applies `PageNumberPagination` for paginated responses.

---

### ResumeViewSet
Handles CRUD operations for the `Resume` model.

#### Purpose:
- Manages resumes associated with candidates and jobs.- Can access all resumes within their organization.
- Can access resumes for jobs they own or have been shared with them.
- Uses `ResumeDataFilter` to filter resumes based on query parameters.
- Supports ordering by `created_at` and `overall_score`.

---

### JobUniversalStatusViewSet
Handles CRUD operations for the `JobUniversalStatus` model.

#### Purpose:
- Tracks the status of candidates for specific jobs.
- Uses `JobUniversalStatusFilter` to filter statuses based on query parameters.
- Supports ordering by `updated_at`, `status`, and `stage_name`.
- Fetches the latest status for each candidate and job combination.

---

### CandidateViewSet
Handles CRUD operations for the `Candidate` model.

#### Purpose:
- Manages candidate data and filters candidates based on job, stage, and resume status.
- Can access all candidates within their organization.
- Can access candidates for jobs they own or have been shared with them.
- Uses `CandidateDataFilter` to filter candidates based on query parameters.
- Filters candidates by stage (e.g., "Applied", "Resume Screening", "On Hold").
- Applies `PageNumberPagination` for paginated responses.

---

### TestLogViewSet
Handles CRUD operations for the `TestLog` model.

#### Purpose:
- Manages test logs associated with candidates and jobs.
- Can access all test logs within their organization.
- Can access test logs for jobs they own or have been shared with them.
- Uses `TestLogDataFilter` to filter test logs based on query parameters.
- Applies `PageNumberPagination` for paginated responses.

---

### PersonalityScreeningViewSet
Handles CRUD operations for the `PersonalityScreening` model.

#### Purpose:
- Manages personality screening data for candidates.
- Can access all personality screenings within their organization.
- Can access personality screenings for jobs they own or have been shared with them.
- Uses `PersonalityScreeningDataFilter` to filter screenings based on query parameters.
- Applies `PageNumberPagination` for paginated responses.


