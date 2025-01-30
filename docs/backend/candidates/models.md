---
sidebar_position: 2
---

# Models

## Candidate
Defines the `Candidate` model for storing candidate information.

### Fields:
- `name` (CharField): Name of the candidate.
- `email` (CharField): Email of the candidate.
- `contact` (CharField): Contact information of the candidate.
- `location` (JSONField): Location details of the candidate.
- `profile_pic` (ImageField): Profile picture of the candidate.
- `linkedin` (CharField): LinkedIn profile URL of the candidate.
- `github` (CharField): GitHub profile URL of the candidate.
- `experience` (JSONField): Work experience details of the candidate.
- `skills` (JSONField): Skills of the candidate.
- `created_at` (DateTimeField): Timestamp when the candidate was created.
- `updated_at` (DateTimeField): Timestamp when the candidate was last updated.
- `applied_jobs` (ManyToManyField): Jobs the candidate has applied to.
- `resumes` (ManyToManyField): Resumes associated with the candidate.
- `notice_period_in_months` (IntegerField): Notice period of the candidate in months.
- `current_ctc` (BigIntegerField): Current CTC of the candidate.
- `last_increment` (BigIntegerField): Last increment received by the candidate.
- `hired` (BooleanField): Indicates if the candidate has been hired.

### Methods:
- `__str__`: Returns the candidate's name.

---

## JobUniversalStatus
Defines the `JobUniversalStatus` model for tracking the status of a candidate's job application.

### Fields:
- `candidate` (ForeignKey): Reference to the `Candidate` model.
- `job` (ForeignKey): Reference to the `Job` model.
- `status` (CharField): Status of the job application (e.g., Applied, Hired, Rejected).
- `stage_name` (CharField): Current stage of the job application (e.g., Resume Screening, Assessment).
- `updated_at` (DateTimeField): Timestamp of the last update.
- `update_by` (ForeignKey): Reference to the `MyUser` model who updated the status.

### Methods:
- `__str__`: Returns a string representation of the candidate, job, and status.

---

## CandidateStageEvent
Defines the `CandidateStageEvent` model for tracking events related to a candidate's job application stages.

### Fields:
- `candidate` (ForeignKey): Reference to the `Candidate` model.
- `job` (ForeignKey): Reference to the `Job` model.
- `stage_name` (CharField): Name of the stage (e.g., Resume Screening, Assessment).
- `stage_key` (CharField): Key identifier for the stage (e.g., resume-screening).
- `timestamp` (DateTimeField): Timestamp of the event.
- `reason` (TextField): Optional reason for the event.
- `status` (CharField): Status of the event (e.g., pending, approved, rejected).
- `content_type` (CharField): Type of event content (e.g., Resume Screening).
- `content_id` (CharField): ID of the event content.
- `updated_by` (ForeignKey): Reference to the `MyUser` model who updated the event.
- `updated_at` (DateTimeField): Timestamp when the event was last updated.

### Methods:
- `__str__`: Returns a string representation of the event.
