---
sidebar_position: 2
---

# Models

## ResumeScoreWeights
Stores weightage for resume scoring criteria. Used to define the importance of different resume sections.

### Fields:
- **`user`** (ForeignKey): The user who created the weightage (optional).
- **`skills`** (DecimalField): Weight for skills (default: 0.3).
- **`work_experience`** (DecimalField): Weight for work experience (default: 0.3).
- **`projects`** (DecimalField): Weight for projects (default: 0.2).
- **`education`** (DecimalField): Weight for education (default: 0.1).
- **`certifications`** (DecimalField): Weight for certifications (default: 0.1).

---

## Job
Stores job postings and their associated details.

### Fields:
- **`title`** (CharField): The title of the job.
- **`description`** (TextField): The job description.
- **`jd_html`** (TextField): The job description in HTML format (optional).
- **`jd_json`** (JSONField): The job description in JSON format (optional).
- **`experience`** (IntegerField): Required experience for the job (optional).
- **`min_experience`** (IntegerField): Minimum required experience (optional).
- **`max_experience`** (IntegerField): Maximum required experience (optional).
- **`employment_type`** (CharField): Type of employment (e.g., full-time, part-time).
- **`location`** (CharField): Job location.
- **`must_have_skills`** (JSONField): List of must-have skills (optional).
- **`encrypted`** (CharField): Encrypted job ID (optional).
- **`published`** (BooleanField): Indicates if the job is published (default: `False`).
- **`close_date`** (DateTimeField): Job closing date (optional).
- **`new_applicant_notify`** (BooleanField): Notify on new applicants (default: `False`).
- **`created_at`** (DateTimeField): Timestamp when the job was created.
- **`updated_at`** (DateTimeField): Timestamp when the job was last updated.
- **`owner`** (ForeignKey): The user who created the job (optional).
- **`users_shared_with`** (ManyToManyField): Users with whom the job is shared.
- **`score_weight`** (ForeignKey): Weightage for resume scoring (optional).
- **`interview_module`** (ForeignKey): Associated interview module (optional).
- **`workflow`** (ForeignKey): Associated workflow (optional).
- **`is_deleted`** (BooleanField): Indicates if the job is deleted (default: `False`).
- **`deleted_by`** (ForeignKey): The user who deleted the job (optional).

### Methods:
- **`__str__`**: Returns the job title.

---

## FilterGroup
Stores filter groups for categorizing job criteria.

### Fields:
- **`owner`** (ForeignKey): The user who created the filter group.
- **`job`** (ForeignKey): The job associated with the filter group (optional).
- **`name`** (CharField): Name of the filter group (unique).
- **`skills`** (JSONField): Skills filter criteria.
- **`work_experience`** (JSONField): Work experience filter criteria.
- **`location`** (JSONField): Location filter criteria.
- **`ai_recommendations`** (BooleanField): Enable AI recommendations (default: `False`).

---

## Criteria
Stores criteria for evaluating candidates.

### Fields:
- **`job`** (ForeignKey): The job associated with the criteria.
- **`question`** (CharField): The question for the criteria.
- **`response_type`** (CharField): Type of response (e.g., dropdown, radio, checkbox).
- **`options`** (JSONField): List of options for the response (optional).
- **`expected_response`** (JSONField): Expected responses for the criteria (optional).
- **`is_deleted`** (BooleanField): Indicates if the criteria is deleted (default: `False`).

---

## CandidateResponse
Stores responses provided by candidates for specific criteria.

### Fields:
- **`candidate`** (ForeignKey): The candidate who provided the response.
- **`job`** (ForeignKey): The job associated with the response.
- **`criteria`** (ForeignKey): The criteria for which the response is provided.
- **`response`** (JSONField): The candidate's response.

### Meta:
- **`unique_together`**: Ensures a unique combination of `candidate`, `job`, and `criteria`.
