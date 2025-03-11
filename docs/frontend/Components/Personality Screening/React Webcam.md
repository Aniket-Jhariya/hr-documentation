---
sidebar_position: 3
---

## Video Recorder

The `VideoRecorder.js` file is a React component designed to handle video and audio recording functionality within a React project. It utilizes the `react-webcam` library to capture media streams and the `MediaRecorder` API to record and upload video chunks to a server. The component manages recording state, chunk uploads, and finalizes the upload process once all chunks are sent.

- **Dependencies**:
  - `react-webcam`: Used to capture video and audio streams from the user's device.
  - `MediaRecorder API`: Handles recording and chunking of media streams.

### State Variables
| Variable Name|Purpose|
|---|---|
|`uploadId`| Stores the unique ID for the video upload session.|
|`partNumber`| Tracks the current part number of the video chunk being uploaded.|
|`isRecording`| Boolean to indicate whether recording is in progress.|
|`chunks`| Array to store recorded video chunks.|
|`uploadedParts`| Array to store metadata of uploaded chunks.|
|`capturing`| Boolean to indicate if recording is active.|
|`videoChunks`| Array to store video-specific chunks.|
|`audioChunks`| Array to store audio-specific chunks.|

### Functions and Methods

1. `initializeMediaRecorders`
- **Purpose**: 
  - Initializes separate `MediaRecorder` instances for video and audio streams.
  - Creates `MediaRecorder` instances for video and audio streams.
  - Attaches event listeners for `dataavailable` events to handle video and audio chunks.

2. `handleStartRecording`
- **Purpose**: 
  - Starts the recording process.
  - Sets `isRecording` to `true`.
  - Resets `chunks` and `uploadedParts` arrays.
  - Initializes a new `MediaRecorder` instance and starts recording.

3. `handleStopRecording`
- **Purpose**: 
  - Stops the recording process and triggers chunk uploads.
  - Sets `isRecording` to `false`.
  - Stops the `MediaRecorder` instance.
  - Calls `uploadChunks` to upload recorded chunks.

4. `uploadChunks`
- **Purpose**:
  - Uploads recorded video chunks to the server.
  - Iterates through `chunks` and uploads each chunk using a `POST` request.
  - Updates `uploadId` and `uploadedParts` state.
  - Increments `partNumber` for each chunk.
  - Calls `completeUpload` after all chunks are uploaded.

5. `completeUpload`
- **Purpose**: 
  - Finalizes the video upload process.
  - Sends a `PUT` request to the server to complete the upload.
  - Logs the response to the console.

---

# WebcamRec Component Documentation

## Summary
The `WebcamRec` component is designed to handle video and audio recording using the webcam and microphone. It integrates with the MediaRecorder API to capture media streams, split them into chunks, and upload these chunks to a server.

- **Dependencies**
  - `uuid`: Used to generate unique identifiers for video sessions.
  - `react-webcam`: Commented out but intended for webcam integration.
  - `MediaRecorder` API: Core API for recording media streams.
  - `fetch` API: Used for uploading chunks to the server.

### State Variables
| Variable Name|Purpose|
|---|---|
|`capturing`| A boolean state that tracks whether recording is currently active.|
|`videoChunks`| An array that stores video data chunks captured during recording.|
|`audioChunks`| An array that stores audio data chunks captured during recording.|
|`mediaOn`| A boolean state to track if media (webcam/microphone) is active.|
|`currentChunk`| Stores the most recent video chunk for processing.|
|`videoId`| A unique identifier for the video recording session.|
|`uploadId`| A unique identifier for the upload session (used for chunked uploads).|
|`partNumber`| Tracks the current part number for chunked uploads.|
|`uploadedParts`| An array that tracks uploaded parts with their `PartNumber` and `ETag`.|

### Functions and Methods

1. `initializeMediaRecorders`
- **Purpose**:
  - Initializes `MediaRecorder` instances for video and audio streams.
  - Creates `MediaRecorder` instances for video and audio.
  - Attaches event listeners for `dataavailable` events.

2. `handleStartCaptureClick`
- **Purpose**:
  - Starts the video and audio recording process.
  - Generates a unique `videoId` using `uuidv4`.
  - Starts recording for both video and audio `MediaRecorder` instances.
  - Resets `uploadedParts` and `partNumber` for new recording sessions.
- **Parameters**:
  - `e`: Event object (optional).
  
3. `handleStopCaptureClick`
- **Purpose**: 
  - Stops the video and audio recording process.
  - Stops both video and audio `MediaRecorder` instances.
  - Sets `capturing` state to `false`.

4. `handleVideoDataAvailable`
- **Purpose**: 
  - Handles video data chunks when available.
  - Updates `videoChunks` state with the new chunk.
  - Sets `currentChunk` for further processing.
- **Parameters**:
  - `data`: The video data chunk.

5. `handleAudioDataAvailable`
- **Purpose**:
  - Handles audio data chunks when available.
  - Updates `audioChunks` state with the new chunk.
- **Parameters**:
  - `data`: The audio data chunk.

6. `uploadChunk`
- **Purpose**:
  - Uploads a media chunk to the server.
  - Sends the chunk to the server using a `POST` request.
  - Updates `uploadId`, `uploadedParts`, and `partNumber` states.
- **Parameters**:
  - `chunk`: The media chunk to upload.
  - `type`: The MIME type of the chunk (`video/webm` or `audio/webm`).
  - `videoId`: Unique identifier for the video session.
  - `uploadId`: Unique identifier for the upload session.
  - `partNumber`: The current part number for chunked uploads.
  - `uploadedParts`: Array of uploaded parts.

7. `handleDownload`
- **Purpose**:
  - Downloads recorded media as a file.
  - Creates a downloadable blob from the chunks.
  - Triggers a file download in the browser.
- **Parameters**:
  - `chunks`: Array of media chunks.
  - `type`: The MIME type of the media (`video/webm` or `audio/webm`).

---
