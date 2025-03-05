---
sidebar_position: 13
---

The `TranscriptTimeline` component is designed to display a synchronized transcript of an audio file. It fetches transcript data from an API, parses it, and highlights words in the transcript as the audio plays.

- **File Path**: `\hr-frontend\src\components\applicants\TranscriptTimeline.js`

### State Variables
- `transcriptData` (`Array<WordObject>`):
   - Stores the parsed transcript data fetched from the API.
   - Each `WordObject` contains:
     - `start` (`number`): Start time of the word in the audio.
     - `end` (`number`): End time of the word in the audio.
     - `punctuated_word` (`string`): The word with punctuation.

- `currentTime` (`number`):
   - Tracks the current playback time of the audio.

- `topics` (`Array<string>`):
   - Intended to store extracted topics from the transcript (currently unused in the rendered UI).


### Functions and Methods

1. `fetchTranscript`
- **Purpose**: 
  - Fetches transcript data from the API and updates the `transcriptData` state.
  - Updates `transcriptData` with parsed transcript words.
  - Logs parsed data and extracted topics to the console.
- **Error Handling**: Logs errors to the console if the fetch request fails.

2. `updateCurrentTime`
- **Purpose**:
  - Updates the `currentTime` state with the current playback time of the audio.
  - Adds and removes an event listener for the `timeupdate` event on the audio element.

3. `highlightWord`
- **Purpose**:
  - Determines if a word should be highlighted based on the current playback time.
- **Parameters**:
  - `start` (`number`): Start time of the word.
  - `end` (`number`): End time of the word.
- **Return Value**:
  - `boolean`: `true` if the word should be highlighted, otherwise `false`.

---