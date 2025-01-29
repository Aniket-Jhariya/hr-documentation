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
    

    |Response Code|Description|
    |---|---|
    |201|SUCCESS: Organization registered|
    |400|FAIL: Duplicate entry(contact/email)/Invalid input format|
    
