---
sidebar_position: 1
---

## Main entry point

The `App.js` file is the main entry point for the React application in the `hr-frontend` project. It serves as the root component that sets up the application's routing, context providers, and overall structure.

- **File Path**: `\hr-frontend\src\App.js`

- **Dependencies**:
  - React
  - React Router DOM (`BrowserRouter`, `Route`, `Routes`)
  - Context Providers (`AuthProvider`, `AvatarProvider`)
  - Custom Components (`Sidebar`, `MainContent`, `PrivateRoute`, etc.)
  - Utility Components (`ToastContainer`, `PageNotFound`, etc.)


### Imports

The file begins by importing various components, utilities, and context providers:

- **CSS**: `App.css` for global styles.
- **Components**: Various components like `Sidebar`, `MainContent`, `Login`, `JobList`, etc.
- **Context Providers**: `AuthProvider` for authentication and `AvatarProvider` for avatar-related data.
- **React Router DOM**: `BrowserRouter`, `Route`, `Routes` for routing.
- **Utilities**: `PrivateRoute` for protected routes, `ToastContainer` for notifications, and `PageNotFound` for 404 errors.

###  App Component

The `App` function is the main component that returns the JSX structure of the application.

#### Structure

- **Root Div**: The application is wrapped in a `div` with classes for styling.
- **ToastContainer**: Used for displaying notifications.
- **BrowserRouter**: Sets up the routing context for the application.

### Routes

- **Public Routes**: These routes are accessible without authentication.
  - **Candidate Routes**: Routes for candidate-related pages like `CandidateForm`, `Tour`, `ScreeningTour`, `VideoComponent`, `TestInstructions`, `Test`, `TestLogCompleted`, and `Completed`.
  - **Page Not Found**: A catch-all route for 404 errors.

- **Protected Routes**: These routes require authentication and are wrapped in `AuthProvider` and `AvatarProvider`.
  - **Authentication Routes**: Routes for `RegisterUser`, `Login`, `ResetPasswordEmail`, `ResetPassword`, `AdminOnboarding`, `Organization`, and `Admin`.
  - **Private Routes**: Wrapped in `PrivateRoute` to ensure only authenticated users can access them.
    - **Base Route**: The main layout of the application, which includes `Sidebar` and `MainContent`.
    - **Profile Routes**: Routes for user profile management (`Profile2`, `PersonalInfo`, `Users`, `Notifications`, `Credits`).
    - **Job Routes**: Routes for job management (`JobList`, `JobDetail`, `JobOverview`, `JobApplicants`, `JobFilterGroups`, `JobQuestions`, `JobPreferences`, `JobInterviews`, `CreateJob`).
    - **Applicant Routes**: Routes for managing applicants (`Applicants`, `ApplicantProfile`, `ApplicantOverview`, `ApplicantResumeCopy`, `ApplicantPersonalityScreening`, `ApplicantTracking`, `ProfileComments`).
    - **Interview Routes**: Routes for managing interviews (`Interviews`, `InterviewWorkflow`).
    - **Test Routes**: Routes for managing tests (`Tests`, `TestBuilder`, `TestViewer`, `AssignedAssessments`).
    - **Other Routes**: Routes for `Documents`, `List`, `ResumeList`, `DemoList`, etc.

### Context Providers

- **AuthProvider**: Manages authentication state and provides it to the entire application.
- **AvatarProvider**: Manages avatar-related data and provides it to the application.

### ToastContainer

- **Purpose**: Displays toast notifications throughout the application.
- **Usage**: Placed at the root level to ensure notifications are visible globally.

### PrivateRoute

- **Purpose**: Ensures that certain routes are only accessible to authenticated users.
- **Usage**: Wraps around protected routes to enforce authentication.

### Key Features
- **Root Component**: `App.js` is the root component of the React application. It sets up the routing, context providers, and global utilities like `ToastContainer`.
- **Routing**: The file defines the application's routing structure, ensuring that users are directed to the correct components based on the URL.
- **Authentication**: By wrapping protected routes with `PrivateRoute` and `AuthProvider`, the application ensures that only authenticated users can access certain parts of the application.
- **Context Management**: The `AuthProvider` and `AvatarProvider` manage global state related to authentication and avatars, respectively, making this data accessible throughout the application.

---

## Styling
This file contains the global styles. It defines the visual presentation of the application, including layout, colors, animations, and responsive behavior.

- **File Path**: `Diacto\CandidHR\hr-frontend\src\App.css`. 

1. **Global Styles**: Styles for the `.App` class, which is the root container of the application.
2. **Logo Styles**: Styles for the `.App-logo` class, including an animation for spinning the logo.
3. **Header Styles**: Styles for the `.App-header` class, which defines the layout and appearance of the application header.
4. **Link Styles**: Styles for the `.App-link` class, used for hyperlinks within the application.
5. **Animation Definition**: A keyframe animation (`App-logo-spin`) used to rotate the logo.

---

### Classes and Styles

#### `.App`
- **Purpose**: Styles the root container of the application.
- **Properties**:
  ```css
  .App {
    text-align: center;
  }
  ```
  - `text-align: center;`: Centers all text content within the application.

#### `.App-logo`
- **Purpose**: Styles the application logo.
- **Properties**:
  ```css
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  ```
  - `height: 40vmin;`: Sets the height of the logo relative to the viewport size.
  - `pointer-events: none;`: Prevents the logo from being interactive (e.g., clickable).

#### Animation for `.App-logo`
- **Purpose**: Adds a spinning animation to the logo.
- **Condition**: The animation is applied only if the user has not enabled reduced motion settings.
  ```css
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  ```
  - `animation: App-logo-spin infinite 20s linear;`: Applies the `App-logo-spin` animation infinitely with a duration of 20 seconds and a linear timing function.

#### `.App-header`
- **Purpose**: Styles the application header.
- **Properties**:
  ```css
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  ```
  - `background-color: #282c34;`: Sets a dark background color.
  - `min-height: 100vh;`: Ensures the header takes up at least the full height of the viewport.
  - `display: flex;`: Uses Flexbox for layout.
  - `flex-direction: column;`: Arranges child elements vertically.
  - `align-items: center;`: Centers child elements horizontally.
  - `justify-content: center;`: Centers child elements vertically.
  - `font-size: calc(10px + 2vmin);`: Sets a responsive font size.
  - `color: white;`: Sets the text color to white.

#### `.App-link`
- **Purpose**: Styles hyperlinks within the application.
- **Properties**:
  ```css
  .App-link {
    color: #61dafb;
  }
  ```
  - `color: #61dafb;`: Sets the link color to a light blue shade.

#### `@keyframes App-logo-spin`
- **Purpose**: Defines the spinning animation for the logo.
- **Properties**:
  ```css
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  ```
  - `from { transform: rotate(0deg); }`: Starts the rotation at 0 degrees.
  - `to { transform: rotate(360deg); }`: Ends the rotation at 360 degrees, creating a full spin.

### Key Features

- **Global Styling**: `App.css` is imported into the `App.js` component, making its styles available globally within the application.
- **Component-Specific Styling**: `App.css` provides global styles, complemented by component-specific stylesheets for more granular control.
- **Responsive Design**: The use of `vmin` units and media queries ensures the application is responsive and adapts to different screen sizes.
- **Animation**: The spinning logo animation adds a dynamic visual element to the application, enhancing user engagement.