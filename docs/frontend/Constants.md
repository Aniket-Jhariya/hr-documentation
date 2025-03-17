---
sidebar_position: 5
---

## Global Constants

The `constants.js` file serves as a utility module within the React project, providing reusable constants, helper functions, and configuration settings. It includes functions for styling statuses, logging feature usage, masking numbers, copying text to the clipboard, and retrieving service icons. Additionally, it exports a configuration object for customizing the appearance of a dropdown select component and defines the API base URL.

- **Dependencies**:
    - `react-toastify`: Used for displaying toast notifications in `handleCopyToClipboard`.
    - `react-toastify/dist/ReactToastify.css`: Styles for toast notifications.

### State Variables

| Variable Name|Purpose|
|---|---|
| **`getStatusStyle`**| Defines the styling properties for a given status.|
|`color` | Tailwind CSS class for text color.|
|`backgroundColor` | Tailwind CSS class for background color.|
|`icon` | Font Awesome icon class.|
|||
|**`selectStyle`**| Customizes the appearance of a dropdown select component.|
|`menu`| Overrides the dropdown menu's z-index.|
|`dropdownIndicator`| Customizes the dropdown arrow.|
|`indicatorSeparator`| Hides the separator between indicators.|
|`placeholder`| Styles the placeholder text.|
|`multiValueLabel`| Styles the label of selected items.|
|`multiValueRemove`| Styles the remove button for selected items.|
|||
|**`selectTheme`**| Customizes the theme of the dropdown select component.|
|`primary25`| Light shade for hovered options.|
|`primary`| Main color for focused/active states.|
|`primary50`| Medium shade for selected options.|

### Functions and Methods

1. `getStatusStyle(statusText)`
- **Purpose**:
    - Returns styling properties based on the provided status text.
- **Parameters**:
  - `statusText` (string): The status to style (e.g., "Assigned", "Completed").
- **Return Value**: An object containing `color`, `backgroundColor`, and `icon` properties.
- **Error Handling**: Returns default styling if `statusText` is `null` or `undefined`.

2. `logFeature(orgId, featureId)`
- **Purpose**:
    - Logs feature usage by making a POST request to the API.
    - Makes an API call to log feature usage.
- **Parameters**:
  - `orgId` (string): The organization ID.
  - `featureId` (string): The feature ID.
- **Error Handling**: Logs errors to the console if the request fails.

3. `maskNumber(number)`
- **Purpose**:
    - Masks a number by replacing its digits with asterisks.
- **Parameters**:
  - `number` (string): The number to mask.
- **Return Value**: A string of asterisks with a minimum length of 5.

4. `handleCopyToClipboard(item)`
- **Purpose**:
    - Copies the provided text to the clipboard and displays a success toast.
    - Displays a toast notification and interacts with the clipboard.
- **Parameters**:
  - `item` (string): The text to copy.
- **Error Handling**: Logs errors to the console if copying fails.

5. `getServiceIcon(serviceKey)`
- **Purpose**:
    - Returns a Font Awesome icon class based on the provided service key.
- **Parameters**:
  - `serviceKey` (string): The key identifying the service (e.g., "resume-screening").
- **Return Value**: A string representing the Font Awesome icon class.
- **Error Handling**: Returns `undefined` if no matching service key is found.

### Constants
| Constant Name|Purpose|
|---|---|
|`currentDate`| Stores the current date and time.
| `api`| Stores the base URL for API requests.|

---

## Accounts constants

The `constants.js` file is responsible for fetching and managing team member data for an organization. It interacts with the backend API to retrieve user data, filters out the current user, and formats the data for use in UI components like dropdowns. 

### State Variables
| Variable Name|Purpose|
|---|---|
| **`AuthContext`**| Provides access to authentication-related data such as `authTokens`, `isSuperUser`, and `userDetails`.|
|`loadingTeamMembers`| A boolean indicating whether the team members are being fetched.|
|`teamMembers`| An array storing the fetched team members.|
|`teamMemberOptions`| An array storing team members formatted for use in UI dropdowns (e.g., React Select).|

### Functions and Methods

1. `useFetchTeamMembers`: A custom React hook that encapsulates the logic for fetching and managing team member data.

- **Return Value**
Returns an object containing:
    - `fetchTeamMembers`: Function to fetch team members.
    - `setTeamMembers`: Function to manually update the `teamMembers` state.
    - `setLoadingTeamMembers`: Function to manually update the `loadingTeamMembers` state.
    - `loadingTeamMembers`: Boolean indicating loading state.
    - `teamMemberOptions`: Array of team members formatted for UI dropdowns.
    - `teamMembers`: Array of raw team member data.

2. `fetchTeamMembers`: Fetches team members from the backend API and updates the state.
- **Purpose**
    - Updates `loadingTeamMembers`, `teamMembers`, and `teamMemberOptions` state variables.
    - Makes an API call to fetch team members.
- **Parameters**:
    - `title` (unused): This parameter is currently unused in the function but could be used for filtering or additional functionality in the future.

- **Return Value**:
    - Returns `[]` if an error occurs during the fetch operation.

- **Error Handling**:
    - Catches and logs errors to the console.
    - Sets `loadingTeamMembers` to `false` on error.
    - Returns an empty array to indicate failure.

---

## Candidates constants

The `constants.js` file fetches candidate data from an API. It includes two hooks: `useFetchApplicants` and `useFetchApplicantsDropdown`. These hooks are designed to fetch candidate data based on filters such as name, job ID, and shortlisted status, and format the data for use in dropdowns or other UI components. The hooks handle loading states, error handling, and pagination for large datasets.


### State Variables
| Variable Name|Purpose|
|---|---|
|`loadingApplicants`| A boolean indicating whether the fetch operation is in progress.|
|`candidateOptions`| An array of candidate objects formatted for use in dropdowns.|
|`count`| The total number of candidates available (used for pagination).|

### Props
|Prop Name| Description|
|---|---|
|`fetchApplicants`| A function to fetch candidates based on filters.|
|`loadingApplicants`| The current loading state.|
|`candidateOptions`| The list of formatted candidate options.|
|`fetchApplicantsDropdown`| A function to fetch candidates with pagination support.|
|`loadingApplicants`| The current loading state.|
|`candidateOptions`| The list of formatted candidate options.|
|`count`| The total count of candidates.|
|`setCandidateOptions`| A function to manually update the candidate options.|
|`setCount`| A function to manually update the count.|

### Functions and Methods

1. `fetchApplicants` (in `useFetchApplicants`)
- **Purpose:** 
    - Fetches a list of candidates based on filters (name, job ID, shortlisted status).
    - Updates `loadingApplicants` and `candidateOptions` state.
- **Parameters:**
  - `name` (string): Filters candidates by name.
  - `jobId` (string): Filters candidates by job ID.
  - `shortlisted` (boolean): Filters candidates by shortlisted status.
- **Error Handling:**
  - Catches errors and logs them to the console. Resets `candidateOptions` to an empty array and sets `loadingApplicants` to `false`.

2. `fetchApplicantsDropdown` (in `useFetchApplicantsDropdown`)
- **Purpose:**
    - Fetches a paginated list of candidates for use in dropdowns.
    - Updates `loadingApplicants`, `candidateOptions`, and `count` state.
- **Parameters:**
  - `name` (string): Filters candidates by name.
  - `jobId` (string): Filters candidates by job ID.
  - `shortlisted` (boolean): Filters candidates by shortlisted status.
  - `additional` (object): Contains pagination details (e.g., `page`).
- **Return Value:**
  - An object containing:
    - `options`: Formatted candidate data for the dropdown.
    - `hasMore`: A boolean indicating if more pages are available.
    - `additional`: The next page number for pagination.
- **Error Handling:**
  - Catches errors and logs them to the console. Returns an empty `options` array and sets `hasMore` to `false`.

---

## Jobs constants

The `constants.js` file fetches job-related data from an API. It includes two hooks: `useFetchJobs` and `useFetchJobsDropDown`. These hooks are designed to fetch job data, format it for use in UI components (e.g., dropdowns), and handle loading states and errors.

### State Variables
| Variable Name|Purpose|
|---|---|
|**`jobOptions`**| Stores the formatted job data for use in UI components like dropdowns. Each job object contains:|
|`value`| The unique identifier for the job (e.g., `job.id`).|
|`label`| The display name for the job (e.g., `job.title`).|
|||
|`loadingJobs` | Tracks whether the job data is currently being fetched. Used to manage loading states in the UI.|

### Functions and Methods

1. `useFetchJobs`

#### `fetchJobs`
- **Purpose**:
    - Fetches job data from the API and formats it for use in UI components.
    - Updates `loadingJobs` state to `true` during the fetch operation and `false` afterward.
    - Updates `jobOptions` state with fetched and formatted job data.
- **Parameters**:
  - `title` (optional, `string`): A search query to filter jobs by title.
- **Error Handling**:
  - Logs errors to the console using `console.error`.
  - Sets `loadingJobs` to `false` on error.
- **Return Values**
    - `fetchJobs`: Function to fetch and format job data.
    - `loadingJobs`: Boolean indicating whether data is being fetched.
    - `jobOptions`: Array of formatted job data.

2. `useFetchJobsDropDown`

#### `fetchJobsDropDown`
- **Purpose**:
    - Fetches job data for use in a dropdown component, supporting pagination and search functionality.
    - Sorts job options alphabetically if a search query is provided.
    - Ensures no duplicate job options are returned.
- **Parameters**:
  - `searchQuery` (optional, `string`): A search term to filter jobs by title.
  - `loadedOptions` (optional, `Array<{ value: number, label: string }>`): Preloaded job options to merge with new results.
  - `additional` (optional, `{ page: number }`): Pagination metadata (defaults to `{ page: 1 }`).
- **Return Value**:
  - An object containing:
    - `options`: Array of formatted job data.
    - `hasMore`: Boolean indicating whether more data is available for pagination.
    - `additional`: Updated pagination metadata (e.g., `{ page: page + 1 }`).
- **Error Handling**:
  - Logs errors to the console using `console.error`.
  - Returns an object with empty `options` and `hasMore: false` on error.

---

## Tests constants

The `constants.js` file provides reusable constants, helper functions, and configuration settings. It includes functions for styling statuses, logging feature usage, masking numbers, copying text to the clipboard, and retrieving service icons. Additionally, it exports a configuration object for customizing the appearance of a dropdown select component and defines the API base URL.

### Props

|Prop Name| Description|
|---|---|
|**`getStatusStyle`**|Defines the styling properties for a given status.|
|`color`| Tailwind CSS class for text color.|
|`backgroundColor`| Tailwind CSS class for background color.|
|`icon`| Font Awesome icon class.|
|||
|**`selectStyle`**| Customizes the appearance of a dropdown select component.|
|`menu`| Overrides the dropdown menu's z-index.|
|`dropdownIndicator`| Customizes the dropdown arrow.|
|`indicatorSeparator`| Hides the separator between indicators.|
|`placeholder`| Styles the placeholder text.|
|`multiValueLabel`| Styles the label of selected items.|
|`multiValueRemove`| Styles the remove button for selected items.|
|||
|**`selectTheme`**| Customizes the theme of the dropdown select component.|
|`primary25`| Light shade for hovered options.|
|`primary`| Main color for focused/active states.|
|`primary50`| Medium shade for selected options.|

### Functions and Methods

1. `getStatusStyle(statusText)`
- **Purpose**:
    - Returns styling properties based on the provided status text.
- **Parameters**:
  - `statusText` (string): The status to style (e.g., "Assigned", "Completed").
- **Return Value**: An object containing `color`, `backgroundColor`, and `icon` properties.
- **Error Handling**: Returns default styling if `statusText` is `null` or `undefined`.

2. `logFeature(orgId, featureId)`
- **Purpose**:
    - Logs feature usage by making a POST request to the API.
    - Makes an API call to log feature usage.
- **Parameters**:
  - `orgId` (string): The organization ID.
  - `featureId` (string): The feature ID.
- **Error Handling**: Logs errors to the console if the request fails.

3. `maskNumber(number)`
- **Purpose**:
    - Masks a number by replacing its digits with asterisks.
- **Parameters**:
  - `number` (string): The number to mask.
- **Return Value**: A string of asterisks with a minimum length of 5.

4. `handleCopyToClipboard(item)`
- **Purpose**:
    - Copies the provided text to the clipboard and displays a success toast.
    - Displays a toast notification and interacts with the clipboard.
- **Parameters**:
  - `item` (string): The text to copy.
- **Error Handling**: Logs errors to the console if copying fails.

5. `getServiceIcon(serviceKey)`
- **Purpose**:
    - Returns a Font Awesome icon class based on the provided service key.
- **Parameters**:
  - `serviceKey` (string): The key identifying the service (e.g., "resume-screening").
- **Return Value**: A string representing the Font Awesome icon class.
- **Error Handling**: Returns `undefined` if no matching service key is found.

### Constants

| Variable Name|Purpose|
|---|---|
|`currentDate`| Stores the current date and time.|
| `api`| Stores the base URL for API requests.|

---