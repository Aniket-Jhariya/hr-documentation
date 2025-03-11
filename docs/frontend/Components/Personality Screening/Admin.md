---
sidebar_position: 2
---

## List

The `List.js` file is responsible for managing and displaying a list of assigned automated video interviews within the HR frontend application. It allows administrators to assign video interviews to candidates, manage questionnaires, and configure interview settings.

- **Dependencies**:
  - `react-toastify`: Displays toast notifications.
  - `react-select-async-paginate`: Handles paginated dropdowns.
  - `Table`: A reusable table component for displaying data.

### State Variables
| Variable Name               | Purpose                                                                 |
|-----------------------------|-------------------------------------------------------------------------|
| `tableInstance`             | Stores the instance of the table for filtering and refreshing.          |
| `applicants`                | Stores the list of applicants fetched from the API.                     |
| `showModal`                 | Controls the visibility of the modal for assigning interviews.          |
| `sharingLinks`              | Indicates whether the screening links are being shared.                 |
| `selectedApplicant`         | Stores the selected applicant(s) for assigning interviews.              |
| `selectedJob`               | Stores the selected job for assigning interviews.                       |
| `questionSets`              | Stores the list of available question sets.                             |
| `selectedQuestionSet`       | Stores the selected question set for the interview.                     |
| `questions`                 | Stores the list of questions for the selected question set.             |
| `selectedQuestions`         | Stores the selected questions for the interview.                        |
| `expiredAt`                 | Stores the expiration date and time for the interview link.             |
| `isAllSelected`             | Indicates whether all candidates are selected for the interview.        |

### Context
- `AuthContext`: Provides authentication tokens and user details for API requests.


### Functions and Methods

1. `loadOptions(inputValue, loadedOptions, { page = 1 })`
- **Purpose**: 
  - Fetches and filters candidates based on the input value and selected job.
- **Parameters**:
  - `inputValue`: The search input value for filtering candidates.
  - `loadedOptions`: The previously loaded options.
  - `page`: The page number for pagination (default: 1).
- **Return Value**: A promise resolving to the list of filtered candidates.

2. `handleViewScreening(applicantId, jobId)`
- **Purpose**:
  - Redirects to the applicant's screening details page.
  - Navigates to the applicant's profile page for the selected job and service.
- **Parameters**:
  - `applicantId`: The ID of the applicant.
  - `jobId`: The ID of the job.

3. `handleDeleteScreening(screeningId)`
- **Purpose**: 
  - Deletes the screening from the backend and updates the UI.
- **Parameters**:
  - `screeningId`: The ID of the screening to delete.
- **Error Handling**: Logs errors to the console and updates the error state.

4. `fetchQuestionSet()`
- **Purpose**: 
  - Fetches the list of question sets from the backend and updates the state.
- **Error Handling**: Logs errors to the console and updates the loading state.

5. `fetchQuestions()`
- **Purpose**: 
  - Fetches the list of questions for the selected question set and updates the state.
- **Error Handling**: Logs errors to the console.

6. `sendScreeningLink()`
- **Purpose**:
  - Sends the screening link to the selected candidates and updates the UI.
- **Error Handling**: Logs errors to the console and updates the error state.

7. `handleSelectAll()`
- **Purpose**:
  - Enables bulk selection of candidates for assigning interviews.
  - Toggles the selection of all candidates for the selected job.


8. `debounce(func, delay)`
- **Purpose**:
  - Prevents excessive API calls during input changes.
- **Parameters**:
  - `func`: The function to debounce.
  - `delay`: The delay in milliseconds.
- **Return Value**: A debounced version of the function.

---

