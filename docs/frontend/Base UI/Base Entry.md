---
sidebar_position: 1
---

## Base Entry Point 

The `App.js` file serves as the **entry point** for the *Base UI application*. It is responsible for setting up the routing structure, managing authentication, and rendering the main components of the application. 

- **File Path**: `\hr-frontend\src\Base UI\App.js`


### Structure

1. **Imports**: Various components, utilities, and context providers are imported.
2. **App Component**: The main functional component that sets up the routing and wraps the application in context providers.

### Key Features

1. **Routing**:
   - The application uses `react-router-dom` for routing.
   - Public routes (e.g., `/register/`, `/login/`) are accessible without authentication.
   - Private routes are wrapped in the `PrivateRoute` component, ensuring that only authenticated users can access them.

2. **Context Providers**:
   - `AuthProvider`: Manages authentication state.
   - `AvatarProvider`: Manages avatar-related state.

3. **Nested Routes**:
   - Routes are nested to create a hierarchical structure. For example, `/app/user/jobs/job/:jobId/` has nested routes for `overview`, `applicants`, `filter-groups`, and `interviews`.

4. **Components**:
   - Various components like `JobList`, `JobDetail`, `Login`, `Applicants`, etc., are rendered based on the route.

- **Entry Point**: `App.js` is the main entry point of the application, rendering the initial layout and setting up the routing.
- **Routing**: It defines the structure of the application, ensuring that users are directed to the correct components based on the URL.
- **Authentication**: It integrates with the `AuthProvider` to manage user authentication and protect private routes.
- **Context Management**: It uses context providers (`AuthProvider`, `AvatarProvider`) to manage global state.
