---
sidebar_position: 3
---

# Tasks


## **S3 File Handling**

### `upload_file_to_s3`
Reads the file from the local path and uploads it to the specified S3 path. Deletes the local file after successful upload.

#### Parameters:
- `file_path`: Local path of the file to upload.
- `s3_path`: Destination path in the S3 bucket.
- `answer_id`: ID of the answer associated with the file.
- `file_type`: Type of the file being uploaded.

---

### `download_video_from_s3`
Downloads a video file from an S3 bucket to a local temporary directory. Returns the local file path of the downloaded video.

#### Parameters:
- `answer_id`: ID of the answer associated with the video.
- `object_key`: Key (path) of the video file in the S3 bucket.

---

## **Video and Audio Processing**

### `process_video_and_audio`
Triggers the `process_video_responses` function to analyze the video and audio. Cleans up temporary files after processing.

#### Parameters:
- `video_path`: Path to the video file.
- `audio_path`: Path to the audio file.
- `answer_id`: ID of the answer associated with the video and audio.
- `screening_id`: ID of the screening instance.
- `last_answer_id`: ID of the last answer in the screening.
- `duration`: Duration of the video.

---

### `process_video_responses`
Analyzes the video and audio to extract emotion counts, speech features, and transcript. Saves the analysis results to the `VideoAnalysis` model. Triggers summarization if the current answer is the last one in the screening.

#### Parameters:
- `video_path`: Path to the video file.
- `audio_path`: Path to the audio file.
- `answer_id`: ID of the answer associated with the video and audio.
- `screening_id`: ID of the screening instance.
- `last_answer_id`: ID of the last answer in the screening.
- `duration`: Duration of the video.

---

### `process_video`
Extracts pitch, loudness, and other speech features from the audio. Generates scores for clarity, logical thinking, articulation, language proficiency, response quality, and technical correctness using GPT. Saves the results to the database.

#### Parameters:
- `video_path`: Path to the video file.
- `audio_path`: Path to the audio file.
- `answer_id`: ID of the answer associated with the video and audio.
- `user_id`: ID of the user who created the question.
- `question`: Text of the question.
- `can_id`: ID of the candidate.

---

### `summarize_text`
Aggregates and summarizes text data from video analysis results. Saves the summarized data to the `PersonalityScreeningSummary` model.

#### Parameters:
- `user_id`: ID of the user.
- `candidate_id`: ID of the candidate.
- `screening_id`: ID of the screening instance.
- `org_id`: ID of the organization.

---

### `transcrib`
Transcribes audio to text using the Whisper model and detects the language. Returns the transcription text and detected language.

#### Parameters:
- `audio_path`: Path to the audio file.

---

### `extract_pitch`
Extracts pitch values from an audio file using both Librosa and Parselmouth (Praat). Returns the average pitch values.

#### Parameters:
- `audio_file`: Path to the audio file.

---

### `extract_pitch_variation`
Extracts pitch variation from an audio file. Measures the variability in pitch using Librosa. Returns the pitch variation.

#### Parameters:
- `audio_file`: Path to the audio file.

---

### `extract_prosody_features`
Extracts prosody features from an audio file such as average pitch, pitch variability, intensity, and speech tempo. Returns the extracted features.

#### Parameters:
- `audio_file`: Path to the audio file.

---

### `extract_hnr`
Extracts Harmonic-to-Noise Ratio (HNR) from an audio file using Parselmouth (Praat). Returns the average HNR value.

#### Parameters:
- `audio_file`: Path to the audio file.

---

### `extract_loudness`
Extracts loudness from an audio file. Calculates the root mean square energy (loudness) using Librosa. Returns the average loudness.

#### Parameters:
- `audio_file`: Path to the audio file.

---

### `analyze_speech`
Analyzes speech features from an audio file such as rate of speech, phonation time ratio, articulation rate, and pause durations. Returns the speech features and transcription text.

#### Parameters:
- `audio_file`: Path to the audio file.
- `text`: Transcription text of the audio.

---

### `get_emotion_counts`
Extracts emotion counts from a video file. Uses a pre-trained model to detect emotions in the video. Returns the counts of detected emotions.

#### Parameters:
- `video_path`: Path to the video file.
- `confidence_threshold`: Confidence threshold for emotion detection.

---

## **Email Notifications**

### `send_personality_screening_emails`
Sends personality screening emails to candidates with a link to the personality screening. Logs the email sending process and updates candidate stage events.

#### Parameters:
- `candidates_data`: List of candidate data including candidate ID, name, email, job title, etc.
- `expired_at`: Expiration date of the screening link.
- `job_id`: ID of the job.
- `user_id`: ID of the user sending the email.
- `screening_id`: ID of the screening instance.

---

## **Miscellaneous**

### `download_video_audio_to_process`
Downloads video from S3, extracts audio, and triggers further processing. Triggers the `process_video_and_audio` task for further processing.

#### Parameters:
- `instance_id`: ID of the screening instance.

---

## **NotificationsConsumer**

Handles WebSocket connections for real-time notifications.

### Methods:
- **`connect`**: Establishes a WebSocket connection and adds the user to a notification group.
- **`disconnect`**: Removes the user from the notification group upon disconnection.
- **`receive`**: Handles incoming messages and broadcasts them to the group.
- **`send_notification`**: Sends notification messages to the WebSocket client.

---

## **Email Notification System**

### `generate_email_template`
Generates an HTML email template with dynamic placeholders.

#### Parameters:
- `job_name`: Job title.
- `company_logo`: URL to the company logo.
- `headline`: Main heading for the email.
- `receiver_name`: Recipient's name.
- `body`: Main email content.
- `company_name`: Name of the company.
- `support_email`: Contact email.

---
---
