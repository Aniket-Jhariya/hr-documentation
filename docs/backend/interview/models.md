---
sidebar_position: 2
---

# Models

## QuestionSet
Stores sets of questions for interviews or assessments.

### Fields:
- **`name`** (CharField): The name of the question set.
- **`created_by`** (ForeignKey): The user who created the question set.
- **`created_at`** (DateTimeField): Timestamp when the question set was created.

### Methods:
- **`__str__`**: Returns a string representation of the question set.

---

## Question
Stores individual questions used in assessments or interviews.

### Fields:
- **`text`** (TextField): The content of the question.
- **`type`** (CharField): The type of question (default: "text").
- **`time_limit`** (PositiveIntegerField): The time limit for answering the question.
- **`question_set`** (ForeignKey): The question set this question belongs to.
- **`created_at`** (DateTimeField): Timestamp when the question was created.
- **`created_by`** (ForeignKey): The user who created the question.
- **`is_deleted`** (BooleanField): Indicates if the question is deleted (default: `False`).

### Methods:
- **`__str__`**: Returns a string representation of the question.

---

## InterviewModule
Defines an interview process containing multiple steps.

### Fields:
- **`name`** (CharField): The name of the interview module.
- **`description`** (CharField): A short description of the interview module.
- **`steps_json`** (JSONField): JSON structure defining interview steps.
- **`rounds`** (PositiveIntegerField): The number of rounds in the interview.
- **`created_by`** (ForeignKey): The user who created the module.
- **`created_at`** (DateTimeField): Timestamp when the module was created.
- **`updated_at`** (DateTimeField): Timestamp when the module was last updated.
- **`updated_by`** (ForeignKey): The user who last updated the module.

### Methods:
- **`__str__`**: Returns a string representation of the module.

---

## InterviewStep
Defines an individual step within an interview process.

### Fields:
- **`job`** (ForeignKey): The job associated with this interview step.
- **`candidate`** (ForeignKey): The candidate participating in the step.
- **`module`** (ForeignKey): The interview module this step belongs to.
- **`service`** (ForeignKey): The service related to this step.
- **`order`** (PositiveIntegerField): The order of the step in the process.
- **`question_set`** (ForeignKey): The question set used in this step.
- **`preference`** (PositiveIntegerField): Preference level for this step.
- **`started`** (BooleanField): Whether the step has started.
- **`current`** (BooleanField): Whether the step is currently active.
- **`completed`** (BooleanField): Whether the step is completed.
- **`approved`** (BooleanField): Whether the step is approved.
- **`approved_by`** (ForeignKey): The user who approved the step.
- **`completed_time`** (DateTimeField): Timestamp when the step was completed.
- **`statusText`** (CharField): Textual status of the step (default: "Not Started").
- **`feedback`** (TextField): Feedback provided for this step.
- **`duration`** (CharField): The duration of this step.
- **`feedback_status`** (BooleanField): Indicates whether feedback has been provided.
- **`questions`** (ManyToManyField): Questions used in this step.
- **`random_questions`** (BooleanField): Whether questions are randomly selected.
- **`random_questions_count`** (PositiveIntegerField): The number of random questions.

### Meta:
- Unique together: (`candidate`, `module`, `order`)
- Ordering: [`module`, `order`]

---

## InterviewStepFeedback
Stores feedback given for interview steps.

### Fields:
- **`step`** (ForeignKey): The interview step being reviewed.
- **`candidate`** (ForeignKey): The candidate receiving feedback.
- **`rating`** (IntegerField): The rating given to the candidate.
- **`step_name`** (CharField): The name of the interview step.
- **`user`** (ForeignKey): The user providing the feedback.
- **`job`** (ForeignKey): The job associated with the feedback.
- **`feedback`** (TextField): The content of the feedback.
- **`created_at`** (DateTimeField): Timestamp when feedback was created.
- **`updated_at`** (DateTimeField): Timestamp when feedback was last updated.
- **`anonymous`** (BooleanField): Indicates if feedback was given anonymously.

---

## Answer
Stores answers submitted by candidates for interview questions.

### Fields:
- **`question`** (ForeignKey): The question being answered.
- **`question_text`** (TextField): The text of the question.
- **`question_set`** (ForeignKey): The question set this answer belongs to.
- **`candidate`** (ForeignKey): The candidate providing the answer.
- **`type`** (TextField): The type of answer (default: "text").
- **`screening_type`** (CharField): The type of screening process.
- **`screening_id`** (PositiveIntegerField): The ID of the screening.
- **`text`** (TextField): The text response.
- **`audio_file`** (FileField): The audio file of the response.
- **`video_file`** (FileField): The video file of the response.
- **`video_thumbnail`** (FileField): The thumbnail for the video response.
- **`video_analysis`** (OneToOneField): Video analysis of the response.
- **`started`** (DateTimeField): Timestamp when the answer was started.
- **`submitted_at`** (DateTimeField): Timestamp when the answer was submitted.
- **`step`** (ForeignKey): The interview step this answer belongs to.
- **`duration`** (IntegerField): The duration taken to answer.

### Methods:
- **`__str__`**: Returns a string representation of the answer.

---


