---
sidebar_position: 7
---

The `PersonalInfo.js` file displays detailed personal information about an applicant in a hiring management system. It includes sections for AI-generated summaries, social profiles, contact information, and attachments.

- **File Path**: `\hr-frontend\src\components\applicants\PersonalInfo.js`
- **Dependencies**
  - `react-icons/fa`: Provides FontAwesome icons for social profiles and contact information.
  - `@heroicons/react/24/outline`: Provides outline icons for UI elements.
  - `@heroicons/react/24/solid`: Provides solid icons for UI elements.

### Props
The `PersonalInfo` component accepts the following props:

| Prop Name         | Type       | Description                                                                 |
|-------------------|------------|-----------------------------------------------------------------------------|
| `applicant`       | `object`   | Contains applicant details such as name, email, contact, and social links.  |
| `resumeDetail`    | `object`   | Contains resume-related details, including the resume file.                 |
| `handleDownload`  | `function` | Handles the download of the applicant's resume.                             |
| `setShowModal`    | `function` | Opens a modal to view the applicant's resume.                               |
| `openOutlook`     | `function` | Opens the applicant's email in Outlook.                                     |
| `aiSummary`       | `object`   | Contains AI-generated summary, key insights, certifications, and projects.  |

The `aiSummary` prop is expected to have the following structure:

```js
{
  summary: string, // AI-generated summary of the applicant
  key_insights: string[], // List of key insights
  notable_certifications: string[], // List of certifications
  project_highlights: string[] // List of project highlights
}
```

### Functions and Methods

1. `PersonalInfo`
#### Purpose
- Uses `useState` to manage the `isMasked` state (though it is not utilized in the provided code snippet).
- Interacts with external functions (`handleDownload`, `setShowModal`, `openOutlook`) passed as props.

#### Parameters
- **Props**:
  - `applicant`: Object containing applicant details.
  - `resumeDetail`: Object containing resume details.
  - `handleDownload`: Function to handle resume downloads.
  - `setShowModal`: Function to open a modal for viewing the resume.
  - `openOutlook`: Function to open the applicant's email in Outlook.
  - `aiSummary`: Object containing AI-generated insights.

#### Return Value
- Returns a JSX structure that renders the applicant's personal information, social profiles, contact details, and attachments.

#### Error Handling
- No explicit error handling is present. Missing data is handled gracefully by conditional rendering (e.g., `aiSummary ? ... : ...`).

---
