---
sidebar_position: 1
---

# Admin

Customizes Django's admin panel for managing users, organizations, roles, and third-party service keys.

### `SalesAccessModelAdmin`
Restricts admin access based on user roles.

#### Permissions:
- `has_module_permission`: Allows access only for superusers and sales executives.
- `has_view_permission`: Restricts view access to superusers and sales executives.
- `has_add_permission`: Grants add permissions based on user role.
- `has_change_permission`: Controls edit access.
- `has_delete_permission`: Restricts delete access.

---

### `SuperUserModelAdmin`
Restricts access to superusers only.

#### Permissions:
- `has_module_permission`: Allows access only to superusers.
- `has_view_permission`: Grants view access to superusers.
- `has_add_permission`: Grants add permission to superusers.
- `has_change_permission`: Grants edit access.
- `has_delete_permission`: Grants delete access.

---

### `ProtectedAccessAdmin`
Prevents modifications to existing records.

#### Features:
- `has_change_permission`: Disallows modifications to records.
- `has_delete_permission`: Disallows deletion.
- `get_readonly_fields`: Makes all fields readonly for existing records.
- `save_model`: Prevents saving changes to existing records.

---

### `UserCreationForm`
A form for creating new users.

#### Methods:
- `clean_password2`: Ensures password confirmation matches.
- `clean`: Ensures only one admin per organization.
- `save`: Hashes the password before saving.

---

### `UserChangeForm`
A form for updating users.

#### Methods:
- `clean_password2`: Ensures password confirmation matches.
- `clean`: Ensures only one admin per organization.
- `save`: Updates password if provided.
- `__init__`: Adds profile picture preview.

---

### `UserAdmin`
Manages `MyUser` model in the admin panel.

#### Features:
- `list_display`: Defines displayed fields in the user list.
- `fieldsets`: Defines field organization.
- `add_fieldsets`: Specifies fields for user creation.
- `get_form`: Passes the request user to the form.
- `save_model`: Assigns `created_by` and `updated_by` fields.

---

### `OrganizationCreationForm`
A form for creating new organizations.

#### Methods:
- `clean_org_domain`: Validates uniqueness of `org_domain`.
- `_trigger_email`: Sends an email invitation to the organization admin.
- `save`: Assigns `created_by` and triggers email verification if needed.

---

### `OrganizationChangeForm`
A form for updating organizations.

#### Methods:
- `__init__`: Adds preview for logos.
- `_trigger_email`: Sends verification emails when necessary.
- `save`: Assigns `updated_by` and triggers email verification if needed.

---

### `OrganizationAdmin`
Manages `Organization` model in the admin panel.

#### Features:
- `list_display`: Defines displayed fields.
- `fieldsets`: Organizes fields.
- `get_form`: Passes the request user to the form.
- `save_model`: Assigns `created_by` and `updated_by`.

---

### `RolesAdmin`
Manages `Roles` model in the admin panel.

#### Features:
- `list_display`: Shows role names.
- `search_fields`: Enables role search.

---

### `ThirdPartyServiceKeysForm`
A form for managing third-party service keys.

#### Methods:
- `clean`: Ensures uniqueness of service keys per organization.

---

### `ThirdPartyServiceKeysAdmin`
Manages `ThirdPartyServiceKeys` in the admin panel.

#### Features:
- `list_display`: Displays key-related details.
- `save_model`: Assigns `created_by` and `updated_by`.

---

### `CustomAdminSite`
Customizes the Django admin panel appearance.

#### Features:
- `site_header`: Modifies admin panel title.
- `index`: Adjusts titles based on user role.

