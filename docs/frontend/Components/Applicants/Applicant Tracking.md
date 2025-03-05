---
sidebar_position: 2
---

The `ApplicantTracking.js` file is designed to manage and display the progress and results of candidates' assessments within a hiring pipeline. The component provides a detailed view of the candidate's assessment timeline, test results, and allows HR personnel to update the candidate's status 

- **File Path**: `\hr-frontend\src\components\applicants\ApplicantTracking.js`
- **Dependencies**:
  - `react-select`, `react-step-progress-bar`, `@heroicons/react`, `react-toastify`.

### State Variables
The component uses several state variables to manage data and UI states:

| Variable Name               | Purpose                                                                 |
|-----------------------------|-------------------------------------------------------------------------|
| `loadingAnswers`            | Tracks if candidate answers are being fetched.                         |
| `loadingQuestions`          | Tracks if test questions are being fetched.                            |
| `loadingTestStatus`         | Tracks if test status data is being fetched.                           |
| `loadingResults`            | Tracks if test results are being fetched.                              |
| `loadingTestLog`            | Tracks if test logs are being fetched.                                 |
| `error`                     | Stores error messages.                                                 |
| `progress`                  | Stores the progress timeline of the candidate's assessment.            |
| `percent`                   | Stores the progress percentage.                                        |
| `candidateScore`            | Stores the candidate's score.                                          |
| `testLogs`                  | Stores the list of test logs for the candidate.                        |
| `testLogOptions`            | Stores formatted options for the test log dropdown.                    |
| `selectedTestLog`           | Stores the currently selected test log.                                |
| `testData`                  | Stores combined test data (user-owned and pre-built assessments).      |
| `testResults`               | Stores the candidate's test results.                                   |
| `candidateTime`             | Stores the time taken by the candidate to complete the test.           |
| `testStatusData`            | Stores the status data for the candidate's tests.                      |
| `candidateAnswers`          | Stores the candidate's answers to test questions.                      |
| `correctCount`              | Stores the count of correct answers.                                   |
| `statusText`                | Stores the current status text (e.g., "Review Pending").               |
| `totalQuestions`            | Stores the total number of questions in the test.                      |
| `testQuestions`             | Stores the list of test questions.                                     |
| `questionsNextPage`         | Stores the URL for the next page of questions.                         |
| `answersNextPage`           | Stores the URL for the next page of answers.                           |
| `totalQuestionsByTest`      | Stores the total number of questions by test ID.                       |
| `resumeScreeningStatuses`   | Stores the list of possible candidate statuses.                        |
| `selectedStatus`            | Stores the currently selected status.                                  |
| `updatingStatus`            | Tracks if the candidate's status is being updated.                     |
| `open`                      | Tracks if a drawer or modal is open.                                   |
| `menuOpen`                  | Tracks if a menu is open.                                              |
| `currentComment`            | Stores the current comment being typed.                                |
| `comments`                  | Stores the list of comments.                                           |

### Functions and Methods

1. `fetchTestLogs()`
- **Purpose**: 
  - Fetches test logs for the candidate.
  - Makes an API call to fetch test logs.
- **Parameters**: None.
- **Return Value**: Updates `testLogs`, `testLogOptions`, and `selectedTestLog` state variables.
- **Error Handling**: Logs errors and updates the `error` state.

2. `fetchResults(testLogId, testId)`
- **Purpose**: 
  - Fetches test results for the candidate.
  - Makes an API call to fetch test results.
- **Parameters**:
  - `testLogId` (string): ID of the test log.
  - `testId` (string): ID of the test.
- **Return Value**: Updates `testResults` and `candidateScore` state variables.
- **Error Handling**: Logs errors and updates the `error` state.

3. `fetchTestStatus(testLogId)`
- **Purpose**: 
  - Fetches the status of the candidate's test.
  - Makes an API call to fetch test status.
- **Parameters**:
  - `testLogId` (string): ID of the test log.
- **Return Value**: Updates `testStatusData` and `totalQuestions` state variables.
- **Error Handling**: Logs errors and updates the `error` state.

4. `fetchCandidateAnswers(questionIds, testLogId, assessmentType, testId, pageUrl)`
- **Purpose**: 
  - Fetches the candidate's answers to test questions.
  - Makes an API call to fetch candidate answers.
- **Parameters**:
  - `questionIds` (array): IDs of the questions.
  - `testLogId` (string): ID of the test log.
  - `assessmentType` (string): Type of assessment (e.g., "user-owned-assessment").
  - `testId` (string): ID of the test.
  - `pageUrl` (string): URL for pagination.
- **Return Value**: Updates `candidateAnswers` and `correctCount` state variables.
- **Error Handling**: Logs errors and updates the `error` state.

5. `updateProgress(testLogData)`
- **Purpose**: 
  - Updates the progress timeline based on the test log data.

- **Parameters**:
  - `testLogData` (object): Data of the test log.
- **Return Value**: Updates `progress` and `percent` state variables.

6. `updateStatus(status_text)`
- **Purpose**: 
  - Updates the candidate's status (e.g., Shortlisted, Rejected).
  - Makes an API call to update the candidate's status.
- **Parameters**:
  - `status_text` (string): New status text.
- **Return Value**: Updates the candidate's status in the backend and UI.
- **Error Handling**: Logs errors and updates the `error` state.

7. `handleTestClick(testItem)`
- **Purpose**: 
  - Handles the selection of a test.
- **Parameters**:
  - `testItem` (object): Selected test item.
- **Return Value**: Updates `selectedTest` and related state variables.

8. `loadNextPage()`
- **Purpose**: 
  - Loads the next page of candidate answers.
  - Makes an API call to fetch the next page of answers.
- **Return Value**: Updates `candidateAnswers` state variable.

---

