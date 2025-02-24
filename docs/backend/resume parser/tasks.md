---
sidebar_position: 3
---

# Tasks

## File Upload System

### `upload_profile_pic_and_video_to_s3`
Uploads a candidate's profile picture and introduction video to S3.

#### Parameters:
- `candidate_id`: ID of the candidate.
- `profile_pic_path`: Path to the profile picture file.
- `resume_id`: ID of the resume.
- `introduction_video_path`: Path to the introduction video.

### `upload_resume_to_s3`
Uploads a resume file to S3.

#### Parameters:
- `resume_id`: ID of the resume.
- `resume_file_path`: Path to the resume file.
- `file_name`: Name of the file.

---

## Resume Processing System

### `convert_jd_to_json`
Converts a job description into a structured JSON format.

#### Parameters:
- `prompt_token`: Token count for the prompt.
- `completion_token`: Token count for completion.
- `total_token`: Total token count.
- `job_id`: ID of the job.
- `jd_text`: Job description text.
- `score_weight`: Weighting factors for scoring.

### `resume_parser`
Parses and analyzes resumes, scoring them based on relevance.

#### Parameters:
- `resume_text`: Raw text of the resume.
- `jd_json`: Job description in JSON format.
- `job_id`: ID of the job.
- `resume_id`: ID of the resume.
- `candidate_id`: ID of the candidate.
- `name`: Candidate's name.
- `email`: Candidate's email.
- `contact`: Contact details.
- `location`: Candidate's location.
- `linkedin`: LinkedIn profile URL.
- `github`: GitHub profile URL.
- `last_increment`: Last salary increment.
- `expected_ctc`: Expected salary.
- `current_ctc`: Current salary.
- `notice_period_in_months`: Notice period duration.
- `relevant_experience_in_months`: Relevant work experience.
- `responses_string`: JSON string containing responses.

---

## Audio Processing System

### `process_and_upload_audio`
Converts an audio file to WAV format and uploads it to S3.

#### Parameters:
- `file_path`: Path to the original audio file.
- `s3_path`: Path where the processed file will be uploaded in S3.

---

## Workflow System

### `process_candidate_stage`
Processes a candidate through workflow stages based on predefined rules.

#### Parameters:
- `candidate`: Candidate object.
- `applied_job`: Job object.
- `workflowstage_instance`: Current workflow stage instance.
- `resume_instance`: Resume instance.
- `candidate_id`: ID of the candidate.
- `location`: Candidate's location.
- `job_preference`: Job preferences for screening.

### `evaluate_conditions`
Evaluates predefined conditions to determine if a candidate meets certain criteria.

#### Parameters:
- `rule`: Rule object containing evaluation conditions.
- `rule_dict`: Dictionary representation of the rule.
- `conditions`: List of conditions to evaluate.
- `candidate`: Candidate object.
- `resume_instance`: Resume instance.
- `OPERATORS`: Dictionary of comparison operators.
- `user`: Job owner.
- `workflow`: Workflow object.
- `stage`: Current workflow stage.
- `job_instance`: Job object.
- `job_preference`: Candidate's job preference.
- `rule_alert_condition`: Condition list for triggering alerts.
- `single_alert_condition`: Single condition for alerts.
- `skip_inner`: Boolean to skip inner condition checks.

### `update_candidate_stage`
Updates the candidate stage with evaluation results.

#### Parameters:
- `candidate_stage_instance`: Candidate stage instance.
- `resume_instance`: Resume instance.
- `rejected`: Boolean indicating rejection.
- `status_text`: Status text.
- `reason`: Reason for the status.
- `rule`: Applied rule.
- `is_passed`: Boolean indicating pass/fail status.
---

## Resume Scoring System

### `resume_score`
Calculates a candidate's resume score based on skills, experience, projects, education, and certifications.

#### Parameters:
- `resume_json`: Parsed resume data.
- `must_have_skills`: List of required skills.
- `min_required_work_experience`: Minimum required work experience in months.
- `weights`: Weightage given to different categories.

### `cosine_similarity`
Calculates the cosine similarity between two text inputs to evaluate relevance.

#### Parameters:
- `text1`: First text input.
- `text2`: Second text input.

---

## Utility Functions

### `fetch_api_secret_key`
Retrieves an API key for a job or user.

#### Parameters:
- `job_id`: Job ID (optional).
- `user_id`: User ID (optional).

### `gpt4_response`
Generates a structured response using GPT-4.

#### Parameters:
- `prompt_token`: Token count for the prompt.
- `completion_token`: Token count for the response.
- `total_token`: Total token count.
- `prompt`: Prompt text for AI processing.
- `job_id`: Associated job ID.

### `calculate_work_experience`
Calculates total work experience duration from resume JSON.

#### Parameters:
- `resume_json`: Parsed resume data.

### `pdf_text`
Extracts text content from a PDF file.

#### Parameters:
- `path`: Path to the PDF file.

### `cost_per_1k_token_calculator`
Calculates API cost based on token usage.

#### Parameters:
- `input_tokens`: Number of input tokens.
- `output_tokens`: Number of output tokens.
- `model`: Model used for processing.

### `keyword_search`
Performs keyword matching between resume content and job requirements.

#### Parameters:
- `text`: Text content from the resume.
- `must_have`: List of must-have skills.

### `parse_date`
Parses date strings into a standard format.

#### Parameters:
- `date_str`: Date string to be parsed.

### `remove_email_addresses`
Removes email addresses from a given text.

#### Parameters:
- `text`: Input text containing email addresses.

### `remove_phone_numbers`
Removes phone numbers from a given text.

#### Parameters:
- `text`: Input text containing phone numbers.

