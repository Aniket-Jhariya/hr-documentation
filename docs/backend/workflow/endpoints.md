---
sidebar_position: 1
---


# Endpoints

### `stage/<int:stage_id>/rule/`
- **View:** StageRuleView
- Retrieves the rule associated with a given workflow stage.

**Payload**
- **GET**

| Response Code | Description |
|--------------|-------------|
| 200 | SUCCESS: Returns stage rule details |
| 404 | FAIL: Stage not found / No rule associated |

---

### `stage/<int:stage_id>/alert/`
- **View:** AlertView
- Retrieves alerts associated with a workflow stage.

**Payload**
- **GET**

| Response Code | Description |
|--------------|-------------|
| 200 | SUCCESS: Returns alert details |
| 404 | FAIL: No alerts found |

---

### `move-to-nextstage/`
- **View:** MoveToNextStage
- Moves a candidate to the next workflow stage.

**Payload**
- **PATCH**
```json
{
    "candidate_id": 456,
    "job_id": 1234
}
```

| Response Code | Description |
|--------------|-------------|
| 200 | SUCCESS: Candidate moved to the next stage |
| 404 | FAIL: Job or candidate not found |

---

## ViewSets

### `WorkFlowViewSet`
Handles CRUD operations for the `WorkFlow` model.

**Purpose:**
- Retrieves workflows created by or shared with the user.
- Supports assignment of workflows to jobs.
- Uses `WorkFlowWithStagesSerializer` when listing workflows.
- Restricted to authenticated users.

---

### `StageRulesViewSet`
Handles CRUD operations for stage rules in workflows.

**Purpose:**
- Manages validation rules applied to different workflow stages.
- Supports creation and updating of rules with automatic alert generation.
- Restricted to authenticated users.

---

### `WorkFlowStageViewSet`
Handles CRUD operations for workflow stages.

**Purpose:**
- Allows defining stages within a workflow.
- Supports linking rules and configurations to specific stages.
- Uses `WorkFlowStagesWithRulesSerializer` for detailed responses.
- Restricted to authenticated users.

---

### `AlertViewSet`
Handles CRUD operations for the `Alert` model.

**Purpose:**
- Manages alerts triggered by workflow rules.
- Allows creation, updating, and retrieval of alerts.
- Ensures alerts have required fields like field name, operator, and value.
- Restricted to authenticated users.


