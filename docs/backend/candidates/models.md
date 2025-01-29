---
sidebar_position: 2
---


# Models

## Organization
Represents an organization with attributes such as name, domain, logos, location, and services offered.

### Fields:
- `logo` (ImageField): Primary logo of the organization.
- `secondary_logo` (ImageField): Secondary logo of the organization.
- `org_id` (BigAutoField): Primary key, auto-generated.
- `org_domain` (CharField): Unique domain of the organization.
- `org_name` (CharField): Name of the organization.
- `org_tier` (CharField): Tier of the organization.
- `org_location` (CharField): Location of the organization.
- `services` (ManyToManyField): Related to `Service`.
- `credits` (PositiveIntegerField): Organization credits (default: 0).
- `business_model` (ForeignKey): Related to `BusinessModel`.
- `support_email` (EmailField): Support email address.
- `created_at` (DateTimeField): Timestamp of creation.
- `is_verified` (BooleanField): Verification status.
- `is_active` (BooleanField): Activation status.
- `is_email_sent` (BooleanField): Email sent status.
- `updated_by` (ForeignKey): Reference to the user who last updated.
- `created_by` (ForeignKey): Reference to the user who created it.
- `updated_at` (DateTimeField): Timestamp of last update.

### Methods:
- `__str__`: Returns the organization name.
---

## Roles
Defines roles for users.

### Fields:
- `name` (CharField): Name of the role.

### Methods:
- `__str__`: Returns the role name.

---
## MyUserManager
Custom manager for the `MyUser` model.

### Methods:
- `_create_user`: Creates and saves a user.
- `create_user`: Creates a regular user.
- `create_superuser`: Creates a superuser.
---

## MyUser
Custom user model extending `AbstractBaseUser` and `PermissionsMixin`.

### Fields:
- `org` (ForeignKey): Organization to which the user belongs.
- `name` (CharField): Full name of the user.
- `username` (CharField): Unique username.
- `position` (CharField): Job position.
- `profile_pic` (ImageField): Profile picture.
- `email` (EmailField): Unique email address (used for authentication).
- `contact` (BigIntegerField): Contact number.
- `role` (ForeignKey): Role assigned to the user.
- `state` (CharField): State of residence.
- `country` (CharField): Country of residence.
- `is_active` (BooleanField): Active status.
- `is_staff` (BooleanField): Staff status.
- `is_superuser` (BooleanField): Superuser status.
- `is_superadmin` (BooleanField): Superadmin status.
- `is_admin` (BooleanField): Admin status.
- `created_at` (DateTimeField): Timestamp of creation.
- `updated_at` (DateTimeField): Timestamp of last update.
- `invited_by` (ForeignKey): Reference to another user who invited this user.
- `agree_to_terms_and_conditions` (BooleanField): User agreement to terms.

### Methods:
- `__str__`: Returns the user's name.

---

## DemoRequest
Tracks requests for product demos.

### Fields:
- `first_name` (CharField): First name of the requester.
- `last_name` (CharField): Last name of the requester.
- `email` (EmailField): Unique email address.
- `phone` (CharField): Contact number.
- `job_title` (CharField): Job title of the requester.
- `company` (CharField): Company name.
- `consent` (BooleanField): Consent to terms.
- `created_at` (DateTimeField): Timestamp of creation.
- `status` (CharField): Status of the request (choices: Pending, Scheduled, Provided, Cancelled).
- `demo_date` (DateTimeField): Scheduled demo date and time.
- `feedback` (TextField): Feedback after the demo.
- `ip_address` (GenericIPAddressField): IP address of the requester.

### Methods:
- `__str__`: Returns the full name and email of the requester.

---

## ThirdPartyServiceKeys
Stores API keys for third-party services.

### Fields:
- `key` (TextField): Encrypted API key.
- `org` (ForeignKey): Organization associated with the key.
- `third_party_service_name` (CharField): Name of the third-party service (choices: OpenAI).
- `created_by` (ForeignKey): User who created the key.
- `updated_by` (ForeignKey): User who updated the key.
- `created_at` (DateTimeField): Timestamp of creation.
- `updated_at` (DateTimeField): Timestamp of last update.

### Methods:
- `save`: Encrypts the key before saving.
- `get_decrypted_key`: Decrypts and returns the key.

---
---
## Utility Functions

### `encrypt_text(plain_text)`
Encrypts a plain text string using Fernet symmetric encryption.

#### Parameters:
- `plain_text` (str): The text to encrypt.

#### Returns:
- Encrypted text (str).
---
### `decrypt_text(encrypted_text)`
Decrypts an encrypted string using Fernet symmetric encryption.

#### Parameters:
- `encrypted_text` (str): The encrypted text to decrypt.

#### Returns:
- Decrypted text (str).
