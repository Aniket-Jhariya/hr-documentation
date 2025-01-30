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
