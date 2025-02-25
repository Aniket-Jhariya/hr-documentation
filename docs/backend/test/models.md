---
sidebar_position: 2
---

# Models

## Difficulty
Stores different difficulty levels and their respective multipliers.

### Fields:
- `difficulty` (CharField): Name of the difficulty level.
- `multiplier` (FloatField): Weight multiplier for the difficulty level.

### Methods:
- `__str__`: Returns a string representation of the difficulty.

---

## Domain
Represents different domains of knowledge.

### Fields:
- `name` (CharField): Name of the domain.
- `description` (TextField): Description of the domain.

### Methods:
- `__str__`: Returns the name of the domain.

---

## Category
Represents categories under different domains.

### Fields:
- `name` (CharField): Name of the category.
- `description` (TextField): Description of the category.
- `domains` (ManyToManyField): Domains associated with the category.

### Methods:
- `__str__`: Returns the name of the category.

---

## Questions
Stores test questions and related data.

### Fields:
- `text` (TextField): Question text.
- `html_content` (TextField): HTML-formatted content.
- `type` (CharField): Question type (default: "text").
- `difficulty` (ForeignKey): Related difficulty level.
- `domain` (CharField): Domain related to the question.
- `choices` (JSONField): Answer choices in JSON format.
- `photo` (FileField): Optional question image.
- `query` (CharField): SQL query if applicable.
- `created_by` (ForeignKey): User who created the question.
- `created_at` (DateTimeField): Timestamp when created.
- `updated_by` (ForeignKey): User who last updated the question.
- `time_limit` (IntegerField): Time limit for answering.
- `points` (IntegerField): Default points assigned to the question.
- `question_set` (ManyToManyField): Question sets the question belongs to.

### Methods:
- `__str__`: Returns a string representation of the question.

---

## Test
Stores test-related data and settings.

### Fields:
- `title` (CharField): Title of the test.
- `key` (TextField): Unique identifier.
- `created_at` (DateTimeField): Timestamp when created.
- `description` (CharField): Description of the test.
- `created_by` (ForeignKey): User who created the test.
- `total_question` (IntegerField): Total number of questions.
- `updated_by` (ForeignKey): User who last updated the test.
- `time_duration` (IntegerField): Time duration for the test.
- `question` (ManyToManyField): Associated questions.
- `difficulty` (ForeignKey): Difficulty level.
- `domain` (ManyToManyField): Domains associated.
- `category` (ManyToManyField): Related categories.
- `type` (CharField): Type of test (e.g., "aptitude").
- `is_deleted` (BooleanField): Indicates if the test is deleted.
- `is_published` (BooleanField): Indicates if the test is published.
- `published_by` (ForeignKey): User who published the test.
- `deleted_by` (ForeignKey): User who deleted the test.
- `users_shared_with` (ManyToManyField): Users the test is shared with.

### Methods:
- `__str__`: Returns the test title.

---

## TestLog
Tracks candidates assigned to tests.

### Fields:
- `test` (ManyToManyField): Related tests.
- `prebuilt_assessment` (ManyToManyField): Related assessments.
- `test_type` (CharField): Type of test.
- `key` (TextField): Unique key.
- `preference` (ForeignKey): Test preferences.
- `job` (ForeignKey): Job associated with the test.
- `assigned_to` (ForeignKey): Candidate assigned.
- `assigned_by` (ForeignKey): User who assigned the test.
- `assigned_at` (DateTimeField): Assignment timestamp.
- `completed` (BooleanField): Indicates if the test is completed.
- `completed_at` (DateTimeField): Completion timestamp.
- `valid_from` (DateTimeField): Test validity start.
- `valid_to` (DateTimeField): Test validity end.
- `started` (BooleanField): Indicates if the test has started.
- `started_at` (DateTimeField): Start timestamp.
- `link_opened` (BooleanField): Indicates if the test link was opened.
- `link_opened_at` (DateTimeField): Timestamp when opened.
- `is_approved` (BooleanField): Indicates if the candidate is approved.
- `approved_at` (DateTimeField): Approval timestamp.
- `approved_by` (ForeignKey): User who approved the test.
- `status_text` (CharField): Status of the test.
- `updated_by` (ForeignKey): User who last updated the log.
- `updated_at` (DateTimeField): Timestamp of last update.
- `users_shared_with` (ManyToManyField): Users with access.
- `proctoring` (ForeignKey): Proctoring details.
- `average_percentage` (FloatField): Average test score.

---

## Answers
Stores candidates' test responses.

### Fields:
- `question` (ForeignKey): Question being answered.
- `submitted_at` (DateTimeField): Timestamp of submission.
- `text` (TextField): Answer text.
- `type` (CharField): Type of response.
- `job` (ForeignKey): Related job.
- `candidate` (ForeignKey): Candidate who answered.
- `test` (ForeignKey): Related test.
- `prebuilt_assessment` (ForeignKey): Related assessment.
- `test_type` (CharField): Type of test.
- `test_log` (ForeignKey): Related test log.
- `correct` (BooleanField): Indicates if the answer is correct.
- `selected_choice` (JSONField): Selected answer choices.
- `query` (TextField): SQL query answer (if applicable).
- `started_at` (DateTimeField): Start timestamp.

---

## Result
Stores test results for candidates.

### Fields:
- `id` (UUIDField): Unique ID.
- `test` (ForeignKey): Related test.
- `prebuilt_assessment` (ForeignKey): Related assessment.
- `test_type` (CharField): Type of test.
- `candidate` (ForeignKey): Candidate who took the test.
- `test_log` (ForeignKey): Related test log.
- `job` (ForeignKey): Related job.
- `score` (FloatField): Candidate's score.
- `correct_answer_count` (IntegerField): Count of correct answers.
- `wrong_answer_count` (IntegerField): Count of incorrect answers.

### Methods:
- `__str__`: Returns a string representation of the result.

