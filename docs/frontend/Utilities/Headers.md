---
sidebar_position: 9
---
## Heading

The `Heading.js` file serves as the header section for a job posting page in the CandidHR project. It displays job details such as title, employment type, location, experience requirements, and closing date. Additionally, it provides functionality for copying the job URL to the clipboard, editing job details, and publishing/unpublishing the job. 

- **File Path:** `\hr-frontend\src\utils\header\Heading.js`
- **Dependencies**
    - `@heroicons/react`: Provides SVG icons for UI elements.
    - `@headlessui/react`: Used for dropdown menus and transitions.
    - `react-toastify`: Displays toast notifications for user feedback.

### Props

| Prop Name      | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| `userDetails`  | Contains user-specific information, including the user's role.              |
| `jobDetail`    | Contains details about the job, such as title, location, and closing date.  |
| `publishJob`   | A callback function to handle publishing or unpublishing the job.           |
| `loading`      | Indicates whether the job details are still being loaded.                   |
| `domain`       | Represents the domain or context in which the component is being used.      |


### Functions and Methods

1. `classNames(...classes)`
- **Purpose**:
    - Utility function to conditionally join CSS class names.
- **Parameters**:
  - `...classes` (Array of strings): A list of class names to be joined.
- **Return Value**:
    - A single string of concatenated class names, excluding falsy values.

2. `copyToClipboard()`
- **Purpose**:
    - Copies the job URL to the clipboard and displays a success toast notification.
    - Displays a toast notification using `react-toastify`.
    - Modifies the DOM temporarily by creating and removing an input element for the fallback method.
- **Error Handling**:
  - If `navigator.clipboard` is supported, it uses the Clipboard API. If not, it falls back to the `document.execCommand("copy")` method.
  - Errors are logged to the console if the copy operation fails.

---

## Candidate Form Heading

The `CandidateFormHeading.js` file is responsible for rendering the heading section of a candidate form. It displays job details such as the job title, employment type, location, experience range, and closing date. The component also includes conditional rendering for loading states and a visual indicator if the job posting has closed.


- **File Path:** `\hr-frontend\src\utils\header\CandidateFormHeading.js`
- **Dependencies**-
    - `@heroicons/react/20/solid`: Provides icons used in the component (e.g., `BriefcaseIcon`, `MapPinIcon`).

### Props
|Prop Name| Description|
|---|---|
| <h3>**`jobDetail`**</h3>| An object containing details about the job. It includes the following fields:|
|`title`| The job title.|
|`employment_type`| The type of employment (e.g., Full-time, Part-time).|
|`location`| The job location.|
|`min_experience`| The minimum required experience in years.|
|`max_experience`| The maximum required experience in years.|
|`close_date`| The closing date of the job posting in a date-parsable format.|
|`created_at`| The date the job was posted in a date-parsable format.|

### Functions and Methods

1. `CandidateFormHeading`
- **Purpose**:
    - Renders the job details in a structured format with icons and conditional loading states.
    - Conditionally renders a "Job Closed" badge if the current date is past the job's closing date.
    - Uses a loading state simulation (`loading = false`) to demonstrate how loading placeholders would appear.
- **Parameters**:
  - `jobDetail` (object): Contains job-related data (see Props section for details).
- **Return Value**: A JSX element representing the job details heading.

---

## Candidate Questions

The `CandidateQuestions.js` file serves as a multi-step form for candidates applying for a job. It collects personal, professional, and question-based responses from the candidate, validates the inputs, and submits the data to a backend API. The component also handles file uploads (resume, profile picture, and introduction video) and integrates with other components like `PersonalInfoForm`, `ProfessionalInfoForm`, and `QuestionTestForm` to manage different sections of the form.

- **File Path:** `\hr-frontend\src\utils\header\CandidateQuestions.js`
- **Dependencies**
    - `@heroicons/react`: Provides icons used in the UI.
    - `react-toastify`: Displays toast messages for errors and notifications.

### State Variables
| Variable Name|Purpose|
|---|---|
|`resumeFile`| Stores the uploaded resume file.|
|`profilePic`| Stores the uploaded profile picture file.|
|`introVideo`| Stores the uploaded introduction video file.|
|`showModal`| Controls the visibility of the modal for error or confirmation messages.|
|`candidateToEdit`| Stores the candidate data if the candidate has already applied for the job.|
|`error`| Tracks form validation errors.|
|`questions`| Stores the list of questions to be answered by the candidate.|
|`maxRetriesExceeded`| Tracks if the candidate has exceeded the maximum retries for applying to the job.|
|`criteriaPayload`| Stores the payload for criteria responses.|
|`userFormData`| Stores the candidate's personal and professional information.|
|`submitting`| Tracks if the form is in the process of being submitted.|
|`responses`| Stores the candidate's responses to the questions.|
|`criteriaErrors`| Tracks validation errors for criteria responses.|
|`formValidationResponse`| Stores validation messages for the form.|
|`step`| Tracks the current step in the multi-step form.|
|`backendError`| Stores backend API errors.|
|`isChecked`| Tracks if the candidate has agreed to the terms and conditions.|
|`errorShown`| Tracks if an error toast message is currently displayed.|

### Functions and Methods

1. `handleInputChange(field, value)`
- **Purpose**:
    - Updates the `userFormData` state based on the input field and value.
- **Parameters**:
  - `field` (string): The field to update (e.g., `name`, `email`, `city`, etc.).
  - `value` (string): The value to set for the field.

2. `handleKeyDown(e)`
- **Purpose**:
    - Restricts input to numbers and control keys for phone number fields.
- **Parameters**:
  - `e` (Event): The keydown event.

3. `handleFileChange(event)`
- **Purpose**:
    - Handles file uploads for resume, profile picture, and introduction video.
- **Parameters**:
  - `event` (Event): The file input change event.

4. `check_email_exists()`
- **Purpose**: 
    - Checks if the candidate's email already exists in the database.
- **Return Value**:
    - Returns a boolean indicating if the email exists.
- **Error Handling**:
    - Displays a modal with backend errors if the API call fails.

5. `showErrorToastMessage(error)`
- **Purpose**:
    - Displays an error toast message.
- **Parameters**:
  - `error` (string): The error message to display.

6. `shuffleAndPick(arr, length)`
- **Purpose**: 
    - Shuffles an array and picks a subset of elements.
- **Parameters**:
  - `arr` (Array): The array to shuffle.
  - `length` (number): The number of elements to pick.
- **Return Value**: A subset of the shuffled array.

7. `updateResume()`
- **Purpose**:
    - Updates the candidate's resume and related data if they have already applied for the job.
    - Submits the updated data to the backend and handles errors.

8. `handleUpload()`
- **Purpose**:
    - Handles the submission of the candidate's form data.
    - Validates the form, submits data to the backend, and handles errors.

9. `handleSetCriteria(candidate_id)`
- **Purpose**: 
    - Submits the candidate's criteria responses to the backend.
- **Parameters**:
  - `candidate_id` (string): The ID of the candidate.

10. `responseChange(questionId, answer, type)`
- **Purpose**: 
    - Updates the candidate's responses to the questions.
- **Parameters**:
  - `questionId` (string): The ID of the question.
  - `answer` (string): The candidate's answer.
  - `type` (string): The type of response (e.g., `audio`).

11. `getValidationErrors(step)`
- **Purpose**:
    - Validates the form fields for the current step.
- **Parameters**:
  - `step` (number): The current step in the form.
- **Return Value**:
    - Returns an error message if validation fails, otherwise `null`.

12. `validateCriteria()`
- **Purpose**:
    - Validates the criteria responses.
- **Return Value**:
    - Returns `true` if there are validation errors, otherwise `false`.

13. `validateWebsiteURL(url)`
- **Purpose**: 
    - Validates a website URL.
- **Parameters**:
  - `url` (string): The URL to validate.
- **Return Value**:
    - Returns `true` if the URL is valid, otherwise `false`.

14. `handleNextButton()`
- **Purpose**: Handles the "Next" button click in the multi-step form.
- **Side Effects**: Validates the current step and advances to the next step.

15. `handleBackButton()`
- **Purpose**: 
    - Handles the "Back" button click in the multi-step form.
    - Moves to the previous step.

---

## Personal Info Form

The `PersonalInfoForm.js` file is responsible for rendering a form to collect and manage personal information from a user. It includes fields for name, email, contact number, city, state, and optional file uploads for a profile picture, introduction video, and resume. 

- **File Path:** `\hr-frontend\src\utils\header\PersonalInfoForm.js`
- **Dependencies**
    - `react-phone-input-2`: Used for the phone number input field with country code selection.
    - `@heroicons/react`: Provides icons for file upload sections.
    - `react-toastify`: Used for displaying notifications (currently unused in this file).

### Props

| Prop Name               |Description                                                                 |
|-------------------------|----------------------------------------------------------------------------|
| `userFormData`          |Contains user data (e.g., `name`, `email`, `contact`, `location`).          |
| `handleInputChange`     |Handles changes to input fields.                                            |
| `setUserName`           |Updates the user's name in the parent component.                            |
| `handleKeyDown`         |Handles keydown events (currently unused in the code).                      |
| `preference`            |Contains preferences for optional fields (e.g., profile picture, video).    |
| `PhotoIcon`             |Icon component for file upload sections.                                    |
| `resumeFile`            |The uploaded resume file.                                                   |
| `profilePic`            |The uploaded profile picture file.                                          |
| `introVideo`            |The uploaded introduction video file.                                       |
| `handleFileChange`      |Handles file upload changes.                                                |
| `fileInputRef`          |Reference to the file input element for resetting its value.                |
| `country`               |Default country for the phone input (e.g., `'in'` for India).               |
| `formValidationResponse`|Contains validation responses (currently unused in the code).               |

### Functions and Methods

1. `PersonalInfoForm`
- **Purpose**:
    - Renders the personal information form and handles user input and file uploads.
    - Updates the parent component's state via `handleInputChange` and `setUserName`.
- **Return Value**: JSX representing the form.

---

## Professional Info Form

The `ProfessionalInfoForm.js` file is responsible for rendering a form that captures professional information from a user. It dynamically displays input fields based on the `preference` object, which determines which fields are mandatory, optional, or hidden. The component interacts with parent components through props to handle form state and input changes.

- **File Path:** `\hr-frontend\src\utils\header\ProfessionalInfoForm.js`

### Props
| Prop Name               | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| `PhotoIcon`             | Icon component for file upload (if applicable).                            |
| `handleFileChange`      | Handles file input changes (if applicable).                                |
| `fileInputRef`          | Reference to the file input element (if applicable).                       |
| `preference`            | Configuration object determining which fields to display and their rules.  |
| `handleInputChange`     | Handles changes to form inputs.                                            |
| `userFormData`          | Current state of the form data.                                            |
| `formValidationResponse`| Validation response for form fields (if applicable).                        |


### Functions and Methods

1. `handleInputChange`
- **Purpose**:
    - Updates the form state in the parent component.
    - Triggers a state update in the parent component.
- **Parameters**:
  - `name` (string): The name of the input field.
  - `value` (string | number): The value of the input field.

---

## Question Test Form

The `QuestionTestForm.js` file is responsible for rendering and managing a form that collects responses to a set of questions. The form supports multiple question types, including text and audio inputs. It also handles validation, error states, and interactions with an external API to fetch criteria related to a job. The component is designed to be reusable and integrates with other components like `AudioInput` for recording functionality.

- **File Path:** `\hr-frontend\src\utils\header\QuestionTestForm.js`

### Props

| Prop Name               | Purpose                                                                 |
|-------------------------|-------------------------------------------------------------------------|
| `questions`             | List of questions to be displayed in the form.                         |
| `InformationCircleIcon` | Icon component for displaying guidelines.                              |
| `responseChange`        | Callback function to handle changes in responses.                      |
| `AudioInput`            | Component for handling audio input functionality.                      |
| `setError`              | Function to set error states for the form.                             |
| `setResponses`          | Function to update the responses state.                                |
| `responses`             | Current state of responses.                                            |
| `error`                 | Error state for the form.                                              |
| `jobDetail`             | Details of the job, used to fetch criteria.                            |
| `formValidationResponse`| Function to validate the form.                                         |


### Functions and Methods

1. `MemoizedAudioInput`
- **Purpose**:
    - A memoized version of the `AudioInput` component to prevent unnecessary re-renders.
    - Manages the recording state (`isRecording`) and updates it based on user actions.
- **Return Value**:
    - A `div` containing the `AudioInput` component with necessary props.

2. `fetchCriteria`
- **Purpose**:
    - Fetches job criteria from an external API.\
    - Sets `loadingCriterias` to `true` while fetching and `false` after completion.
- **Return Value**:
    - Updates the `criteria` state with fetched data.
- **Error Handling**:
    - Displays an error in the console if the API call fails.
    - Updates `loadingCriterias` state to reflect loading status.

3. `handleStartRecording`
- **Purpose**:
    - Handles the start of audio recording for a specific question.
    - Ensures only one recording can be active at a time.

- **Parameters**:
    - `id`: The ID of the question being recorded.

- **Return Value**:
    - Updates the `activeRecordingId` state to the provided `id`.

4. `handleStopRecording`
- **Purpose**:
    - Handles the stop of audio recording.
    - Stops any active recording.

- **Return Value**:
    - Sets `activeRecordingId` to `null`.

5. `responseChangeMemoized`
- **Purpose**:
    - A memoized version of the `responseChange` function to avoid unnecessary re-renders.

- **Parameters**:
    - `id`: The ID of the question.
    - `value`: The new value of the response.
    - `type`: The type of response (e.g., "text", "audio").

- **Return Value**:
    - Calls the original `responseChange` function with the provided parameters.

6. `setResponsesMemoized`
- **Purpose**:
    - A memoized version of the `setResponses` function to avoid unnecessary re-renders.

- **Parameters**:
    - `newResponses`: The new responses to set.

- **Return Value**:
    - Calls the original `setResponses` function with the provided `newResponses`.

---
