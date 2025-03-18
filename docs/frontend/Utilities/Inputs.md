---
sidebar_position: 10
---

## Audio Input 

The `AudioInput` component is a React utility designed to handle audio recording functionality within the CandidHR project. It allows users to record audio responses to specific questions, manage recording state, and interact with the recorded audio (play, pause, and delete). The component integrates with the parent component to update responses and manage recording permissions.

- **Dependencies**
    - `@heroicons/react`: Provides icons for the UI (e.g., microphone, trash, pause).

### Props
|Prop Name| Description|
|---|---|
|`setError`| Function to set error messages.|
|**`question`**| Object representing the current* question. Contains:|
|`id`| Unique identifier for the question.|
|`time_limit`| Maximum recording duration in seconds.|
|||
|`responseChange`| Function to handle response changes (not used in the current implementation).|
|**`responses`**| Array of existing responses. Each* response contains:|
|`questionId`| ID of the question.|
|`answer`| The recorded audio blob.|
|`type`| Type of response (e.g., `'audio'`).|
|||
|`setResponses`| Function to update the responses array.|
|`recordingAllowed`| Boolean to determine if recording is permitted.|
|`onStartRecording`| Callback function triggered when recording starts.|
|`onStopRecording`| Callback function triggered when recording stops.|
|`activeRecordingId`| ID of the currently active recording (used to manage audio playback).|



### Functions and Methods

1. `useEffect` Hooks
- **Initialization of Audio Blob**:
    - **Purpose**:
        - Populates the `audioBlob` state if a response for the current question exists.

- **Response Update**:
   - **Purpose**:
        - Updates the `responses` array with the recorded audio blob when recording stops.


2. `handleStartRecording`
- **Purpose**:
    - Initiates audio recording using the browser's `MediaRecorder` API.
    - Sets `recording` state to `true`.
    - Starts a timer to track remaining recording time.
    - Calls `onStartRecording` to notify the parent component.
    - Updates `audioBlob` state with the recorded audio when recording stops.
- **Error Handling**: Logs errors to the console if microphone access fails.

3. `handleStopRecording`
- **Purpose**:
    - Stops the ongoing audio recording.
    - Stops the `MediaRecorder` instance.
    - Clears the recording timer.
    - Sets `recording` state to `false`.

4. `handleClearRecording`
- **Purpose**:
    - Clears the recorded audio and resets the component state.
    - Resets `audioBlob` and `audioChunksRef`.
    - Removes the response for the current question from the `responses` array.

5. `handlePlay`
- **Purpose**:
    - Manages audio playback by pausing any previously playing audio.
    - Pauses the audio element referenced by `audioRefs`.
- **Parameters**:
  - `id`: ID of the audio element being played.

### Styling
| CSS Statement | Purpose |
|--------------|---------|
|**`.audio-player`**|Defines the styling for an audio player component.|
|`width: -webkit-fill-available`| Ensures the audio player takes up the available width in WebKit-based browsers (e.g., Chrome, Safari).|
|`width: fill-available`| Ensures the audio player takes up the available width in standard-compliant browsers.|

---

