---
sidebar_position: 4
---

The `AudioPlayer` component is a reusable React component designed to play and control audio files. It provides basic playback functionality, including play/pause toggling, progress tracking, and seeking.

- **File Path**: `\hr-frontend\src\components\applicants\ApplicantTracking.js`
- **Dependencies**
  - `@heroicons/react/24/solid`: Provides the `PlayIcon` and `PauseIcon` components for the play/pause button.


### Props
|Prop Name| Description|
|---|---|
| `audioUrl`| The URL of the audio file to be played. This is a required prop.|

### State Variables
| Variable Name|Purpose|
|---|---|
| `isPlaying` | Tracks whether the audio is currently playing.|
| `currentTime` | Tracks the current playback time in seconds.|
| `duration` | Tracks the total duration of the audio in seconds.|

### Functions and Methods

1. `togglePlayPause`
- **Purpose**: 
  - Toggles between playing and pausing the audio.
  - Updates the `isPlaying` state.
  - Calls `play()` or `pause()` on the `<audio>` element.
- **Error Handling**: Logs errors to the console if audio playback fails.

2. `handleTimeUpdate`
- **Purpose**:
  - Updates the `currentTime` state as the audio plays.
  - Updates the `currentTime` state with the current playback time.

3. `handleLoadedMetadata`
- **Purpose**: 
  - Sets the `duration` state when the audio metadata is loaded.
  - Updates the `duration` state with the total duration of the audio.

4. `handleProgressClick`
- **Purpose**: 
  - Seeks the audio to a specific position based on user interaction with the progress bar.
  - Updates the `currentTime` state.
  - Sets the `currentTime` of the `<audio>` element.
- **Parameters**:
  - `event` (`MouseEvent`): The click event on the progress bar.

5. `formatTime`
- **Purpose**: 
  - Formats a time value (in seconds) into a `mm:ss` string.
- **Parameters**:
  - `time` (`number`): The time in seconds to format.
- **Return Value**: A formatted string in `mm:ss` format.

---
