---
sidebar_position: 13
---

## Navbar 

The `Navbar` component serves as the top navigation bar for the application. It provides a responsive layout with a logo, a toggle button for the mobile sidebar, and a user profile dropdown menu. The component integrates with the `AuthContext` to manage user authentication and display user-specific information such as the profile picture and name.

- **File Path:** `\hr-frontend\src\utils\navbar\Navbar.js`
- **Dependencies**:
    - `@headlessui/react**`: Provides the `Menu` and `Transition` components for the dropdown menu.
    - `@heroicons/react/20/solid`: Provides icons for the dropdown menu.
    - `AuthContext`: Manages user authentication and provides user details.

### Props

|Prop Name| Description|
|---|---|
|**`navigation`**| Defines the navigation links for the navbar (currently commented out).|
|`name`| The display name of the navigation item.|
|`href`| The URL or path the navigation item links to.|
|`current`| A boolean indicating whether the item is currently active.|
|||
|**`userNavigation`**| Defines the user-specific navigation options in the dropdown menu.|
|`name`| The display name of the navigation item.|
|`href`| The URL or path the navigation item links to.|

## Functions and Methods

1. `classNames` Function
- **Purpose**:
    - Utility function to conditionally join CSS class names.
- **Parameters**:
  - `...classes`: A rest parameter accepting multiple class names.
- **Return Value**: A string of concatenated class names, filtering out falsy values.

2. `Navbar`

- **Purpose**:
    - Toggles the mobile sidebar state when the button is clicked.
    - Logs out the user when the "Sign Out" option is selected.

- **Parameters**
    - `mobileSidebarOpen`: A boolean indicating whether the mobile sidebar is open.
    - `setMobileSidebarOpen`: A function to toggle the mobile sidebar state.
    - `AuthContext`: Provides `logoutUser` (a function to log out the user) and `userDetails` (an object containing user information such as `name` and `profile_pic`).

- **Return Value**
    - Renders the navigation bar with a logo, a mobile sidebar toggle button, and a user profile dropdown menu.

---

## Video Navbar

The `VideoNavbar.js` file is a React component that renders a navigation bar (`navbar`) for a video-related interface within the CandidHR application. It is designed to display the application logo, a candidate's name, and a profile picture. The component is stateless and primarily serves as a UI element to provide navigation and user context during a video session.

- **File Path:** `\hr-frontend\src\utils\navbar\VideoNavbar.js`
- **Dependencies**
    - `@headlessui/react`: Used for the `Menu` component to create a dropdown menu (though it is not fully utilized in this file).

### Props

|Prop Name| Description|
|---|---|
|**`candidateDetails`**|Stores static details about the candidate for display purposes.|
|`name`| The candidate's name.|
|`id`| The candidate's unique identifier.|
|`job_role`| The candidate's job role.|
|`profile_pic`| URL of the candidate's profile picture. Falls back to a default image if not provided.|

### Functions and Methods

1. `VideoNavbar` 
- **Purpose**: 
    - Renders the navigation bar for the video interface.
    - Updates the UI based on the `isCompleted` prop to change text color.
    - Displays a default profile picture if `candidateDetails.profile_pic` is not provided.
- **Parameters**:
  - `candidateName` (string): The name of the candidate to display in the navbar.
  - `isCompleted` (boolean): Determines the styling of the candidate's name and logo based on whether the video session is completed.
- **Return Value**: 
    - A JSX element representing the navigation bar.

---
