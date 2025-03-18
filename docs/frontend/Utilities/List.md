---
sidebar_position: 11
---

## Applicant List

The `ApplicantList.js` file serves as a central hub for managing and displaying applicant data within a recruitment system. It integrates with various APIs to fetch, update, and display applicant information, including resumes, assessments, and video interviews. The component is designed to handle multiple stages of the recruitment process, such as resume screening, assessments, and automated video interviews. It also provides functionality for updating applicant statuses, assigning tests, and sending notifications to candidates.

- **File Path:** `\hr-frontend\src\utils\list\ApplicantList.js`
- **Dependencies**
    - `react-toastify`: For displaying toast notifications.
    - `AuthContext`: For authentication context.


### Props
|Prop Name| Description|
|---|---|
|`jobDetails`| Object containing details about the job.|
|`updateStatus`| Function to update the status of an applicant.|
|`updateJobUniversalStatus`| Function to update the universal status of a job.|
|`url`| URL for fetching applicant data.|
|`jobId`| ID of the job.|
|`checked`| Boolean to indicate if a filter is applied.|
|`applicants`| Array of applicant data.|
|`tableInstance`| Instance of the table component.|
|`setTableInstance`| Function to set the table instance.|
|`setTableRowCount`| Function to set the row count of the table.|
|`selectedStage`| Object representing the currently selected recruitment stage.|
|`setShowAIRecom`| Function to toggle AI recommendations.|
|`fetchCandidatesByStages`| Function to fetch candidates by stages.|

### State Variables

| Variable Name|Purpose|
|---|---|
|`observerRef`| Ref for IntersectionObserver.|
|`currentSelectedRow`| Currently selected row in the table.|
|`currentSelectedRowData`| Data of the currently selected row.|
|`loading`| Boolean to indicate loading state.|
|`page`| Current page for pagination.|
|`currentStep`| Current step in the multi-step process.|
|`preBuiltPage`| Current page for pre-built assessments.|
|`updatingStatus`| Boolean to indicate if status is being updated.|
|`cellContextMenu`| Array of context menu items for table cells.|
|`persistenceId`| ID for table persistence.|
|`initialSorting`| Initial sorting configuration for the table.|
|`selectedAssessments`| Array of selected assessments.|
|`selectedAssessmentType`| Type of selected assessment (prebuilt or user-owned).|
|`showModal`| Boolean to control the visibility of the modal.|
|`selectedTemplate`| Selected email template.|
|`subject`| Subject of the email.|
|`body`| Body of the email.|
|`params`| Parameters for the selected applicant.|
|`status`| Current status of the applicant.|
|`errorMessage`| Error message for the modal.|
|`notifyCandidate`| Boolean to indicate if the candidate should be notified.|
|`showAssignTestModal`| Boolean to control the visibility of the assign test modal.|
|`validTo`| Date until which the test link is valid.|
|`TestSelected`| Array of selected user-owned tests.|
|`prebuiltAssessmentSelected`| Array of selected pre-built assessments.|
|`open`| Boolean to control the visibility of the drawer.|
|`activeTab`| Currently active tab in the drawer.|
|`previousCandidateId`| ID of the previously selected candidate.|
|`candidateData`| Data of the selected candidate.|
|`resumeDetail`| Details of the candidate's resume.|
|`stages`| Array of recruitment stages.|
|`error`| Error object.|
|`scores`| Array of scores for the candidate.|
|`idprofile`| ID of the candidate's profile.|


### Functions and Methods

1. `useEffect` 
- **Fetching Assessments**: 
    - Fetches assessments based on the current step and page.
- **Infinite Scrolling**:
    - Sets up IntersectionObserver for infinite scrolling of assessments.
- **Sorting**:
    - Updates table sorting based on the selected stage and filter.
- **Column Configuration**:
    - Sets up table columns based on the selected stage.

2. `handleTemplateChange`
- **Purpose**:
    - Handles the change of email template.
    - Updates the subject and body of the email based on the selected template.
- **Parameters**: `event` (change event).

3. `handleClose`
- **Purpose**:
    - Resets the state and closes the modal or assign test modal.
    - Clears selected assessments, resets pagination, and closes modals.

4. `debounce`
- **Purpose**:
    - Debounces a function to limit its execution rate.
- **Parameters**: 
    - `func` (function to debounce), `delay` (debounce delay).
- **Return Value**:
    - Debounced function.

5. `handleSearch`
- **Purpose**:
    - Handles the search for assessments.
- **Side Effects**:
    - Calls the debounced fetch function for assessments.
- **Parameters**:
    - `title` (search term), `assessmentType` (type of assessment).

6. `sendEmail`
- **Purpose**:
    - Sends an email to the candidate with the selected template.
    - Updates the applicant status and closes the modal.

7. `openOutlook`
- **Purpose**: 
    - Opens the default email client with a pre-filled email.
    - Opens the email client.
- **Parameters**:
    - `toEmail` (recipient email).

8. `headerPopupFormatter`
- **Purpose**:
    - Formats the header popup for table columns.
- **Return Value**:
    - HTML element for the header popup.
- **Parameters**:
    - `e` (event), `column` (table column), `onRendered` (callback).

9. `createdAtFormatter`, `updatedAtFormatter`, `updatedByFormatter`
- **Purpose**:
    - Formats date and updated by information for table cells.
- **Return Value**:
    - Formatted date or user information.
- **Parameters**:
    - `cell` (table cell), `formatterParams` (formatting parameters), `onRendered` (callback).

10. `linkFormatter`, `emailFormatter`, `emptyHeaderFilter`, `cityFormatter`, `stateFormatter`, `expFormatter`, `scoreFormatter`, `customMenuFormatter`, `statusFormatter`
- **Purpose**:
    - Formats various types of data for table cells.
- **Parameters**:
    - `cell` (table cell), `formatterParams` (formatting parameters), `onRendered` (callback).
- **Return Value**:
    - Formatted HTML elements.

11. `shortlistAndAssignTest`
- **Purpose**:
    - Shortlists the candidate and assigns the selected tests.
    - Updates the applicant status and closes the assign test modal.

12. `handleCheckboxChange`
- **Purpose**:
    - Handles the selection of assessments.
    - Updates the selected assessments state.
- **Parameters**:
    - `event` (change event), `item` (assessment item), `type` (assessment type).

13. `handleRandomizeSwitch`
- **Purpose**:
    - Handles the randomization of questions for selected assessments.
    - Updates the selected assessments state.
- **Parameters**:
    - `e` (change event), `testId` (ID of the test), `type` (assessment type), `total_questions` (total number of questions).

14. `questionsCount`
- **Purpose**:
    - Handles the number of questions for selected assessments.
    - Updates the selected assessments state.
- **Parameters**:
    - `e` (change event), `testId` (ID of the test), `testType` (assessment type), `total_questions` (total number of questions).


15. `toggleDrawer`
- **Purpose**:
    - Toggles the visibility of the drawer and fetches candidate data.
    - Updates the candidate data and stages.
- **Parameters**:
    - `candidateId` (ID of the candidate).

16. `fetchCandidateData`
- **Purpose**:
    - Fetches candidate data from the API.
    - Updates the candidate data and scores.
- **Parameters**:
    - `id` (ID of the candidate).

17. `fetchApplicantStagesByJob`
- **Purpose**:
    - Fetches the stages of the applicant for the current job.
    - Updates the stages state.
- **Parameters**:
    - `applicantId` (ID of the applicant).

18. `getScoreSummary`, `getOverallSummary`
- **Purpose**:
    - Generates a summary for the score.
- **Parameters**:
    - `score` (score value), `max` (maximum score).
- **Return Value**:
    - Summary object with text and class.

19. `handleTabChange`
- **Purpose**:
    - Handles the change of tabs in the drawer.
    - Updates the active tab and fetches relevant data.
- **Parameters**:
    - `tab` (selected tab).

20. `updateTestLogStatus`, `updateVideoInterviewStatus`
- **Purpose**:
    - Updates the status of the test log or video interview.
    - Updates the table row and fetches candidates by stages.
- **Parameters**:
    - `status_text` (status text), `testLogId` (ID of the test log), `row` (table row).

---

## Duration Range Filter

The `DurationRangeFilter.js` file filters data based on a range of durations in conjunction with a data grid or table component, to allow users to filter rows by specifying minimum and maximum duration values. The filter dynamically updates the UI and triggers callbacks when the filter criteria change.

- **File Path:** `\hr-frontend\src\utils\list\DurationRangeFilter.js`

### Props
|Prop Name| Description|
|---|---|
|**`filterModel`**|Stores the current filter state, including the minimum and maximum duration values.|
|`min`| The minimum duration value.|
|`max`| The maximum duration value.|


### Functions and Methods

1. `init(params)`
- **Purpose**:
    - Initializes the filter by setting up the UI and storing the provided parameters.
    - Creates and appends input elements for minimum and maximum duration values to the `eGui` container.
    - Sets up event listeners to update the `filterModel` and trigger the `filterChangedCallback` on input changes.
- **Parameters**:
  - `params`: Configuration object passed by the parent component (e.g., a data grid). It includes:
    - `eGui`: The container element where the filter UI will be rendered.
    - `filterChangedCallback`: A callback function to notify the parent component when the filter changes.


2. `createFilterUI()`
- **Purpose**:
    - Creates the filter UI elements (input fields for min and max duration) and attaches event listeners.
    - Dynamically creates two `<input>` elements for min and max duration.
    - Attaches `input` event listeners to update the `filterModel` and trigger the `filterChangedCallback`.
    - Appends the input elements to the `eGui` container.

3. `doesFilterPass(params)`
- **Purpose**:
    - Determines whether a given row passes the current filter criteria.
- **Parameters**:
  - `params` (`object`): Contains the data for the row being filtered.
    - `data` (`object`): The row data, including a `total_duration` field.
- **Return Value**:
  - `true` if the row's `total_duration` falls within the specified range (or if no range is specified).
  - `false` otherwise.

4. `isFilterActive()`
- **Purpose**:
    - Checks if the filter is currently active (i.e., if either `min` or `max` is set).
- **Return Value**:
  - `true` if `min` or `max` is not `null`.
  - `false` otherwise.

5. `getModel()`
- **Purpose**:
    - Retrieves the current filter model.
- **Return Value**:
  - The `filterModel` object containing `min` and `max` values.

6. `setModel(model)`
- **Purpose**:
    - Updates the filter model and synchronizes the UI with the new values.
    - Updates the `filterModel` with the provided values.
    - Updates the input fields to reflect the new `min` and `max` values.
- **Parameters**:
  - `model` (`object`): The new filter model containing `min` and `max` values.

### Error Handling
- The filter assumes that:
  - The parent component provides valid parameters (`eGui` and `filterChangedCallback`).
  - The row data contains a `total_duration` field.
- Input validation (e.g., ensuring numeric values) is handled by the browser's built-in validation for `<input type="number">`.

---

## Grid View

The `GridView.js` file is responsible for rendering a grid layout of `AssessmentCard` components. It takes a list of items and an `editable` flag as props, and dynamically generates a grid of cards based on the provided data. 

- **File Path:** `\hr-frontend\src\utils\list\GridView.js`

### Props
The `GridView` component accepts the following props:
|Prop Name| Description|
|---|---|
|`items`|An array of objects representing the items to be displayed in the grid.|
|`editable`|A flag that determines whether the `AssessmentCard` components should be rendered in an editable state.|

### Functions and Methods

1. `GridView`
- **Purpose**
    - The component returns a `div` element containing a grid layout of `AssessmentCard` components. If the `items` array is empty or undefined, no cards are rendered.

---

## Item List

The `ItemList.js` file renders a list item for a job posting within a job management application. It provides a structured view of job details and includes interactive actions such as viewing, editing, deleting, publishing/unpublishing, and copying the job URL.

- **File Path:** `\hr-frontend\src\utils\list\ItemList.js`
- **Dependencies**
    - `@headlessui/react`: Used for creating an accessible dropdown menu with transitions.
    - `@heroicons/react/20/solid`: Provides icons for the dropdown menu actions.

### Props

| Prop Name         | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| `job`             |Contains job details such as `id`, `title`, `min_experience`, `max_experience`, `employment_type`, `location`, `close_date`, `priority`, and `published`.|
| `handleViewJob`   | Callback function triggered when the "View" action is selected.             |
| `handleDeleteJob` | Callback function triggered when the "Delete" action is selected.           |
| `handlePublish`   | Callback function triggered when the "Publish" or "Unpublish" action is selected. |
| `handleCopyUrl`   | Callback function triggered when the "Copy URL" action is selected.         |
| `handleEditJob`   | Callback function triggered when the "Edit" action is selected.             |

### Functions and Methods

1. `classNames(...classes)`
- **Purpose**:
    - Utility function to conditionally join CSS class names.
- **Parameters**:
  - `...classes` (Rest Parameter): An array of class names or falsy values.
- **Return Value**: A single string of concatenated class names, excluding falsy values.

2. *Rendering*
    - **Title**: Displays the job title as a clickable link (`<Link>` from `react-router-dom`) that navigates to the job details page.
    - **Experience Range**: Displays the minimum and maximum experience required for the job.
    - **Employment Type**: Displays the type of employment (e.g., full-time, part-time).
    - **Location**: Displays the job location.
    - **Close Date**: Displays the job's closing date in a human-readable format.
    - **Published Status**: Displays a badge indicating whether the job is published or not.

### Styling


| CSS Statement | Purpose |
|--------------|---------|
|**`.item-list-container .list-group`**| Styles the container for a list of items.|
|`height`| Sets the height of the list container to `calc(100vh - 120px)`, ensuring it occupies the available vertical space minus 120 pixels.|
| `overflow`| Enables scrolling within the container when the content exceeds the height.|
|||
|**`.member-list-container .list-group`**|Styles the container for a member list.|
|`max-height`| Limits the height of the member list container to `320px`.|
|`overflow`| Enables automatic scrolling within the container.|
|||
|**`.custom-list-item`**|Styles individual items in a list.|
|`height`| Sets the height of each list item to `50px`.|
|`border-radius`| Rounds the corners of the list item with a radius of `10px`.|
|`margin-bottom`| Adds spacing between list items.|
|`box-shadow`| Applies a subtle shadow effect to the list item.|
|||
|**`.custom-applicant-list-item`**|Styles individual items in an applicant list.|
|`height` Sets the height of each applicant list item to `46px`.|
|`border-radius`| Rounds the corners of the applicant list item with a radius of `6px`.|
|`margin-bottom`| Adds spacing between applicant list items.|
|`box-shadow`| Applies a subtle shadow effect to the applicant list item.|
|||
|**`.column-row`**|Styles rows within a column-based layout.|
|`margin-bottom`| Adds spacing between rows.|
|`border-color`| Sets the border color to a light gray (`rgb(182, 182, 182)`).|
|||
|**`.applicant-column-row`**|Styles rows within an applicant-specific column-based layout.|
|`height`| Sets the height of each row to `45px`.|
|`margin-bottom`| Adds spacing between rows.|
|`border-color`| Sets the border color to a light gray (`rgb(182, 182, 182)`).|
|||
|**`.tabulator-header-filter input`**|Styles input fields within a table header filter.|
|`border`| Adds a light gray border to the input field.|
|`border-radius`| Rounds the corners of the input field with a radius of `5px`.|

---