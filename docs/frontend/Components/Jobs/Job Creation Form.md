---
sidebar_position: 2
---

## Main Components

## Alert Builder
The `AlertBuilder.js` file is a React component responsible for managing alerts within a specific workflow stage in the CandidHR project. It allows users to create, update, and delete alerts based on conditions defined by workflow fields. The component interacts with a backend API to fetch valid fields, retrieve existing alerts, and perform CRUD operations on alerts.

- **File Path:** `\hr-frontend\src\components\jobs\job-creation-form\AlertBuilder.js`
- **Dependencies**:
  - `react`: Core React library.
  - `react-select`: Library for dropdown selection.
  - `AuthContext`: Provides authentication tokens and user details.
  - `api`: Base URL for backend API requests.

### State Variables
| Variable Name|Purpose|
|---|---|
|**`fields`**| An array of objects representing valid fields for alert conditions. Each object contains:|
|`key`| Unique identifier for the field.|
|`name`| Display name of the field.|
|`label`| Label for UI display |
|`value`| Value for UI selection.|
|`datatype`| Data type of the field.|
|||
|**`alerts`**| An array of objects representing existing alerts. Each object contains:|
|`id`| Unique identifier for the alert.|
|`name`| Name of the alert.|
|`description`| Description of the alert.|
|`condition`| Object containing `field`, `operator`, and `value` for the alert condition.|
|`enabled`| Boolean indicating whether the alert is active.|
|||
|**`modalOpen`**| Boolean to control the visibility of the alert creation/update modal.|
|||
|**`currentAlert`**| Object representing the alert currently being created or updated. Contains:|
|`name`| Name of the alert.|
|`description`| Description of the alert.|
|`condition`| Object with `field`, `operator`, and `value`.|
|`enabled`| Boolean indicating alert status.|

### Constants
- **`numberOperators`**: Array of operators (`>`, `<`, `>=`, `<=`, `=`) for numeric fields.
- **`textOperators`**: Array of operators (`=`) for text fields.

### Functions and Methods

1. `fetchValidFields(serviceId)`
- **Purpose**: 
  - Fetches valid fields for alert conditions from the backend.
  - Updates the `fields` state with fetched data.
  - Maps fetched data to include `label` and `value` for UI compatibility.
- **Parameters**:
  - `serviceId` (string): ID of the service to fetch fields for.
- **Error Handling**: Logs error.

2. `fetchAlerts()`
- **Purpose**: 
  - Fetches existing alerts for the current stage.
  - Updates the `alerts` state with fetched data.
- **Error Handling**: Logs errors to the console.

3. `handleSaveAlert(alert)`
- **Purpose**: 
  - Saves or updates an alert.
  - Refreshes the alerts list by calling `fetchAlerts`.
  - Closes the modal by setting `modalOpen` to `false`.
- **Parameters**:
  - `alert` (object): Alert object to save or update.
- **Error Handling**: Logs errors to the console.

4. `handleDeleteAlert(id)`
- **Purpose**:
  - Deletes an alert.
  - Refreshes the alerts list by calling `fetchAlerts`.
- **Parameters**:
  - `id` (string): ID of the alert to delete.
- **Error Handling**: Logs errors to the console.  

5. `openModal(alert)`
- **Purpose**: 
  - Opens the modal for creating or updating an alert.
  - Sets `currentAlert` to the provided alert or a new alert template.
  - Sets `modalOpen` to `true`.
- **Parameters**:
  - `alert` (object, optional): Alert object to edit. If not provided, initializes a new alert.

6. `getOperators(fieldKey)`
- **Purpose**: 
  - Returns operators based on the selected field's data type.
- **Parameters**:
  - `fieldKey` (string): Key of the selected field.
- **Return Value**: Array of operators (`numberOperators` or `textOperators`).

---

## Application Form

The `ApplicationForm.js` file is a React component responsible for rendering and managing a multi-step job application form. It allows users to customize various aspects of the application process, such as setting preferences for resume screening, defining filter criteria, and selecting screening questions.

- **File Path:** `\hr-frontend\src\components\jobs\job-creation-form\ApplicationForm.js`
- **Dependencies**
  - `react-select`: Used for dropdown selections (e.g., currency, question sets).
  - `react-toastify`: Displays toast notifications for success/error messages.
  - `AuthContext`: Provides authentication tokens and user details.

### State Variables
| Variable Name|Purpose|
|---|---|
|**`formData`**| Stores the form data for the job application.|
|`job`| Job ID.|
|`max_retries`| Maximum number of retries allowed.|
|`max_resume_size`| Maximum resume size.|
|`max_applicants` | Maximum number of applicants.|
|`include_*`| Toggles for including various fields.|
|`questions`| Array of selected question IDs.|
|`currency`| Selected currency for salary fields.|
|||
|**`filterCriteria`**| Stores filter criteria for screening applicants.|
|**`questionSets`**|Stores available question sets for screening.
|**`selectedQuestionsIds`**|Stores IDs of selected questions for screening.|
|**`selectedCurrency`**| Stores the currently selected currency.|
|**`loading`**, **`saving`**, **`loadingQuestions`**|Tracks loading and saving states.|

---

### Functions and Methods

1. `fetchPreference`
- **Purpose**: 
  - Fetches resume screening preferences from the API.
  - Updates `formData`, `preference`, and `assignedQuestions` state.
- **Error Handling**: Logs errors and sets `loading` to `false`.

2. `fetchQuestionSet`
- **Purpose**:
  - Fetches available question sets from the API.
  - Updates `questionSets` and `selectedQuestionSet` state.
- **Error Handling**: Logs errors.

3. `fetchQuestions`
- **Purpose**: 
  - Fetches questions for the selected question set.
  - Updates `questions` and `hasMore` state.
- **Parameters**: `page` (Number) - The page number to fetch.
- **Error Handling**: Logs errors and sets `loadingQuestions` to `false`.

4. `handleQuestionSelection`
- **Purpose**: 
  - Handles the selection/deselection of questions.
  - Updates `selectedQuestionsIds` and `formData`.
- **Parameters**: `selectedQuestion` (Object) - The question to toggle.

5. `updatePreference`
- **Purpose**: 
  - Updates resume screening preferences via API.
  - Updates `preference` and `formData` state.
- **Parameters**: `updatedData` (Object) - The updated preference data.
- **Error Handling**: Displays toast notifications for success/error.

6. `bulkCreateOrUpdateCriteria`
- **Purpose**: 
  - Creates or updates filter criteria in bulk via API.
  - Updates `filterCriteria` state and displays toast notifications.
- **Parameters**: 
  - `jobId` (String) - The job ID.
  - `criteriaList` (Array) - The list of criteria to update.
- **Return Value**: Object with `success` and `message` fields.
- **Error Handling**: Logs errors and displays alerts.

7. `handleSaveClick`
- **Purpose**:
  - Validates and saves form data and filter criteria.
  - Calls `updatePreference` and `bulkCreateOrUpdateCriteria`.
- **Error Handling**: Displays validation errors if criteria are invalid.

---

## Assessment Workflow Form

The `AssessmentWorkflowForm.js` file is responsible for managing and customizing the workflow stages for job postings in the CandidHR application. It allows users to create, assign, and reorder workflow stages.

- **File Path:** `\hr-frontend\src\components\jobs\job-creation-form\AssessmentWorkflowForm.js`
- **Dependencies**:
  - `@heroicons/react`: Provides icons used in the UI.
  - `AuthContext`: Supplies authentication tokens and organization services.

### State Variables
| Variable Name|Purpose|
|---|---|
|`currentTab`| Tracks the currently selected workflow stage.|
|`workflow`| Stores the fetched or created workflow data.|
|`workflowStages`| Holds the stages associated with the workflow.|
|`workflowName`| Stores the name of the workflow being created.|
|`creatingWorkflow`| Tracks whether a workflow creation request is in progress.|
|`assigningWorkflow`| Tracks whether a workflow assignment request is in progress.|
|`serviceTabs`| Contains the list of available workflow stages.|
|`draggedIndex`| Tracks the index of the dragged item during reordering.|

### Context
- `AuthContext`: Provides authentication tokens (`authTokens`) and organization services (`orgServices`) for API requests.

### Functions and Methods

### `handleDragStart(index)`
- **Purpose**: 
  - Initiates the drag operation for reordering workflow stages.
  - Updates `draggedIndex` with the index of the dragged item.
- **Parameters**:
  - `index` (number): The index of the dragged item.

### `handleDragOver(event)`
- **Purpose**: 
  - Prevents the default browser behavior for drag-and-drop.
- **Parameters**:
  - `event` (DragEvent): The drag event.

### `handleDrop(index)`
- **Purpose**: 
  - Handles the drop operation to reorder workflow stages.
  - Updates `serviceTabs` with the reordered list and resets `draggedIndex`.
- **Parameters**:
  - `index` (number): The index where the item is dropped.

### `fetchWorkflow()`
- **Purpose**: 
  - Fetches the workflow data for the given job ID.
  - Updates `workflow` and `workflowStages` with the fetched data.
- **Return Value**: The fetched workflow data.
- **Error Handling**: Logs errors to the console.

### `handleCreateWorkflow()`
- **Purpose**: 
  - Creates a new workflow with the specified name.
  - Updates `workflow` and `workflowStages` with the created workflow data.
  - Calls `assignWorkflowToJob` to assign the workflow to the job.
- **Return Value**: The created workflow data.
- **Error Handling**: Logs errors to the console and updates `creatingWorkflow` state.

### `assignWorkflowToJob(workflowId)`
- **Purpose**: 
  - Assigns the created workflow to the specified job.
  - Updates `workflowStages` with the initial stage of the assigned workflow.
- **Parameters**:
  - `workflowId` (string): The ID of the workflow to assign.
- **Return Value**: The assignment response data.
- **Error Handling**: Logs errors to the console and updates `assigningWorkflow` state.

### Rendering

- A header for workflow customization.
- A list of draggable workflow stages (`serviceTabs`).
- Input fields for creating a new workflow.
- Conditional rendering of child components (`ResumeScreeningSetup`, `AssessmentSetup`, `VideoInterviewSetup`) based on the selected stage.

### Error Handling
- Errors during API requests are logged to the console.
- State variables (`creatingWorkflow`, `assigningWorkflow`) are used to manage loading states and prevent duplicate requests.

---

## Filter Criteria

The `FilterCriteria.js` file is responsible for managing and rendering a dynamic form for creating and editing filter criteria in a job creation process. It allows users to add, update, and remove criteria, configure response formats.

- **File Path:** `\hr-frontend\src\components\jobs\job-creation-form\FilterCriteria.js`
- **Dependencies**:
  - `@heroicons/react`: Provides icons for UI elements (e.g., delete button).
  - `Accordion`: A custom component used to render collapsible sections for each criterion.

### Props
|Prop Name| Description|
|---|---|
|`criteria`||
|`id`| Unique identifier for the criterion (null for new criteria).|
|`question`| The question text for the criterion.|
|`response_type`| The type of response format.|
|`options`| List of options for response types like dropdown, radio, or checkbox.|
|`expected_response`| The expected response(s) for the criterion.|
|`isUpdated`| Indicates whether the criterion has been updated.|
|||
|`responseFormats`||
|`value`| The internal value of the response format.|
|`label`| The display label for the response format.|

### Functions and Methods
1. `addCriterion()`
- **Purpose**: 
  - Adds a new criterion to the `criteria` array.
  - Updates the `criteria` state by appending a new criterion object.

2. `updateQuestion(index, value)`
- **Purpose**: 
  - Updates the question text of a specific criterion.
  - Updates the `criteria` state and marks the criterion as updated.
- **Parameters**:
  - `index`: `number` - The index of the criterion in the `criteria` array.
  - `value`: `string` - The new question text.

3. `updateResponseType(index, selectedOption)`
- **Purpose**:
  - Updates the response type of a specific criterion and resets related fields.
  - Updates the `criteria` state, resets `options` and `expected_response`, and marks the criterion as updated.
- **Parameters**:
  - `index`: `number` - The index of the criterion in the `criteria` array.
  - `selectedOption`: `object` - The selected response format object from `responseFormats`.

4. `addOption(index)`
- **Purpose**:
  - Adds a new option to the `options` array of a specific criterion.
  - Updates the `criteria` state and marks the criterion as updated.
- **Parameters**:
  - `index`: `number` - The index of the criterion in the `criteria` array.

5. `deleteOption(criterionIndex, optionIndex)`
- **Purpose**:
  - Removes an option from the `options` array of a specific criterion.
  - Updates the `criteria` state and marks the criterion as updated.
- **Parameters**:
  - `criterionIndex`: `number` - The index of the criterion in the `criteria` array.
  - `optionIndex`: `number` - The index of the option to remove.

6. `updateOption(criterionIndex, optionIndex, value)`
- **Purpose**:
  - Updates the text of a specific option in a criterion.
  - Updates the `criteria` state and marks the criterion as updated.
- **Parameters**:
  - `criterionIndex`: `number` - The index of the criterion in the `criteria` array.
  - `optionIndex`: `number` - The index of the option to update.
  - `value`: `string` - The new option text.

7. `setExpectedResponse(index, value)`
- **Purpose**: 
  - Sets the expected response for a specific criterion.
  - Updates the `criteria` state and marks the criterion as updated.
- **Parameters**:
  - `index`: `number` - The index of the criterion in the `criteria` array.
  - `value`: `string` or `Array<string>` - The expected response value(s).

8. `removeCriterion(index, id)`
- **Purpose**:
  - Removes a criterion from the `criteria` array and sends a deletion request to the server if the criterion has an ID.
  - Updates the `criteria` state by removing the criterion.
  - Sends a PATCH request to the server to mark the criterion as deleted.
- **Parameters**:
  - `index`: `number` - The index of the criterion in the `criteria` array.
  - `id`: `string` or `null` - The ID of the criterion to delete (if applicable).

---

## Generate Button

The `GenerateButton.js` file is a React functional component that renders a customizable button with a unique visual design. It is designed to be reusable and integrates into the job creation form within the HR frontend project. 

- **File Path:** `\hr-frontend\src\components\jobs\job-creation-form\GenerateButton.js`
- **Dependencies**
  - `CSS Module`: The `GenerateButton.css` file is imported to style the button and its sub-elements.
  - `SVG Icon`: An inline SVG is used to render a decorative icon within the button.

### Props

| Prop Name       | Purpose                                                                 |
|-----------------|-------------------------------------------------------------------------|
| `text`          | The text displayed inside the button.                                   |
| `onClickHandler`| The callback function triggered when the button is clicked.             |
| `isDisabled`    | Determines whether the button is disabled (`true`) or enabled (`false`).|

## Functions and Methods
### `GenerateButton` 
#### Parameters
- **`text`** (`string`): The label text displayed on the button.
- **`onClickHandler`** (`function`): The function to execute when the button is clicked.
- **`isDisabled`** (`boolean`): Controls the button's disabled state.
#### Return Value
- Returns a JSX element representing a styled button with dynamic text and an SVG icon.

---

## Job Details Form

The `JobDetailsForm.js` file is responsible for rendering and managing a form used to create or edit job postings in the HR frontend application. It handles user input for job details such as title, skills, location, employment type, experience, and description. The form also integrates with an AI service to generate or rewrite job descriptions based on user input. The component interacts with the backend API to fetch, update, or create job postings and manages form validation, error handling, and navigation between steps in a multi-step form process.

- **File Path:** `\hr-frontend\src\components\jobs\job-creation-form\JobDetailsForm.js`
- **Dependencies**
  - `react-select/creatable`: Used for dropdown inputs with creatable options (e.g., skills and employment type).
  - `react-quill`: Used for rich text editing of the job description.
  - `AuthContext`: Provides authentication tokens for API requests.
  - `ScoreWeights`: A child component for managing scoring weights.
  - `GenerateButton`: A reusable button component for AI-generated descriptions.

### 1. **State Variables**
| Variable Name|Purpose|
|---|---|
|`formData`| Stores the form input values for job details.|
  ```js
  {
    title: string,
    description: string,
    experience: string,
    min_experience: string,
    max_experience: string,
    employment_type: string,
    must_have_skills: array,
    new_applicant_notify: boolean,
    location: string | null,
    owner: string,
    user_prompt: string,
    close_date: string,
  }
  ```
|`weights`| Stores the scoring weights for job evaluation metrics.|
  ```js
  {
    skills: number,
    work_experience: number,
    projects: number,
    education: number,
    certifications: number,
    total: number,
  }
  ```
|`error`| Tracks validation errors for form fields.|
|`loading`| Indicates whether the form is in a loading state (e.g., fetching or submitting data).|
|`aiDescLoading`| Indicates whether the AI description generation is in progress.|
|`errorMessage`| Stores error messages and icons for API or network errors.|

### Functions and Methods

1. `fetchJob(jobId)`
- **Purpose**: 
  - Fetches job details from the backend API for editing.
  - Updates `formData`, `weights`, and `originalJobData` with fetched job details.
- **Parameters**:
  - `jobId` (string): The ID of the job to fetch.
- **Error Handling**: Displays error messages using `handleError` for API failures.

2. `handleFormSubmit(e)`
- **Purpose**: 
  - Handles form submission for creating or updating a job posting.
  - Submits form data to the backend API and navigates to the next step on success.
- **Parameters**:
  - `e` (Event): The form submission event.
- **Error Handling**: Validates form inputs and displays errors if validation fails. Handles API errors using `handleError`.

3. `handleInputChange(e)`
- **Purpose**: 
  - Updates `formData` when input fields change.
  - Updates the corresponding field in `formData`.
- **Parameters**:
  - `e` (Event): The input change event.

4. `handleSkillsAdd(selectedOption)`
- **Purpose**: 
  - Updates the `must_have_skills` field in `formData` when skills are selected.
  - Updates `formData.must_have_skills`.
- **Parameters**:
  - `selectedOption` (array): The selected skills from the dropdown.

5. `handleEmploymentTypeChange(selectedOption)`
- **Purpose**: 
  - Updates the `employment_type` field in `formData` when an employment type is selected.
  - Updates `formData.employment_type`.
- **Parameters**:
  - `selectedOption` (object): The selected employment type from the dropdown.

6. `generateJobDescription()`
- **Purpose**: 
  - Generates a job description using AI based on form inputs.
  - Updates `formData` with the generated description and skills.
- **Error Handling**: Displays errors if the job title is missing or if the API call fails.

7. `rewriteJobDescription()`
- **Purpose**: 
  - Rewrites an existing job description using AI.
  - Updates `formData` with the rewritten description and recommended skills.
- **Error Handling**: Displays errors if the job title or description is missing or if the API call fails.

8. `handleError(statusCode, message)`
- **Purpose**: 
  - Displays error messages and icons based on the status code.
  - Updates `errorMessage` with the appropriate error details.
- **Parameters**:
  - `statusCode` (number): The HTTP status code.
  - `message` (string): Additional error details.

---

## Team Member Form

The `TeamMemberForm.js` file is designed to manage and display team members associated with a specific job in a multi-step form. It allows users to add, remove, and share job details with team members. The component interacts with an API to fetch and update job and user data, and it integrates with the `AuthContext` for authentication and user details.

- **File Path:** `\hr-frontend\src\components\jobs\job-creation-form\TeamMemberForm.js`
- **Dependencies**
  - `react-select`: Used for the dropdown selection of team members.
  - `react-toastify`: Displays toast notifications for success and error messages.
  - `api`, `selectStyle`, `selectTheme`: Constants for API endpoints and styling.

### Props
|Prop Name| Description|
|---|---|
|`formSteps`|List of steps in the multi-step form.|
|`currentStep`|Current step in the form.|
|`setCurrentStep`|Function to update the current step.|
|`navigateToStep`|Function to navigate to a specific step.|
|`jobId`|ID of the job being edited or shared.|

### State Variables
| Variable Name|Purpose|
|---|---|
| `loading`| Indicates whether data is being fetched or processed.|
|`error`|Stores error messages or details if an API request fails.|
|`successMessage`|Stores success messages for user feedback.|
|`membersData`|Stores the list of all available team members fetched from the API.|
|`selectedMembersData`|Stores the list of team members currently selected for the job.|
|`jobDetail`|Stores details of the job fetched from the API.|
|`disabled`|Disables the "Share" button during API requests to prevent duplicate submissions.|

### Functions and Methods

1. `fetchUsers()`
- **Purpose**:
  - Fetches a list of users from the API.
  - Updates `membersData` with formatted user data.
  - Filters out the current user from the list.
- **Return Value**: Object containing filtered user data (`usersData`).
- **Error Handling**: Logs errors to the console.

2. `fetchJob(jobId)`
- **Purpose**: 
  - Fetches job details and associated team members.
  - Updates `jobDetail` with job data.
  - Updates `selectedMembersData` with formatted team member data.
- **Parameters**:
  - `jobId`: `string` - ID of the job to fetch.
- **Error Handling**: Logs errors and updates the `error` state.

3. `handleMembersOnchange(selectedOption)`
- **Purpose**: 
  - Handles changes in the selected team members.
  - Updates `selectedMembersData` with the selected members.
- **Parameters**:
  - `selectedOption`: `array` - List of selected members.

4. `removemember(id)`
- **Purpose**: 
  - Removes a team member from the selected list.
  - Updates `selectedMembersData` by filtering out the removed member.
  - Calls `handleShareJob` to update the API.
- **Parameters**:
  - `id`: `string` - ID of the member to remove.

5. `handleShareJob(id)`
- **Purpose**: 
  - Shares the job with selected team members by updating the API.
  - Updates the job's shared members in the API.
  - Displays success or error toast messages.
  - Disables the "Share" button during the request.
- **Parameters**:
  - `id`: `string` (optional) - ID of the member to exclude from sharing.
- **Error Handling**:
  - Displa
  ys error toast if the API request fails.

6. `Option`
- **Purpose**: 
  - Custom rendering for the dropdown options in the `Select` component.
- **Parameters**:
  - `props`: `object` - Props passed by the `Select` component.
- **Return Value**: JSX for the dropdown option.

---
