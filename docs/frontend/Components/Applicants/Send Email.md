---
sidebar_position: 11
---

The `SendEmail.js` file is a React component responsible for managing the process of sending email notifications to job applicants. It provides a modal interface where users can select email templates, customize email content, and send notifications based on the applicant's status.

- **File Path**: `\hr-frontend\src\components\applicants\SendEmail.js`

### Props

| Prop Name            | Purpose                                                                 |
|----------------------|-------------------------------------------------------------------------|
| `setStages`          | Updates the stages of the applicant's hiring process.                   |
| `statusOptions`      | List of available status options for the applicant.                     |
| `setStatus`          | Updates the applicant's status.                                         |
| `status`             | Current status of the applicant (e.g., "Shortlisted", "Rejected").      |
| `showModal`          | Controls the visibility of the modal.                                   |
| `setShowModal`       | Updates the visibility of the modal.                                    |
| `selectedTestLog`    | Logs related to the applicant's test results.                           |
| `setSelectedTestLog` | Updates the selected test log.                                          |
| `tableInstance`      | Instance of the table component for rendering applicant data.           |
| `currentStage`       | Current stage of the applicant in the hiring process.                   |
| `jobId`              | ID of the job the applicant applied for.                                |
| `applicant`          | Details of the applicant (e.g., `id`, `name`).                          |
| `updateStatus`       | Updates the applicant's status in the backend.                          |
| `insideDrawer`       | Indicates if the modal is rendered inside a drawer.                     |
| `prevSelectedStatus` | Previous status of the applicant before any changes.                    |

### State Variables
| Variable Name         | Purpose                                                                 |
|-----------------------|-------------------------------------------------------------------------|
| `errorMessage`        | Stores error messages for display.                                      |
| `notifyCandidate`     | Toggles whether to notify the candidate via email.                      |
| `selectedTemplate`    | Stores the selected email template ("default" or "custom").             |
| `subject`             | Stores the email subject.                                               |
| `body`                | Stores the email body.                                                  |
| `params`              | Stores additional parameters for the email.                             |
| `sendingEmail`        | Tracks if an email is being sent.                                       |
| `updatingStatus`      | Tracks if the applicant's status is being updated.                      |

### Constants
- `stageMapping`: Maps stage keys to human-readable stage names.
- `defaultEmailTemplates`: Predefined email templates for "Shortlisted" and "Rejected" statuses.


### Functions and Methods

1. `handleTemplateChange(event)`
- **Purpose**: 
  - Updates the selected template and sets the email subject and body based on the chosen template.
  - Updates `selectedTemplate`, `subject`, and `body` state variables.
  - Resets `errorMessage` if a valid template is selected.
- **Parameters**:
  - `event`: Event object from the template selection input.

2. `handleClose(mode)`
- **Purpose**: 
  - Closes the modal and resets all state variables.
  - Resets `showModal`, `selectedTemplate`, `errorMessage`, `body`, `subject`, and `notifyCandidate`.
  - Restores the previous status if `mode` is "All Clear".
- **Parameters**:
  - `mode`: String indicating the close mode (e.g., "All Clear").

3. `sendEmail()`
- **Purpose**: 
  - Sends an email notification to the candidate via the backend API.
  - Updates `sendingEmail` state to indicate the email is being sent.
  - Sends a POST request to the backend with the email payload.
  - Updates `errorMessage` if the request fails.
- **Error Handling**:
  - Catches and logs errors, displaying a generic error message.

4. `handleSend()`
- **Purpose**: 
  - Handles the process of updating the applicant's status and sending an email (if applicable).
  - Validates if a template is selected when `notifyCandidate` is true.
  - Updates the applicant's status via `updateStatus`.
  - Calls `sendEmail` if `notifyCandidate` is true.
  - Closes the modal after completion.

---


