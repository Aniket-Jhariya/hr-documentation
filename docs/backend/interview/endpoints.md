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