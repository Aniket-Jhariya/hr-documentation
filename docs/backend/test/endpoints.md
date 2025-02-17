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

### `X/`
- **View:** X
- X
- **Payload**
    - X
    ```json
    {
    }
    ```
    **Response**
    ```json
    {
    }
    ```