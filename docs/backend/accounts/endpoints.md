---
sidebar_position: 1
---

# Endpoints

### `request-demo/ `
- **View:** RequestdDemoViewSet
- Adds demo requests.
- Payload
    - POST
    ```json
    {
             "first_name": "John",
             "last_name": "Doe",
             "email": "johndoe@example.com",
             "phone": "+1234567890",
             "job_title": "Software Engineer",
             "company": "TechCorp",
             "consent": true
     }
    ```
    |Response Code|Description|
    |---|---|
    |201|SUCCESS: Demo Request created|
    |400|FAIL: Invalid Format|
    
### `request_demo/<int:pk>/`
- **View:** RequestdDemoViewSet
- Updates demo requests based on private key.
- **Payload**
    - PATCH
    ```json
        {
            "status": "scheduled",
            "demo_date": "2024-11-25T14:30:00Z",
            "feedback": "Looking forward to the demo!"
        }
    ```
    |Response Code|Description|
    |---|---|
    |200|SUCCESS: Demo Request updated|
    |400|FAIL: Invalid Format|
    |404|FAIL: Demo Request not found|

### `send-reset-password-email/`
- **View:** SendPasswordResetEmailView
- Sends password reset email to requested email address after validation.
- **Payload**
    - POST
    ```json
    {
        "email":"john.doe@email.com"
    }
    ```
    |Response Code|Description|
    |---|---|
    |200|SUCCESS: Password reset email sent.|

### `user/reset-password/<uid>/<token>/`
- **View:** PasswordResetView
- Reset password of a user based on the `uid` and `token` retrieved from the user model.
- **Payload**
    - POST
    ```json
    {
        "password":"johndoe@123",
        "password2":"johndoe@123",
        "agree_to_terms_and_conditions":true
    }
    ```
    |Response Code|Description|
    |---|---|
    |200|SUCCESS: Password was reset.|

### `organizations/<int:org_id>/users/`
- **View:** UserListByOrg
- List all the users by organization with basic user details based on the `organisation id`.
- **Response**
    - Query list
    ```json
    {
        "id":1234, 
        "name":"John Doe", 
        "org":"1234xyz", 
        "username":"JohnD123", 
        "email":"johndoe@example.com", 
        "role":"admin", 
        "profile_pic":"pfp_id", 
        "password":"johndoe@123", 
        "is_active":true,
        "is_staff":true, 
        "is_superuser":false, 
        "last_login":"2024-11-25T14:30:00Z", 
        "last_seen":"2024-12-25T14:30:00Z", 
        "contact":"+123456789", 
        "country":"India", 
        "invited_by":"user_id", 
        "created_at":"2024-10-25T14:30:00Z"
    }
    ```
### `profile-pic/`
- **View:** DownloadProfilePic
- Retrieves profile picture of the user based on `user ID` and `authentication`.
- **Payload**
    - GET
    ```json
    {
        "user":{
            ...
            "id":"1234"
        }
    }
    ```
    |Response Code|Description|
    |---|---|
    |200|SUCCESS: Image retrieved.|
    |404|FAIL: Image not found|

### `organization-logo/<int:orgId>/`
- **View:** getOrgLogo
- Retrieves logo picture of the organization based on `organization ID`.
- **Payload**
    - GET
    
    **Response**
    ```json
    {
        "attachment":...logo file, 
        "filename":...name of the file
    }
    
    ```
    |Response Code|Description|
    |---|---|
    |200|SUCCESS: Image retrieved.|
    |404|FAIL: Image not found|

### `avatar/<int:id>/`
- **View:** getUserAvatar
- Retrieves profile picture of the user based on `user ID` and `authentication`.
- **Payload**
    - GET
    ```json
    {
        "user":{
            ...
            "id":"1234"
        }
    }
    ```
    **Response**
    ```json
    {
        "attachment":...logo file, 
        "filename":...name of the file
    }
    
    ```
    |Response Code|Description|
    |---|---|
    |200|SUCCESS: Image retrieved.|
    |404|FAIL: Image not found|
    |500|FAIL: Internal server error|

### `profile-kpi/`
- **View:** getProfileKPIData
- Retrieves key performance indicaters from user's profile based on `user ID` and `authentication`.
- **Payload**
    - GET
    ```json
    {
        "user":{
            ...
            "id":"1234"
        }
    }
    ```
    **Response**
    ```json
    {
        "owned_jobs": [...Job Objects],
        "shared_jobs": [...Job Objects],
        "total_jobs": 123,
        "jobs_open": 321,
        "total_applicants": 12,
        "team_members": [...user Objects],
        "cost": 1234,
    }
    ```
    |Response Code|Description|
    |---|---|
    |200|SUCCESS: Profile KPI retrieved|

### `token/`
- **View:** MyTokenObtainPairView
- Generates and retrieves json web token for `authentication`.
    |Response Code|Description|
    |---|---|
    |200|SUCCESS: Token generated|

### `token/refresh/`
- **View:** MyTokenRefreshView
- Refreshes and retrieves json web token for `authentication`.
    |Response Code|Description|
    |---|---|
    |200|SUCCESS: Token generated|

### `user-add/`
- **View:** UserAddView
- Creates user with `role` and `email` from invite by `authenticated admin` user. Sends password reset email if user successfully created.
- **Payload**
    - Get Query
    ```json 
    {
        "user":...inviting user object,
        "role": 1,
        "email" : "johndoe@example.com",
        ..other details of invited user 
    }
    ```
    **Response**
    ```json
    {
        ...
        "result":{
            {
                
                "org": ...inviting user org id,
                "password": ...default password,
                "role": 1,
                "is_admin": false, 
                "invited_by": ...inviting user org id
            }
        }
    }
    ```
    |Response Code|Description|
    |---|---|
    |201|SUCCESS: User Created|
    |400|FAIL: Invalid format/role doesn't exist/validation error.|
    |500|FAIL: Server error/email not sent|

### `organizations/<int:org_id>/users-list/`
- **View:** UserForDelete
- Lists all the users from an organisation for a deleting based on `organisation id` and `authentication`.
- **Payload**
    - Create
    ```json 
    {
        "users":[...users list filtered by org_id] 
    }
    ```

### `invite-users/`
- **View:** UploadUsersView
- Creates multiple users under an `organisation` with detail using invite by `authenticated admin` user, through a excel sheet. Sends password reset email to users successfully created. Checks for existing users.
- **Payload**
    - POST
    ```json 
    {
        "user":...inviting user object,
        "file":...excel file with users detail,
    }
    ```
    **Response**
    ```json
    {
        ...
        "existing_users": ...existing_users,
        "failed_users": ...failed_users,
        "created_users": ...created_users
    }
    ```
    |Response Code|Description|
    |---|---|
    |201|SUCCESS: Users Created|
    |400|FAIL: Invalid format/organisation doesn't exist/no file uploaded|
    

### `onboard-organization/`
- **View:** UploadUsersView
- Onboards a new organization and create a corresponding user.
- **Payload**
    - POST
    ```json 
    {
        "org":{
            "name":"XYZ pvt ltd",
            "domain": "Software",
            "location":"India",
            ...
        },
        "user":{
            "name":"John Doe",
            "email":"johndoe@example.com",
            "contact":"+123456789",
            "country":"India",
            "position":"Manager",
            ...            
        }
    }
    ```
    |Response Code|Description|
    |---|---|
    |201|SUCCESS: Organization registered|
    |400|FAIL: Duplicate entry(contact/email)/Invalid input format|
    
## Viewsets

### `RolesViewSet`
Handles CRUD operations for the `Roles` model.

**Purpose:**
- Manages roles within the system.

**Behavior:**
- Retrieves all roles for `list` and `retrieve` actions.
- Uses `RolesSerializer` for serialization and deserialization.



### `DemoRequestViewSet`
Handles CRUD operations for the `DemoRequest` model.

**Purpose:**
- Manages demo requests submitted by users.

**Behavior:**
- Restricts access to authenticated super admins.
- Retrieves all demo requests for `list` and `retrieve` actions.
- Uses `DemoRequestSerializer` for serialization and deserialization.



### `OrganizationViewSet`
Handles CRUD operations for the `Organization` model.

**Purpose:**
- Manages organizations within the system.

**Behavior:**
- Restricts access to authenticated users.
- Filters organizations based on the authenticated user's organization ID.
- Returns organizations belonging to the user's organization or an empty queryset if the user is not authenticated.
- Uses `OrganizationSerializer` for serialization and deserialization.



### `UserViewSet`
Handles CRUD operations for the `MyUser` model.

**Purpose:**
- Manages user accounts within the system.
- Restricts access to admin users.

**Behavior:**
- Retrieves all users for `list` and `retrieve` actions.
- Uses `BasicUserDetailSerializer` for serialization and deserialization.



### `UserDeleteViewSet`
Handles deletion of multiple `MyUser` objects.

**Purpose:**
- Manages bulk deletion of user accounts.

**Behavior:**
- Restricts access to authenticated admin users.
- Deletes multiple users based on `user_ids` provided in query parameters.

|Response Code|Description|
|---|---|
|200|SUCCESS: Users deleted|
|404|FAIL: No users found|
