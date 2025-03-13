---
sidebar_position: 14
---

## Tests

The `Tests.js` file serves as the main interface for managing assessments (tests) within the CandidHR application. It allows users to create, edit, publish, share, and delete tests. The component integrates with various APIs to fetch and manipulate test data, and it provides a tabbed interface for navigating between different types of assessments. 

- **Dependencies**
    - `SpinLoader`: Loading spinner component.
    - `ToastContainer`: Displays toast notifications.
    - `ReactSelect`: Dropdown component for selecting options.

### State Variables
|Prop Name| Description|
|---|---|
|`tableRowCount`| Tracks the number of rows in the table.
|`cellContextMenu`| Stores context menu options for table cells.
|`error`| Holds error messages for API calls.
|`tableInstance`| Stores the instance of the table for manipulation.
|`tests`| Stores the list of tests fetched from the API.
|`filteredTests`| Stores the filtered list of tests.
|`loadingTests`| Indicates whether tests are being loaded.
|`showModal`| Controls the visibility of the "Create Test" modal.
|`showPreBuiltAssessmentModal`| Controls the visibility of the "Create Pre-Built Assessment" modal.
|`redirectToTestCreation`| Determines whether to redirect to the test creation page after saving.
|`shareModal`| Controls the visibility of the "Share Test" modal.
|`TestSelected`| Stores the selected test for sharing.
|`showPublishModal`| Controls the visibility of the "Publish Test" modal.
|`showShareModal`| Controls the visibility of the "Share Test" modal.
|`rowToPublish`| Stores the row data for the test to be published.
|`prebuiltAssessmentSelected`| Stores the selected pre-built assessment.
|`assessmentToShare`| Stores the assessment to be shared.
|`users`| Stores the list of users fetched from the API.
|`usersSharedWith`| Stores the list of users with whom the assessment is shared.
|`usersLoading`| Indicates whether users are being loaded.
|`showDeleteModal`| Controls the visibility of the "Delete Test" modal.
|`rowToDelete`| Stores the row data for the test to be deleted.
|`rowToShare`| Stores the row data for the test to be shared.
|`deleting`| Indicates whether a test is being deleted.
|`categories`| Stores the list of categories fetched from the API.
|`selectedCategories`| Stores the selected categories for filtering.
|`loadingCategories`| Indicates whether categories are being loaded.
|`domains`| Stores the list of domains fetched from the API.
|`selectedDomains`| Stores the selected domains for filtering.
|`loadingDomains`| Indicates whether domains are being loaded.
|`selectedTestType`| Stores the selected test type.
|`selectedDifficulty`| Stores the selected difficulty level.
|`testData`| Stores the form data for creating a test.


### Functions and Methods

1. `handleTabChange(tabName)`
- **Purpose**:
    - Updates the URL to reflect the selected tab.
    - Triggers a re-render and fetches data for the selected tab.
- **Parameters**:
  - `tabName` (string): The name of the tab to navigate to.

2. `handleShareJob(assessment, userDetails)`
- **Purpose**:
    - Opens the share modal and fetches users with whom the assessment is shared.
    - Updates `users`, `usersSharedWith`, and `assessmentToShare` state.
- **Parameters**:
  - `assessment` (object): The assessment to share.
  - `userDetails` (object): Details of the user sharing the assessment.

3. `fetchUsers(assessment)`
- **Purpose**:
    - Fetches users from the API.
- **Parameters**:
  - `assessment` (object): The assessment for which users are being fetched.
- **Return Value**: Returns an object containing `usersData`.
- **Error Handling**: Sets an error state if the API call fails.

4. `debounce(func, delay)`
- **Purpose**:
    - Debounces a function to limit its execution rate.
- **Parameters**:
  - `func` (function): The function to debounce.
  - `delay` (number): The delay in milliseconds.
- **Return Value**: Returns a debounced function.

5. `fetchDomains(name)`
- **Purpose**:
    - Fetches domains from the API.
    - Updates `domains` and `loadingDomains` state.
- **Parameters**:
  - `name` (string): Optional filter for domain names.
- **Error Handling**: Sets an error state if the API call fails.

6. `fetchCategories(name)`
- **Purpose**:
    - Fetches categories from the API.
    - Updates `categories` and `loadingCategories` state.
- **Parameters**:
  - `name` (string): Optional filter for category names.
- **Error Handling**: Sets an error state if the API call fails.

7. `fetchTests()`
- **Purpose**: Fetches tests from the API.
- **Side Effects**: Updates `tests`, `filteredTests`, and `loadingTests` state.
- **Error Handling**: Sets an error state if the API call fails.

8. `createTest(e)`
- **Purpose**:
    - Creates a new test via an API call.
    - Updates the test list and navigates to the test creation page if `redirectToTestCreation` is true.
- **Parameters**:
  - `e` (event): The form submission event.
- **Error Handling**: Logs errors to the console.

9. `createPreBuiltAssessment(e)`
- **Purpose**:
    - Creates a new pre-built assessment via an API call.
    - Updates the pre-built assessment list and navigates to the assessment builder if `redirectToTestCreation` is true.
- **Parameters**:
  - `e` (event): The form submission event.
- **Error Handling**: Logs errors to the console.

10. `handleTestAction(testId, action, payload)`
- **Purpose**:
    - Performs actions like publishing or deleting a test.
    - Updates the table data and closes the modal.
- **Parameters**:
  - `testId` (string): The ID of the test.
  - `action` (string): The action to perform (e.g., "publish", "delete").
  - `payload` (object): The data to send with the API request.
- **Error Handling**: Logs errors to the console.

11. `handleSelectedOption(selectedOption)`
- **Purpose**:
    - Updates the list of users with whom the assessment is shared.
    - Calls `updateUserSharedWith` to update the API.
- **Parameters**:
  - `selectedOption` (array): The selected users to share the assessment with.

12. `updateUserSharedWith(ids)`
- **Purpose**:
    - Updates the `users_shared_with` field for the assessment via an API call.
    - **Side Effects**: Updates the table data.
- **Parameters**:
  - `ids` (array): The IDs of users to share the assessment with.
- **Error Handling**: Logs errors to the console.

13. `handleRemoveUser(userId)`
- **Purpose**:
    - Removes a user from the shared list.
    - Updates `usersSharedWith` and calls `updateUserSharedWith`.
- **Parameters**:
  - `userId` (string): The ID of the user to remove from the shared list.

---

## Assigned Assessments

The `AssignedAssessments.js` file renders a table displaying assessments assigned to candidates within an HR management system. It integrates with the `Table` utility component to fetch and display data, and it allows users to navigate to candidate profiles or filter and sort the table data.

- **Dependencies**:
    - `Table`: A utility component for rendering and managing the table.
    - `AssignModal`: A modal component for assigning assessments.
    - `AuthContext`: Provides `orgServices` and `userDetails` for data fetching and user-specific configurations.
    - `Tabulator`: Used for advanced table functionalities like sorting, filtering, and formatting.
    - `getStatusStyle`: A utility function for styling status indicators.

### State Variables
| Variable Name|Purpose|
|---|---|
|`tableInstance`| Stores the instance of the Tabulator table.|
|`currentTab`| Tracks the currently selected tab (e.g., "pre-built-assessments").|
|`showAssignModal`| Controls the visibility of the `AssignModal`.|
|`columns`| Defines the schema for the table columns.|
|`tableRowCount`| Tracks the number of rows in the table (e.g., "fetching").|
|`initialSortColumns`| Specifies the initial sorting configuration for the table.|

### Field Mapping
- `fieldMapping`: Maps API field names to table column fields for data consistency.

```js
const fieldMapping = {
  "assigned_to.name": "assigned_to__name",
  "assigned_by.name": "assigned_by__name",
  "job.title": "job__title",
};
```

### Functions and Methods

1. `useEffect`
- **Purpose**:
    - Initializes the table columns when `orgServices` is available.
    - Updates the `columns` state with the table schema.
- **Dependencies**: `orgServices`.

2. `customMenuFormatter`
- **Purpose**: 
    - Formats the menu icon for table rows.
- **Parameters**:
  - `cell`: The cell object from Tabulator.
  - `formatterParams`: Additional formatting parameters.
  - `onRendered`: Callback for rendering completion.
- **Return Value**: HTML string for the menu icon.

3. `emptyHeaderFilter`
- **Purpose**: 
    - Creates a dummy header filter element to enable filtering.
- **Return Value**: A `div` element.

4. `handleClose`
- **Purpose**: 
    - Closes the `AssignModal` and resets related state.
    - Sets `showAssignModal` to `false`.

### Error Handling
- **Data Fetching**: Errors during data fetching are handled by the `Table` component.
- **Navigation**: Ensures the existence of required data (e.g., `candidateId`, `service`) before navigating.
- **Modal State**: Resets modal state on close to prevent stale data.

---

## Assign Modal

The `AssignModal.js` file provides a multi-step modal interface for assigning assessments to candidates. It integrates with various custom hooks and APIs to fetch data and handle the assignment process. The modal is designed to guide users through three steps: selecting candidates, choosing assessments, and configuring assessment validity.

- **Dependencies**:
  - `react-select-async-paginate`: For async dropdowns with pagination.
  - `@heroicons/react`: For icons (e.g., close button).

### State Variables
| Variable Name                  | Purpose                                                                 |
|--------------------------------|-------------------------------------------------------------------------|
| `assigningTest`                | Tracks if the test assignment is in progress.                           |
| `selectedApplicant`            | Stores the selected candidate(s) for assignment.                        |
| `selectedJob`                  | Stores the selected job for assignment.                                 |
| `prebuiltAssessmentSelected`   | Stores selected prebuilt assessments.                                   |
| `selectedAssessmentType`       | Tracks the type of assessment selected (prebuilt or user-owned).        |
| `TestSelected`                 | Stores selected user-owned assessments.                                 |
| `validFrom`                    | Stores the start date/time for assessment validity.                     |
| `validTo`                      | Stores the end date/time for assessment validity.                       |
| `formSteps`                    | Defines the steps in the modal (candidate selection, assessments, etc.).|
| `currentStep`                  | Tracks the current step in the modal.                                   |
| `isAllSelected`                | Tracks if all candidates are selected.                                  |

### Functions and Methods

1. `useEffect` Hooks
- **Fetch Assessments on Step Change**:
   - Fetches assessments when the user navigates to the second step.

- **Infinite Scroll for Prebuilt Assessments**:
   - Observes the last element in the list to load more prebuilt assessments.

- **Infinite Scroll for User-Owned Assessments**:
   - Similar to the prebuilt assessments, but for user-owned assessments.

2. `ShareTest`:
- **Purpose**
    - Handles the submission of the test assignment.
    - Sends a POST request to the API to assign the test.
    - Updates the `assigningTest` state during the process.
    - Closes the modal and refreshes the table instance on success.
   
3. `handleRandomizeSwitch`
- **Purpose**
   - Toggles the randomization of questions for a selected assessment.
   - Updates the `TestSelected` or `prebuiltAssessmentSelected` state.
- **Parameters**:
    - `e`: Event object.
    - `testId`: ID of the test.
    - `type`: Type of assessment (prebuilt or user-owned).
    - `total_questions`: Total number of questions in the assessment.
   
---

## Edit Test

The `EditTest.js` file is a React component responsible for managing the editing and creation of test questions within a test. It provides a user interface for adding, updating, and deleting questions, as well as uploading questions via an Excel file. The component interacts with an API to fetch and update test details, questions, and difficulties. It also handles form validation and state management for question editing.

- **Dependencies**
    - `React-Quill`: Provides a rich text editor for question content.
    - `React-Select`: Provides dropdown components for selecting answer formats and difficulties.

### State Variables
| Variable Name|Purpose|
|---|---|
|`newQuestionSetName`| Stores the name of a new question set.|
|`formValidationResponse`| Stores validation messages (success/error) for form submissions.|
|`questions`| Array of questions in the test.|
|`selectedQuestion`| Currently selected question for editing.|
|`selectedQuestionIndex`| Index of the selected question in the `questions` array.|
|`value`| Unused state (likely a leftover from development).|
|`text`| Plain text version of the question content.|
|`htmlContent`| HTML version of the question content.|
|`timeLimit`| Time limit for the question.|
|`difficulties`| Array of available difficulty levels.|
|`testTitle`| Title of the test.|
|`testDesc`| Description of the test.|
|`testCreationDate`| Creation date of the test.|
|`testDifficuty`| Difficulty level of the test.|
|`choices`| Array of answer choices for the question.|
|`selectedAnswerFormat`| Selected answer format (e.g., single choice, multiple choice).|
|`selectedDifficulty`| Selected difficulty level for the question.|
|`showUploadModal`| Controls the visibility of the upload modal.|
|`selectedFile`| Selected file for uploading questions via Excel.|
|`questionSets`| Array of available question sets.|
|`questionSetLoading`| Loading state for fetching question sets.|
|`selectedQuestionSet`| Selected question set for uploading questions.|
|`uploading`| Loading state for file upload.|
|`error`| Stores error messages during file upload.|


### Functions and Methods

1. `clearForm()`
- **Purpose**: 
    - Resets the form fields to their default values.
    - Clears `htmlContent`, `timeLimit`, `choices`, `selectedAnswerFormat`, and `selectedDifficulty`.

2. `deleteQuestion()`
- **Purpose**:
    - Deletes the selected question from the test.
    - Updates the `questions` state and removes the deleted question. Displays a success message.

4. `removeQuestion()`
- **Purpose**:
    - Removes a newly added question (not yet saved to the server).
    - Updates the `questions` state and selects the previous question.

5. `updateQuestion()`
- **Purpose**:
    - Updates the selected question with new data.
    - Sends a PATCH request to update the question and updates the `questions` state.

6. `saveQuestion()`
- **Purpose**:
    - Saves a new question to the server.
    - Sends a POST request to save the question and updates the `questions` state.

7. `getTestDetails()`
- **Purpose**:
    - Fetches details of the test (title, description, creation date, difficulty).
    - Updates `testTitle`, `testDesc`, `testCreationDate`, and `testDifficuty`.

8. `getQuestions()`
- **Purpose**:
    - Fetches all questions for the test.
    - Updates the `questions` state and selects the first question.

9. `getDifficulties()`
- **Purpose**:
    - Fetches available difficulty levels.
    - Updates the `difficulties` state.

10. `validateFormData(data, validateFor)`
- **Purpose**:
    - Validates form data before saving or updating a question.
- **Parameters**:
  - `data`: Form data to validate.
  - `validateFor`: Indicates whether validation is for saving or updating.
- **Return Value**: Object with `success` or `error` message.

11. `handleChange(content, delta, source, editor)`
- **Purpose**: 
    - Handles changes in the question editor.
    - Updates `htmlContent` and `text`.
- **Parameters**:
  - `content`: HTML content of the editor.
  - `delta`: Delta object representing changes.
  - `source`: Source of the change.
  - `editor`: Editor instance.

12. `handleChoiceChange(id, value)`
- **Purpose**:
    - Updates the value of a specific answer choice.
    - Updates the `choices` state.
- **Parameters**:
  - `id`: ID of the choice.
  - `value`: New value for the choice.

13. `handleCorrectChange(id)`
- **Purpose**:
    - Toggles the correctness of a specific answer choice.
    - Updates the `choices` state.
- **Parameters**:
  - `id`: ID of the choice.

14. `showQuestion(question, index)`
- **Purpose**:
    - Displays the selected question for editing.
    - Updates `selectedQuestion`, `selectedQuestionIndex`, `htmlContent`, `text`, `choices`, and `timeLimit`.
- **Parameters**:
  - `question`: Question object to display.
  - `index`: Index of the question in the `questions` array.

15. `addChoice()`
- **Purpose**:
    - Adds a new answer choice.
    - Updates the `choices` state.

16. `removeChoice(id)`
- **Purpose**:
    - Removes a specific answer choice.
    - Updates the `choices` state.
- **Parameters**:
  - `id`: ID of the choice to remove.

17. `addQuestion()`
- **Purpose**:
    - Adds a new question to the test.
    - Updates the `questions` state and selects the new question.

18. `handleModalOpen()`
- **Purpose**: Opens the upload modal and fetches question sets.
- **Parameters**: None.
- **Side Effects**: Updates `showUploadModal` and fetches question sets.

19. `handleClose()`
- **Purpose**:
    - Closes the upload modal.
    - Updates `showUploadModal`.

20. `fetchQuestionSet()`
- **Purpose**:
    - Fetches available question sets.
    - Updates `questionSets` and `selectedQuestionSet`.

21. `handleSelectChange(selectedOption)`
- **Purpose**:
    - Handles changes in the selected question set.
    - Updates `selectedQuestionSet`.
- **Parameters**:
  - `selectedOption`: Selected question set.

22. `handleUpload()`
- **Purpose**:
    - Uploads questions via an Excel file.
    - Sends a POST request to upload the file and updates the `questions` state.

23. `handleFileChange(event)`
- **Purpose**:
    - Handles file selection for upload.
    - Updates `selectedFile` and validates the file type.
- **Parameters**:
  - `event`: File input change event.

---

## Predesigned Tests

The `PredesignedTests` component is responsible for fetching and displaying a list of pre-built assessments in a grid view. It supports infinite scrolling to load additional assessments as the user scrolls down. The component leverages custom hooks, context, and utility components to achieve its functionality.

- **Dependencies**
    - `useFetchPreBuiltAssessments`: Fetches pre-built assessments and manages loading states.
    - `AuthContext`: Provides `isSuperUser` to determine if the user can edit assessments.
    - `GridView`: Displays the list of assessments in a grid layout.

### Props
|Prop Name| Description|
|---|---|
|**`useFetchPreBuiltAssessments`**|Fetches pre-built assessments from the server.|
|`fetchPreBuiltAssessments`| Function to fetch assessments for a specific page.|
|`loadingPreBuiltAssessments`| Boolean indicating if data is being fetched.|
|`preBuiltAssessments`| Array of pre-built assessments.|
|`preBuiltHasMore`| Boolean indicating if more assessments are available to fetch.|
|||
|**`AuthContext`**| Provides authentication-related data.|
|`isSuperUser`| Boolean indicating if the current user has superuser privileges.|

### Functions and Methods

1. `useEffect` for Fetching Assessments
- **Purpose**:
    - Fetches pre-built assessments when the `preBuiltPage` state changes.
    - Calls `fetchPreBuiltAssessments` with the current `preBuiltPage`.
    - Updates the list of assessments when new data is fetched.

2. `useEffect` for Infinite Scrolling
- **Purpose**:
    - Implements infinite scrolling by observing the last element in the list.
    - Sets up an `IntersectionObserver` to detect when the user scrolls to the bottom of the list.
    - Increments the `preBuiltPage` state to fetch more assessments.
    - Cleans up the observer when the component unmounts.

3. `Render Logic`
- **Purpose**: 
    - Renders the list of pre-built assessments or a loading/empty state.
- **Return Value**: JSX representing the component's UI.
- **Error Handling**: Displays a loading spinner or a message if no assessments are available.

---

## Test Builder

The `TestBuilder.js` file is responsible for building and managing tests or assessments in the application. It allows users to create, update, delete, and manage questions for a test or prebuilt assessment. The component supports various question types and integrates with a backend API to fetch, save, and update questions.

- **Dependencies**:
  - `ReactQuill`: Rich text editor for question content.
  - `ReactSelect`: Dropdown component for selecting answer formats and difficulty levels.
  - `axios`: HTTP client for file uploads.

### State Variables
| Variable Name              | Purpose                                                                 |
|----------------------------|-------------------------------------------------------------------------|
| `questions`                | Stores the list of questions for the test.                              |
| `selectedQuestion`         | Holds the currently selected question for editing.                      |
| `selectedQuestionIndex`    | Tracks the index of the selected question in the `questions` array.     |
| `htmlContent`              | Stores the HTML content of the question (used for rich text editing).   |
| `text`                     | Stores the plain text content of the question.                          |
| `timeLimit`                | Stores the time limit for the selected question.                        |
| `difficulties`             | Stores the list of available difficulty levels.                         |
| `choices`                  | Stores the answer choices for the selected question.                    |
| `selectedAnswerFormat`     | Holds the selected answer format (e.g., single choice, multiple choice).|
| `selectedDifficulty`       | Holds the selected difficulty level for the question.                   |
| `showUploadModal`          | Controls the visibility of the Excel upload modal.                      |
| `selectedFile`             | Stores the selected Excel file for uploading questions.                 |
| `questionSets`             | Stores the list of available question sets for Excel upload.            |
| `uploading`                | Tracks the upload status of the Excel file.                             |
| `error`                    | Stores error messages for file upload validation.                        |


### Functions and Methods

1. `clearForm()`
- **Purpose**:
    - Resets the form fields to their default values.
    - Updates `htmlContent`, `timeLimit`, `choices`, `selectedAnswerFormat`, and `selectedDifficulty`.

2. `deleteQuestion()`
- **Purpose**:
    - Deletes the selected question from the backend and updates the UI.
    - Sends a DELETE request to the backend.
    - Updates the `questions` state and removes the deleted question.
    - Displays a success or error message.

3. `removeQuestion()`
- **Purpose**:
    - Removes a question from the local state (used for unsaved questions).
    - Updates the `questions` state and resets the selected question.

4. `updateQuestion()`
- **Purpose**:
    - Updates the selected question in the backend and UI.
    - Sends a PATCH request to the backend.
    - Updates the `questions` state with the modified question.
    - Displays a success or error message.

5. `saveQuestion()`
- **Purpose**:
    - Saves a new question to the backend.
    - Sends a POST request to the backend.
    - Updates the `questions` state with the new question.
    - Displays a success or error message.

6. `getQuestions()`
- **Purpose**:
    - Fetches the list of questions for the current test or assessment.
    - Sends a GET request to the backend.
    - Updates the `questions`, `testTitle`, `testDesc`, `testCreationDate`, and `testDifficuty` states.

7. `getDifficulties()`
- **Purpose**:
    - Fetches the list of available difficulty levels from the backend.
    - Updates the `difficulties` state.

8. `validateFormData(data, validateFor)`
- **Purpose**:
    - Validates the form data before saving or updating a question.
- **Parameters**:
  - `data`: Object containing the question data.
  - `validateFor`: String indicating the validation context (`"save"` or `"update"`).
- **Return Value**: Object with `error` or `success` message.

9. `handleChange(content, delta, source, editor)`
- **Purpose**:
    - Handles changes in the rich text editor.
    - Updates `htmlContent` and `text` states.
- **Parameters**:
  - `content`: HTML content of the editor.
  - `delta`: Delta object representing the change.
  - `source`: Source of the change.
  - `editor`: Editor instance.

10. `handleChoiceChange(id, value)`
- **Purpose**: Updates the value of a specific answer choice.
- **Parameters**:
  - `id`: ID of the choice.
  - `value`: New value for the choice.
- **Side Effects**: Updates the `choices` state.

11. `handleCorrectChange(id)`
- **Purpose**:
    - Toggles the correctness of a specific answer choice.
    - Updates the `choices` state.
- **Parameters**:
  - `id`: ID of the choice.

12. `showQuestion(question, index)`
- **Purpose**:
    - Displays the details of a selected question.
    - Updates `selectedQuestion`, `selectedQuestionIndex`, `htmlContent`, `text`, `choices`, and `timeLimit`.
- **Parameters**:
  - `question`: The question object to display.
  - `index`: Index of the question in the `questions` array.

13. `addChoice()`
- **Purpose**:
    - Adds a new answer choice to the current question.
    - Updates the `choices` state.

14. `removeChoice(id)`
- **Purpose**:
    - Removes a specific answer choice.
    - Updates the `choices` state.
- **Parameters**:
  - `id`: ID of the choice to remove.

15. `addQuestion()`
- **Purpose**:
    - Adds a new empty question to the list.
    - Updates the `questions` state and resets the form.

16. `handleModalOpen()`
- **Purpose**:
    - Opens the Excel upload modal.
    - Fetches question sets and updates `showUploadModal`.

17. `handleClose()`
- **Purpose**:
    - Closes the Excel upload modal.
    - Updates `showUploadModal`.

18. `fetchQuestionSet()`
- **Purpose**:
    - Fetches the list of question sets from the backend.
    - Updates `questionSets` and `selectedQuestionSet`.

19. `handleSelectChange(selectedOption)`
- **Purpose**:
    - Updates the selected question set for Excel upload.
    - Updates `selectedQuestionSet`.
- **Parameters**:
  - `selectedOption`: The selected question set.

20. `handleUpload()`
- **Purpose**:
    - Uploads the selected Excel file to the backend.
    - Sends a POST request with the file.
    - Updates the `questions` state and closes the modal.

21. `handleFileChange(event)`
- **Purpose**:
    - Handles file selection for Excel upload.
    - Updates `selectedFile` and validates the file type.
- **Parameters**:
  - `event`: File input change event.

---

## Test Viewer

The `TestViewer.js` file is designed to display and interact with a test or assessment in a user-friendly interface. It fetches test details, including questions, difficulty levels, and metadata , and renders them in a structured layout. The component allows users to navigate through questions, view their details, and interact with answer formats. 

- **Dependencies**:
   - `axios`: Used for making HTTP requests (not directly used in this file but imported).
   - `react-quill`: Renders rich text content for questions.


### State Variables
| Variable Name               | Purpose                                                                 |
|-----------------------------|-------------------------------------------------------------------------|
| `questions`                 | Stores the list of questions fetched from the API.                     |
| `selectedQuestion`          | Tracks the currently selected question.                                |
| `selectedQuestionIndex`     | Tracks the index of the currently selected question.                   |
| `text`                      | Stores the text content of the selected question.                      |
| `htmlContent`               | Stores the HTML content of the selected question.                      |
| `timeLimit`                 | Stores the time limit for the selected question.                       |
| `difficulties`              | Stores the list of difficulty levels fetched from the API.             |
| `testTitle`                 | Stores the title of the test.                                          |
| `testDesc`                  | Stores the description of the test.                                    |
| `testCreationDate`          | Stores the creation date of the test.                                  |
| `testDifficuty`             | Stores the difficulty level of the test.                               |
| `choices`                   | Stores the answer choices for the selected question.                   |
| `selectedAnswerFormat`      | Tracks the selected answer format (e.g., single choice, text).         |
| `selectedDifficulty`        | Tracks the selected difficulty level for the question.                 |
| `error`                     | Stores any error messages encountered during API calls.                |

### Functions and Methods

1. `clearForm()`
- **Purpose**:
    - Resets form-related state variables to their initial values.
    - Updates `htmlContent`, `timeLimit`, `choices`, `selectedAnswerFormat`, and `selectedDifficulty` state variables.

2. `getQuestions()`
- **Purpose**:
    - Fetches the list of questions for the test from the API.
    - Updates `questions`, `testTitle`, `testDesc`, `testCreationDate`, `testDifficuty`, `selectedQuestion`, and `selectedQuestionIndex` state variables.
- **Error Handling**: Logs errors to the console if the API request fails.

3. `getDifficulties()`
- **Purpose**:
    - Fetches the list of difficulty levels from the API.
    - Updates the `difficulties` state variable.
- **Error Handling**: Logs errors to the console if the API request fails.

4. `showQuestion(question, index)`
- **Purpose**:
    - Displays the details of a selected question.
    - Updates `selectedQuestionIndex`, `selectedDifficulty`, `selectedAnswerFormat`, `selectedQuestion`, `htmlContent`, `text`, `choices`, and `timeLimit` state variables.
- **Parameters**:
  - `question` (Object): The question object to display.
  - `index` (Number): The index of the question in the `questions` array.

---
