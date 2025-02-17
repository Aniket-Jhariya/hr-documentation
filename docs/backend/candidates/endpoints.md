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
    {
    "count": 12,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 123,
            "name": "John Doe",
            "email": "johndoe@example.com",
            "location": {
                "city": "Pune",
                "state": "Maharashtra "
            },
            "skills": [
                {
                    "name": "Testing",
                    "relevance": "medium",
                    "relevance_score": 5
                },
                ...
            ],
            "created_at": "2024-11-10T09:50:55.373048Z",
            "updated_at": "2024-11-10T09:51:14.310936Z",
            "current_stage": "",
            "stages": {
                "resume": {
                    "exists": true,
                    "key": "resume-screening",
                    "stage_name": "Resume Screening",
                    "service_id": 1,
                    "details": {
                        "id": 123,
                        "name": "John Doe",
                        "job": 50,
                        "status_text": "Not Shortlisted",
                        "relevant_experience_in_months": 12,
                        "overall_score": "1.200",
                        "resume_score": {
                            "id": 1137,
                            "ai_score": true,
                            "skills_score": "0.00",
                            "work_exp_score": "0.60",
                            "projects_score": "0.40",
                            "education_score": "0.00",
                            "certifications_score": "0.20",
                            "overall_score": "1.20",
                            "feedback": null,
                            "job": 50,
                            "user": 2,
                            "score_weight": 1
                        },
                        "completed": true,
                        "updated_at": "2024-11-11T12:39:55.822448Z",
                        "updated_by": null,
                        "is_approved": false,
                        "approved_by": null,
                        "created_at": "2024-11-10T09:50:55.377856Z"
                    }
                },
                "assessment": {
                    "exists": false,
                    "key": "assessment",
                    "stage_name": "Assessments",
                    "service_id": 3,
                    "details": null
                },
                "video": {
                    "exists": false,
                    "key": "automated-video-interview",
                    "stage_name": "Automated Video Interview",
                    "service_id": 2,
                    "details": null
                }
            }
        },
    ]
    }
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

#### Payload
-GET 
**Response**
```json
{
    "id": 292,
    "applied_jobs": [
        {
            "id": 7,
            "score_weight": {
                "id": 2,
                "skills": "0.40",
                "work_experience": "0.10",
                "projects": "0.30",
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
                "profile_pic": ...link to object in S3 bucket,
                "is_active": true,
                "is_staff": true,
                "is_superuser": true,
                "last_login": "2025-02-17T05:23:08.498133Z",
                "last_seen": "5 minutes ago",
                "contact": 1234567890,
                "country": null,
                "invited_by": null,
                "created_at": "2024-12-02T12:33:13.659653Z"
            },
            "applicants_count": 160,
            "applicants_today_count": 0,
            "title": "Software tester",
            "description": "lorem ipsum dolor...",
            "jd_html": "lorem ipsum dolor...",
            "jd_json": {
                "Skills": [
                    "Software testing proficiency",
                    ...
                ],
                "Projects": [
                    "Example project",
                    ...
                ],
                "Education": [
                    "Software Engineering",
                    ...
                ],
                "Certifications": [
                    "Example certification",
                    ...
                ],
                "Work Experience": [
                    "Software Developer",
                    ...
                ]
            },
            "experience": 1,
            "min_experience": 0,
            "max_experience": 1,
            "employment_type": "Full Time",
            "location": "Pune / Remote",
            "must_have_skills": [
                {
                    "label": "Testing",
                    "value": "Software Testing"
                },
                ...
            ],
            "encrypted": "qwertyuiopasdfghjkl",
            "published": true,
            "close_date": "2025-01-17T00:00:00Z",
            "new_applicant_notify": false,
            "created_at": "2024-03-01T11:07:30.677457Z",
            "updated_at": "2025-01-04T07:43:37.698840Z",
            "is_deleted": false,
            "interview_module": 2,
            "workflow": null,
            "deleted_by": null,
            "users_shared_with": [
                4
            ]
        },
    ],
    "resumes": {
        "id": 1394,
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
        "score_weight": {
            "id": 2,
            "skills": "0.40",
            "work_experience": "0.10",
            "projects": "0.30",
            "education": "0.10",
            "certifications": "0.10",
            "user": null
        },
        "name": "Resume 1",
        "resume_json": {
            "name": "Jane Doe",
            "emails": [],
            "skills": [
                {
                    "name": "Tester",
                    "relevance": "medium",
                    "relevance_score": 5
                },
                ...
            ],
            "summary": "lorem ipsum dolor...",
            "projects": [
                {
                    "name": "Example project",
                    "relevance": "high",
                    "description": "lorem ipsum dolor",
                    "relevance_score": 8
                },
                ...
            ],
            "websites": [],
            "addresses": {
                "city": "Pune",
                "state": "Maharashtra"
            },
            "education": [
                {
                    "cgpa": 6,
                    "degree": "Software engineering",
                    "school": "Example University",
                    "endDate": "2021-06-30",
                    "percent": null,
                    "relevance": "high",
                    "startDate": "2017-07-01",
                    "relevance_score": 9
                }
            ],
            "dateOfBirth": "",
            "phoneNumbers": "",
            "certifications": [],
            "workExperience": [
                {
                    "company": "ABC example pvt ltd",
                    "endDate": "2023-11-30",
                    "position": "Software tester",
                    "relevance": "medium",
                    "startDate": "2022-12-01",
                    "description": "lorem ipsum dolor...",
                    "relevance_score": 6
                },
                ...
            ]
        },
        "input_tokens": 3878,
        "output_tokens": 1577,
        "total_tokens": 5455,
        "cost": "0.0030",
        "phone_numbers": "9876543210",
        "personal_website": ...link to personal websit,
        "websites": [],
        "emails": "janedoe@example.com",
        "date_of_birth": "01.01.2000",
        "addresses": {
            "city": "Chennai",
            "state": "Tamil Nadu"
        },
        "summary": "lorem ipsum...",
        "ai_summary": "lorem ipsum dolor...",
        "education": [
            {
                "cgpa": 6,
                "degree": "Software Engineering",
                "school": "Example university",
                "endDate": "2021-06-30",
                "percent": null,
                "relevance": "high",
                "startDate": "2017-07-01",
                "relevance_score": 9
            }
        ],
        "work_experience": [
            {
                "company": "ABC example pvt ltd",
                "endDate": "2023-11-30",
                "position": "Software tester",
                "relevance": "medium",
                "startDate": "2022-12-01",
                "description": "lorem ipsum dolor...",
                "relevance_score": 6
            },
            ...
        ],
        "duration_per_work": [
            {
                "company": "ABC example pvt ltd",
                "relevance_score": 6,
                "experience_in_months": 12
            },
            ...
        ],
        "total_duration": 26,
        "skills": [
            {
                "name": "Testing",
                "relevance": "high",
                "relevance_score": 9
            },
            ...
        ],
        "skills_matched": [
            {
                "name": "Testing",
                "relevance": "high",
                "relevance_score": 9
            },
            ...
        ],
        "skill_match_count": 0,
        "certifications": [],
        "projects": [
            {
                "name": "Example project",
                "relevance": "high",
                "description": "lorem ispum dolor...",
                "relevance_score": 8
            },
            ...
        ],
        "overall_score": "8.900",
        "resume_file":...link to object in S3 bucket,
        "introduction_video": null,
        "upload_count": 1,
        "task_duration_seconds": 30,
        "completed": true,
        "task_message": "Resume Parsed Successfully",
        "retries": 1,
        "created_at": "2025-01-06T14:39:19.599535Z",
        "updated_at": "2025-01-06T14:40:03.684118Z",
        "relevant_experience_in_months": 2,
        "expected_ctc": 2,
        "status_text": "Under Review",
        "approved_at": null,
        "is_approved": false,
        "job": 7,
        "preference": 17,
        "approved_by": null,
        "updated_by": null,
        "users_shared_with": []
    },
    "created_at": "2024-07-02T12:38:00.405406Z",
    "updated_at": "2025-01-06T14:39:59.433143Z",
    "notice_period_in_months": 2,
    "current_ctc": 2,
    "last_increment": null,
    "hired": false
}

```

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