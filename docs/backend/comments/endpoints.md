---
sidebar_position: 1
---

# Endpoints

### `content-types/`
- **View:** ContentTypeListView
- Filter the content type by 'resumescreening', 'personalityscreening' and 'test'.
- **Payload**
    - GET
    **Response**
    ```json
    {
        "resumescreening":1, 
        "personalityscreening":23,
        "test":13
    }
    ```

## ViewSets

### `CommentViewSet`
Handles CRUD operations for the `Comment` model.

#### Purpose:
- Manages comments on candidates, jobs, or other entities.
- Restricted to authenticated users (`IsAuthenticated`).
- Filters comments based on `job_id`, `candidate_id`, `content_type`, and `object_id` from query parameters.
- Returns comments matching the criteria or an empty queryset if no valid filters are provided.
- Automatically associates the comment with the authenticated user (`request.user`).
- Allows updating the comment text or marking it as deleted (`is_deleted`).
- Sets `deleted_by` to the current user if the comment is marked as deleted.
- Returns a success message on successful deletion or update.

- **Payload**
    - GET
    **Response**
    ```json
    {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 123,
            "user": {
                "id": 123,
                "name": "John Doe",
                "email": "johndoe@example.com",
                "profile_pic": ...link to object in S3 bucket
            },
            "candidate": 292,
            "content_type": "Resume Screening",
            "object_id": 1394,
            "text": "Lorem ipsum dolor...",
            "replies": [
                "lorem ipsum dolor"
                ...
            ],
            "created_at": "2025-02-17T05:49:40.039652Z",
            "updated_at": "2025-02-17T05:49:40.039652Z",
            "job": 7
        }
    ]
    }
    ```


### `ReplyViewSet`
Handles CRUD operations for the `Reply` model.

#### Purpose:
- Manages replies to comments.
- Restricted to authenticated users (`IsAuthenticated`).
- Filters replies based on the `comment_id` provided in the URL.
- Automatically associates the reply with the authenticated user (`request.user`).


### `LikeViewSet`
Handles CRUD operations for the `Like` model.

#### Purpose:
- Manages likes on comments or other entities.
- Restricted to authenticated users (`IsAuthenticated`).
- Filters likes based on `content_type` and `object_id` provided in the URL.
- Automatically associates the like with the authenticated user (`request.user`).
