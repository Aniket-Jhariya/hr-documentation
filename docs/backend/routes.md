---
sidebar_position: 1
---

# Routes


### Application-Specific Routes

| Path                     | Purpose                                                                 | Included App       |
|--------------------------|-------------------------------------------------------------------------|--------------------|
| `/jobs/`             | Manages job postings and related operations.                           | [`\job\urls.py`](/docs/backend/job/endpoints.md)             |
| `/candidates/`           | Handles candidate profiles, applications, and status tracking.         | [`\candidates\urls.py`](/docs/backend/candidates/endpoints.md)  |
| `/notifications/`        | Manages user notifications.                                            | [`\notifications\urls.py`](/docs/backend/notifications/endpoints.md) |
| `/interview/`            | Manages interview scheduling and feedback.                             | [`\interview\urls.py`](/docs/backend/interview/endpoints.md)   |
| `/personality-screening/`| Handles personality assessment workflows.                              | [`\personality_screening\urls.py`](/docs/backend/personality%20screening/endpoints.md) |
| `/resume_parser/`        | Processes resume parsing and analysis.                                 | [`\resume_parser\urls.py`](/docs/backend/resume%20parser/endpoints.md) |
| `/test/`                 | Manages skill assessments and test workflows.                          | [`\test\urls.py`](/docs/backend/test/endpoints.md)        |
| `/business_models/`      | Handles business-specific configurations.                              | [`\business_models\urls.py`](/docs/backend/business%20model/endpoints.md) |
| `/filter/`               | Applies filters to candidate/job data.                                 | [`\filters\urls.py`](/docs/backend/filters/endpoints.md)     |
| `/analytics/`            | Provides data analytics dashboards.                                    | [`\analytics\urls.py`](/docs/backend/filters/endpoints.md)   |
| `/video_upload/`         | Manages video uploads for interviews or assessments.                   | [`\video_upload\urls.py`](/docs/backend/video%20upload/endpoints.md) |
| `/comments/`             | Handles comments on candidates/jobs.                                   | [`\comments\urls.py`](/docs/backend/comments/endpoints.md)    |
| `/workflow/`             | Manages hiring workflow stages and automation.                         | [`\workflow\urls.py`](/docs/backend/workflow/endpoints.md)    |

---

### Admin Interface
- **Path**: `/admin/`
- **Purpose**: 

- Provides access to Django's admin interface with a custom admin site [(`\accounts\admin.py#custom_admin_site`)](/docs/backend/accounts/admin.md).
- Overrides the default admin site with custom branding or functionality.
- Requires admin privileges for access.

---

### Authentication
- **Path**: `/accounts/`
- **Purpose**:
- Handles user authentication and account management.
- Delegates routing to [`\accounts\urls.py`](/docs/backend/accounts/endpoints.md) for login, registration, and profile management.

---

### Utility Endpoints
- **Path**: `/get_count/<str:field>/`
- **Purpose**: 

- Returns aggregated counts for a specific field (e.g., candidates, jobs).
- Uses the [`get_count`](/docs/backend/candidates/endpoints#get_count) view from `\candidates\views.py`.

---