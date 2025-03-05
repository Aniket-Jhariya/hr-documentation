---
sidebar_position: 8
---

The `ApplicantPersonalityScreening` component is a React-based UI component designed to manage and display the personality screening results of job applicants. It integrates with a backend API to fetch, update, and display data related to automated video interviews and personality assessments. This component is part of a larger HR management system, specifically within the applicant tracking module.

- **File Path**: `\hr-frontend\src\components\applicants\ApplicantPersonalityScreening.js`
- **Dependencies**:
  - Heroicons (`ClockIcon`, `PlusIcon`)
  - React Select (`Select`, `components`)

### State Management
- `Applicant Data`: Such as screening details, answers, and selected status.
- `UI State`: Such as loading states, selected categories, and audio playback status.
- `Graph Data`: For rendering radar charts that visualize the applicant's performance.

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
