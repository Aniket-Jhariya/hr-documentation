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
    [
        ...list of Test objects
    ]
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