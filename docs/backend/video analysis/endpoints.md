---
sidebar_position: 1
---

# Endpoints

# API Endpoints Documentation

## Endpoints

### `process-video-responses/`
- **View:** ProcessVideoResponsesView
- Processes video responses for screening analysis.

#### **Payload**
- **POST**

#### **Response**
```json
{
    "message": "Processing started successfully"
}
```

---

## ViewSets

### `VideoAnalysisViewSet`
Handles CRUD operations for the `VideoAnalysis` model.

#### **Purpose:**
- Analyzes video responses for candidates.
- Processes video and audio files.
- Computes emotion detection, eye analysis, and speech analysis.
- Restricted to authenticated users (`IsAuthenticated`).

#### **Payload**
- **GET**

**Response**
```json
{
    "candidate": 123,
    "analysis_date": "2025-02-25T12:34:56Z",
    "emotion_counts": {
        "Happy": 10,
        "Neutral": 5
    },
    "eye_analysis": {
        "Total Blinks": 15,
        "Looked Left Count": 8
    },
    "audio_analysis": {
        "Rate of Speech": 2.5,
        "Phonation Time Ratio": 85.0
    },
    "success": true,
    "message": "Analysis Completed"
}
```

---

### `SpeechAnalysisViewSet`
Handles speech processing for audio files.

#### **Purpose:**
- Extracts speech features such as rate of speech, pauses, and articulation rate.
- Detects silent pauses and dysfluencies.
- Computes phonation time ratio and filled pauses.
- Restricted to authenticated users (`IsAuthenticated`).

---

### `EyeAnalysisViewSet`
Handles eye-tracking analysis from video frames.

#### **Purpose:**
- Tracks eye movement and blinks.
- Determines gaze direction: left, right, or center.
- Computes total blinks and percentage of gaze in each direction.
- Restricted to authenticated users (`IsAuthenticated`).

