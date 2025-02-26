---
sidebar_position: 2
---

# Models

## WorkFlow
Stores information about different workflows used in job processing.

### Fields:
- `name` (CharField): The name of the workflow.
- `description` (TextField): A brief description of the workflow.
- `created_by` (ForeignKey): The user who created the workflow.
- `created_at` (DateTimeField): Timestamp when the workflow was created.
- `updated_by` (ForeignKey): The user who last updated the workflow.
- `updated_at` (DateTimeField): Timestamp when the workflow was last updated.
- `users_shared_with` (ManyToManyField): Users with whom the workflow is shared.
- `notify_on_completion` (BooleanField): Indicates whether notifications should be sent upon completion.
- `enabled` (BooleanField): Whether the workflow is active.

### Methods:
- `__str__`: Returns a string representation of the workflow.

---

## StageRules
Defines rules associated with different workflow stages.

### Fields:
- `rule` (JSONField): JSON representation of the rule.
- `created_by` (ForeignKey): The user who created the rule.
- `created_at` (DateTimeField): Timestamp when the rule was created.
- `updated_by` (ForeignKey): The user who last updated the rule.
- `updated_at` (DateTimeField): Timestamp when the rule was last updated.
- `key` (CharField): A unique key to identify the rule.
- `service` (ForeignKey): The service associated with this rule.
- `alert_on_success` (BooleanField): Whether alerts should be triggered when the rule passes.

### Methods:
- `__str__`: Returns a string representation of the rule.

---

## WorkFlowStages
Defines the stages in a workflow.

### Fields:
- `workflow` (ForeignKey): The workflow associated with the stage.
- `stage_name` (CharField): The name of the stage.
- `rule` (ForeignKey): The rule applied at this stage.
- `stage_configuration` (JSONField): Configuration data for the stage.
- `order` (IntegerField): The order of the stage in the workflow.

### Methods:
- `__str__`: Returns a string representation of the workflow stage.

---

## Alert
Defines alerts triggered by rules in workflow stages.

### Fields:
- `name` (CharField): The name of the alert.
- `description` (TextField): A brief description of the alert.
- `user` (ForeignKey): The user associated with the alert.
- `stage` (ForeignKey): The workflow stage where the alert applies.
- `rule` (ForeignKey): The rule triggering the alert.
- `condition` (JSONField): The condition that triggers the alert.
- `enabled` (BooleanField): Whether the alert is active.

### Methods:
- `__str__`: Returns a string representation of the alert.

---

## CandidateStage
Tracks a candidate's progress through workflow stages.

### Fields:
- `workflow_stage` (ForeignKey): The stage the candidate is currently in.
- `job` (ForeignKey): The job associated with the candidate.
- `candidate` (ForeignKey): The candidate assigned to the stage.
- `stage_name` (CharField): Name of the current stage.
- `started_at` (DateTimeField): Timestamp when the stage started.
- `completed_at` (DateTimeField): Timestamp when the stage was completed.
- `completed` (BooleanField): Whether the stage is completed.
- `is_approved` (BooleanField): Whether the candidate was approved.
- `rejected` (BooleanField): Whether the candidate was rejected.
- `rule` (JSONField): The rule applied at this stage.
- `reason` (TextField): The reason for approval or rejection.
- `status_text` (CharField): Status of the candidate in the stage.
- `approved_at` (DateTimeField): Timestamp when approved.
- `rejected_at` (DateTimeField): Timestamp when rejected.
- `is_passed` (BooleanField): Whether the candidate passed the stage.

### Methods:
- `__str__`: Returns a string representation of the candidate stage.

---

## FieldRules
Defines validation rules for various fields in the system.

### Fields:
- `name` (CharField): The name of the field rule.
- `service` (ForeignKey): The service associated with the rule.
- `key` (CharField): A unique key for identifying the rule.
- `datatype` (CharField): The type of data expected (e.g., string, number).
- `data_source` (CharField): The source of data for validation.

### Methods:
- `__str__`: Returns a string representation of the field rule.

