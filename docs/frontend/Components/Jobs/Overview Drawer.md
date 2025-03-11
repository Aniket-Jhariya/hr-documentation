---
sidebar_position: 3
---

## Applicant Details

The `ApplicantDetails.js` file displays detailed information about a job applicant, including personal information, AI-generated summaries, potential red flags, and recruiter recommendations. It also provides functionality to download the applicant's resume. 

- **File Path:** `\hr-frontend\src\components\jobs\overview-drawer\ApplicantDetails.js`
- **Dependencies**
    - `@heroicons/react/24/outline`: Provides icons used in the UI.
    - `react-router-dom`: Used for routing.
    - `react-pdf`: Used for PDF rendering.
    - `react-icons/fa`: Provides the `FaExclamationTriangle` icon.

### Props
|Prop Name| Description|
|---|---|
|`jobId`|The ID of the job associated with the applicant.|
|`applicant`|Contains applicant details, including name, resumes, and personal website.|
|`resumeDetail`|Contains resume-specific details, such as AI-generated summaries and resume file URLs.|

### State Variables
| Variable Name|Purpose|
|---|---|
|`resumeUrl`| Stores the URL of the applicant's resume.|
|`showModal`|Controls the visibility of a modal (currently unused in the code).|
|`pageNumber`|Tracks the current page number of a PDF document (currently unused in the code).|
|`numPages`|Stores the total number of pages in a PDF document.|
|`isLoading`| Indicates whether the component is in a loading state.|

### Functions and Methods

1. `useEffect`
    - **Purpose**: 
    - Simulates an asynchronous data fetch operation.
    - Updates the `isLoading` state to `false` after a simulated delay.
    - **Error Handling**: Logs errors to the console and ensures `isLoading` is set to `false` even if an error occurs.

2. `onDocumentLoadSuccess`
- **Purpose**: 
    - Callback function triggered when a PDF document is successfully loaded.
    - Updates the `numPages` state.
- **Parameters**:
  - `numPages` (Type: `number`) - The total number of pages in the PDF.

3. `openOutlook`
- **Purpose**: 
    - Opens the default email client with a pre-filled email.
    - Redirects the browser to a `mailto:` URL.
- **Parameters**:
  - `toEmail` (Type: `string`) - The recipient's email address.

4. `handleDownload`
- **Purpose**: 
    - Downloads the applicant's resume as a PDF file.
    - Fetches the resume file from the provided URL.
    - Creates a temporary link element to trigger the download.
    - Cleans up the object URL after the download is complete.
- **Parameters**:
  - `e` (Type: `Event`) - The event object from the button click.
  - `applicantName` (Type: `string`) - The name of the applicant.
  - `resumeFile` (Type: `string`) - The URL of the resume file.
- **Error Handling**: Logs errors to the console if the download fails.

5. `PersonalInfoSkeleton`
- **Purpose**: 
    - Displays a loading skeleton UI while data is being fetched.
- **Return Value**: A JSX structure representing the skeleton UI.

6. `InfoRow`
- **Purpose**: 
    - A reusable component to display key-value pairs with an optional icon.
- **Parameters**:
  - `icon` (Type: `React.Component`) - The icon component to display.
  - `label` (Type: `string`) - The label for the value.
  - `value` (Type: `string`) - The value to display.
- **Return Value**: A JSX structure representing the key-value pair.

---

## Applicant Resume Screen

The `ApplicantResumeScreen` component is designed to display and manage the resume details of a job applicant within a job application workflow. It provides functionality to view applicant details, update their status, and display relevant information such as criteria responses, scores, and skills. 

- **File Path:** `\hr-frontend\src\components\jobs\overview-drawer\ApplicantResumeScreen.js`
- **Dependencies**
    - **React Select**: Used for rendering the status dropdown.
    - **Heroicons**: Provides icons for UI elements.
    - **AuthContext**: Provides authentication tokens and user details.

### Props

| Prop Name          | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `setStages`        | Updates the stages of the job application process.                         |
| `stages`           | List of stages in the job application process.                             |
| `jobId`            | ID of the job associated with the applicant.                               |
| `scores`           | Scores of the applicant (e.g., overall score, criteria scores).            |
| `applicant`        | Details of the applicant.                                                  |
| `resumeDetail`     | Resume details of the applicant.                                           |
| `setResumeDetail`  | Updates the resume details of the applicant.                               |
| `tableInstance`    | Instance of the table for refreshing data.                                 |
| `selectedStage`    | The currently selected stage in the job application process.               |

### Functions and Methods

1. `handleStatusChange(selectedOption)`
- **Purpose**: 
    - Handles the change in applicant status. 
    - If the status is "Shortlisted" or "Rejected", it opens a modal for further action. Otherwise, it updates the status directly.
    - Updates `selectedStatus` state and may trigger the `UpdateStatusAndEmailModal`.
- **Parameters**:
  - `selectedOption`: Object - The selected status option (e.g., "Shortlisted", "Rejected").

2. `updateCandidateStatus(statusText, resumeDetail)`
- **Purpose**: 
    - Updates the candidate's status via an API call.
    - Updates the `resumeDetail` and `stages` state, refreshes the table instance.
- **Parameters**:
  - `statusText`: String - The new status to update (e.g., "Shortlisted", "Rejected").
  - `resumeDetail`: Object - The resume details of the applicant.
- **Error Handling**: Displays an error message if the API call fails.

3. `fetchCandidateCriteriaResponse()`
- **Purpose**: 
    - Fetches the candidate's criteria responses from the API.
    - Updates the `criteriaResponses` state.
- **Error Handling**: Displays an error message if the API call fails.

4. `getStarsForRelevance(relevance)`
- **Purpose**: 
    - Renders stars based on the relevance level of a skill.
- **Parameters**:
  - `relevance`: String - The relevance level of a skill (e.g., "high", "medium", "low").
- **Return Value**: Array of JSX elements representing stars.

5. `statusOptionFormatter(props)`
- **Purpose**:
    - Formats the status options in the dropdown with colored badges.
- **Parameters**:
  - `props`: Object - Props passed to the React Select option component.
- **Return Value**: JSX element representing a formatted status option.

---

## Assessment Details

The `AssessmentDetails.js` file is a React component that manages and displays the assessment details for a job applicant. It integrates with an API to fetch and update test logs, test results, and applicant statuses. The component provides a user interface for viewing assigned tests, updating applicant statuses, and tracking the progress of assessments.

- **File Path:** `\hr-frontend\src\components\jobs\overview-drawer\AssessmentDetails.js`
- **Dependencies**
    - **React Step Progress Bar**: Displays progress bar with steps.
    - **Heroicons**: Provides icons for the UI.
    - **SendEmail Component**: Used to send emails when updating applicant status.

### State Variables
| Variable Name                |Purpose                                                                 |
|------------------------------|------------------------------------------------------------------------|
| `testLogOptions`             | Stores dropdown options for test logs.                                 |
| `selectedTestLog`            | Holds the currently selected test log.                                 |
| `loadingTestLog`             | Indicates if test log data is being fetched.                           |
| `percent`                    | Tracks the progress percentage of the assessment.                      |
| `progress`                   | Stores progress stages (e.g., "Invited On", "Started Test").           |
| `totalQuestions`             | Total number of questions in the assessment.                           |
| `updatingStatus`             | Indicates if the applicant's status is being updated.                  |
| `selectedStatus`             | Holds the currently selected applicant status.                         |
| `prevSelectedStatus`         | Stores the previous applicant status for comparison.                   |
| `loadingTestStatus`          | Indicates if test status data is being fetched.                        |
| `totalQuestionsByTest`       | Maps test IDs to their total question counts.                          |
| `error`                      | Stores error messages.                                                 |
| `statusText`                 | Displays the current status text (e.g., "Review Pending").             |
| `testResults`                | Stores test results for the selected test log.                         |
| `testData`                   | Stores combined test and prebuilt assessment data.                     |
| `selectedTest`               | Holds the currently selected test.                                     |
| `loadingResults`             | Indicates if test results are being fetched.                           |
| `showModal`                  | Controls the visibility of the email modal.                            |
| `testLogs`                   | Stores all test logs fetched from the API.                             |
| `hasFetchedResults`          | Indicates if test results have been fetched.                           |
| `resumeScreeningStatuses`    | Lists possible applicant statuses (e.g., "Shortlisted", "Rejected").   |
| `isLoading`                  | Indicates if the component is in a loading state.                      |


### Functions and Methods

1. `fetchTestLogs()`
- **Purpose**: 
    - Fetches test logs for the applicant and job.
    - Updates `testLogOptions`, `selectedTestLog`, and `loadingTestLog`.
- **Error Handling**: Logs errors and updates the `error` state.

2. `fetchTestStatus(testLogId)`
- **Purpose**: 
    - Fetches the status of a specific test log.
    - Updates `totalQuestionsByTest`, `totalQuestions`, and `loadingTestStatus`.
- **Parameters**:
  - `testLogId` (String): ID of the test log.
- **Error Handling**: Logs errors and updates the `error` state.

3. `updateProgress(testLogData)`
- **Purpose**: 
    - Updates the progress bar based on the test log data.
    - Updates `progress` and `percent`.
- **Parameters**:
  - `testLogData` (Object): Data of the selected test log.

4. `updateStatus(status_text)`
- **Purpose**: 
    - Updates the applicant's status.
    - Updates `selectedStatus`, `prevSelectedStatus`, and `testLogOptions`.
- **Parameters**:
  - `status_text` (String): New status (e.g., "Shortlisted", "Rejected").
- **Error Handling**: Logs errors and updates the `error` state.

5. `fetchResults(testLogId, testId)`
- **Purpose**: 
    - Fetches test results for the selected test log and test.
    - Updates `testResults` and `loadingResults`.
- **Parameters**:
  - `testLogId` (String): ID of the test log.
  - `testId` (Array): IDs of the tests.
- **Error Handling**: Logs errors and updates the `error` state.

6. `handleSelectChange(selectedOption)`
- **Purpose**: 
    - Handles changes in the selected test log dropdown.
    - Updates `selectedTestLog` and `hasFetchedResults`.
- **Parameters**:
  - `selectedOption` (Object): Selected test log option.

7. `handleStatusChange(selectedOption)`
- **Purpose**: 
    - Handles changes in the applicant status dropdown.
    - Updates `selectedStatus` and shows the email modal if applicable.
- **Parameters**:
  - `selectedOption` (Object): Selected status option.

8. `dateFormatter(date)`
- **Purpose**: 
    - Formats a date string.
- **Parameters**:
  - `date` (String): Date to format.
- **Return Value**: Formatted date string.

---