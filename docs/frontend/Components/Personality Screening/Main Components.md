---
sidebar_position: 1
---
## Audio Visualizer

The `AudioVisualizer.js` file is responsible for rendering an audio visualizer in the personality screening module of the CandidHR project. It leverages the `react-audio-visualize` library to display a real-time audio waveform visualization.

- **Dependencies**:
  - `react-audio-visualize`:It provides the `AudioVisualizer` component, which accepts configuration.

### Props
|Prop Name| Description|
|---|---|
|`analyser`| Processes audio data and provides real-time frequency and time-domain information.|

### Functions and Methods

1. `Visualizer`
- **Purpose**:
  - The `AudioVisualizer` component renders a canvas element to display the audio waveform.
- **Return Value**: Returns a `div` containing the `AudioVisualizer` component if the `analyser` prop is provided. Otherwise, it renders nothing.

---

## Countdown Timer

The `CountdownTimer` component is designed to display and manage a countdown timer. It is primarily used in scenarios where users are required to complete tasks within a specific time limit, such as answering questions in a quiz or assessment. The timer dynamically updates its display and triggers a callback when the time runs out.

### Props

| Prop Name             | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| `initialTime`         | The initial time (in seconds) for the countdown timer.                      |
| `onTimerFinish`       | Callback function triggered when the timer reaches 0.                       |
| `isSubmitted`         | Indicates whether the current task (e.g., answering a question) is submitted. |
| `currentQuestionIndex`| The index of the current question. Used to reset the timer when the question changes. |


### Functions and Methods

1. `useEffect`- *Reset Timer on Question Change*
- **Purpose**: 
  - Resets the timer to the `initialTime` whenever the `currentQuestionIndex` or `initialTime` changes.
  - Clears the existing interval and updates the `timeRemaining` state.

2. `useEffect` - *Countdown Logic*
- **Purpose**: 
  - Manages the countdown logic, updates the timer every second, and triggers the `onTimerFinish` callback when the timer reaches 0.
  - Starts or stops the interval based on `timeRemaining` and `isSubmitted`.
  - Updates the `timeRemaining` state every second.
  - Calls `onTimerFinish` when the timer ends.

---

## Screening Tour

The `ScreeningTour.js` file serves as the main interface for a personality screening process in a candidate evaluation system. It handles the recording of video and audio responses to a series of predefined questions, manages the flow of the screening, and provides a user-friendly interface for candidates to complete the screening process. The component integrates with various utilities and APIs to facilitate the recording, submission, and navigation of the screening process.

- **Dependencies**:
  - `navigator.mediaDevices.getUserMedia` and `MediaRecorder`: for audio/video recording.

### State Variables
| Variable Name|Purpose|
|---|---|
|`showStructure`| Toggles visibility of debugging structures (e.g., background colors for layout debugging).|
|`isRecording`| Indicates whether audio/video recording is active.|
|`recordedChunks`| Stores video recording chunks.|
|`audioChunks`| Stores audio recording chunks.|
|`permission`| Tracks whether the user has granted media permissions.|
|`audioStream` and `videoStream`| Hold the media streams for audio and video recording.|
|`audioAnswers`| Stores URLs of recorded audio responses for each question.|
|`submittedAnswers`| Tracks whether answers have been submitted for each question.|
|`video`| Stores the video file (currently unused).|
|`videoQuality`| Tracks the quality of the video recording.|
|`candidate`| Stores candidate details fetched from the API.|
|`screeningDetails`| Stores screening details fetched from the API.|
|`questions`| A predefined list of questions for the screening.|
|`askedQuestions`| Tracks which questions have been asked.|
|`currentQuestionIndex`| Tracks the index of the current question.|
|`currentQuestion`| Stores the current question being asked.|
|`loading`| Indicates whether data is being fetched.|
|`error`| Stores any errors encountered during the process.|
|`isSubmitted`| Tracks whether the current question's answer has been submitted.|
|`isCompleted`| Indicates whether the screening is completed.|
|`completedText`| Stores a completion message.|
|`startTimer`| Tracks whether the countdown timer has started.|
|`started`| Indicates whether the screening has started.|
|`isSpeaking`| Tracks whether text-to-speech is active.|
|`submittingAnswer`| Indicates whether an answer is being submitted.|


### Functions and Methods

1. `startRecording()`
- **Purpose**:
  - Starts recording audio and video streams.
  - Sets up media streams and initializes `MediaRecorder` instances.
  - Updates `audioStream`, `videoStream`, `audioMediaRecorder`, and `videoMediaRecorder`.
  - Starts recording and updates `isRecording` to `true`.

2. `stopRecording()`
- **Purpose**:
  - Stops recording audio and video streams.
  - Stops the `MediaRecorder` instances.
  - Updates `isRecording` to `false`.

3. `fetchCandidateAndScreeningDetails()`
- **Purpose**:
  - Fetches candidate and screening details from the API.
  - Updates `candidate`, `screeningDetails`, and `loading` state.
  - Navigates to a "Page Not Found" route if the screening is not found.
- **Error Handling**: Sets `error` state and logs errors to the console.

4. `startScreening()`
- **Purpose**:
  - Initiates the screening process.
  - Starts recording and sets the first question as the current question.
  - Updates `started` and `currentQuestionIndex` state.
- **Error Handling**: Logs errors to the console.

5. `nextQuestion()`
- **Purpose**:
  - Advances to the next question in the screening.
  - Updates `currentQuestionIndex` and `currentQuestion` state.

6. `submitAnswer()`
- **Purpose**:
  - Submits the recorded answer for the current question.
  - Converts audio chunks into a Blob and stores the URL in `audioAnswers`.
  - Updates `askedQuestions` and `submittedAnswers` state.
- **Error Handling**: Logs errors to the console.

7. `redirectToScreening()`
- **Purpose**:
  - Redirects the user to the actual screening after completing the tour.
- **Side Effects**:
  - Updates the screening status via API and navigates to the screening start page.
- **Error Handling**: Logs errors to the console and navigates to a "Page Not Found" route if the screening is not found.

---

## SpeechToText

The `SpeechToText` component is designed to capture and display speech input from the user. It leverages the `react-speech-recognition` library to provide real-time speech-to-text functionality. The component is primarily used for personality screening or any scenario where spoken input needs to be converted into text for further processing.

- **Dependencies**
  - `react-speech-recognition`:A library for speech recognition functionality.

### Functions and methods

1. `useSpeechRecognition`
- `transcript`: A string containing the transcribed text from the user's speech.
- `resetTranscript`: A function to clear the transcribed text.

2. `handleStartListening`
- **Purpose**:
  - Initiates the speech recognition process.
  - Activates the microphone and starts listening to the user's speech.
  - Updates the `transcript` state in real-time as speech is recognized.
- **Error Handling**: Errors are handled internally by the `react-speech-recognition` library.

3. `handleStopListening`
- **Purpose**:
  - Stops the speech recognition process.
  - Stops the microphone and halts speech recognition.
  - The `transcript` state retains the transcribed text until reset.
- **Error Handling**: Errors are handled internally by the `react-speech-recognition` library.

4. `resetTranscript`
- **Purpose**:
  - Clears the transcribed text.
  - Resets the `transcript` state to an empty string.

---

## Start Timer

The `StartTimer.js` file is responsible for implementing a countdown timer. It is used in the personality screening feature of the application to display a visual countdown before the screening begins.

### Props
|Prop Name| Description|
|---|---|
| `onComplete`| A function to be called when the countdown reaches 0. This is typically used to notify the parent component that the timer has ended.|
| `started`| A boolean value that determines whether the countdown should start. If `true`, the timer begins counting down.|

### State Variables
| Variable Name|Purpose|
|---|---|
| `counter`| A state variable initialized to `3`. It represents the current countdown value.|

### Refs
- `timerId`: A ref used to store the interval ID returned by `setInterval`. This ensures the interval ID persists across renders and can be cleared during cleanup.

### Functions and Methods

1. `useEffect` 
- **Purpose**: 
  - Manages the countdown logic and cleanup.
  - Updates the `counter` state every second.
  - Calls `onComplete` when the countdown finishes.
  - Clears the interval to prevent memory leaks.
- **Parameters**: 
  - A function that executes when `started` or `counter` changes.
  - A dependency array `[started, counter, onComplete]` to trigger the effect when these values change.


## Error Handling
- The component does not explicitly handle errors but relies on the parent component to ensure valid props (`started` and `onComplete`) are passed.
- The cleanup function in `useEffect` ensures no memory leaks occur if the component unmounts unexpectedly.

---

## Text-To-Speech

The `TextToSpeech.js` file is designed to convert text into speech using the Web Speech API. It is part of a personality screening feature in the HR frontend project. The component dynamically fetches available voices, allows customization of speech parameters (pitch, rate, volume), and provides controls for pausing and resuming speech. 

### State Variables
| Variable Name|Purpose|
|---|---|
|`isPaused`|Tracks whether the speech is currently paused.|
|`utterance`|Holds the current speech synthesis utterance object.|
|`voice`|Represents the selected voice for speech synthesis.|
|`pitch`|Controls the pitch of the speech (default: `1.2` for a natural tone).|
|`rate`|Controls the speed of the speech (default: `1` for normal speed).|
|`volume`|Controls the volume of the speech (default: `1` for full volume).|
|`voices`|Stores the list of available voices fetched from the Web Speech API.|

### Functions and Methods

1. `useEffect` for Loading Voices
- **Purpose**:
  - Fetches available voices from the Web Speech API and sets a default voice.
  - Updates the `voices` state with available voices.
  - Sets a default voice (prefers "Google US English" if available).
  - Listens for changes in available voices via `onvoiceschanged`.

2. `useEffect` for Text-to-Speech
- **Purpose**:
  - Converts the provided `text` into speech when the component mounts or when dependencies change.
  - Calls `textToSpeech` to initiate speech synthesis.
  - Cleans up by canceling speech synthesis and resetting the speaking state on unmount or text change.

3. `textToSpeech`
- **Purpose**: 
  - Converts the provided text into speech using the Web Speech API.
  - Updates the `utterance` state with the new speech synthesis object.
  - Initiates speech synthesis using `window.speechSynthesis.speak`.
  - Updates the speaking state via `setIsSpeaking`.
- **Parameters**:
  - `text`: `string` - The text to be converted into speech.
- **Error Handling**:
  - Logs errors to the console if speech synthesis fails.
  - Resets the speaking state on error.

4. `togglePause`
- **Purpose**:
  - Toggles the `isPaused` state.
  - Calls `window.speechSynthesis.pause` or `window.speechSynthesis.resume` based on the current state.
  - Pauses or resumes the current speech synthesis.

---

# Technical Documentation: `Tour.js`

## Summary
The `Tour.js` file is designed to guide candidates through the initial steps of a personality screening process. It handles the following:
- Testing the candidate's webcam and microphone.
- Fetching and displaying screening details (e.g., status, expiration, pending questions).
- Navigating candidates to the appropriate screens based on the screening status (e.g., expired, started, completed).
- Marking the screening link as opened and updating its status.

- **Dependencies**:
  - `@heroicons/react`: Provides icons for UI elements.
  - `AuthContext`: Provides authentication context (currently unused in this file).

### State Variables
| Variable Name            | Purpose                                                                 |
|--------------------------|-------------------------------------------------------------------------|
| `webcamEnabled`          | Indicates if the webcam is enabled and functional.                      |
| `micEnabled`             | Indicates if the microphone is enabled and functional.                  |
| `testing`                | Tracks if the webcam/microphone test is in progress.                    |
| `error`                  | Stores any errors encountered during testing or API calls.              |
| `screeningDetails`       | Stores details of the personality screening fetched from the API.       |
| `loading`                | Indicates if the screening details are being fetched.                   |
| `loadingStatus`          | Tracks the loading state of pending questions.                          |
| `isCompleted`            | Indicates if the screening is completed.                                |
| `completedText`          | Displays a message when the screening is completed.                     |
| `completedDescription`   | Provides additional details about the completed screening.              |
| `skipTour`               | Allows the candidate to skip the tour and proceed directly.             |
| `continueScreening`      | Tracks if the candidate chooses to continue a started screening.        |
| `pendingQuestions`       | Stores the count of pending questions in the screening.                 |
| `screeningExpired`       | Indicates if the screening link has expired.                            |
| `screeningStarted`       | Indicates if the screening has started.                                 |
| `screeningCompleted`     | Indicates if the screening has been completed.                          |

### Functions and Methods

1. `testWebcam()`
- **Purpose**:
  - Tests the candidate's webcam functionality.
  - Updates `webcamEnabled` and `testing` states.
- **Error Handling**: Sets `error` state if the webcam cannot be accessed.

2. `testMic()`
- **Purpose**:
  - Tests the candidate's microphone functionality.
  - Updates `micEnabled` and `testing` states.
- **Error Handling**: Sets `error` state if the microphone cannot be accessed.

3. `markLinkOpened(id)`
- **Purpose**:
  - Marks the screening link as opened by sending a PATCH request to the API.
  - Updates the screening status in the backend.
- **Parameters**:
  - `id` (`string`): The ID of the screening.
- **Error Handling**: Navigates to a "Page Not Found" route if the screening ID is invalid.

4. `fetchScreeningDetails()`
- **Purpose**:
  - Fetches screening details from the API and updates the component state.
  - Updates `screeningDetails`, `screeningStarted`, `screeningCompleted`, and `screeningExpired` states.
- **Error Handling**: Sets `error` state and navigates to a "Page Not Found" route if the API call fails.

5. `fetchPendingResponse(screeningId)`
- **Purpose**:
  - Fetches the status of answered questions for the screening.
  - Updates `pendingQuestions` and `loadingStatus` states.
- **Parameters**:
  - `screeningId` (`string`): The ID of the screening.
- **Error Handling**: Logs errors to the console.

6. `startTour()`
- **Purpose**:
  - Navigates the candidate to the appropriate route based on whether they skip the tour.
  - Navigates to either the tour or the screening start page.

7. `redirectToScreening()`
- **Purpose**:
  - Marks the screening as started and navigates to the screening start page.
  - Updates the screening status in the backend and navigates to the screening start page.
- **Error Handling**: Navigates to a "Page Not Found" route if the API call fails.

8. `handleContinue()`
- **Purpose**:
  - Handles the "Continue" button click to resume a started screening.
  - Calls `redirectToScreening()` to update the screening status and navigate.

## Error Handling
- Errors during webcam/microphone testing are logged and displayed to the user.
- API errors result in navigation to a "Page Not Found" route or display of an error message.

---

# Technical Documentation: `VideoComponent.js`

## Summary
The `VideoComponent.js` file is a React component responsible for managing a video-based personality screening interview. It handles the recording of video and audio responses, navigation through questions, and submission of answers. The component integrates with external APIs to fetch candidate and screening details, and it provides a user interface for the interview process, including a video feed, question prompts, and a chat-like interface for reviewing answered questions.

- **Dependencies**
  - **Lottie**: Used for animations.
  - **React Toastify**: Displays toast notifications.
  - **MediaRecorder API**: Handles audio and video recording.

### State Variables
| Variable Name               | Purpose                                                                 |
|-----------------------------|-------------------------------------------------------------------------|
| `showStructure`             | Controls visibility of UI structure for debugging.                      |
| `isRecording`               | Tracks whether recording is in progress.                                |
| `recordedChunks`            | Stores recorded video chunks.                                           |
| `audioChunks`               | Stores recorded audio chunks.                                           |
| `audioStream`               | Holds the audio stream for recording.                                   |
| `videoStream`               | Holds the video stream for recording.                                   |
| `audioAnswers`              | Maps question IDs to their corresponding audio URLs.                    |
| `submittedAnswers`          | Tracks whether answers have been submitted for each question.           |
| `candidate`                 | Stores candidate details fetched from the API.                          |
| `screeningDetails`          | Stores screening details fetched from the API.                          |
| `totalQuestionsCount`       | Total number of questions in the screening.                             |
| `askedQuestions`            | List of questions that have been asked.                                 |
| `pendingQuestions`          | List of questions that are yet to be asked.                             |
| `currentQuestionIndex`      | Index of the currently active question.                                 |
| `currentQuestion`           | Details of the currently active question.                               |
| `loading`                   | Indicates whether data is being fetched.                                |
| `error`                     | Stores error messages.                                                  |
| `isSubmitted`               | Tracks whether the current question has been submitted.                 |
| `isCompleted`               | Indicates whether the screening is completed.                           |
| `completedText`             | Message displayed after completing the screening.                       |
| `estimatedTime`             | Total estimated time for the screening.                                 |
| `startTime`                 | Timestamp when the screening started.                                   |
| `startTimer`                | Controls the start timer UI.                                            |
| `started`                   | Indicates whether the screening has started.                            |
| `isSpeaking`                | Tracks whether text-to-speech is active.                                |
| `submittingAnswer`          | Indicates whether an answer is being submitted.                         |


### Functions and Methods

1. `startRecording()`
- **Purpose**:
  - Starts recording audio and video streams.
  - Initializes `audioStream` and `videoStream` if not already set.
  - Sets up `MediaRecorder` instances for audio and video.
  - Updates `isRecording` state to `true`.
  - Collects audio and video chunks in `audioChunks` and `recordedChunks`.

2. `stopRecording()`
- **Purpose**: 
  - Stops recording audio and video streams.
  - Stops `MediaRecorder` instances.
  - Updates `isRecording` state to `false`.

4. `fetchCandidateAndScreeningDetails()`
- **Purpose**:
  - Fetches candidate and screening details from the API.
  - Updates `candidate`, `screeningDetails`, `totalQuestionsCount`, `askedQuestions`, and `pendingQuestions` states.
  - Handles errors by setting the `error` state and navigating to a 404 page if necessary.

5. `fetchPendingResponse(screeningId)`
- **Purpose**: 
  - Fetches the status of answered questions for a given screening.
  - Updates `submittedAnswers` state.
- **Parameters**:
  - `screeningId` (`string`): ID of the screening.
- **Return Value**: `Object` containing the status of answered questions.

6. `startScreening()`
- **Purpose**:
  - Starts the screening process.
  - Sets `started` and `startTimer` states.
  - Calls `startRecording()` and sets the first question.

7. `nextQuestion()`
- **Purpose**:
  - Moves to the next question in the screening.
  - Updates `currentQuestionIndex` and `currentQuestion` states.
  - Displays a toast message if all questions are completed.

8. `submitAnswer()`
- **Purpose**:
  - Submits the recorded audio and video as an answer to the current question.
  - Creates `FormData` with audio and video files.
  - Submits the answer to the API.
  - Updates `askedQuestions`, `submittedAnswers`, and `audioAnswers` states.
  - Displays success or error toast messages.

9. `markScreeningAsCompleted()`
- **Purpose**:
  - Marks the screening as completed in the API.
  - Updates `screeningDetails` with the completion time.
  - Sets `isCompleted` and `completedText` states.

---

# VoiceAnimation Component Documentation

## Summary
The `VoiceAnimation.js` file renders a visual animation representing voice activity. It is used in the personality screening module to provide a dynamic visual indicator during voice-based interactions or recordings.


## Functions and Methods

1. `VoiceAnimation`
- **Purpose**:
  - Renders a visual animation consisting of multiple bars to simulate voice activity.
- **Return Value**: 
  - Returns a JSX fragment containing a `div` with the ID `bars` and multiple child `div` elements with the class `bar`. These elements are styled using CSS to create the animation effect.

---
