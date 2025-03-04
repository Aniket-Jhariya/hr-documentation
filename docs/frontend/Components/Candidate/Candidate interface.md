---
sidebar_position: 2
---

## Interface

The `CandidateInterface` component is specifically designed to handle the candidate testing interface. It manages the flow of tests, questions, and answers.

- **File Path**: `\hr-frontend\src\components\candidate-interface\CandidateInterface.js`


### State Variables

- **`questions`**: Array of questions for the current test.
- **`currentQuestionIndex`**: Index of the currently displayed question.
- **`currentTest`**: Details of the current test being taken.
- **`timer`**: Countdown timer for the current question.
- **`selectedChoice`**: Array of selected choices for multiple-choice questions.
- **`textanswer`**: Text input for text-based questions.
- **`isRecording`**: Boolean to manage audio recording state.

### Functions

- **`StartTest(time)`**: Initializes the test, sets the start time, and fetches the first question.
- **`testStatus()`**: Checks the status of the test and fetches remaining tests.
- **`fetchTestLog()`**: Fetches details of the test log from the backend.
- **`fetchQuestion(id)`**: Fetches details of a specific question by ID.
- **`saveAnswer()`**: Submits the candidate's answer to the backend and handles navigation to the next question or test.
- **`SubmitTest()`**: Submits the completed test to the backend.
- **`NextTest()`**: Handles navigation to the next test.
- **`handleCorrectChange(choice, e)`**: Updates the selected choices for multiple-choice questions.
- **`handleinputChange(id, value)`**: Updates the text input for text-based questions.
- **`handleStartRecording()`**: Starts audio recording for audio-based questions.
- **`handleStopRecording()`**: Stops audio recording.

### Component Lifecycle

1. **Initialization**: On component mount, `fetchTestLog` and `testStatus` are called to fetch test details and status.
2. **Test Start**: When the candidate starts the test, `StartTest` is called, which initializes the test and fetches the first question.
3. **Question Navigation**: As the candidate navigates through questions, `fetchQuestion` is called to fetch the next question, and `saveAnswer` is called to submit the current answer.
4. **Test Completion**: When all questions in a test are answered, `SubmitTest` is called to submit the test results. If there are more tests, the candidate is navigated to the next test.
5. **Final Feedback**: Upon completion of all tests, a feedback modal is displayed, and the test log is updated with the completion time.

---

## Modal

The `Modal.js` file is a React component that provides a reusable modal dialog interface. It is designed to be a flexible and generic component that can be used throughout the CandidHR frontend application to display content in a modal overlay.

- **File Path**: `Diacto\CandidHR\hr-frontend\src\components\candidate-interface\Modal.js`

The `Modal` component serves as a container for displaying content in a modal dialog. It is a presentational component that does not manage its own state or behavior but instead relies on props to render its content. This makes it highly reusable and easy to integrate into different parts of the application.

### Key Elements

```javascript
import React from 'react';

const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal-overlay"></div>
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default Modal;
```

1. **`children` Prop**:
   - The `children` prop is used to pass any content that should be displayed inside the modal. This makes the component highly flexible, as it can render anything from simple text to complex forms or other components.

2. **Modal Structure**:
   - **`modal`**: It serves as the container for the entire modal.
   - **`modal-overlay`**: It is used to create a semi-transparent background that covers the rest of the screen, ensuring that the modal is the focus of the user's attention.
   - **`modal-content`**: It is where the actual content (passed via the `children` prop) is rendered.

### Styling
The component uses CSS classes (`modal`, `modal-overlay`, `modal-content`) for styling.

---

## Completed

The `Completed.js` file serves as the interface for candidates who have completed a test. It provides a summary of the completed test, including the total number of questions and the time taken. Additionally, it checks if there are any pending tests and allows the candidate to proceed to the next test if available.

- **File Path**: `Diacto\CandidHR\hr-frontend\src\components\candidate-interface\Completed.js`
- **Dependencies**:
  - **React Hooks**: `useEffect`, `useState`
  - **React Router**: `useNavigate`, `useParams`
  - **Icons**: `CheckCircleIcon` from `@heroicons/react/24/solid`
  - **API Constants**: `api` from `../../constants/constants`
  - **Loader Component**: `SpinLoader` from `../../utils/loaders/SpinLoader`

### State Variables
- **`loading`**: A boolean state to manage the loading status.
- **`error`**: A state to store any error that occurs during API calls.
- **`nextTest`**: A state to store information about the next test, if any.
- **`performanceData`**: A state to store performance data such as total questions and total time taken.

### Functions

1. `testStatus()`
- **Purpose**: Fetches the status of the test from the API and updates the state with the performance data and next test information.
- **Behavior**:
  - Sets `loading` to `true` at the start.
  - Makes a GET request to the API endpoint `/test/test-status/?test_log=${testlogId}`.
  - Filters the response to separate completed and pending tests.
  - Updates `performanceData` with the last completed test's details.
  - If there are pending tests, sets `nextTest` with the first pending test's details.
  - If no pending tests are left, updates the test log status to "Completed" and navigates to the completion page.

2. `testLogApi(payload, method, pk)`
- **Purpose**: Makes an API call to update the test log.
- **Parameters**:
  - `payload`: The data to be sent in the request body.
  - `method`: The HTTP method (e.g., "PUT").
  - `pk`: The primary key (ID) of the test log.
- **Behavior**:
  - Sets `loading` to `true` at the start.
  - Makes a request to the API endpoint `/test/testlog/${pk}/`.
  - Handles errors and sets `error` state if any.

3. `formatDuration(duration)`
- **Purpose**: Formats the duration from minutes to a readable string format (e.g., "5m 30s").
- **Parameters**:
  - `duration`: The duration in minutes.
- **Returns**: A formatted string representing the duration.

### Rendering
- **Loading State**: Displays a loading message if `loading` is `true`.
- **Completed State**: Displays a success message, performance summary, and a button to start the next test if available.
  - **Performance Summary**: Shows the total number of questions and the total time taken.
  - **Next Test Button**: Navigates to the next test if `nextTest` is available.

### Styling
- The component uses Tailwind CSS for styling, ensuring a responsive and modern design.
- The layout is centered on the screen with a maximum width of `max-w-3xl`.
- The performance summary is displayed in a grid layout with shadow and rounded corners for a card-like appearance.

### Error Handling
- Errors during API calls are caught and logged to the console.
- The `error` state is updated, which can be used to display error messages to the user.

---

## Link Expired 
The `LinkExpired` component is designed to display an error message when a candidate attempts to access an invalid or expired assessment link. It is part of the candidate interface in the HR frontend application.

- **File Path**: `Diacto\CandidHR\hr-frontend\src\components\candidate-interface\LinkExpired.js`

### Props
| Prop Name | Type       | Description                                                                 |
|-----------|------------|-----------------------------------------------------------------------------|
| `error`   | `string`   | The error message to display (e.g., "Page not found" or "Assessment Link Invalid"). |
| `validFrom` | `Date`    | The start date and time of the assessment link's validity period.           |
| `validTo` | `Date`     | The end date and time of the assessment link's validity period.             |

### Key Features
1. **Dynamic Error Handling**:
   - The component dynamically renders different error messages based on the `error` prop.
   - If the error is "Page not found," it displays a 404 error message.
   - If the error is "Assessment Link Invalid," it displays the validity period of the link.

2. **Date Formatting**:
   - The component uses the `toLocaleString` method to format the `validFrom` and `validTo` dates in a user-friendly format.

3. **Styling**:
   - The component uses Tailwind CSS for styling, including gradients, shadows, and responsive design.

4. **SVG Background**:
   - An SVG wave pattern is used as a decorative background element at the bottom of the page.

### Formatting
```javascript
const LinkeExpired = ({ error, validFrom, validTo }) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
    // ...
}
```
- The `options` object is used to format the date and time in a readable format (e.g., "January 1, 2023, 10:00 AM").

### JSX Structure
- The component uses a gradient background and an SVG wave pattern for visual appeal.
- The error message is conditionally rendered based on the `error` prop.
- The validity period is displayed only if the error is "Assessment Link Invalid."


### Styling

- Gradient backgrounds (`bg-gradient-to-b`).
- Shadows (`shadow-lg`).
- Responsive design (`sm:text-5xl`, `lg:px-8`).
