---
sidebar_position: 2
---


# Models

## PersonalityScreeningPreference
Stores preferences for personality screening, including settings related to resume screening and question sets.

### Fields:
- `max_retries` (PositiveIntegerField): Maximum number of retries allowed (default: `1`).
- `max_applicants` (PositiveIntegerField): Maximum number of applicants (default: `100`).
- `include_questions` (BooleanField): Whether questions are included (default: `True`).
- `service` (ForeignKey): Associated service (nullable, `on_delete=models.SET_NULL`).
- `question_set` (ForeignKey): Question set linked to the screening (nullable, `on_delete=models.SET_NULL`).

---

## PersonalityScreening
Represents a personality screening assigned to a candidate for a specific job.

### Fields:
- `key` (CharField): Unique identifier for the screening (auto-generated UUID).
- `step` (ForeignKey): Interview step associated with the screening (`on_delete=models.CASCADE`).
- `job` (ForeignKey): The job linked to the screening (nullable, `on_delete=models.CASCADE`).
- `candidate` (ForeignKey): The candidate taking the screening (nullable, `on_delete=models.CASCADE`).
- `question_set` (ForeignKey): Set of questions assigned to the screening (nullable, `on_delete=models.DO_NOTHING`).
- `questions` (ManyToManyField): Collection of questions included in the screening.
- `random_questions` (BooleanField): Whether questions should be randomized (default: `False`).
- `random_questions_count` (PositiveIntegerField): Number of random questions (default: `0`, nullable).
- `duration` (CharField): Time duration for the screening (nullable).
- `module` (ForeignKey): Interview module linked to the screening (nullable, `on_delete=models.DO_NOTHING`).
- `feedback` (TextField): Feedback given for the screening (nullable).
- `feedback_status` (BooleanField): Whether feedback is provided (default: `False`).
- `preference` (PositiveIntegerField): Preference setting for the screening (nullable).
- `revoked` (BooleanField): Indicates if the screening is revoked (default: `False`).
- `link_opened` (BooleanField): Whether the screening link has been opened (default: `False`).
- `link_opened_at` (DateTimeField): Timestamp when the link was opened (nullable).
- `started` (DateTimeField): Timestamp when the screening started (nullable).
- `completed` (BooleanField): Whether the screening is completed (nullable).
- `completed_time` (DateTimeField): Timestamp when the screening was completed (nullable).
- `status_text` (CharField): Status of the screening (default: `"Assigned"`, nullable).
- `assigned_by` (ForeignKey): User who assigned the screening (nullable, `on_delete=models.DO_NOTHING`).
- `revoked_by` (ForeignKey): User who revoked the screening (nullable, `on_delete=models.DO_NOTHING`).
- `approved_by` (ForeignKey): User who approved the screening (nullable, `on_delete=models.DO_NOTHING`).
- `users_shared_with` (ManyToManyField): Users who have shared access to the screening.
- `expired_at` (DateTimeField): Expiration timestamp of the screening (nullable).
- `approved_at` (DateTimeField): Timestamp when the screening was approved (nullable).
- `assigned_at` (DateTimeField): Timestamp when the screening was assigned (auto-generated, nullable).
- `is_approved` (BooleanField): Whether the screening is approved (default: `False`).
- `updated_at` (DateTimeField): Timestamp when the screening was last updated (nullable).
- `updated_by` (ForeignKey): User who last updated the screening (nullable, `on_delete=models.DO_NOTHING`).

### Methods:
- `__str__`: Returns a string representation of the personality screening.
