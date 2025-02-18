---
sidebar_position: 1
---

# Routes


### Application-Specific Routes

| Path                     | Purpose                                                                 | Included App       |
|--------------------------|-------------------------------------------------------------------------|--------------------|
| `/jobs/`             | Manages job postings and related operations.                           | [`/job`](/docs/backend/job/endpoints.md)             |
| `/candidates/`           | Handles candidate profiles, applications, and status tracking.         | [`/candidates`](/docs/backend/candidates/endpoints.md)  |
| `/notifications/`        | Manages user notifications.                                            | [`/notifications`](/docs/backend/notifications/endpoints.md) |
| `/interview/`            | Manages interview scheduling and feedback.                             | [`/interview`](/docs/backend/interview/endpoints.md)   |
| `/personality-screening/`| Handles personality assessment workflows.                              | [`/personality_screening`](/docs/backend/personality%20screening/endpoints.md) |
| `/resume_parser/`        | Processes resume parsing and analysis.                                 | [`/resume_parser`](/docs/backend/resume%20parser/endpoints.md) |
| `/test/`                 | Manages skill assessments and test workflows.                          | [`/test`](/docs/backend/test/endpoints.md)        |
| `/business_models/`      | Handles business-specific configurations.                              | [`/business_models`](/docs/backend/business%20model/endpoints.md) |
| `/filter/`               | Applies filters to candidate/job data.                                 | [`/filters`](/docs/backend/filters/endpoints.md)     |
| `/analytics/`            | Provides data analytics dashboards.                                    | [`/analytics`](/docs/backend/filters/endpoints.md)   |
| `/video_upload/`         | Manages video uploads for interviews or assessments.                   | [`/video_upload`](/docs/backend/video%20upload/endpoints.md) |
| `/comments/`             | Handles comments on candidates/jobs.                                   | [`/comments`](/docs/backend/comments/endpoints.md)    |
| `/workflow/`             | Manages hiring workflow stages and automation.                         | [`/workflow`](/docs/backend/workflow/endpoints.md)    |

---

### Admin Interface
- **Path**: `/admin/`
- **Purpose**: 

    - Provides access to Django's admin interface with a custom admin site [(`/accounts/admin`)](/docs/backend/accounts/admin.md).
    - Overrides the default admin site with custom branding or functionality.
    - Requires admin privileges for access.

---

### Authentication
- **Path**: `/accounts/`
- **Purpose**:
    - Handles user authentication and account management.
    - Delegates routing to [`/accounts`](/docs/backend/accounts/endpoints.md) for login, registration, and profile management.

---

### Utility Endpoints
- **Path**: `/get_count/<str:field>/`
- **Purpose**: 
    - Returns aggregated counts for a specific field (e.g., candidates, jobs).
    - Uses the [`get_count`](/docs/backend/candidates/endpoints#get_count) view from `/candidates`.
- **Payload**
    - GET
    
    **Response**
    ```json
    {
        "jobs":37,
        "applicants":870
    }
    ```