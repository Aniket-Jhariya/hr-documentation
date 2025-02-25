---
sidebar_position: 1
---

# Endpoints

### `list/`
- **View:** TestsListView
-  Fetches tests owned or shared with the admin user by organisation id, title and publish criteria. 
- **Payload**
    - list
    ```json
    {
        "user": {
            ...user object
            "role": "Admin",
            "org":{
                ...organisation details
            }
        },
        "title": "Software tester test",
        "is_published" : true
    }
    ```
    **Response**
    ```json
    {
    "count": 22,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 65,
            "created_by": {
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
                "last_login": "2025-02-17T05:57:32.164809Z",
                "last_seen": "3 minutes ago",
                "contact": 1234567890,
                "country": null,
                "invited_by": null,
                "created_at": "2024-12-02T12:33:13.659653Z"
            },
            "difficulty": {
                "id": 2,
                "difficulty": "medium",
                "multiplier": 1.5
            },
            "question": [
                {
                    "id": 2403,
                    "difficulty": {
                        "id": 1,
                        "difficulty": "beginner",
                        "multiplier": 1.0
                    },
                    "choices": "lorem ipsum dolor...",
                    "html_content": null,
                    "type": "single",
                    "domain": "Random",
                    "photo": null,
                    "query": null,
                    "created_at": "2025-01-02T14:57:31.382329Z",
                    "time_limit": 30,
                    "points": 1,
                    "created_by": 2,
                    "updated_by": null,
                    "question_set": []
                },
            ...
            ],
            "domain": [
                {
                    "id": 2,
                    "name": "Software engineering",
                    "description": null
                }
            ],
            "category": [
                {
                    "id": 7,
                    "name": "Software",
                    "description": null,
                    "domains": [
                        {
                            "id": 2,
                            "name": "Software Testing",
                            "description": null
                        }
                    ]
                }
            ],
            "time_duration_in_minutes": 60.0,
            "title": "lorem ipsum...",
            "key": "qwertyuiopasdfghjk...",
            "created_at": "2025-01-02T14:55:05.137156Z",
            "description": "lorem ipsum dolor...",
            "total_question": 95,
            "time_duration": 3600,
            "type": "apptitude",
            "is_deleted": false,
            "is_published": false,
            "updated_by": null,
            "published_by": null,
            "deleted_by": null,
            "users_shared_with": []
        },
        ...
    ]
    }
    ```

### `testlog-for-report/`
- **View:** TestlogForReport
- Filters and retrieves test logs based on candidate and job ids.
- **Payload**
    - list
    ```json
    {
        "candidate_id": 123,
        "job_id": 12345
    }
    ```
    **Response**
    ```json
    [
        ...list of Test Log Objects
    ]
    ```
|Response Code|Description|
|---|---|
|200|SUCCESS: Results retrieved|
|404|FAIL: Results not found|

### `upload-questions/`
- **View:** UploadQuestionsView
- Processes the uploaded Excel file, performs validation, data cleaning, and uploads cleaned question data to database.
- **Payload**
    - POST
    ```json
    {
        "FILES":{
            "file":...excel file with questions
        },
        "question_set": ...question set object,
        "assessment_type":"Video Interview",
        "test": 12345,
        "new_question_set_name": "Software tester interview"
    }
    ```
|Response Code|Description|
|---|---|
|201|SUCCESS: Created|
|400|FAIL: File not uploaded/Invalid format|

### `testlog/`
- **View:** TestLogViewSet
- Handles CRUD operations for test logs.
- Supports filtering by `job_id` and authentication-based access.

- **Payload**
    - GET
    **Response**
    ```json
    {
        "id": 1,
        "assigned_to": 292,
        "job": 7,
        "completed": true,
        "average_percentage": 85.5
    }
    ```

### `tests/`
- **View:** TestViewSet
- Manages test creation and retrieval.
- Supports filtering and different serializers for detailed views.

- **Payload**
    - GET
    **Response**
    ```json
    {
        "id": 12,
        "title": "Python Basics Test",
        "created_by": 102,
        "total_question": 15
    }
    ```

### `questions/`
- **View:** QuestionsViewset
- Manages test questions.
- Filters based on `test_id` and `assessment_type`.

- **Payload**
    - GET
    **Response**
    ```json
    {
        "id": 100,
        "text": "What is Python?",
        "choices": [
            { "value": "A programming language", "correct": true },
            { "value": "A snake", "correct": false }
        ]
    }
    ```

### `answers/`
- **View:** AnswerViewset
- Handles answer submissions and correctness evaluation.
- Supports `MCQ`, `text`, and `SQL` type questions.

- **Payload**
    - POST
    **Response**
    ```json
    {
        "message": "Answer recorded Successfully"
    }
    ```

### `result/`
- **View:** ResultViewset
- Stores and evaluates test results.
- Calculates percentage scores and determines pass/fail.

- **Payload**
    - GET
    **Response**
    ```json
    {
        "candidate": 345,
        "score": 78.2,
        "test": 15
    }
    ```

### `proctoring/`
- **View:** ProctoringViewSet
- Manages online proctoring for tests.
- Automatically submits tests upon repeated violations.

- **Payload**
    - PATCH
    **Response**
    ```json
    {
        "message": "The test has been submitted due to repeated tab switching."
    }
    ```

---

## ViewSets

### `TestViewSet`
Handles CRUD operations for the `Test` model.

#### Purpose:
- Manages test creation and retrieval.
- Filters tests by title and publication status.

### `QuestionsViewset`
Handles CRUD operations for `Questions`.

#### Purpose:
- Manages test questions and options.
- Filters questions by `test_id`.

### `AnswerViewset`
Handles CRUD operations for `Answers`.

#### Purpose:
- Manages candidate answers and correctness evaluation.
- Supports MCQs, text-based answers, and SQL queries.

### `ResultViewset`
Handles CRUD operations for `Result`.

#### Purpose:
- Stores and evaluates test results.
- Calculates percentage scores.

### `ProctoringViewSet`
Handles online proctoring for tests.

#### Purpose:
- Tracks violations like tab switching and fullscreen exits.
- Auto-submits test upon repeated violations.

### `ShareTestViewset`
Handles test sharing with candidates.

#### Purpose:
- Assigns tests to candidates.
- Sends test details via email.

### `AssignedAssessmentQuestionViewSet`
Handles fetching assigned assessment questions.

#### Purpose:
- Retrieves test questions based on `test_id`.
- Supports randomized question selection.

