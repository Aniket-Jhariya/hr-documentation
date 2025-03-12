---
sidebar_position: 10
---

## Profile

The `Profile.js` file is a React component responsible for rendering and managing the user profile page in the HR frontend application. It allows users to view and edit their profile information, including their name, email, contact details, and profile picture. Additionally, it displays key performance indicators (KPIs) related to the user's organization, such as total jobs, open jobs, and team members.

- **File Path:** `\hr-frontend\src\components\profile\Profile.js`

### State Variables

| Variable Name|Purpose|
|---|---|
|**`formData`**|Stores the user's profile data for editing and display.|
|`id`| User ID.|
|`email`| User's email address.|
|`org_domain`| Organization domain.|
|`name`| User's full name.|
|`contact`| User's contact number.|
|`profile_pic`| URL or file for the user's profile picture.|
|||
|**`kpiMetrics`**|Stores KPI data related to the user's organization.|
|`total_jobs`| Total number of jobs.|
|`jobs_open`| Number of open jobs.|
|`total_applicants`| Number of applicants.|
|`team_members`| Number of team members.|
|`cost`| Cost-related metric.|
|||
|`currentHoverElement`|Tracks which profile field is currently being hovered over for editing.|
|`editElementId`|Tracks which profile field is currently in edit mode.|
|`previewUrl`|Stores the URL of the uploaded profile picture for preview.|
|`loadingPic`|Tracks whether the profile picture is being uploaded.|

### Functions and Methods

1. `handleInputChange(e)`
- **Purpose**:
    - Handles changes to input fields in the profile form.
    - Updates the `formData` state with the new input value.
- **Parameters**:
  - `e`: Event object containing the input field's name and value.

2. `handleProfilePicChange(event)`
- **Purpose**: 
    - Handles the upload of a new profile picture.
    - Sets a preview URL for the uploaded image.
    - Sends a PATCH request to update the profile picture on the server.
    - Updates the `userDetails` state with the new profile picture URL.
- **Parameters**:
  - `event`: Event object containing the selected file.
- **Error Handling**:
  - Logs errors to the console if the upload fails.

3. `getProfileKPIData()`
- **Purpose**:
    - Fetches KPI data for the user's organization.
    - Updates the `kpiMetrics` state with the fetched data.
- **Error Handling**:
  - Logs errors to the console if the fetch fails.

4. `handleSaveField(field)`
- **Purpose**:
    - Saves changes to a specific profile field.
    - Sends a PATCH request to update the field on the server.
    - Exits edit mode for the field.
- **Parameters**:
  - `field`: The field to be updated (e.g., `name`, `email`, `contact`).
- **Error Handling**:
  - Logs errors to the console if the update fails.

---

## Credits

The `Credits.js` file serves as a placeholder for a future feature in the HR management application. It is part of the user profile section and displays a "Coming Soon" message to inform users that the feature is not yet available. The component leverages the application's authentication context to access user details and authentication tokens.

- **File Path:** `\hr-frontend\src\components\profile\Credits.js`

### Props
|Prop Name| Description|
|---|---|
|**`AuthContext`**|The component uses the `AuthContext` to access the following:|
|`authTokens`| Authentication tokens for API requests.|
|`userDetails`| Details of the currently logged-in user.|
|`setUserDetails`| Function to update user details.|

### Functions and Methods

1. `Credits` Component
- **Purpose**:  
    - Renders a placeholder UI for a feature that is not yet implemented.
- **Return Value**:  
  Returns a JSX structure containing:
  - A lock icon (`fa-lock`) to indicate restricted access.
  - A "Coming Soon" label.
  - A message informing users that the feature will be rolled out in the future.

---

## Notifications

The `Notifications` component is designed to display a placeholder UI for a "Coming Soon" feature within the user profile section of the application. It interacts with the backend API to fetch and update user profile data, including KPI metrics and profile pictures. 

- **File Path:** `\hr-frontend\src\components\profile\Notifications.js`

### State Variables
| Variable Name|Purpose|
|---|---|
|`currentHoverElement`|Tracks the currently hovered element in the UI|
|`editElementId`| Tracks the ID of the element being edite|
|`profilePic`| Stores the selected profile picture fil|
|`previewUrl`| Stores the URL for the preview of the selected profile pictur|
|`loadingPic`|Indicates whether the profile picture is being uploade|
|||
|**`formData`**|Stores user profile data with the following fields:|
| `id`| User ID.|
| `email`| User email.|
| `org_domain`| Organization domain.|
| `name`| User name.|
| `contact`| User contact information.|
| `profile_pic`| URL or file for the profile picture.|
|||
|**`kpiMetrics`**|Stores KPI metrics with the following fields:|
|`total_jobs`| Total number of jobs.|
|`jobs_open`| Number of open jobs.|
|`total_applicants`| Number of applicants.|
|`team_members`| Number of team members.|
|`cost`| Cost associated with the profile.|

### Functions and Methods

1. `handleInputChange`
- **Purpose**:
    - Handles changes to form input fields.
    - Updates the `formData` state with the new input value.
- **Parameters**:
  - `e` (`Event`): The input change event.

2. `handleProfilePicChange`
- **Purpose**:
    - Handles the selection and upload of a new profile picture.
    - Updates `previewUrl` with the selected image URL.
    - Uploads the image to the backend and updates the user profile picture in `userDetails`.
- **Parameters**:
  - `event` (`Event`): The file input change event.
- **Error Handling**: Logs errors to the console.

3. `getProfileKPIData`
- **Purpose**:
    - Fetches KPI metrics from the backend.
    - Updates the `kpiMetrics` state with fetched data.
- **Error Handling**: Logs errors to the console.

4. `handleSaveField`
- **Purpose**: 
    - Saves a specific field of the user profile to the backend.
    - Updates the backend with the new field value and resets the `editElementId` state.
- **Parameters**:
  - `field` (`string`): The field to be saved (e.g., `name`, `email`).
- **Error Handling**: Logs errors to the console.

## UI Rendering
The component renders a placeholder UI indicating that the notifications feature is "Coming Soon." It includes a lock icon, a label, and a descriptive message.

---

## Personal Info

The `PersonalInfo.js` file is a React component responsible for rendering and managing the personal and organizational information of a user within the CandidHR application. It allows users to view and edit their personal details (e.g., name, email, contact, location) and organizational details (e.g., organization name, logo, support email, location). The component also handles profile picture and organization logo uploads, and enforces role-based access control for editing organizational details.

- **File Path:** `\hr-frontend\src\components\profile\PersonalInfo.js`
- **Dependencies**
    - `AuthContext`: Provides authentication tokens (`authTokens`) and user details (`userDetails`).
    - `@heroicons/react`: Provides icons for UI elements (e.g., `PencilIcon`, `PhotoIcon`).
    - `api`: A constant storing the base API URL.

### State Variables

| Variable Name|Purpose|
|---|---|
|`loadingProfilePic`| Tracks the loading state during profile picture upload.|
|`loadingOrgLogo`| Tracks the loading state during organization logo upload.|
|`profilePreviewUrl`| Stores the URL of the uploaded profile picture for preview.|
|`orgPreviewUrl`| Stores the URL of the uploaded organization logo for preview.|
|`editingField`| Tracks the currently edited field.|
|`btnDisabled`| Disables the save button based on validation.|
|`isAdmin`| Indicates if the user has admin privileges.|
|`formData`| Stores the user's personal information.|
|`orgFormData`| Stores the organization's information.|
|`kpiMetrics`| Stores key performance indicator (KPI) metrics for the user's profile.|
   

### Functions and Methods

1. `getProfileKPIData`
- **Purpose**:
    - Fetches KPI metrics for the user's profile from the API.
    - Updates `kpiMetrics` state with fetched data.
- **Error Handling**: Logs errors to the console.

2. `handleInputChange`
- **Purpose**:
    - Handles changes to personal information input fields.
    - Updates `formData` state with the new input value.
- **Parameters**:
  - `e` (Event): The input change event.

3. `handleOrgInputChange`
- **Purpose**: 
    - Handles changes to organizational information input fields.
    - Updates `orgFormData` state with the new input value.
- **Parameters**:
  - `e` (Event): The input change event.

4. `validateEmail`
- **Purpose**:
    - Validates an email address using a regex pattern.
- **Parameters**:
  - `email` (string): The email to validate.
- **Return Value**: `true` if valid, `false` otherwise.

5. `validateContact`
- **Purpose**:
    - Validates a contact number using a regex pattern.
- **Parameters**:
  - `contact` (string): The contact number to validate.
- **Return Value**: `true` if valid, `false` otherwise.

6. `handleProfilePicChange`
- **Purpose**:
    - Handles profile picture upload and updates the user's profile picture.
    - Updates `profilePreviewUrl` state with the uploaded image URL.
    - Updates `userDetails` state with the new profile picture URL.
- **Parameters**:
  - `event` (Event): The file input change event.
- **Error Handling**: Logs errors to the console.

7. `handleOrgLogoChange`
- **Purpose**:
    - Handles organization logo upload and updates the organization's logo.
    - Updates `orgPreviewUrl` state with the uploaded image URL.
    - Updates `userDetails` state with the new organization logo URL.
- **Parameters**:
  - `event` (Event): The file input change event.
- **Error Handling**: Logs errors to the console.

8. `handleEditClick`
- **Purpose**:
    - Enables editing for a specific field.
    - Updates `editingField` and `formData` states.
- **Parameters**:
  - `field` (string): The field to edit (e.g., `name`, `email`).

9. `handleSaveUserField`
- **Purpose**:
    - Saves changes to a user's personal information field.
    - Updates `userDetails` state with the new field value.
- **Parameters**:
  - `field` (string): The field to save (e.g., `name`, `email`).
- **Error Handling**: Logs errors to the console.

10. `handleOrgEditClick`
- **Purpose**:
    - Enables editing for a specific organizational field (admin-only).
    - Updates `editingField` and `orgFormData` states.
- **Parameters**:
  - `field` (string): The field to edit (e.g., `org_name`, `support_email`).

11. `handleSaveOrgField`
- **Purpose**:
    - Saves changes to an organizational field (admin-only).
    - Updates `userDetails` state with the new field value.
- **Parameters**:
  - `field` (string): The field to save (e.g., `org_name`, `support_email`).
- **Error Handling**: Logs errors to the console.

---

## Team Members Table

The `TeamMembersTable` component is designed to display a list of team members within a profile section of the HR frontend application. It provides functionality to view team member details and allows authorized users to remove team members.

- **File Path:** `\hr-frontend\src\components\profile\TeamMembersTable.js`
- **Dependencies**
    - `React`: Core library for building the component.
    - `AuthContext`: Provides authentication and user role information.
    - `Alert Image`: Used as an icon in the delete confirmation modal.
    - `XMarkIcon`: Heroicons component for the close button in the modal.

### Props
| Prop Name         | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| `teamMembers`     | List of team members to display in the table. Each member is an object.    |
| `removeMember`    | Callback function to remove a team member by their ID.                     |
| `defaultProfilePic`| Default profile picture URL to use if a member does not have a profile pic. |

### State Variables
| Variable Name       | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `showDeleteModal`   | Controls the visibility of the delete confirmation modal.                  |
| `memberToDelete`    | Stores the member object selected for deletion.                           |

### Context
- **AuthContext**: Provides `authTokens`, `userDetails`, and `setUserDetails` for authentication and user role-based access control.

### Functions and Methods

1. `TeamMembersTable` Component
- **Purpose**:
    - Updates the `showDeleteModal` and `memberToDelete` state variables when a user attempts to remove a team member.
    - Triggers the `removeMember` callback when the delete action is confirmed.
- **Parameters**:
    - `teamMembers`: Array of objects containing team member details.
    - `removeMember`: Function to handle member removal.
    - `defaultProfilePic`: String representing the default profile picture URL.
- **Return Value**
    - Returns a JSX structure representing a table of team members and a delete confirmation modal.

---

## Users

The `Users.js` file is responsible for managing and displaying user-related functionalities. It allows administrators to add, remove, and view team members, as well as upload users in bulk via an Excel file. It also includes modals for adding users, confirming deletions, and uploading Excel files.

- **File Path:** `\hr-frontend\src\components\profile\Users.js`
- **Dependencies**:
    -`axios`: Handles HTTP requests for file uploads.
    -`react-toastify`: Displays toast notifications for user feedback.
    -`react-select`: Provides a dropdown for role selection.
    -`Table`: Custom table component for displaying user data.

### State Variables
| Variable Name          | Purpose                                                                 |
|------------------------|-------------------------------------------------------------------------|
| `showModal`            | Controls the visibility of the "Add User" modal.                        |
| `showExcelModal`       | Controls the visibility of the "Bulk Import" modal.                     |
| `file`                 | Stores the uploaded Excel file for bulk user import.                    |
| `btnDisabled`          | Disables the "Add User" button based on form validation.                |
| `formData`             | Stores form data for adding a new user (`email`, `name`, `role`).      |
| `kpiMetrics`           | Stores key performance indicator (KPI) metrics for the user profile.   |
| `tableInstance`        | Stores the instance of the table component.                            |
| `tableRowCount`        | Tracks the number of rows in the table.                                |
| `showDeleteModal`      | Controls the visibility of the "Delete User" confirmation modal.       |
| `memberToDelete`       | Stores the user data of the member to be deleted.                      |
| `selectedRow`          | Stores the selected row in the table for deletion.                     |
| `deletingUser`         | Tracks the deletion process state.                                     |
| `addingUser`           | Tracks the user addition process state.                                |
| `roleOptions`          | Stores the list of available roles for user assignment.                |

### Context
| Context Name           | Purpose                                                                 |
|------------------------|-------------------------------------------------------------------------|
| `AuthContext`          | Provides authentication tokens and user details.                        |

### Functions and Methods

1. `getRoles()`
- **Purpose**:
    - Fetches available roles from the API.
    - Updates `formData.role` with the first role from the fetched list.
- **Return Value**: Updates `roleOptions` state with fetched roles.
- **Error Handling**: Logs errors to the console.

2. `handleInputChange(e)`
- **Purpose**:
    - Handles input changes in the "Add User" form.
    - Updates `formData` and `btnDisabled` states.
- **Parameters**:
  - `e`: Event object containing the input field's name and value.
- **Return Value**: Updates `formData` state and disables the "Add User" button if validation fails.

3. `getProfileKPIData()`
- **Purpose**:
    - Fetches KPI metrics for the user profile.
    - Updates `kpiMetrics` state.
- **Return Value**: Updates `kpiMetrics` state with fetched data.
- **Error Handling**: Logs errors to the console.

4. `addUser()`
- **Purpose**:
    - Adds a new user via API.
    - Updates the table, clears the form, and closes the modal.   
- **Return Value**: Updates the table with the new user and displays a success toast.
- **Error Handling**: Displays error toast if the API call fails.

5. `removeMember(memberId)`
- **Purpose**:
    - Deletes a user via API.
    - Updates the table and closes the delete confirmation modal.
- **Parameters**:
  - `memberId`: ID of the user to delete.
- **Return Value**: Removes the user from the table and displays a success toast.
- **Error Handling**: Displays error toast if the API call fails.

6. `handleFileChange(event)`
- **Purpose**:
    - Handles file selection for bulk user import.
    - Updates `file` state.
- **Parameters**:
  - `event`: Event object containing the selected file.
- **Return Value**: Updates `file` state with the selected file.

7. `handleUpload()`
- **Purpose**:
    - Uploads the selected Excel file for bulk user import.
    - Updates the table with new users.
- **Return Value**: Closes the bulk import modal on success.
- **Error Handling**: Logs errors to the console.

8. `isValidEmail(email)` and `isValidName(name)`
- **Purpose**:
    - Validate email and name inputs.
- **Parameters**:
  - `email`: Email string to validate.
  - `name`: Name string to validate.
- **Return Value**: `true` if valid, `false` otherwise.

---
