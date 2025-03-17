---
sidebar_position: -1
---

# Private Route

The `PrivateRoute.js` file is a utility component in a React project that ensures protected routes are accessible only to authenticated users. It acts as a gatekeeper for routes that require user authentication, redirecting unauthenticated users to the login page while preserving their intended destination. It leverages the `AuthContext` to determine the user's authentication status and loading state.

- **File Path:** `\hr-frontend\src\utils\PrivateRoute.js`

### Props
|Prop Name| Description|
|---|---|
|**`AuthContext`**| Provides authentication-related data to the component.|
|`user`| Represents the authenticated user object.|
|`loadingDetails`| Indicates whether user details are still being loaded.|
|`authTokens`| Contains authentication tokens to verify the user's session.|

### Functions and Methods

1. `PrivateRoute`
- **Purpose**:
    - A React component that conditionally renders protected content or redirects unauthenticated users to the login page.
    - Logs the current path to the console when redirecting unauthenticated users.
    - Updates the UI based on the user's authentication state and loading status.
- **Return Value**:
  - If the user is not authenticated (`!authTokens`), returns a `Navigate` component to redirect to the login page with the current path as a `redirectTo` query parameter.
  - If user details are still loading (`loadingDetails`), returns a loading screen.
  - If the user is authenticated (`user`), renders the protected content using the `Outlet` component.
  - If the user is not authenticated but `authTokens` exist, redirects to the login page.
 
---
