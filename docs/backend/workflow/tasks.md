---
sidebar_position: 3
---

# Tasks

### `next_stage`
Handles the transition of a candidate to the next stage in the workflow.

#### Parameters:
- `sender`: The sender of the signal.
- `instance`: The current workflow stage instance.
- `candidate_id`: List of candidate IDs moving to the next stage.
- `user_id`: ID of the user initiating the transition.
- `kwargs`: Additional parameters passed to the signal.

---

### `assign_test_and_send_email`
Assigns assessments to candidates and sends them an email with the assessment details.

#### Parameters:
- `candidate_id`: List of candidate IDs receiving the test.
- `user_id`: ID of the user assigning the test.
- `valid_from`: Start date and time for the test validity.
- `valid_to`: End date and time for the test validity.
- `job_id`: ID of the job associated with the test.
- `user_owned_assessments`: List of IDs for user-owned assessments.
- `prebuilt_assessments`: List of IDs for prebuilt assessments.
- `preferences`: Test preferences.
- `assessments`: List of assessments to be assigned.

---

### `send_alert`
Sends an email notification when an alert condition is met.

#### Parameters:
- `sender`: The sender of the signal.
- `instance`: The alert instance being triggered.
- `user`: The user associated with the alert.
- `candidate`: The candidate for whom the alert is triggered.
- `condition`: The condition that triggered the alert.
- `workflow`: The workflow associated with the alert.
- `stage`: The workflow stage related to the alert.
- `job_name`: The job associated with the alert.
- `candidate_value`: The value triggering the alert condition.
- `field_name`: The field name related to the alert condition.
- `alert_on_rule`: Whether the alert is triggered based on a rule.

---

