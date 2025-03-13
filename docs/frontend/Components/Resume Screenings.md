---
sidebar_position: 14
---
## Resume List

The `ResumeList.js` file is responsible for rendering a table of resume screenings in the HR frontend application. It fetches and displays applicant data, including their names, resume scores, job titles, statuses, and other relevant information. The component integrates with the application's authentication context, utilizes a custom `Table` component for rendering data, and supports filtering, sorting, and navigation to detailed applicant profiles.

- **File Path:** `\hr-frontend\src\components\resume-screening\ResumeList.js`
- **Dependencies**:
   - `getStatusStyle`: Utility function for styling status badges.

### State Variables
| Variable Name               | Purpose                                                                 |
|-----------------------------|-------------------------------------------------------------------------|
| `tableInstance`             | Stores the instance of the table for dynamic updates.                   |
| `showModal`                 | Controls the visibility of a modal (currently unused).                  |
| `applicants`                | Stores the list of applicants fetched from the API.                     |
| `jobs`                      | Stores the list of jobs (currently unused).                             |
| `jobsLoading`               | Indicates if jobs data is being fetched.                                |
| `error`                     | Stores error information if API requests fail.                          |
| `expiredAt`                 | Stores a UTC datetime string for expiration (currently unused).         |
| `questionSets`              | Stores question sets for interviews (currently unused).                 |
| `questionSetLoading`        | Indicates if question sets are being fetched.                          |
| `selectedQuestionSet`       | Stores the currently selected question set.                             |
| `questions`                 | Stores the list of questions for the selected question set.             |
| `selectedQuestionsIds`      | Stores IDs of selected questions (currently unused).                    |
| `selectedQuestions`         | Stores selected questions (currently unused).                           |
| `tableRowCount`             | Stores the count of rows in the table.                                  |
| `columns`                   | Defines the columns and their configurations for the table.             |
| `totalCount`                | Stores the total count of applicants (currently unused).                |
| `fieldMapping`              | Maps table fields to API response fields for filtering and sorting.      |


### Functions and Methods

1. `luxonDateDiffFormatter(cell, formatterParams, onRendered)`
- **Purpose**: 
    - Formats the date value in a cell for display.
- **Parameters**:
  - `cell`: The cell object containing the value to format.
  - `formatterParams`: Additional formatting parameters (unused).
  - `onRendered`: Callback function triggered after rendering.
- **Return Value**: A formatted date string.

2. `statusFormatter(cell)`
- **Purpose**: 
    - Formats the status text in a cell with a styled badge.
- **Parameters**:
  - `cell`: The cell object containing the status value.
- **Return Value**: A string of HTML representing the styled status badge.
- **Error Handling**: Returns a fallback message if no status is available.

3. `fetchQuestions()`
- **Purpose**:
    - Fetches questions for the selected question set from the API.
    - Updates the `questions` state with fetched data.
    - Sets `questionSetLoading` to `false` after completion.
- **Error Handling**: Catches and logs errors if the API request fails.

---
