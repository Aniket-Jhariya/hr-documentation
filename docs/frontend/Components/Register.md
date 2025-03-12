---
sidebar_position: 12
---

## Admin

The `Admin.js` file is responsible for handling the registration of an admin or user in the CandidHR application. It is part of a multi-step registration process and collects essential details such as full name, email, contact number, country, and position. The component validates user input, submits the data to an API, and displays a success modal upon successful submission.

- **File Path:** `\hr-frontend\src\components\register\Admin.js`

### State Variables
| Variable Name|Purpose|
|---|---|
|`showModal`|Controls the visibility of the success modal after form submission.|
|`errorMsg`|Stores validation error messages for each form field.
|||
|**`adminData`**|Stores the form data entered by the user. Fields:|
|`fullname`| Full name of the admin.|
|`email`| Email address of the admin.|
|`contact`| Contact number of the admin.|
|`country`| Country of residence.|
|`position`| Designation or position of the admin.|

### Functions and Methods

1. `handleChange(e: React.ChangeEvent<HTMLInputElement>)`
- **Purpose**:
    - Handles input changes for form fields and updates the `adminData` state. Also clears validation errors for the respective field if the input is valid.
    - Updates `adminData` state with the new input value.
    - Clears validation errors for the corresponding field if the input is valid.
- **Parameters**:
  - `e`: The event object containing the input field's `name` and `value`.

2. `validateForm()`
- **Purpose**:
    - Validates the form data and sets error messages in the `errorMsg` state if validation fails.
    - Updates the `errorMsg` state with validation errors.
- **Return Value**:
  - `true` if the form is valid (no errors).
  - `false` if the form is invalid (errors exist).
- **Error Handling**:
  - Sets error messages for invalid fields (e.g., missing or invalid email, contact number).

3. `handleBack()`
- **Purpose**:
    - Navigates the user back to the previous step in the registration process.
    - Uses `navigate` from `react-router-dom` to redirect to `/app/organization/signup`.

4. `handleSubmit(e: React.FormEvent)`
- **Purpose**:
    - Handles form submission by validating the form and sending the data to the API.
    - Submits the form data to the API if validation passes.
    - Resets the form and displays a success modal on successful submission.
    - Logs errors to the console and displays an alert if submission fails.
- **Parameters**:
  - `e`: The form submission event.
- **Error Handling**:
  - Handles API errors by logging them and displaying an alert to the user.
  - Handles network errors by displaying an alert.

5. `handleCloseModal()`
- **Purpose**:
    - Closes the success modal and resets the form and local storage.
    - Resets `adminData` and `errorMsg` states.
    - Removes `AdminData` and `organizationDetails` from local storage.
    - Navigates to `/organization`.

6. `useEffect`
- **Purpose**:
    - Loads saved form data from local storage when the component mounts.
    - Updates `adminData` state with data from local storage if available.

---

## Admin Onboarding

The `AdminOnboarding.js` file is responsible for handling the admin onboarding process, specifically resetting the password for a new admin user. It integrates with a backend API to fetch user details, validate password inputs, and submit the new password.

- **File Path:** `\hr-frontend\src\components\register\AdminOnboarding.js`
- **Dependencies**:
    - **`react-toastify`**: Displays toast notifications for success and error messages.

### State Variables
| Variable Name|Purpose|
|---|---|
|`name`| Stores the admin's name fetched from the API.|
|`email`| Stores the admin's email fetched from the API.|
|`password`| Stores the new password input by the user.|
|`confirmPassword`| Stores the confirmation of the new password.|
|`showError`| Displays error messages to the user.|
|`successMsg`| Displays success messages after a successful password reset.|
|`passwordMatches`| Tracks whether the password and confirm password match.|
|`disableSubmit`| Disables the submit button if validation fails.|
|`loading`| Tracks the loading state during API calls.|
|`dataLoading`| Tracks the loading state while fetching user details.|
|`agreeToTerms`| Tracks whether the user has agreed to the terms and conditions.|

### Functions and Methods

1. `ShimmerUI`
- **Purpose**:
    - A placeholder UI component displayed while data is being fetched.
- **Return Value**: A JSX structure representing a loading animation.

2. `fetchUserDetails`
- **Purpose**:
    - Fetches user details from the backend API.
    - Updates `name` and `email` state with fetched data.
    - Sets `dataLoading` to `false` after the fetch operation completes.
- **Error Handling**: Logs errors to the console if the API call fails.

3. `handlePasswordChange`
- **Purpose**:
    - Updates the `password` or `confirmPassword` state based on user input.
    - Updates `password` or `confirmPassword` state.
- **Parameters**:
  - `e`: The event object from the input field.

4. `validatePasswords`
- **Purpose**:
    - Validates the password and confirm password inputs.
    - Updates `disableSubmit`, `passwordMatches`, and `showError` based on validation results.

5. `handlePasswordReset`
- **Purpose**:
    - Submits the new password to the backend API.
    - Sets `loading` to `true` during the API call.
    - Updates `successMsg` or `showError` based on the API response.
    - Navigates to the login page after a successful password reset.
- **Parameters**:
  - `e`: The event object from the form submission.  
- **Error Handling**:
  - Displays error messages using `toast` and updates `showError`.

---

## Organization

The `Organization.js` file is a React component responsible for handling the first step of an organization registration process. It collects and validates organization details such as name, website, domain, logo, and location. The component also provides functionality to reset the form and navigate to the next step upon successful submission.

- **File Path:** `\hr-frontend\src\components\register\Organization.js`

### State Variables
| Variable Name|Purpose|
|---|---|
|**`errorMsg`**|Stores validation error messages for each form field.|
|`organizationName`| Error message for the organization name field.|
|`website`| Error message for the website field.|
|`domain`| Error message for the domain field.|
|`logo`| Error message for the logo field.|
|`location`| Error message for the location field.|
|`serverError`| Error message for server-related issues.|
|||
|**`formData`**|Stores the current state of the form inputs.|
|`organizationName`| Organization name input value.|
|`website`| Website input value.|
|`domain`| Domain input value.|
|`logo`| Logo file input value.|
|`location`| Location input value.|


### Functions and Methods

1. `handleChange(e)`
- **Purpose**:
    - Handles input changes and updates the form state. Also clears validation errors for the corresponding field.
    - Updates `formData` state.
    - Clears validation errors in `errorMsg` state for the corresponding field.
- **Parameters**:
  - `e` (`Event`): The event object from the input change.

2. `validateForm()`
- **Purpose**:
    - Validates the form data and sets error messages for invalid fields.
    - Updates `errorMsg` state with validation errors.
- **Return Value**:
  - `true` if the form is valid, `false` otherwise.

3. `handleNext()`
- **Purpose**:
    - Handles form submission, validates the form, and sends data to the API.
    - Calls `validateForm()` to check form validity.
    - Submits form data to the API using `fetch`.
    - Saves form data to `localStorage` on successful submission.
    - Navigates to `/app/organization/admin` on success.
    - Updates `errorMsg` state with server errors on failure.

4. `handleReset()`
- **Purpose**:
    - Resets the form and clears any stored data in `localStorage`.
    - Resets `formData` state to initial values.
    - Clears `errorMsg` state.
    - Removes `organizationDetails` from `localStorage`.

5. `useEffect()`
- **Purpose**:
    - Loads saved form data from `localStorage` when the component mounts.
    - Updates `formData` state with data from `localStorage` if available.

---

## RegisterUser

The `RegisterUser.js` file is responsible for rendering a user registration form. It allows users to input their personal and organizational details, validates the input, and submits the data to a backend API for registration. Upon successful registration, the user is redirected to the login page.

- **File Path:** `\hr-frontend\src\components\register\RegisterUser.js`


### State Variables
| Variable Name|Purpose|
|---|---|
|**`formData`**| Stores the form input values for registration.|
|`email`| User's email address.|
|`password`| User's password.|
|`org_domain`| Organization's domain or URL.|
|`name`| User's full name.|
|`contact`| User's contact number.|
|`profile_pic`| User's profile picture.|
|||
|`errors`|Stores validation errors returned by the backend API.|
|`successMessage`|Stores a success message displayed after successful registration.|


### Functions and Methods

1. `handleInputChange(e)`
- **Purpose**:
    - Updates the `formData` state when the user types into the form fields.
    - Updates the `formData` state with the new input value.
- **Parameters**:
  - `e` (Event): The input change event.

2. `handleSubmit(e)`
- **Purpose**:
    - Handles form submission by sending the form data to the backend API.
    - Sends a POST request to the backend API.
    - Updates `successMessage` and clears `formData` and `errors` on successful registration.
    - Redirects the user to the login page using `history.push`.
- **Parameters**:
  - `e` (Event): The form submission event.
- **Error Handling**:
  - Catches and logs errors if the API request fails.
  - Sets `errors` state with validation errors returned by the backend.

---

## Reset Password

The `ResetPassword.js` file is responsible for handling the password reset functionality in the CandidHR application. It allows users to reset their password by providing a new password and confirming it. The component interacts with a backend API to fetch user details and submit the new password. It also includes form validation and error handling to ensure a smooth user experience.

- **File Path:** `\hr-frontend\src\components\register\ResetPassword.js`

### State Variables

| State Variable         | Purpose                                                                 |
|------------------------|-------------------------------------------------------------------------|
| `disableSubmit`        | Controls whether the submit button is disabled based on form validation.|
| `password`             | Stores the new password entered by the user.                            |
| `confirmPassword`      | Stores the confirmation of the new password.                            |
| `showError`            | Tracks and displays validation errors (e.g., password mismatch).        |
| `successMsg`           | Displays a success message after a successful password reset.           |
| `passwordMatches`      | Indicates whether the passwords match.                                  |
| `name`                 | Stores the user's name fetched from the API.                            |
| `email`                | Stores the user's email fetched from the API.                           |
| `loading`              | Tracks the loading state during form submission.                        |
| `dataLoading`          | Tracks the loading state while fetching user details.                   |

### Functions and Methods

1. `fetchUserDetails`
- **Purpose**:
    - Fetches user details (name and email) from the backend API.
    - Updates `name` and `email` state with fetched data.
    - Sets `dataLoading` to `false` after the fetch operation completes.
- **Error Handling**: Logs errors to the console if the API request fails.

2. `handlePasswordChange`
- **Purpose**:
    - Updates the `password` or `confirmPassword` state based on user input.
    - Updates the corresponding state variable (`password` or `confirmPassword`).
- **Parameters**:
  - `e`: The event object from the input field.

3. `validatePasswords`
- **Purpose**:
    - Validates the password and confirmation password fields.
    - Updates `disableSubmit` based on validation results.
    - Sets `showError` to display validation errors.
    - Updates `passwordMatches` to indicate whether the passwords match.

4. `handlePasswordReset`
- **Purpose**:
    - Submits the new password to the backend API for resetting.
    - Sets `loading` to `true` during the API request.
    - Updates `successMsg` with the API response message on success.
    - Logs errors to the console if the API request fails.
- **Parameters**:
  - `e`: The event object from the form submission.
- **Error Handling**: Logs errors to the console and does not display user-facing error messages.

---

## Reset Password Email

The `ResetPasswordEmail.js` file is responsible for rendering a form where users can request a password reset link via email. It handles user input, validates the email, and communicates with a backend API to send the reset link. The component also provides feedback to the user regarding the success or failure of the request.

- **File Path:** `\hr-frontend\src\components\register\ResetPasswordEmail.js`

### State Variables
| Variable Name|Purpose|
|---|---|
|`email`|Stores the email address entered by the user.|
|`formError`| Stores error or success messages from the API response.|

### Functions and Methods

1. `handleEmailChange(e)`
- **Purpose**: 
    - Updates the `email` state when the user types in the email input field.
    - Updates the `email` state with the input value.
    - Clears any existing form errors by setting `formError` to `null`.
- **Parameters**:
  - `e` (`React.ChangeEvent<HTMLInputElement>`): The event object from the input field.
- **Return Value**: None.

2. `requestLinkOnEmail(e)`
- **Purpose**: 
    - Sends a POST request to the backend API to request a password reset link for the provided email.
    - Sends a POST request to the API endpoint.
    - Updates `formError` with either a success or error message based on the API response.
- **Parameters**:
  - `e` (`React.FormEvent<HTMLFormElement>`): The form submission event.
- **Return Value**: None.
- **Error Handling**:
  - Catches and logs errors to the console.
  - Sets `formError` to display an error message if the API request fails.


### Styling and Layout
- The component uses Tailwind CSS classes for responsive design and styling.
- Includes a branded sidebar with the `CandidHRLogo` and marketing content.

---