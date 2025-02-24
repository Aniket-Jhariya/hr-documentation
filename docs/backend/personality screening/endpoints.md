---
sidebar_position: 1
---

# Endpoints

### `detail/<int:candidate_id>/`
- **View:** get_candidate_personality_screening
- Fetch the candidate's personality screening object based on the candidate id.
- **Payload**
    - GET
    
    **Response**
    ```json
    {
        "candidate":...candidate object
    }
    ```

|Response Code|Description|
|---|---|
|200|SUCCESS: Details fetched|
|404|FAIL: Candidate not found|

### `screening-answer/`
- **View:** PersonalityScreeningAnswers
- Queries from the database, the answers for the screening of a particular screening id.
- **Payload**
    - list

    ```json
    {
        "screening_id":12345
    }
    ```
    **Response**
    ```json
    {
        ..."Answers with Questions" object
    }
    ```
|Response Code|Description|
|---|---|
|200|SUCCESS: Query completed|
|404|FAIL: Results not found|

### `list/`
- **View:** PersonalityScreeningListByCandidateAndJob
- Queries from the database, the answers for a screening based on the candidate id and job id.
- **Payload**
    - list

    ```json
    {
        "candidate_id":123,
        "job_id":12345
    }
    ```
    **Response**
    ```json
    {
        ..."Answers with Questions" object        
    }
    ```
|Response Code|Description|
|---|---|
|200|SUCCESS: Query completed|
|404|FAIL: Results not found|

## ViewSets 
### PersonalityScreeningViewSet
Handles CRUD operations for the `PersonalityScreening` model.

#### Purpose:
- Serializer Selection:
  - Uses `PersonalityScreeningListSerializer` for `retrieve` and `list` actions.
  - Uses `PersonalityScreeningSerializer` for other actions.
- QuerySet Filtering:
  - Filters screenings based on the authenticated user's job ownership or shared jobs.
  - Supports filtering by `candidate_id` and `job_id` via query parameters.
  - If no user is authenticated, filters screenings by a provided `key`.
- Create Operation:
  - Creates multiple personality screenings for a list of candidates.
  - Handles bulk creation of screenings and sends emails to candidates using a background task (`send_personality_screening_emails`).
  - Validates input data and returns appropriate error responses for invalid data.
- Update Operation:
  - Updates the status of a personality screening.
  - Triggers a `screening_completed` signal if the screening is marked as completed.
  - Updates or creates `JobUniversalStatus` and `CandidateStageEvent` records based on the screening status.
- Custom Actions:
  - `delete_multiple`: Deletes multiple screenings and their associated files (audio, video, thumbnails) in bulk.
