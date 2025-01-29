---
sidebar_position: 1
---

# Endpoints


### `check-feature-permission/<int:feature_id>/`
- **View:** CheckFeaturePermissionView
- Checks if a feature is accessable under an authenticated user's business model.
- **Payload**
    - GET
    ```json 
    {
        "user":{
            ...
            "user_id":1234,
            "organization":"XYZ Pvt ltd",
        },    
        "feature_id":123
    }
    ```
    **Response**
    ```json
    {
        "allowed": true, 
        "message": "You can use this feature on a pay-per-use basis."
    }
    ````
    |Response Code|Description|
    |---|---|
    |200|SUCCESS: Feature allowed|
    |400|FAIL: Not enough Credits/feature unavailable to user/Invalid business model|
    

### `use-feature/<int:org_id>/<int:feature_id>/`
- **View:** UseFeatureView
- Sends signal to create transactions and record the features used.
- **Signal Method**
    - `handle_resume_screened(sender, org_id, feature_id,content_id,user_id, **kwargs)`
        Contains the business logic for enabling or tracking feature usage.

         `returns`: response data and status.
- **Payload**
    - POST
    ```json 
    {
        "user":{
            ...
            "user_id":1234,
            "organization":"XYZ Pvt ltd"
        },
        "feature_id":123
    }
    ```
    **Response**
    ```json
   {
    "message": "12 credits deducted for using video_interview."
    }
    ````
    |Response Code|Description|
    |---|---|
    |200|SUCCESS: Credits deducted/Usage Recorded/Feature accessed|
    |400|FAIL: Not enough Credits/feature unavailable to user/Invalid business model|
