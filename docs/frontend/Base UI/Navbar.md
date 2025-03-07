---
sidebar_position: 2
---

## Navbar

- **File Path**: `\hr-frontend\src\Base UI\navbar\Navbar.js`

### Dependencies

- **@headlessui/react**: Provides accessible UI components like `Disclosure`, `Menu`, and `Transition`.
- **@heroicons/react**: Offers a set of SVG icons used in the navigation bar.
- **AuthContext**: A custom context providing authentication-related data and functions.

### Constants

- **`navigation`**: An array of navigation items (currently commented out).
- **`userNavigation`**: An array of user-related navigation items (e.g., Profile, Settings, Sign out).

### Utility Function

- **`classNames`**: A function to conditionally join class names.

```javascript
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
```

### Main Component

- **`Navbar`**: The main functional component that renders the navigation bar.

### Key Features

#### Responsive Design

- The navbar adjusts its layout based on the screen size. On smaller screens, a hamburger menu icon is displayed to toggle the sidebar.

#### User Profile Menu

- The user's profile picture and name are displayed on the right side of the navbar.
- Clicking on the profile picture reveals a dropdown menu with options to view the profile and sign out.

#### Authentication Integration

- The component uses the `AuthContext` to access user details and the `logoutUser` function.
- The `logoutUser` function is triggered when the "Sign Out" option is selected from the dropdown menu.

#### Navigation Links

- The navbar includes a link to the main dashboard (`/app/user/jobs/`).
- Additional navigation links can be added to the `navigation` array (currently commented out).

---

## VideoNavbar 

- **Path:** `\hr-frontend\src\Base UI\navbar\VideoNavbar.js`

### Dependencies

- **@headlessui/react**: Provides accessible and customizable UI components like `Disclosure`, `Menu`, and `Transition`.
- **@heroicons/react**: Offers a set of SVG icons used in the navigation bar.
- **AuthContext**: Context API for managing authentication state (imported but not used in the provided code).

### Constants and Helper Functions
- **`classNames` Function**: A utility function to conditionally join class names.
  ```javascript
  function classNames(...classes) {
      return classes.filter(Boolean).join(' ');
  }
  ```

- **`candidateDetails` Object**: Hardcoded user details for demonstration purposes.
  ```javascript
  const candidateDetails = {
      name: "John Doe",
      id: 1,
      job_role: "Software Tester",
  };
  ```

### JSX Structure

- **Logo and Branding**: A link to the main jobs page with the brand name "CandidHR".
- **User Profile Menu**: A dropdown menu that displays the user's name and profile picture. The menu includes options to view the user profile and sign out.

### Key Features
- **Responsive Design**: The navigation bar is designed to be responsive, with a mobile-friendly menu button that appears on smaller screens.
- **User Profile Dropdown**: The dropdown menu provides quick access to the user's profile and a sign-out option.
- **Fixed Positioning**: The navigation bar is fixed at the top of the page, ensuring it remains visible as the user scrolls.


---