---
sidebar_position: 1
---
## Accordion

The `Accordion.js` file provides a collapsible UI element that displays a title and can be expanded or collapsed to reveal or hide its content. The component is designed to be flexible and reusable, accepting dynamic content via `children` and a deletion handler via `onDelete`.

- **File Path:** `\hr-frontend\src\components\jobs\Accordion.js`
- **Dependencies**:
    - `@heroicons/react/24/outline`: Provides the `TrashIcon` used in the delete button.

### Props
|Prop Name| Description|
|---|---|
|`title`| The text displayed in the accordion header.|
|`children`| The content to be displayed when the accordion is expanded.|
|`onDelete`| A callback function triggered when the delete button is clicked.|

### Functions and Methods

1. `toggleAccordion`
- **Purpose**: 
    - Toggles the visibility of the accordion content.
    - Updates the `isOpen` state, which controls whether the accordion content is displayed.

2. Delete Button Click Handler
- **Purpose**: 
    - Handles the click event for the delete button.
    - Calls the `onDelete` callback function passed as a prop.
- **Parameters**:
  - **`e`** (`Event`): The click event object.
- **Error Handling**: None explicitly implemented. Errors in the `onDelete` callback must be handled by the parent component.

---

## Applicant By Stages

The `ApplicantByStages` component is a React functional component that serves as a wrapper for the `CandidateList` component. It is responsible for rendering a list of candidates based on the selected stage of the hiring process and the current view mode. 

- **File Path:** `\hr-frontend\src\components\jobs\ApplicantByStages.js`

### Props
|Prop Name| Description|
|---|---|
|`selectedStage`|Represents the current stage of the hiring process for which candidates are being displayed.|
|`jobId`|Represents the unique identifier of the job for which applicants are being viewed. |
|`viewMode`|Determines the mode in which the candidate list is displayed.|

---

### Functions and Methods

1. `ApplicantByStages` 
- **Parameters**
- `props`: An object containing the following properties:
  - `selectedStage`: The selected stage of the hiring process.
  - `jobId`: The ID of the job.
  - `viewMode`: The current view mode for displaying candidates.
- **Return Value**
    - Returns a JSX fragment containing a `div` wrapper with the `CandidateList` component rendered inside it.

---

## Assigned Workflow

The `AssignedWorkflow.js` file is responsible for managing and displaying the workflow assignment for a specific job and candidate. It allows users to assign, edit, and visualize workflows, including the steps (rounds) associated with them.

- **File Path:** `\hr-frontend\src\components\jobs\AssignedWorkflow.js`
- **Dependencies**
    - `react-select`: Used for rendering a dropdown to select workflows.
    - `react-xarrows`: Used to draw arrows between workflow steps for visualization.
    - `AuthContext`: Provides authentication tokens for API requests.
    - `DetailMiniCard`: A child component used to display details of each workflow step.

### Props
|Prop Name| Description|
|---|---|
`jobId` | The ID of the job for which the workflow is being assigned.|
`selectedCandidate` | The candidate selected for the workflow.|
`selectedRow` | The selected row in the UI (context-specific).|
`selectedWorkflow` | The currently assigned workflow.|
`setSelectedWorkflow` | A function to update the selected workflow.|
`workflows` | A list of available workflows to choose from.|

### State Variables
| Variable Name|Purpose|
|---|---|
|`error` | Stores error messages or validation errors.|
|`tempWorkflow` | Temporarily stores the selected workflow during editing.|
|`editMode` | Tracks whether the component is in edit mode.|

### Functions and Methods

1. `Option` Component
- **Purpose**: 
    - Customizes the rendering of options in the `react-select` dropdown.
    - Logs the option data to the console for debugging.
- **Parameters**:
  - `props` (Object): Contains data for the option, including `label` and `steps_json`.
- **Return Value**: A JSX element displaying the workflow name and the number of rounds.

2. `onWorkflowChange`
- **Purpose**: 
    - Handles the selection of a workflow from the dropdown.
- **Parameters**:
  - `selectedOption` (Object): The selected workflow object.
- **Side Effects**: Updates the `tempWorkflow` state with the selected workflow.

3. `assignWorkflow`
- **Purpose**: 
    - Assigns the selected workflow to the job by making a PATCH request to the backend API.
    - Updates the `selectedWorkflow` state.
    - Resets `tempWorkflow` and `editMode` states.
    - Makes an API call to update the job's workflow.
- **Error Handling**: Logs errors to the console and updates the `error` state if the request fails.

---

## Candidate List

The `CandidateList.js` file is responsible for displaying a list of candidates for a specific job and stage in a hiring pipeline. It supports infinite scrolling to load more candidates as the user scrolls down. The component fetches candidate data from an API, formats it, and renders it in a user-friendly interface with interactive timelines for each candidate's hiring stages.

- **File Path:** `\hr-frontend\src\components\jobs\CandidateList.js`
- **Dependencies**:
    - **`react-router-dom`**: Used for navigation (`useNavigate`, `useParams`) and linking (`Link`).
    - **`@heroicons/react`**: Provides icons for UI elements.
    - **`api`**: A constant representing the base API URL.

### Props
|Prop Name| Description|
|---|---|
|`selectedStage`| A string representing the current hiring stage.|
|`viewMode`| A string or boolean indicating the current view mode.|

### State Variables
| Variable Name|Purpose|
|---|---|
|`candidates`| An array of candidate objects, each containing details like `id`, `name`, `email`, and `stages`.|
|`page`| A number representing the current page of candidate data being fetched.|
|`loading`| A boolean indicating whether data is currently being fetched.|
|`hasMore`| A boolean indicating whether more candidate data is available to fetch.|

### Context
- **`AuthContext`**: Provides authentication tokens (`authTokens`) and user details (`userDetails`, `user`) for API requests.

### Functions and Methods
1. `fetchCandidates(page)`
- **Purpose**
    - Fetches candidate data from the API and updates the state.
    - Updates the `candidates` state with formatted data.
    - Sets `loading` to `true` during the fetch and `false` afterward.
    - Updates `hasMore` based on whether more data is available.
- **Parameters**
    - `page`: A number representing the page of data to fetch.
- **Error Handling**
    - Logs errors to the console and sets `loading` and `hasMore` to `false` to prevent further fetch attempts.

2. `useEffect` Hooks
- `selectedStage` and `viewMode`:
   - Resets the `candidates` state and fetches the first page of data when `selectedStage` or `viewMode` changes.
- `page`
   - Fetches additional candidate data when the `page` state changes.
- `hasMore` and `loading`
   - Sets up an `IntersectionObserver` to detect when the user scrolls near the bottom of the list, triggering the fetch of the next page.

---

## Create Job

The `CreateJob.js` file is responsible for managing the multi-step job creation process in the HR frontend application. It provides a structured workflow for creating or editing a job posting, allowing users to navigate through different steps.

- **File Path:** `\hr-frontend\src\components\jobs\CreateJob.js`

### Props
|Prop Name| Description|
|---|---|
|`formSteps`| An array of objects representing the steps in the job creation process. Each object contains:|
|`id` | Unique identifier for the step.|
|`title` | Display name of the step.|
|`description` | Brief explanation of the step's purpose.|

### Functions and Methods

1. `useEffect` 
- **Purpose**: 
    - Initializes the current step based on the `stepId` parameter from the URL. If no `stepId` is provided, it defaults to step 1.
    - Updates the `currentStep` state variable.
- **Parameters**: None (relies on `stepId` from `useParams`).

2. `navigateToStep` 
- **Purpose**: 
    - Navigates to a specific step in the job creation process.
    - Updates the URL using `navigate` from `react-router-dom`.
- **Parameters**:
  - `stepId` (number): The ID of the step to navigate to.

---

## Job Applicants

The `JobApplicants.js` file manages the display and interaction of job applicants for a specific job posting. It provides functionality to view applicants in both tabular and stage-based views, filter applicants by stages, upload resumes, and update applicant statuses. 

- **File Path:** `\hr-frontend\src\components\jobs\JobApplicants.js`
- **Dependencies**:
  - `AuthContext`: Provides authentication tokens and user details.
  - `react-toastify`: Displays toast notifications for errors and success messages.
  - `@heroicons/react`: Provides icons for UI elements.

### State Variables
| Variable Name            | Purpose                                                                 |
|--------------------------|-------------------------------------------------------------------------|
| `tableInstance`          | Holds the instance of the table for applicant data.                     |
| `selectedStage`          | Tracks the currently selected applicant stage.                          |
| `totalApplicants`        | Stores the total number of applicants.                                  |
| `filteredApplicants`     | Stores the list of filtered applicants.                                 |
| `error`                  | Tracks errors encountered during API calls or user actions.             |
| `showAIRecom`            | Controls the visibility of AI recommendations.                         |
| `checked`                | Toggles AI recommendation sorting.                                     |
| `jobDetail`              | Stores details of the job posting.                                     |
| `filterGroups`           | Stores filter groups for applicant filtering.                          |
| `filterGroupList`        | Stores a list of filter groups for UI rendering.                       |
| `showModal`              | Controls the visibility of the resume upload modal.                    |
| `showAlertModal`         | Controls the visibility of the alert modal.                            |
| `selectedFile`           | Stores the selected resume file for upload.                            |
| `isSubmitted`            | Tracks whether the resume upload form has been submitted.              |
| `jobLoading`             | Tracks the loading state of job details.                               |
| `filterGroupLoading`     | Tracks the loading state of filter groups.                             |
| `tableRowCount`          | Tracks the number of rows in the applicant table.                      |
| `url`                    | Stores the API URL for fetching applicants.                            |
| `candidateFormData`      | Stores form data for uploading a candidate.                            |
| `stageFilters`           | Stores the list of applicant stages with counts and styling.           |
| `viewMode`               | Toggles between "tabular" and "stage" views.                           |
| `candidateToEdit`        | Stores the candidate data for editing.                                 |
|||
|`urlMapping`| Maps applicant stages to their corresponding API endpoints for fetching applicant data.|

### Functions and Methods

1. `fetchCandidatesByStages`
- **Purpose**: 
    - Fetches applicant data grouped by stages.
    - Updates `stageFilters` state.
- **Return Value**: Updates `stageFilters` state with formatted data.
- **Error Handling**: Logs errors to the console.

2. `fetchJob`
- **Purpose**: 
    - Fetches job details.
    - Updates `jobDetail` and `jobLoading` states.
- **Return Value**: Updates `jobDetail` state.
- **Error Handling**: Updates `error` state and logs errors.

3. `fetchFilterGroups`
- **Purpose**:
    - Fetches filter groups for applicant filtering.
    - Updates `filterGroups`, `filterGroupList`, and `filterGroupLoading` states.
- **Return Value**: Updates `filterGroups` and `filterGroupList` states.
- **Error Handling**: Updates `error` state and logs errors.

4. `handleInputChange`
- **Purpose**:
    - Handles changes in the candidate form inputs.
- **Side Effects**: Updates `candidateFormData` state.
- **Parameters**: `e` (event object).
- **Return Value**: Updates `candidateFormData` state.

5. `handleFileChange`
- **Purpose**: 
    - Handles file selection for resume upload.
    - Updates `selectedFile` state.
- **Parameters**: `event` (file input event).
- **Return Value**: Updates `selectedFile` state.

6. `check_email_exists`
- **Purpose**:
    - Checks if a candidate's email already exists for the job.
- **Return Value**: Returns a boolean indicating email existence.
- **Error Handling**: Displays a toast error message.

7. `handleUpload`
- **Purpose**: 
    - Handles resume upload and candidate creation.
    - Updates `isSubmitted` and `candidateFormData` states.
- **Parameters**: `e` (event object).
- **Error Handling**: Displays error messages and updates `error` state.

8. `updateResume`
- **Purpose**: 
    - Updates an existing candidate's resume.
    - Updates `isSubmitted` and `candidateFormData` states.
- **Error Handling**: Updates `error` state and logs errors.

9. `updateStatus`
- **Purpose**: 
    - Updates the status of an applicant.
    - Updates applicant status and refreshes stage data.
- **Parameters**: `statusText`, `rowData`, `row`, `body`, `subject`, `notifyCandidate`.
- **Error Handling**: Updates `error` state and logs errors.

10. `updateJobUniversalStatus`
- **Purpose**: 
    - Updates the universal status of an applicant.
    - Updates applicant status and refreshes stage data.
- **Parameters**: `statusText`, `rowData`, `row`, `stageName`.
- **Error Handling**: Displays toast messages and updates `error` state.

11. `handleClose`
- **Purpose**: 
    - Closes the resume upload modal and resets form data.
    - Resets `showModal`, `isSubmitted`, `selectedFile`, and `candidateFormData` states.

---

## Job Detail

The `JobDetail` component is responsible for displaying detailed information about a specific job posting within the HR frontend application. It fetches job details from an API, handles navigation between different job-related tabs, and provides functionality to publish or unpublish a job. The component also includes error handling and loading states to ensure a smooth user experience.

- **File Path:** `\hr-frontend\src\components\jobs\JobDetail.js`
- **Dependencies**
    - `AuthContext`: Provides authentication tokens and user details required for API requests.
    - `Heading`: Displays the job title and publish/unpublish button.
    - `Outlet`: Renders nested routes within the component.
    - `react-toastify`: Displays toast notifications.
    - `@heroicons/react`: Provides icons for error messages.


### State Variables
| Variable Name|Purpose|
|---|---|
|`currentTab`| Tracks the currently active tab (e.g., "overview", "applicants").|
|`jobDetail`| Stores the fetched job details.|
|`description`| Stores the formatted job description (with `<br>` tags replacing newlines).|
|`loading`| Indicates whether data is being fetched.|
|`error`| Stores any error that occurs during data fetching.|
|`errorMessage`| Stores error details, including an icon and a custom message.|

### Context
- `AuthContext`: Provides authentication-related data such as `domain`, `authTokens`, `logoutUser`, and `userDetails`.

### Functions and Methods

1. `fetchJob`
- **Purpose**:
    - Fetches job details from the API.
    - Updates `jobDetail`, `description`, and `loading` state.
    - Clears `errorMessage` on successful fetch.
- **Error Handling**:
  - Sets `errorMessage` based on the HTTP status code.
  - Redirects to the jobs page on network errors.

2. `handleError`
- **Purpose**:
    - Handles errors by setting an appropriate error message and icon.
    - Updates `errorMessage` with an icon and custom message.
- **Parameters**:
  - `statusCode`: HTTP status code.
  - `message`: Additional error message.

3. `publishJob`
- **Purpose**:
    - Toggles the published status of a job.
    - Refetches job details after updating the published status.
- **Parameters**:
  - `job`: The job object to update.
- **Return Value**: None.
- **Error Handling**:
  - Logs errors to the console.

4. `renderError`
- **Purpose**:
    - Renders an error message with an icon and additional details.
- **Return Value**: JSX element displaying the error message.

---

## Job Filter Groups

The `JobFilterGroups.js` file is responsible for managing and displaying filter groups for job-related data. It allows users to create, edit, view, and delete filter groups, which are combinations of filters.

- **File Path:** `\hr-frontend\src\components\jobs\JobFilterGroups.js`

### State Variables
| Variable Name|Purpose|
|---|---|
|`filterGroups`| Stores the current filter group being created or edited.|
|`name`| Name of the filter group (string).|
|`skills`| Array of selected skills.|
|`work_experience`| Object with `operator` (comparison operator) and `value` (numeric value).|
|`location`| Object with `city` and `state` arrays.|
|`ai_recommendations`| Boolean indicating if AI recommendations are enabled.|
|`job`| Job ID associated with the filter group (number).|
|||
|`filterGroupList`|Stores the list of all filter groups fetched from the API.|
|||
|`selectedField`|Represents the currently selected filter field.|
|`label`| Display name of the field (string).|
|`value`| Field identifier (string).|
|`type`| Data type of the field (string, e.g., "number", "array").|
|||
|`selectedComparisonOperator`|Represents the currently selected comparison operator for numeric fields.|
| `label`| Display name of the operator (string).|
| `value`| Operator symbol.|
|||
|`filters`| Stores a list of applied filters.|
|showModal`|Controls the visibility of the modal for creating/editing filter groups.|
|`editMode`| Indicates whether the modal is in edit mode.|

### Functions and Methods

1. `fetchFilterGroups`
- **Purpose**: 
    - Fetches the list of filter groups from the API.
    - Updates `filterGroupList` with the fetched data.
    - Sets `loading` to `false` after the request completes.
- **Error Handling**: Sets an error state if the API request fails.
- **Side Effects**:

2. `handleFilterFieldChange`
- **Purpose**: 
    - Updates the selected filter field.
    - Updates `filterField` state.
- **Parameters**:
  - `e`: Event object from the input change.

3. `handleFilterValueChange`
- **Purpose**: 
    - Updates the value of the selected filter.
    - Updates `filterValue` state.
- **Parameters**:
  - `e`: Event object from the input change.

4. `addFilter`
- **Purpose**:
    - Adds a new filter to the list of applied filters.
    - Updates `filters` state.
    - Resets `filterValue`.
    
5. `handleFieldChange`
- **Purpose**: 
    - Updates the selected field for filtering.
    - Updates `selectedField` state.
- **Parameters**:
  - `selectedOption`: The selected field object.

6. `handleComparisonOperatorChange`
- **Purpose**: 
    - Updates the selected comparison operator for numeric fields.
    - Updates `selectedComparisonOperator` and `filterGroups.work_experience.operator`.
- **Parameters**:
  - `selectedOption`: The selected operator object.

7.`handleSkillsAdd`
- **Purpose**: 
    - Updates the list of selected skills.
    - Updates `filterGroups.skills`.
- **Parameters**:
  - `selectedOption`: The selected skills array.

8. `handleCityAdd`
- **Purpose**: 
    - Updates the list of selected cities.
    - Updates `filterGroups.location.city`.
- **Parameters**:
  - `selectedOption`: The selected cities array.

9. `handleStateAdd`
- **Purpose**: 
    - Updates the list of selected states.
    - Updates `filterGroups.location.state`.
- **Parameters**:
  - `selectedOption`: The selected states array.

10. `handleWorkEXchange`
- **Purpose**: 
    - Updates the work experience value.
    - Updates `filterGroups.work_experience.value`.
- **Parameters**:
  - `e`: Event object from the input change.

11. `validateFilterGroup`
- **Purpose**: 
    - Validates the filter group before saving.
- **Return Value**:
  - Object with `error` or `success` message.

12. `handleSave`
- **Purpose**: 
    - Saves or updates the filter group.
    - Updates `filterGroupList` and `filterGroups` state.
    - Closes the modal on success.
- **Error Handling**: Displays an error message if validation fails or the API request fails.

14. `handleClose`
- **Purpose**: 
    - Closes the modal and resets the form.
    - Resets `filterGroups` and related states.

---

## Job Interviews

The `JobInterviews.js` file is responsible for managing and displaying interview-related data for a specific job in the CandidHR application. It fetches job details, candidate information, and interview workflows, and renders them in a tabular format using a custom `Table` component.

- **File Path:** `\hr-frontend\src\components\jobs\JobInterviews.js`
- **Dependencies**:
    - `Table`: A reusable table component for rendering candidate data.
    - `AssignedWorkflow`: A component for managing and displaying assigned workflows.
    - `SpinLoader`: A loading spinner component.


### State Variables
| Variable Name|Purpose|
|---|---|
|`jobDetail`| Stores details of the selected job.|
|`candidates`| Stores the list of candidates who have completed the resume screening process.|
|`workflows`| Stores the list of available interview workflows.|
|`selectedWorkflow`| Tracks the currently selected interview workflow.|
|`selectedCandidate`| Tracks the currently selected candidate.|
|`selectedRow`| Tracks the currently selected row in the table.|
|`error`| Stores any errors encountered during data fetching.|
|`loading`| Tracks the loading state for job and candidate data.|
|`workflowLoading`| Tracks the loading state for workflow data.|

### Context
- **`AuthContext`**: Provides authentication tokens (`authTokens`) and user details (`userDetails`) for API requests.

### Functions and Methods

1. `fetchJob()`
- **Purpose**: 
    - Fetches details of the selected job.
    - Sets `loading` state during the request.
- **Return Value**: Updates `jobDetail` state with job data.
- **Error Handling**: Sets `error` state if the request fails.

2. `fetchApplicants()`
- **Purpose**:
    - Fetches candidates who have completed the resume screening process for the selected job.
    - Sets `loading` state during the request.
- **Return Value**: Updates `candidates` state with candidate data.
- **Error Handling**: Sets `error` state if the request fails.

3. `fetchInterviewWorkflows()`
- **Purpose**:
    - Fetches available interview workflows.
    - Sets `workflowLoading` state during the request.
- **Return Value**: Updates `workflows` state with workflow data.
- **Error Handling**: Sets `error` state if the request fails.

4. `fetchInterviewWorkflowsByJob()`
- **Purpose**:
    - Fetches interview workflows assigned to the selected job.
    - Sets `workflowLoading` state during the request.
- **Return Value**: Updates `selectedWorkflow` state with the first workflow in the list.
- **Error Handling**: Sets `error` state if the request fails.

5. `handleUnshortList(params)`
- **Purpose**: 
    - Placeholder function for unshortlisting a candidate.
- **Parameters**: `params` (object) - Candidate row data.

6. `handleShortList(params)`
- **Purpose**:
    - Placeholder function for shortlisting a candidate.
- **Parameters**: `params` (object) - Candidate row data.

7. `openOutlook(toEmail)`
- **Purpose**:
    - Opens the default email client with a pre-filled email to the candidate.
    - Opens a new email window.
- **Parameters**: `toEmail` (string) - Candidate's email address.

8. `headerPopupFormatter(e, column, onRendered)`
- **Purpose**:
    - Formats the header popup for table columns.
    - Adds event listeners to the input element.
- **Parameters**:
  - `e` (event) - Event object.
  - `column` (object) - Column data.
  - `onRendered` (function) - Callback function.
- **Return Value**: Returns a DOM element for the header popup.

9. `linkFormatter(cell, formatterParams, onRendered)`
- **Purpose**:
    - Formats candidate names as clickable links.
- **Parameters**:
  - `cell` (object) - Cell data.
  - `formatterParams` (object) - Formatting parameters.
  - `onRendered` (function) - Callback function.
- **Return Value**: Returns an HTML string for the formatted cell.

10. `emailFormatter(cell, formatterParams, onRendered)`
- **Purpose**:
    - Formats candidate emails with an envelope icon.
- **Parameters**:
  - `cell` (object) - Cell data.
  - `formatterParams` (object) - Formatting parameters.
  - `onRendered` (function) - Callback function.
- **Return Value**: Returns an HTML string for the formatted cell.

11. `expFormatter(cell, formatterParams, onRendered)`
- **Purpose**:
    - Formats candidate experience data.
- **Parameters**:
  - `cell` (object) - Cell data.
  - `formatterParams` (object) - Formatting parameters.
  - `onRendered` (function) - Callback function.
- **Return Value**: Returns the candidate's total experience in months.

12. `scoreFormatter(cell, formatterParams, onRendered)`
- **Purpose**:
    - Formats candidate resume scores.
- **Parameters**:
  - `cell` (object) - Cell data.
  - `formatterParams` (object) - Formatting parameters.
  - `onRendered` (function) - Callback function.
- **Return Value**: Returns the candidate's resume score.

---

## Job List

The `JobList.js` file is responsible for rendering and managing a list of jobs within the HR management system. It provides functionalities such as viewing, editing, deleting, sharing, and publishing jobs. The component interacts with the backend API to fetch job data, manage job states, and handle user interactions.

- **File Path:** `\hr-frontend\src\components\jobs\JobList.js`
- **Dependencies**:
    - `react-router-dom`: Used for navigation within the application.
    - `react-toastify`: Displays toast notifications for user feedback.
    - `react-select`: Provides a customizable dropdown for selecting users to share jobs with.
    - `Table`: A custom table component used to display the list of jobs.


### State Variables
| Variable Name           | Purpose                                                                 |
|-------------------------|-------------------------------------------------------------------------|
| `cellContextMenu`       | Stores context menu options for job actions based on user role.         |
| `jobs`                  | Stores the list of jobs fetched from the backend.                       |
| `jobsLoading`           | Indicates whether the jobs are currently being fetched.                 |
| `filteredJobs`          | Stores the filtered list of jobs based on search or filter criteria.    |
| `showShareModal`        | Controls the visibility of the share job modal.                         |
| `jobToShare`            | Stores the job data to be shared.                                       |
| `users`                 | Stores the list of users available for sharing jobs.                    |
| `usersSharedWith`       | Stores the list of users with whom the job is shared.                   |
| `columns`               | Defines the columns and their configurations for the job table.         |
| `showDeleteModal`       | Controls the visibility of the delete job confirmation modal.           |
| `rowToUpdate`           | Stores the row data of the job being updated or deleted.                |

### Functions and Methods

1. `fetchJobs()`
- **Purpose**: 
    - Fetches the list of jobs from the backend API.
    - Updates the `jobs` and `filteredJobs` state with the fetched data.
- **Error Handling**: Sets an error state if the API call fails.

2. `handleShareJob(job, userDetails)`
- **Purpose**:
    - Handles the sharing of a job with other users.
    - Opens the share modal and updates the `usersSharedWith` state.
- **Parameters**:
  - `job`: Object - The job data to be shared.
  - `userDetails`: Object - Details of the current user.
- **Error Handling**: Logs errors to the console.

3. `publishJob(job, row)`
- **Purpose**:
    - Toggles the publish status of a job.
    - Updates the job's publish status in the backend and the table row.
- **Parameters**:
  - `job`: Object - The job data to be published/unpublished.
  - `row`: Object - The table row data associated with the job.
- **Error Handling**: Logs errors to the console.

4. `handleDeleteJob(jobId, row)`
- **Purpose**:
    - Deletes a job from the list.
    - Removes the job from the table and updates the backend.
- **Parameters**:
  - `jobId`: String - The ID of the job to be deleted.
  - `row`: Object - The table row data associated with the job.
- **Error Handling**: Logs errors to the console.

5. `handleViewJob(jobId)`
- **Purpose**:
    - Navigates to the job overview page.
- **Parameters**:
  - `jobId`: String - The ID of the job to view.

6. `handleEditJob(jobId)`
- **Purpose**:
    - Navigates to the job edit page.
- **Parameters**:
  - `jobId`: String - The ID of the job to edit.

7. `handleCopyUrl(job)`
- **Purpose**: 
    - Copies the job URL to the clipboard.
    - Displays a toast notification on success.
- **Parameters**:
  - `job`: Object - The job data containing the encrypted ID.
- **Error Handling**: Logs errors to the console.

---

## Job Overview

The `JobOverview` component is designed to display detailed information about a specific job posting. It fetches job details from an API, including must-have skills and job descriptions, and renders them in a user-friendly format. 

- **File Path:** `\hr-frontend\src\components\jobs\JobOverview.js`
- **Dependencies**
    - `react-quill`: Used to render the job description in a rich text format.
    - `AuthContext`: Provides authentication tokens (`authTokens`) and user information (`user`).

### State Variables
| Variable Name|Purpose|
|---|---|
|`jobDetail`| An array that stores the fetched job details.|
|`description`| A string that holds the formatted job description.|
|`loading`| A boolean indicating whether data is being fetched.|
|`error`| An object to store any errors encountered during the fetch operation.|
|`successMessage`| A string to store success messages (currently unused).|
|`isSpeaking`| A boolean to manage text-to-speech functionality (currently unused).|

### Functions and Methods

1. `fetchJob`
- **Purpose**:
    - Fetches job details from the API.
    - Updates `jobDetail` and `description` states with fetched data.
    - Manages `loading` state during the fetch operation.
- **Error Handling**: 
  - Catches and sets errors in the `error` state.
  - Updates the `loading` state to `false` on error.

### Error Handling
- Errors during the fetch operation are caught and stored in the `error` state.
- The component does not explicitly display error messages but could be extended to do so.

---

## Job Preferences

The `JobPreferences.js` file is responsible for managing and displaying job-specific preferences for resume screening. It allows users to configure various settings such as maximum resume size, retries, applicants, currency, and other preferences related to candidate information.

- **File Path:** `\hr-frontend\src\components\jobs\JobPreferences.js`
- **Dependencies**:
   - `react-select/creatable`: For dropdown inputs.
   - `react-select`: For currency selection.

### State Variables
| Variable Name|Purpose|
|---|---|
|`preference`| Stores the fetched preference data for the job.|
|`saving`|Tracks whether the component is in the process of saving changes.|
|`selectedCurrency`|Stores the currently selected currency from the `currencies` list.|
|||
|`formData`|Holds the form data for job preferences, including:|
|`job`| Job ID (from URL parameters).|
|`max_retries`| Maximum retries allowed.|
|`max_resume_size`| Maximum resume size in MB.|
|`max_applicants`| Maximum number of applicants.|
|`location_to_exclude`| Locations to exclude (currently unused).|
|`include_github` `include_linkedin`, etc.| Boolean flags for including specific candidate information.|
|`currency`| Selected currency.|
|`questions`| Array of question IDs.|

### Constants
| Variable Name|Purpose|
|---|---|
|`currencies`|A list of currency options with `value` and `label` fields.|
|`locations`|A list of location options with `value` and `label` fields.|

### Functions and Methods
1. `fetchPreference`
- **Purpose**:
    - Fetches job-specific preferences from the API.
    - Updates `formData` with fetched preferences.
    - Updates `selectedCurrency` with the fetched currency.
- **Error Handling**: Logs errors to the console.

2. `updatePreference`
- **Purpose**: 
    - Updates or creates job preferences via the API.
    - Updates `preference` and `formData` with the API response.
    - Toggles the `saving` state during the API call.
- **Parameters**:
  - `updatedData` (`object`): The updated preference data to be saved.
- **Return Value**: None.
- **Error Handling**: Logs errors to the console and resets the `saving` state.

3. `handleLocationAdd`
- **Purpose**: 
    - Updates the `location_to_exclude` field in `formData`.
    - Updates `formData` with the selected location.
- **Parameters**:
  - `selectedOption` (`object`): The selected location option.

---

## Job Questions

The `JobQuestions.js` file is a React component responsible for managing and displaying job-related questions in a hiring process. It allows users to select, add, and delete questions from predefined question sets, customize the screening process, and save changes. The component interacts with an API to fetch and update question-related data and integrates with the application's authentication context for secure API calls.

- **File Path:** `\hr-frontend\src\components\jobs\JobQuestions.js`
- **Dependencies**:
    - **Toast Notifications**: Uses `react-toastify` for displaying success/error messages.
    - **Icons**: Uses `@heroicons/react/24/outline` for UI icons.
    - **React Select**: Uses `react-select` for dropdown components.


### State Variables
| Variable Name               | Purpose                                                                 |
|-----------------------------|-------------------------------------------------------------------------|
| `preference`                | Stores job-specific screening preferences fetched from the API.         |
| `questionSetName`           | Stores the name of the question set.                                   |
| `questionSets`              | Stores the list of available question sets.                            |
| `questionSetLoading`        | Tracks the loading state of question sets.                             |
| `selectedQuestionSet`       | Stores the currently selected question set.                            |
| `optionsData`               | Stores data related to job and selected questions for API updates.     |
| `initialQuestions`          | Stores the initial list of selected question IDs.                      |
| `questions`                 | Stores the list of questions in the selected question set.             |
| `selectedQuestionsIds`      | Stores the IDs of selected questions.                                  |
| `selectedQuestions`         | Stores the details of selected questions.                              |
| `deleting`                  | Tracks the deletion state of a question.                               |
| `saving`                    | Tracks the saving state of changes.                                    |
| `unsavedChanges`            | Tracks whether there are unsaved changes.                              |
| `selectedAnswerType`        | Stores the selected answer type (e.g., text, audio).                   |

### Constants
| Constant Name               | Purpose                                                                 |
|-----------------------------|-------------------------------------------------------------------------|
| `answerTypes`               | Defines the available answer types (e.g., text, audio).                |


### Functions and Methods

1. `fetchQuestionSet()`
- **Purpose**:
    - Fetches the list of question sets from the API.
    - Updates `questionSets` and `selectedQuestionSet` state.
    - Sets `questionSetLoading` to `true` during the fetch and `false` afterward.
- **Error Handling**: Logs errors to the console.

2. `fetchPreference()`
- **Purpose**:
    - Fetches job-specific screening preferences from the API.
    - Updates `preference`, `optionsData`, `selectedQuestionsIds`, `initialQuestions`, and `selectedQuestions` state.
- **Error Handling**: Logs errors to the console.

3. `fetchQuestions()`
- **Purpose**:
    - Fetches questions for the selected question set.
    - Updates `questions` state.
- **Error Handling**: Logs errors to the console.

4. `handleTypeChange(selectedOption)`
- **Purpose**:
    - Handles changes to the selected answer type.
    - Updates `selectedAnswerType` state.
- **Parameters**:
  - `selectedOption` (`Object`): The selected answer type.

5. `handleQuestionSelection(selectedQuestion)`
- **Purpose**:
    - Toggles the selection of a question.
    - Updates `selectedQuestionsIds`, `optionsData`, and `selectedQuestions` state.
- **Parameters**:
  - `selectedQuestion` (`Object`): The question to be selected/deselected.

6. `removeQuestion(questionId)`
- **Purpose**:
    - Removes a question from the selected list.
    - Updates `selectedQuestionsIds`, `optionsData`, and `selectedQuestions` state.
- **Parameters**:
  - `questionId` (`String`): The ID of the question to remove.

7. `handleRandomCount(random_count)`
- **Purpose**: 
    - Updates the count of random questions.
    - Updates `optionsData` state.
- **Parameters**:
  - `random_count` (`Number`): The number of random questions.

8. `handleSelectChange(selectedOption)`
- **Purpose**:
    - Handles changes to the selected question set.
    - Updates `selectedQuestionSet` state.
- **Parameters**:
  - `selectedOption` (`Object`): The selected question set.

9. `updateQuestions(updatedData)`
- **Purpose**:
    - Saves updated question preferences to the API.
    - Updates `preference`, `optionsData`, and `saving` state.
- **Parameters**:
  - `updatedData` (`Object`): The data to be saved.
- **Error Handling**: Logs errors to the console and displays a toast notification.

10. `deleteQuestion(questionId)`
- **Purpose**:
    - Deletes a question from the API.
    - Updates `questions` state and displays a success/error toast.
- **Parameters**:
  - `questionId` (`String`): The ID of the question to delete.
- **Error Handling**: Logs errors to the console and displays a toast notification.

---

## Score Weights

The `ScoreWeights.js` file is a React component responsible for rendering a pie chart and input fields to manage and visualize the weights assigned to different job evaluation metrics (e.g., skills, work experience, projects, education, certifications). It ensures that the cumulative weight of all metrics equals 10, providing real-time feedback and validation.

- **File Path:** `\hr-frontend\src\components\jobs\ScoreWeights.js`
- **Dependencies**:
    - ReactEcharts: A React wrapper for ECharts, used to render the pie chart.

### Props

|Prop Name| Description|
|---|---|
|**`weights`**| An object containing the weights for each metric. Expected fields:|
|`skills`| Number|
|`work_experience`| Number|
|`projects`| Number|
|`education`| Number|
|`certifications`| Number|
|`total`| Number (calculated sum of all weights)|
|||
|`setWeights`| A function to update the `weights` object.|
|`error`| A string or boolean indicating if there is an error (not actively used in the current implementation).|

### State
- `weightOptions`: An object storing the configuration for the pie chart rendered using `ReactEcharts`.

### Functions and Methods

1. `useEffect`
- **Purpose**: 
    - Updates the `weightOptions` state whenever the `weights` prop changes.
    - Updates the `weightOptions` state with a new configuration for the pie chart.

2. `handleInputChange`
- **Purpose**: 
    - Updates the `weights` object when an input field changes.
    - Updates the `weights` object using `setWeights`.
    - Recalculates the `total` field by summing all weights.
- **Parameters**:
  - `field`: String (key in the `weights` object, e.g., `skills`, `work_experience`).
  - `value`: String (input value from the field).

### Rendering Logic

1. Pie Chart
- Rendered using `ReactEcharts` with the `weightOptions` configuration.

2. Input Fields
- Five input fields for skills, work experience, projects, education, and certifications.

3. Total Validation
- Displays the cumulative weight (`weights.total`) and provides visual feedback.

---
