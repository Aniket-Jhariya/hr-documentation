---
sidebar_position: 2
---

# Models

## VideoAnalysis
Stores video analysis results for candidates' interview responses.

### Fields:
- `answers` (ForeignKey): The answer associated with the video analysis.
- `candidate` (ForeignKey): The candidate whose video is analyzed.
- `analysis_date` (DateTimeField): Timestamp when the analysis was performed.
- `emotion_counts` (JSONField): JSON data storing emotion recognition results.
- `success` (BooleanField): Indicates whether the analysis was successful.
- `message` (TextField): Status message from the analysis.
- `eye_analysis` (JSONField): JSON data for eye movement analysis.
- `audio_analysis` (JSONField): JSON data for audio analysis.
- `question` (TextField): The question answered in the video.
- `clarity_score` (FloatField): Score measuring clarity of response.
- `logical_thinking_score` (FloatField): Score measuring logical coherence.
- `articulation_score` (FloatField): Score for articulation quality.
- `language_proficiency_score` (FloatField): Score for language fluency.
- `response_quality_score` (FloatField): Score for overall response quality.
- `technical_correctness_score` (FloatField): Score for technical correctness.
- `clarity_explanation` (TextField): Explanation for clarity score.
- `logical_thinking_explanation` (TextField): Explanation for logical thinking score.
- `articulation_explanation` (TextField): Explanation for articulation score.
- `language_proficiency_explanation` (TextField): Explanation for language proficiency score.
- `response_quality_explanation` (TextField): Explanation for response quality score.
- `is_technical_question` (BooleanField): Indicates whether the question is technical.

### Methods:
- `__str__`: Returns a string representation of the video analysis.

---

## AudioAnalysis
Stores analysis data of candidates' audio responses.

### Fields:
- `analysis` (ForeignKey): The related video analysis.
- `candidate` (ForeignKey): The candidate whose audio is analyzed.
- `analysis_date` (DateTimeField): Timestamp when the analysis was performed.
- `field` (CharField): The specific speech feature analyzed.
- `label` (CharField): The label of the analyzed feature.
- `value` (FloatField): The numeric value of the analyzed feature.
- `units` (CharField): Measurement units for the analyzed feature.
- `ideal_range` (JSONField): JSON data storing the ideal range for the feature.
- `description` (TextField): Description of the analyzed feature.
- `ai_summary` (TextField): AI-generated summary of the audio analysis.
- `language` (CharField): Detected language of the speech.
- `transcription` (TextField): Transcribed text from the audio.
- `file_size` (BigIntegerField): Size of the audio file in bytes.

### Methods:
- `__str__`: Returns a string representation of the audio analysis.

---

## PersonalityScreeningSummary
Stores the summary of a candidate's personality screening evaluation.

### Fields:
- `candidate` (ForeignKey): The candidate being evaluated.
- `screening` (ForeignKey): The associated personality screening.
- `articulation_score` (FloatField): Score for articulation quality.
- `communication_score` (FloatField): Score for communication skills.
- `response_quality_score` (FloatField): Score for response coherence and relevance.
- `language_score` (FloatField): Score for language proficiency.
- `logical_thinking_score` (FloatField): Score for logical reasoning.
- `technical_score` (FloatField): Score for technical knowledge.
- `communication_exp` (TextField): Explanation for communication score.
- `logical_thinking_exp` (TextField): Explanation for logical thinking score.
- `articulation_exp` (TextField): Explanation for articulation score.
- `language_exp` (TextField): Explanation for language proficiency score.
- `response_quality_exp` (TextField): Explanation for response quality score.
- `questions_exp` (TextField): Explanation of how questions were answered.
- `technical_question_exp` (TextField): Explanation for technical question performance.
- `created_at` (DateTimeField): Timestamp when the screening summary was created.
- `updated_at` (DateTimeField): Timestamp when the screening summary was last updated.

### Methods:
- `__str__`: Returns a string representation of the personality screening summary.