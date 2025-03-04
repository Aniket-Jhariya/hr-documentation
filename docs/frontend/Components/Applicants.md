---
sidebar_position: 2
---
## Applicants

The `Applicants` component is a React-based component designed to display and manage a list of job applicants within the CandidHR application. It provides a tabular view of applicants, allowing users to filter, sort, and interact with applicant data. 

- **File Path:** `Diacto\CandidHR\hr-frontend\src\components\applicants\Applicants.js`

- **Table Component:** A custom table component for rendering applicant data.
- **DefaultUserImage:** A default avatar image used when an applicant's profile picture is not available.
- **API Constants:** `api` is used to define the base URL for API requests.

### State Management

```javascript
const { userDetails, authTokens, logoutUser, domain } = useContext(AuthContext);

const [error, setError] = useState({});
const [successMessage, setSuccessMessage] = useState("");
const navigate = useNavigate();
const [applicants, setApplicants] = useState(null);
const [filteredApplicants, setFilteredApplicants] = useState(null);

const [applicantsLoading, setApplicantsLoading] = useState(false);

const [searchTerm, setSearchTerm] = useState("");
const [sortingOption, setSortingOption] = useState("title");
const [filterSearchTerm, setFilterSearchTerm] = useState({});

const [tableInstance, setTableInstance] = useState(null);
const [totalCount, setTotalCount] = useState(null);
const [tableRowCount, setTableRowCount] = useState("fetching");
const [url, setUrl] = useState(`${api}/filter/candidate?o=-latest_resume_created_at`);
```

- **Authentication Context:** `userDetails`, `authTokens`, `logoutUser`, and `domain` are extracted from the `AuthContext`.
- **Error and Success Messages:** `error` and `successMessage` are used to handle and display error and success messages.
- **Navigation:** `navigate` is used for programmatic navigation.
- **Applicant Data:** `applicants` and `filteredApplicants` store the list of applicants and the filtered list, respectively.
- **Loading State:** `applicantsLoading` indicates whether the applicant data is being fetched.
- **Search and Filter:** `searchTerm`, `sortingOption`, and `filterSearchTerm` manage the search and filter criteria.
- **Table Instance:** `tableInstance` stores the instance of the table for further manipulation.
- **Row Count:** `tableRowCount` and `totalCount` manage the count of rows in the table.
- **API URL:** `url` stores the API endpoint for fetching applicant data.

### Field Mapping

```javascript
const fieldMapping = {
  name: "name",
  overall_score: "resumes__resume_score__overall_score",
  total_duration: "resumes__total_duration",
  city: "candidate_city",
  state: "candidate_state",
  created_at: "latest_resume_created_at",
  experience: "resumes__relevant_experience_in_months",
  job_name: "applied_jobs__title"
};
```

- **Field Mapping:** Maps the frontend table fields to the corresponding backend fields.

### Table Columns

```javascript
const columns = [
  {
    title: "Name",
    field: "name",
    hozAlign: "left",
    vertAlign: "middle",
    minWidth: 120,
    titleFormatter: function (cell, formatterParams, onRendered) {
      return (
        '<div class="column-container">' +
        `<label class="column-title">${cell.getValue()}</label>` +
        "</div>"
      );
    },
    formatter: linkFormatter,
    cellClick: function (e, cell) {
      const id = cell.getData().id;
      const latestJobId = cell.getData().applied_jobs[0]?.id || null;
      if (latestJobId) {
        navigate(`/app/user/applicants/applicant/${id}/profile/${latestJobId}/overview/`);
      }
    },
    headerFilter: true,
    headerFilterFunc: "like",
    headerFilterParams: {
      elementAttributes: {
        class: "w-full rounded-lg border border-gray-300 p-2 my-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
        placeholder: "",
      },
    },
  },
];
```

- **Columns Configuration:** Defines the columns for the table, including their titles, alignment, formatters, and filter options.

### Formatter Functions

```javascript
function emailFormatter(cell, formatterParams, onRendered) {
  return `<div class="flex gap-x-2">
            //More Formatting Logic...
            <span class="me-2">${cell.getValue()}</span>
          </div>`;
}

function contactFormatter(cell, formatterParams, onRendered) {
  const str = cell?.getValue()?.toString();
  const match = str?.match(/["'\(]?(\d{10,})["'\)]?/);
  const value = match ? match[1] : null;
  return value
    ? `<div class="flex gap-x-2">
        //More Formatting Logic...
        <span class="me-2">${value}</span>
      </div>`
    : null;
}

function openOutlook(toEmail) {
  const subject = "CandidHR : Your Subject";
  const mailtoUrl = `mailto:${encodeURIComponent(toEmail)}?subject=${encodeURIComponent(subject)}`;
  window.location.href = mailtoUrl;
}
```

- **Formatter Functions:** Custom functions to format the display of email, contact, and other fields in the table.

### Search and Filter Functions

```javascript
const handleSearch = (fieldName, searchValue) => {
  setSearchTerm(searchValue);
  const newSearch = { ...filterSearchTerm };
  newSearch[fieldName] = searchValue;
  setFilterSearchTerm(newSearch);
  const filtered = applicants.filter((applicant) =>
    applicant[fieldName].toLowerCase().includes(searchValue.toLowerCase())
  );
  setFilteredApplicants(filtered);
};

function skillsFilterFunction(value, data, filterParams) {
  if (data && value) {
    return data.some((skill) =>
      skill.toLowerCase().includes(value.toLowerCase())
    );
  }
}

function dateFilter(value, data, filterParams) {
  return new Date(data).toDateString() == new Date(value).toDateString();
}
```

- **Search and Filter Functions:** Functions to handle search and filter operations on the applicant data.

### Rendering
The component renders a header section with applicant count and status indicators, followed by the `Table` component that displays the applicant data.


---

## Analytics 

The `ApplicantAnalytics` component is a React functional component designed to display key performance indicators (KPIs) and analytics related to job applicants in a human resources (HR) management system. It fetches data from multiple API endpoints and presents the information in a visually organized manner using reusable card components.


- **File Path**: `Diacto\CandidHR\hr-frontend\src\components\applicants\ApplicantAnalytics.js`

- **Dependencies**:
  - React (`useState`, `useEffect`, `useContext`)
  - `axios` for API requests
  - `AuthContext` for authentication
  - Reusable card components (`KpiCard`, `TopLocationCard`, `TopSkillsCard`, `RecentApplicantCard`)

### Key Features

1. **Data Fetching**: Fetches applicant analytics data from multiple API endpoints using `axios`.
2. **State Management**: Uses React's `useState` to manage the fetched data.
3. **Authentication**: Utilizes `AuthContext` to include authentication tokens in API requests.
4. **Reusable Components**: Displays data using reusable card components for better modularity and maintainability.


### State Variables
```javascript
const [totalApplicants, setTotalApplicants] = useState(null);
const [topLocation, setTopLocation] = useState({ location: '', count: 0 });
const [mostRecentApplicant, setMostRecentApplicant] = useState(null);
const [topSkill, setTopSkill] = useState(null);
const { authTokens } = useContext(AuthContext);
```
- **`totalApplicants`**: Stores the total number of applicants.
- **`topLocation`**: Stores the top location of applicants and the count of applicants from that location.
- **`mostRecentApplicant`**: Stores the timestamp of the most recent applicant.
- **`topSkill`**: Stores the top skills among applicants.
- **`authTokens`**: Retrieves authentication tokens from `AuthContext`.


### Data Fetching with `useEffect`
```javascript
useEffect(() => {
    const fetchKpiData = async () => {
        const header = {
            'Authorization': `Bearer ${authTokens.access}`,
        };

        try {
            const [applicantsRes, locationRes, recentRes, skillRes] = await Promise.all([
                axios.get('/analytics/total-applicants/', { headers: header }),
                axios.get('/analytics/top-location/', { headers: header }),
                axios.get('/analytics/most-recent-applicant/', { headers: header }),
                axios.get('/analytics/top-skill/', { headers: header }),
            ]);

            setTotalApplicants(applicantsRes.data.total_applicants);
            setTopLocation({ location: locationRes.data.top_location, count: locationRes.data.applicant_count });
            setMostRecentApplicant(recentRes.data.most_recent_applicant);
            setTopSkill(skillRes.data.top_skills);
        } catch (error) {
            console.error("Error fetching KPI data", error);
        }
    };

    fetchKpiData();
}, []);
```
- **`useEffect`**: Fetches data when the component mounts.
- **`Promise.all`**: Concurrently fetches data from multiple endpoints to optimize performance.
- **Error Handling**: Logs errors if any API request fails.

### Rendering
- **Layout**: Uses a flexbox layout with a gap to space out the cards.
- **Card Components**:
  - `KpiCard`: Displays the total number of applicants.
  - `TopLocationCard`: Displays the top location and applicant count.
  - `RecentApplicantCard`: Displays the date and time of the most recent applicant.
  - `TopSkillsCard`: Displays the top skills among applicants.



### Error Handling
- Errors during API requests are logged to the console using `console.error`.
- Fallback values (e.g., `'Loading...'`) are displayed if data is not yet available.

---
## Overview 

The `ApplicantOverview` component is a React component designed to display detailed information about a job applicant. It is part of a larger HR management system and is used to provide a comprehensive overview of an applicant's personal information, resume, and AI-generated summary.

- **File Path**: `Diacto\CandidHR\hr-frontend\src\components\applicants\ApplicantOverview.js`

- **Dependencies**:
  - `@heroicons/react` for icons.
  - `react-pdf` for PDF rendering.
  - Custom contexts (`AuthContext`, `AvatarContext`) for authentication and avatar management.
  - Utility components (`CommentsDrawer`) for handling comments.

### Key Features

- **Personal Information Display**: Shows the applicant's personal details such as email, contact number, address, and social media links.
- **Resume Handling**: Allows viewing and downloading the applicant's resume.
- **AI Summary**: Displays an AI-generated summary of the applicant's resume.
- **Comments Integration**: Integrates with a comments drawer for adding and viewing comments related to the applicant.

### Props
- `jobId`: The ID of the job the applicant has applied for.
- `applicant`: An object containing the applicant's personal information.
- `resumeDetail`: An object containing details about the applicant's resume.

### State Management
- `resumeUrl`: Stores the URL of the resume for viewing.
- `showModal`: Controls the visibility of the resume modal.
- `isMasked`: Toggles the visibility of sensitive information (e.g., salary).
- `comments`: Stores comments related to the applicant.
- `numPages`: Stores the number of pages in the PDF resume.
- `pageNumber`: Tracks the current page number of the PDF resume.
- `loadingComments`: Indicates whether comments are being loaded.
- `menuOpen`: Controls the visibility of a dropdown menu.
- `currentComment`: Stores the current comment being typed.
- `open`: Controls the visibility of the comments drawer.

### Contexts
- `AuthContext`: Provides authentication tokens and user details.
- `AvatarContext`: Manages avatars for team members.

### Functions
- **handleMenuToggle**: Toggles the visibility of a dropdown menu.
- **onDocumentLoadSuccess**: Callback function triggered when the PDF document is successfully loaded.
- **openOutlook**: Opens the default email client with a pre-filled email.
- **handlePdfView**: Fetches and displays the applicant's resume in a modal.
- **handleDownload**: Downloads the applicant's resume.
- **handleClickOutside**: Closes the dropdown menu when clicking outside of it.

### Rendering
The component renders a detailed view of the applicant's information, including:
- **Personal Information**: Email, contact number, address, social media links, etc.
- **Resume**: Options to view or download the resume.
- **AI Summary**: An AI-generated summary of the resume.
- **Comments Drawer**: A drawer for adding and viewing comments.


### Styling
The component uses Tailwind CSS for styling, ensuring a responsive and modern design. The layout is divided into two main sections:
- **Left Panel**: Displays personal information and resume details.
- **Right Panel**: Displays the AI-generated summary.

---

## Personality Screening

The `ApplicantPersonalityScreening` component is a React-based UI component designed to manage and display the personality screening results of job applicants. It integrates with a backend API to fetch, update, and display data related to automated video interviews and personality assessments. This component is part of a larger HR management system, specifically within the applicant tracking module.

- **File Path**: `Diacto\CandidHR\hr-frontend\src\components\applicants\ApplicantPersonalityScreening.js`
- **Dependencies**:
  - React hooks (`useContext`, `useEffect`, `useRef`, `useState`)
  - React Router (`useParams`)
  - Heroicons (`ClockIcon`, `PlusIcon`)
  - React Select (`Select`, `components`)
  - Custom components (`CommentsDrawer`, `Switch`, `BasicRadarChart`)
  - Context (`AuthContext`)
  - API constants (`api`, `selectStyle`, `selectTheme`)

### State Management

- **Applicant Data**: Such as screening details, answers, and selected status.
- **UI State**: Such as loading states, selected categories, and audio playback status.
- **Graph Data**: For rendering radar charts that visualize the applicant's performance.

```javascript
const [selectedStatus, setSelectedStatus] = useState(null);
const [answers, setAnswers] = useState([]);
const [screeningDetails, setScreeningDetails] = useState([]);
const [graphData, setGraphData] = useState([]);
```

### API Integration

- Fetch all personality screenings for a specific applicant and job.
- Fetch detailed answers for a selected screening.
- Update the status of the screening (e.g., Shortlisted, Rejected).

```javascript
async function fetchAllScreenings() {
  // API call to fetch all screenings
}

async function fetchScreeningsAnswers() {
  // API call to fetch answers for a specific screening
}

async function updateStatus(status_text) {
  // API call to update the status of the screening
}
```

### Dynamic UI Rendering

- A dropdown to select different screenings.
- A radar chart to visualize the applicant's performance across various categories.
- Video responses, transcripts, and AI-generated insights for each question.

```javascript
<BasicRadarChart data={graphData} indicator={graphIndicator} legendData={["Video Interview Summary"]} />
```

### Status Management
The component allows HR personnel to update the applicant's status (e.g., Shortlisted, Rejected) and reflects this change in the UI.

```javascript
<Select
  isDisabled={updatingStatus || !selectedPersonalityScreening?.completed}
  value={selectedStatus}
  onChange={(selectedOption) => {
    setSelectedStatus(selectedOption);
    updateStatus(selectedOption?.value);
  }}
  options={statuses}
/>
```

### Comments Integration
The component integrates a `CommentsDrawer` to allow HR personnel to add comments related to the screening.

```javascript
<CommentsDrawer applicantId={applicantId} jobId={jobId} content_type={"Automated Video Interview"} object_id={selectedPersonalityScreening?.id} />
```

### Effect Hooks
The component uses `useEffect` hooks to fetch data when the component mounts or when specific dependencies change.

```javascript
useEffect(() => {
  if (applicantId && jobId) {
    fetchAllScreenings();
  }
}, [applicantId, jobId]);
```


### UI Rendering
The component renders a detailed UI with sections for:
- Selecting a screening.
- Displaying the applicant's status.
- Showing a radar chart for performance analysis.
- Reviewing video responses and transcripts.

---

## Profile

The `ApplicantProfile` component is a React-based component designed to display and manage the profile of an applicant within a hiring or recruitment system. It integrates various sub-components to provide a comprehensive view of the applicant's details.

- **File Path**: `Diacto\CandidHR\hr-frontend\src\components\applicants\ApplicantProfile.js`
- **Dependencies**:
    - **React**: The core library for building the component.
    - **react-router-dom**: For navigation and routing.
    - **react-pdf**: For handling PDF documents (e.g., resumes).
    - **react-select**: For dropdown menus (e.g., job selection).
    - **@heroicons/react**: For icons used in the UI.

### State Management
- **`tabs`**: Manages the tabs available for navigation.
- **`currentStage`**: Tracks the current stage of the hiring process being viewed.
- **`scores`**: Stores the applicant's resume scores.
- **`applicant`**: Holds the applicant's data.
- **`selectedJob`**: Tracks the currently selected job from the list of jobs the applicant has applied to.
- **`stages`**: Manages the stages of the hiring process for the selected job.

### Functions
- **`fetchApplicants`**: Fetches applicant data from the API.
- **`fetchApplicantStagesByJob`**: Fetches the stages of the hiring process for the selected job.
- **`handleTabClick`**: Handles navigation between different stages.
- **`handleJobSelect`**: Updates the selected job and navigates to the corresponding stage.
- **`getErrorDetails`**: Generates error messages and icons based on the error status code.
- **`getScoreSummary`**: Generates a summary and class for a given score.
- **`getOverallSummary`**: Generates an overall summary for the applicant's resume score.

### Sub-Components
- **`ApplicantOverview`**: Displays an overview of the applicant's profile.
- **`ApplicantResumeCopy`**: Displays the applicant's resume and related details.
- **`ApplicantPersonalityScreening`**: Displays the results of the applicant's personality screening.
- **`ApplicantTracking`**: Displays the applicant's assessment results.
- **`ProfileComments`**: Displays comments related to the applicant.


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


