---
sidebar_position: 10
---

The `ApplicantResume` component is designed to display and manage the resume details of a job applicant. It integrates with the backend to fetch and update applicant data, including scores, screening responses, and criteria responses. The component also allows recruiters to update the applicant's status and provides a detailed view of the applicant's skills, work experience, projects, education, and certifications.

- **File Path**: `\hr-frontend\src\components\applicants\ApplicantResume.js`
- **Dependencies**
  - **Heroicons**: Provides icons for UI elements.
  - **React Select**: Used for the status dropdown.

### Props
| Prop Name        | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| `setStages`      | Updates the stages of the recruitment process.                              |
| `jobId`          | The ID of the job the applicant is applying for.                            |
| `scores`         | An array of scores (e.g., skill, work experience, projects, education).     |
| `applicant`      | Contains applicant details such as experience, skills, and certifications.  |
| `resumeDetail`   | Detailed resume information, including status, skills, and projects.       |
| `setResumeDetail`| Updates the resume details state.                                           |

### State Variables
| Variable Name               | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| `errorMessage`              | Stores error messages for API calls or updates.                             |
| `showModal`                 | Controls the visibility of the status update modal.                         |
| `showScoringInfo`           | Toggles the visibility of the scoring information section.                  |
| `answers`                   | Stores the applicant's answers to screening questions.                      |
| `criteriaResponses`         | Stores the applicant's responses to job criteria.                           |
| `isMasked`                  | Toggles the masking/unmasking of the applicant's expected salary.           |
| `resumeScreeningStatuses`   | Contains the possible status options for the applicant.                     |
| `selectedStatus`            | Stores the currently selected status for the applicant.                     |
| `updatingStatus`            | Indicates whether the status is being updated.                              |
| `answerMode`                | Tracks the mode (text/audio) for displaying answers.                        |
| `audioURL`                  | Stores URLs for audio answers.                                              |

---

### Functions and Methods

1. `fetchCandidateAnswers(applicantId)`
- **Purpose**:
  - Fetches the applicant's answers to screening questions.
  - Updates the `answers` and `answerMode` state.
- **Parameters**:
  - `applicantId` (String): The ID of the applicant.
- **Error Handling**: Logs errors to the console and sets an error message.

2. `updateCandidateStatus(statusText, resumeDetail)`
- **Purpose**: 
  - Updates the applicant's status (e.g., shortlisted, unshortlisted).
  - Updates the `resumeDetail` and `stages` state.
- **Parameters**:
  - `statusText` (String): The new status text.
  - `resumeDetail` (Object): The current resume details.
- **Error Handling**: Logs errors to the console and sets an error message.

3. `fetchCandidateCriteriaResponse()`
- **Purpose**:
  - Fetches the applicant's responses to job criteria.
  - Updates the `criteriaResponses` state.
- **Error Handling**: Logs errors to the console and sets an error message.

---

