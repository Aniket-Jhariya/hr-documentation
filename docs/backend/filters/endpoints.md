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

- **Response**
```json
{
    "count": 123,
    "next": ...follow link to next page,
    "previous": null,
    "results": [
        {
            "id": 12,
            "title": "Software Tester",
            "jd_html": "...lorem ipsum dolor",
            "description": "...lorm ipsum dolor",
            "applicants_count": 12,
            "applicants_today_count": 0,
            "experience": 5,
            "min_experience": 5,
            "encrypted": "...qwertyuiopasdfghjkl",
            "owner": {
                "id": 123,
                "name": "John doe",
                "org": 1,
                "username": null,
                "email": "johndoe@example.com",
                "role": {
                    "id": 1,
                    "name": "Admin"
                },
                "profile_pic": ...link to object in s3 bucket,
                "is_active": true,
                "is_staff": true,
                "is_superuser": true,
                "last_login": "2025-02-17T04:52:49.230031Z",
                "last_seen": "0 minutes ago",
                "contact": 1234567890,
                "country": "India",
                "invited_by": null,
                "created_at": "2024-12-02T12:33:13.659653Z"
            },
            "max_experience": 10,
            "employment_type": "Full Time",
            "location": "Pune / Remote",
            "published": true,
            "closing_in": 0,
            "close_date": "2025-01-31T00:00:00Z",
            "created_at": "2024-09-27T06:11:18.952174Z",
            "users_shared_with": [
                {
                    "id": 4,
                    "name": "Jane Doe",
                    "org": 1,
                    "username": null,
                    "email": "janedoe@example.com",
                    "role": {
                        "id": 1,
                        "name": "Admin"
                    },
                    "profile_pic": ...link to object in s3 bucket,
                    "is_active": true,
                    "is_staff": true,
                    "is_superuser": false,
                    "last_login": "2024-11-28T09:36:37.256921Z",
                    "last_seen": "80 days ago",
                    "contact": 9876543210,
                    "country": null,
                    "invited_by": null,
                    "created_at": "2024-12-02T12:33:13.659653Z"
                },
                ...
            ],
            "must_have_skills": [
                {
                    "label": "Communication",
                    "value": "Communication",
                    "__isNew__": true
                }
                ...
            ],
            "score_weight": {
                "id": 1,
                "skills": "0.30",
                "work_experience": "0.30",
                "projects": "0.20",
                "education": "0.10",
                "certifications": "0.10",
                "user": null
            }
        },
        ...
    ]
}
```

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

- **Payload**
    - GET
    **Response**
    ```json
    {
    "count": 123,
    "next": ...link to next page ,
    "previous": ...link to previous page,
    "results": [
        {
            "id": 123,
            "name": "John Doe",
            "email": "johndoe@example.com",
            "profile_pic": ...link to object in S3 bucket,
            "contact": "1234567890",
            "location": "{\"city\":\"Pune\",\"state\":\"Maharashtra\"}",
            "resumes": {
                "id": 1234,
                "name": "Example 1",
                "job": 7,
                "status_text": "Under Review",
                "relevant_experience_in_months": 2,
                "overall_score": "8.900",
                "resume_score": {
                    "id": 1251,
                    "ai_score": true,
                    "skills_score": "3.90",
                    "work_exp_score": "1.00",
                    "projects_score": "3.00",
                    "education_score": "1.00",
                    "certifications_score": "0.00",
                    "overall_score": "8.90",
                    "feedback": null,
                    "job": 7,
                    "user": 2,
                    "score_weight": 2
                },
                "completed": true,
                "updated_at": "2025-01-06T14:40:03.684118Z",
                "updated_by": null,
                "is_approved": false,
                "approved_by": null,
                "created_at": "2025-01-06T14:39:19.599535Z"
            },
            "applied_jobs": [
                {
                    "id": 7,
                    "title": "Trainee - Associate Software Developer"
                },
                ...
            ],
            "created_at": "2024-07-02T12:38:00.405406Z",
            "updated_at": "2025-01-06T14:39:59.433143Z"
        },
        ...
    ]
    }
    ```

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


