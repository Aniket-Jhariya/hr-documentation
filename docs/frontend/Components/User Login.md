---
sidebar_position: 16
---

## Login

The `Login.js` file is responsible for rendering the login page of the HR frontend application. It provides a user interface for entering email and password credentials, handles form submission, and integrates with the application's authentication context to manage user login.

- **File Path:** `\hr-frontend\src\components\u-login\Login.js`

### State Variables
| Variable Name|Purpose|
|---|---|
|`email`|Stores the email input value entered by the user.|
|`password`|Stores the password input value entered by the user.|
|`formError`|Stores validation or login error messages.|

### Context
| Variable Name|Purpose|
|---|---|
|`AuthContext`|Provides the `loginUser` function for handling user authentication.|

### Routing
| Variable Name|Purpose|
|---|---|
|`useLocation`|Retrieves the current route location, including any state passed to the component (e.g., `role`).|

### Functions and Methods

1. `emailOnChange(e)`
- **Purpose**:
  - Updates the `email` state and clears any form errors.
  - Clears the `formError` state.
- **Parameters**:
  - `e` (Event): The change event from the email input field.

2. `setChangedPassword(e)`
- **Purpose**: 
  - Updates the `password` state and clears any form errors.
  - Clears the `formError` state.
- **Parameters**:
  - `e` (Event): The change event from the password input field.

3. `handleLogin(e)`
- **Purpose**: 
  - Handles the form submission for user login.
  - Calls the `loginUser` function from `AuthContext` to authenticate the user.
  - Updates the `formError` state with validation or login errors.
- **Parameters**:
  - `e` (Event): The submit event from the login form.
- **Error Handling**:
  - Catches errors during the login process.
  - Validates the presence of `email` and `password`.
  - Sets appropriate error messages in the `formError` state.

---
