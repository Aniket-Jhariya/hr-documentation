---
sidebar_position: 1
---

## Candidate Form

- **File Path**: `\hr-frontend\src\components\candidate-form\CandidateForm.js`
- **Dependencies**:
  - External libraries: `ReactQuill` (for rich text rendering)
  - Custom components: `CandidateFormHeading`, `CandidateQuestions`
  - Assets: `CandidHRLogo` (logo image)
  - API constants: `api` (base URL for backend API)

### State Management

- Job details (`jobDetail`)
- Candidate responses (`criteriaResponses`)
- Loading and error states (`loading`, `error`)
- Form steps (`steps`)
- Geolocation data (`location`, `city`, `state`, `country`)

### Geolocation
The component fetches the candidate's geolocation using the browser's `navigator.geolocation` API. It then reverse-geocodes the coordinates to determine the candidate's city, state, and country.

### Multi-Step Form
The form is divided into multiple steps:
1. **Personal Info**
2. **Professional Info**
3. **Questions**
The steps are dynamically shown or hidden based on the job's screening preferences and criteria.

### API Integration
The component interacts with the backend API to:
- Fetch job details (`fetchJob`)
- Fetch screening preferences (`fetchScreeningPreference`)
- Fetch job criteria (`fetchCriteria`)
- Fetch organization logo (`getOrgLogo`)

### Dynamic UI Rendering
The UI dynamically adjusts based on:
- Job details (e.g., must-have skills, job description)
- Candidate responses
- Form submission status


### Functions

1. `fetchJob`
  - Sets `jobDetail` state with fetched data.
  - Checks if the job is published and not closed.
  - Fetches screening preferences and criteria for the job.

2. `fetchScreeningPreference`
  - Sets `preference` state with fetched data.
  - Determines which form steps to display based on preferences.

3. `fetchCriteria`
  - Sets `criteriaList` state with fetched data.
  - Initializes `criteriaResponses` with default values.

4. `getOrgLogo`
  - Converts the logo blob to a URL and sets `orgLogo` state.

5. `reverseGeocode`
  - Sets `city`, `state`, and `country` states with reverse-geocoded data.

### Effects
- **Geolocation Fetching**: Fetches the candidate's location on component mount.
- **Job Details Fetching**: Fetches job details and related data on component mount.
- **Step Management**: Dynamically updates form steps based on job preferences and criteria.

### UI Rendering
- **Loading State**: Displays a loading spinner while fetching data.
- **Job Details**: Renders job details, including must-have skills and job description.
- **Form Steps**: Renders the multi-step form using the `CandidateQuestions` component.
- **Submission Confirmation**: Displays a thank-you message after successful submission.

### Error Handling

- Displaying appropriate error messages (e.g., "Page not found", "This job has been closed").
- Setting `error` state to manage UI feedback.

### Styling


1. `.image`

#### Properties:
- `display: flex;`: Uses flexbox for alignment.
- `margin-left: auto; margin-right: auto;`: Centers the container horizontally.
- `background-color: #7474f3;`: Sets the background color to a shade of blue.
- `flex-shrink: 0;`: Prevents the container from shrinking.
- `justify-content: center; align-items: center;`: Centers the content vertically and horizontally.
- `width: 10rem; height: 10rem;`: Sets the size of the container.
- `border-radius: 9999px;`: Creates a circular shape.
- `animation: animate .6s linear alternate-reverse infinite;`: Applies the `animate` keyframe animation.
- `transition: transform .6s ease;`: Adds a smooth transition effect for transformations.

2. `.image svg`
#### Properties:
- `color: white;`: Sets the SVG icon color to white.
- `width: 7rem; height: 7rem;`: Sets the size of the SVG icon.

3. `@keyframes animate`
This keyframe animation scales the `.image` container up and down, creating a pulsating effect.

#### Keyframes:
- `from { transform: scale(1); }`: Starts at the original size.
- `to { transform: scale(1.09); }`: Scales up to 109% of the original size.

4. `.background-svg`
#### Properties:
- `position: absolute;`: Positions the element absolutely within its container.
- `left: 0;`: Aligns the element to the left.
- `width: 100%;`: Sets the width to 100% of the container.
- `z-index: 1;`: Ensures the element is layered above other content.

5. `.no-select`
#### Properties:
- `user-select: none;`: Standard syntax to disable text selection.
- `-webkit-user-select: none;`: Chrome and Safari support.
- `-moz-user-select: none;`: Firefox support.
- `-ms-user-select: none;`: Internet Explorer/Edge support.

---

## Criteria Form

The `CandidateCriteriaForm` component is a React functional component designed to handle the rendering and management of a form for candidate criteria. It dynamically fetches and displays criteria questions based on a given `jobId`.

- **File Path:** `\hr-frontend\src\components\candidate-form\CandidateCriteriaForm.js`

### Props
- `jobId` (String/Number): The ID of the job for which criteria are being fetched.
- `criteriaResponses` (Object): The current state of responses for the criteria.
- `setCriteriaResponses` (Function): A function to update the state of criteria responses.
- `criteriaErrors` (Object): An object containing validation errors for each criterion.

### State
- `criteriaList` (Array): Stores the list of criteria fetched from the API.
- `loading` (Boolean): Indicates whether the criteria are still being fetched.

### Effects
- **Fetching Criteria:** When the `jobId` changes, the component fetches the criteria for the job from the API and initializes the `criteriaResponses` state.
  ```javascript
  useEffect(() => {
    async function fetchCriteria() {
      try {
        const response = await fetch(`${api}/jobs/criteria/job/${jobId}/`);
        if (!response.ok) {
          throw new Error("Failed to fetch criteria");
        }
        const data = await response.json();
        setCriteriaList(data);

        if (Object.keys(criteriaResponses).length === 0) {
          const initialResponses = {};
          data.forEach((criterion) => {
            initialResponses[criterion.id] =
              criterion.response_type === "checkbox" ? [] : "";
          });
          setCriteriaResponses(initialResponses);
        }
      } catch (error) {
        console.error("Error fetching criteria:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCriteria();
  }, [jobId]);
  ```

#### Event Handlers
- **`handleResponseChange`:** Updates the `criteriaResponses` state when a user changes their response.
  ```javascript
  const handleResponseChange = (criterionId, value) => {
    setCriteriaResponses((prevcriteriaResponses) => ({
      ...prevcriteriaResponses,
      [criterionId]: value,
    }));
  };
  ```

#### Rendering
- The component renders a loading message while fetching criteria.
- Once the criteria are fetched, it maps through the `criteriaList` and renders each criterion using the `renderResponseInput` function.
- Validation errors are displayed if present.

### Helper Function: `renderResponseInput`

#### Parameters
- `criterion` (Object): The criterion object containing `id`, `response_type`, and `options`.
- `responseValue` (String/Array): The current value of the response for the criterion.
- `handleResponseChange` (Function): The function to call when the response changes.

#### Functionality
- **Dropdown:** Renders a dropdown menu.
- **Radio:** Renders radio buttons.
- **Checkbox:** Renders checkboxes.
- **Yes/No:** Renders a dropdown with "Yes" and "No" options
- **Default:** Renders a text input for any other response type.

---

## Questionnaire

The `Questionnaire.js` file is a React component responsible for rendering and managing a questionnaire for candidates during an assessment. It handles various question types, tracks time limits, and submits answers to an API.

- **File Path** - `\hr-frontend\src\components\candidate-form\Questionnaire.js`
- **Dependencies**:
  - `ReactQuill`: Used to render rich text content for questions.
  - `WebcamRec`: Handles video recording for video-based questions.
  - `ProgressBar`: Displays the progress of the questionnaire.
  - `api`: Base URL for API requests.


### Props

| Prop Name            | Type       | Description                                                                 |
|-----------------------|------------|-----------------------------------------------------------------------------|
| `panel`               | `Object`   | Ref to the parent container for styling purposes.                          |
| `questions`           | `Array`    | List of questions to be displayed.                                         |
| `candidateId`         | `String`   | Unique identifier for the candidate.                                       |
| `testId`              | `String`   | Unique identifier for the test.                                            |
| `assessmentType`      | `String`   | Type of assessment (`u` for user-defined, `p` for prebuilt).               |
| `testLogId`           | `String`   | Unique identifier for the test log.                                        |
| `testStartTime`       | `Date`     | Timestamp when the test started.                                           |
| `setIsCompleted`      | `Function` | Callback to mark the test as completed.                                    |
| `jobId`               | `String`   | Unique identifier for the job.                                             |
| `markTestAsComplete`  | `Function` | Callback to mark the test as complete after all questions are answered.    |

### State Variables

| State Variable          | Type       | Description                                                                 |
|-------------------------|------------|-----------------------------------------------------------------------------|
| `questionStartTime`     | `Date`     | Timestamp when the current question was displayed.                         |
| `currentQuestionIndex`  | `Number`   | Index of the currently displayed question.                                 |
| `textAnswer`            | `String`   | Stores the candidate's answer for text-based questions.                    |
| `timeLeft`              | `Number`   | Time remaining for the current question.                                   |
| `isRecording`           | `Boolean`  | Indicates whether audio/video recording is in progress.                    |
| `isSubmitted`           | `Boolean`  | Indicates whether the questionnaire has been submitted.                    |
| `submitting`            | `Boolean`  | Indicates whether the answer submission is in progress.                    |
| `selectedChoice`        | `Array`    | Stores the selected choices for single/multiple-choice questions.          |
| `selectedChoiceIds`     | `Array`    | Stores the IDs of selected choices for single/multiple-choice questions.   |


### Functions

1. `handleTimeout`
- **Purpose**: 
  - Handles the timeout event for the current question.
  - Stops recording if the question type is `video`.
  - Calls `handleSubmit` to submit the answer.
  
2. `handleSubmit`
- **Purpose**: 
  - Submits the candidate's answer to the API.
  - Constructs a payload with the candidate's answer and submits it to the API.
  - Updates the question index or marks the test as complete.
  - Resets the answer state for the next question.  
- **Error Handling**:
  - Logs errors if the API request fails.

3. `resetAnswerState`
- **Purpose**:
  - Resets the state variables related to the candidate's answer.
  - Clears `textAnswer`, `selectedChoice`, and `selectedChoiceIds`.  

4. `handleCorrectChange`
- **Purpose**: 
  - Updates the selected choices for single/multiple-choice questions.
  - Updates `selectedChoice` and `selectedChoiceIds` based on the input type.
- **Parameters**:
  - `choice` (Object): The selected choice.
  - `e` (Event): The event object containing the input type (`radio` or `checkbox`).
  

5. `handleAnswerChange`
- **Purpose**: 
  - Updates the candidate's answer for text-based questions.
  - Updates `textAnswer` with the input value.
- **Parameters**:
  - `e` (Event): The event object containing the input value.  

6. `handleStartRecording`
- **Purpose**:
  - Starts audio/video recording.
  - Sets `isRecording` to `true`.  

7. `handleStopRecording`
- **Purpose**:
  - Stops audio/video recording.
  - Sets `isRecording` to `false`.

### Answer Submission Payload
```js
const payload = {
  question_id: currentQuestion.id,
  candidate_id: candidateId,
  choices: selectedChoiceRef.current || [],
  type: currentQuestion.type,
  text: textAnswer || "",
  audio_file: [], // Assumed to be handled elsewhere
  started_at: questionStartTime,
  submitted_at: new Date(),
  test_log: testLogId,
  job: jobId,
};
```

---

## Timer 

The `Timer` component is a reusable React component designed to manage and display a countdown timer. The component is responsible for counting down from a specified duration, notifying the parent component when the time is up, and optionally providing updates on the remaining time.

- **File Path** - `\hr-frontend\src\components\candidate-form\Timer.js`

1. **Countdown Timer**: Display a countdown from a specified duration.
2. **Event Handling**: Trigger events when the timer reaches zero (`onTimeUp`) and on each tick (`onTick`).
3. **Reusability**: Be easily integrated into other components that require a countdown timer.

### Props
|Prop Name| Description|
|---|---|
|`duration`| The initial duration of the timer in seconds.|
|`onTimeUp`| A callback function that is triggered when the timer reaches zero.|
|`onTick`| A callback function that is triggered on each tick (every second) with the remaining time as an argument.|

### State
| Variable Name|Purpose|
|---|---|
|`timeLeft`|Represents the remaining time in seconds. It is initialized with the `duration` prop.|

### Effects

1. **Reset Timer**:
   - It resets the `timeLeft` state to the new `duration`.

   ```javascript
   useEffect(() => {
     setTimeLeft(duration);
   }, [duration]);
   ```

2. **Manage Timer**:
   - This effect runs whenever `timeLeft`, `onTick`, or `onTimeUp` changes.
   - It sets up an interval that decrements the `timeLeft` state every second.
   - If `timeLeft` reaches zero, it calls the `onTimeUp` callback and clears the interval.
   - On each tick, it calls the `onTick` callback with the updated `timeLeft`.

   ```javascript
   useEffect(() => {
     if (timeLeft <= 0) {
       if (onTimeUp) onTimeUp();
       return;
     }

     const timer = setInterval(() => {
       setTimeLeft((prev) => {
         const newTime = prev - 1;
         if (onTick) onTick(newTime);
         return newTime;
       });
     }, 1000);

     return () => clearInterval(timer);
   }, [timeLeft, onTick, onTimeUp]);
   ```

### Rendering

The component renders a `<span>` element that displays the remaining time in seconds.

```javascript
return <span>{timeLeft}s</span>;
```

---
