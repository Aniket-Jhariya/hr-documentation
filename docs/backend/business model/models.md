---
sidebar_position: 2
---

# Models

### Service
Defines services offered by the platform with different pricing models.

#### Fields:
- `name` (CharField): Name of the service.
- `description` (TextField): Description of the service.
- `key` (CharField): Unique key identifier.
- `credits` (PositiveIntegerField): Number of credits assigned to the service.
- `service_type` (CharField): Defines whether the service is `Pay-As-You-Go` or `One-Time`.

#### Methods:
- `__str__()`: Returns the name of the service.

---

### BusinessModel
Represents different business models under which services are offered.

#### Fields:
- `name` (CharField): Defines the business model type (`Consumption`, `Subscription`, etc.).
- `description` (TextField): Additional details about the model.

#### Methods:
- `__str__()`: Returns the human-readable display name of the business model.

---

### CreditTransaction
Tracks credit consumption within an organization.

#### Fields:
- `organization` (ForeignKey): Organization using the feature.
- `feature` (ForeignKey): Service being utilized.
- `user` (ForeignKey): User who used the feature.
- `timestamp` (DateTimeField): Date and time of usage.
- `credits_used` (PositiveIntegerField): Number of credits deducted.
- `content_id` (PositiveIntegerField): ID of the related content (optional).
- `feature_version` (CharField): Feature version (optional).
- `project_id` (PositiveIntegerField): Associated project ID (optional).
- `metadata` (JSONField): Additional metadata for the transaction.

---

### CreditAddition
Tracks credits added to an organization’s account.

#### Fields:
- `organization` (ForeignKey): Organization receiving the credits.
- `timestamp` (DateTimeField): Date and time of the credit addition.
- `credits_added` (IntegerField): Number of credits added.
- `added_by` (ForeignKey): User who added the credits.
- `remark` (TextField): Additional remarks (optional).

---

### SubscriptionPlan
Defines subscription plans available to organizations.

#### Fields:
- `name` (CharField): Subscription plan name.
- `monthly_cost` (DecimalField): Cost for monthly billing.
- `annual_cost` (DecimalField): Cost for annual billing.
- `feature_access` (JSONField): List of features included in the plan.

---

### OrganizationSubscription
Tracks active subscription plans for organizations.

#### Fields:
- `organization` (OneToOneField): Organization associated with the subscription.
- `plan` (ForeignKey): Subscribed plan.
- `start_date` (DateTimeField): Subscription start date.
- `end_date` (DateTimeField): Subscription end date.

---

### OrganizationService
Tracks negotiated service agreements between an organization and the platform.

#### Fields:
- `organization` (ForeignKey): Organization using the service.
- `service` (ForeignKey): Service provided.
- `negotiated_credits` (PositiveIntegerField): Custom credit allocation.

#### Meta Constraints:
- `unique_together`: Ensures each organization-service pair is unique.

#### Methods:
- `__str__()`: Returns a formatted string of the organization, service, and credits.

---

### FeatureUsage
Tracks the usage of features under a Pay-Per-Use model.

#### Fields:
- `organization` (ForeignKey): Organization using the feature.
- `feature` (ForeignKey): Feature being used.
- `content_id` (PositiveIntegerField): ID of the related content (optional).
- `user` (ForeignKey): User who accessed the feature.
- `timestamp` (DateTimeField): Date and time of usage.
- `usage_amount` (PositiveIntegerField): Number of units consumed.
- `project_id` (PositiveIntegerField): Associated project ID (optional).
- `metadata` (JSONField): Additional metadata for the usage.

---

### Invoice
Stores billing details for organizations.

#### Fields:
- `organization` (ForeignKey): Organization being billed.
- `period_start` (DateTimeField): Start date of the billing period.
- `period_end` (DateTimeField): End date of the billing period.
- `total_amount` (DecimalField): Total billed amount.
- `created_at` (DateTimeField): Invoice creation timestamp.


