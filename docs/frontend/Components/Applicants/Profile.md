---
sidebar_position: 9
---
## Profile

The `ApplicantProfile` component is a React-based component designed to display and manage the profile of an applicant within a hiring or recruitment system. It integrates various sub-components to provide a comprehensive view of the applicant's details.

- **File Path**: `\hr-frontend\src\components\applicants\ApplicantProfile.js`
- **Dependencies**:
    - `react-pdf`: For handling PDF documents (e.g., resumes).
    - `react-select`: For dropdown menus (e.g., job selection).
    - `@heroicons/react`: For icons used in the UI.

### State Management
| Variable Name|Purpose|
|---|---|
| `tabs`| Manages the tabs available for navigation.|
| `currentStage`| Tracks the current stage of the hiring process being viewed.|
| `scores`| Stores the applicant's resume scores.|
| `applicant`| Holds the applicant's data.|
| `selectedJob`| Tracks the currently selected job from the list of jobs the applicant has applied to.|
| `stages`| Manages the stages of the hiring process for the selected job.|

### Functions
| Function Name|Purpose|
|---|---|
| `fetchApplicants`| Fetches applicant data from the API.|
| `fetchApplicantStagesByJob`| Fetches the stages of the hiring process for the selected job.|
| `handleTabClick`| Handles navigation between different stages.|
| `handleJobSelect`| Updates the selected job and navigates to the corresponding stage.|
| `getErrorDetails`| Generates error messages and icons based on the error status code.|
| `getScoreSummary`| Generates a summary and class for a given score.|
| `getOverallSummary`| Generates an overall summary for the applicant's resume score.|

### Sub-Components
| Sub-component Name|Purpose|
|---|---|
| `ApplicantOverview`| Displays an overview of the applicant's profile.|
| `ApplicantResumeCopy`| Displays the applicant's resume and related details.|
| `ApplicantPersonalityScreening`| Displays the results of the applicant's personality screening.|
| `ApplicantTracking`| Displays the applicant's assessment results.|
| `ProfileComments`| Displays comments related to the applicant.|


### Error Handling
The component includes robust error handling:
- **Error Messages**: Custom error messages and icons are displayed based on the error status code.
- **Loading State**: A loading state is shown while data is being fetched.

### Styling
The component uses Tailwind CSS for styling, with additional custom styles defined in `ApplicantProfile.css`. The styling is responsive and adapts to different screen sizes.

1. `@keyframes animate`
This keyframe animation defines a scaling effect that can be applied to elements. It transitions an element from its original size (`scale(1)`) to a slightly larger size (`scale(1.09)`).

```css
@keyframes animate {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.09);
    }
}
```
- This animation can be applied to elements to create a subtle zoom-in effect, enhancing interactivity and visual appeal.
- Apply this animation to buttons, images, or other interactive elements in the applicant profile section.

2. `.profile-wave-svg`
This class styles an SVG element that is used as a decorative wave graphic in the applicant profile section. It positions the SVG absolutely and ensures it spans the full width of its container.

```css
.profile-wave-svg {
    position: absolute;
    left: 0;
    width: 100%;
}
```

#### Properties:
- `position: absolute;`: Positions the SVG relative to its nearest positioned ancestor.
- `left: 0;`: Aligns the SVG to the left edge of its container.
- `width: 100%;`: Ensures the SVG spans the full width of its container.

- This class is applied to an SVG element that serves as a decorative wave graphic in the profile section.
- The absolute positioning ensures the SVG overlays other content, creating a visually appealing design.

---

## Profile Comments

The `ProfileComments` component is responsible for fetching, organizing, and displaying comments (feedback) related to a specific job applicant's profile. It interacts with the backend API to retrieve feedback data, enriches it with user avatars, and groups comments by user.

- **File Path**: `\hr-frontend\src\components\applicants\ProfileComments.js`
- **Dependencies**
  - `AvatarContext`: Provides avatars and a function to fetch avatars for users.  

### Contexts
| Context Name|Purpose|
|---|---|
| **`AuthContext`**||
| `authTokens`| Authentication tokens for API requests.  |
| `userDetails`| Details of the logged-in user.  |
| `teamMembersAvatars`| List of team members' avatars.  |
| `setTeamMembersAvatars`| Function to update the list of team members' avatars.  |
| `domain`| Domain information for API requests.  |
| **`AvatarContext`**|  |
| `avatars`| A collection of user avatars.  |
| `fetchAvatar`| Function to fetch an avatar for a specific user.  |

### State Variables
| Variable Name|Purpose|
|---|---|
|`comments`| Stores grouped comments by user ID. Each user's comments are further grouped by the interview step name.  |
|`loadingComments`| Tracks the loading state while fetching comments.  |

### Functions and Methods
1. `getComments()`
- **Purpose**: 
  - Fetches comments from the backend API, enriches them with user avatars, and groups them by user and interview step.
  - Updates the `comments` state with the fetched and grouped comments.  
  - Updates the `teamMembersAvatars` state to remove avatars of users who have already been processed. 
  - Sets the `loadingComments` state to `true` during the fetch operation and `false` after completion.  
- **Error Handling**:  
  - Catches and logs errors to the console.  
  - Resets the `loadingComments` state to `false` in case of an error.  

---

