---
sidebar_position: 4
---

# Context

## Auth Context

The `AuthContext.js` file manages authentication state and user-related data for the application. It handles user login, logout, token refresh, and user details fetching. The context is used to provide authentication-related data and functions to the rest of the application, ensuring that components can access and manipulate user authentication state without prop drilling.

- **File Path:** `\hr-frontend\src\context\AuthContext.js`
- **Dependencies**:
    - `jwt-decode`: Decodes JWT tokens to extract user information.

### Props
|Prop Name| Description|
|---|---|
|**`AuthContext`**| A React context object created using `createContext()`. It provides authentication-related data and functions to child components.|
|`user`| The decoded JWT token representing the authenticated user.|
|`authTokens`| The JWT tokens (access and refresh) stored in local storage.|
|`loginUser`| Function to handle user login.|
|`logoutUser`| Function to handle user logout.|
|`userDetails`| Additional details about the authenticated user.|
|`teamMembersAvatars`| Array of team members' avatars.|
|`orgServices`| Array of services associated with the user's organization.|
|`isSuperUser`| Boolean indicating if the user is a superuser.|
|`isSuperAdmin`| Boolean indicating if the user is a super admin.|


### Functions and Methods

1. `AuthProvider`
- **Purpose**:
    - A React component that provides the authentication context to its children.
    - Manages authentication state and user details.
    - Redirects users to appropriate routes based on their role and authentication status.
    - Periodically refreshes the authentication token.
- **Parameters**:
  - `children`: React nodes to be rendered within the provider.
- **Return Value**: A React context provider wrapping the children.

2. `getUserDetails`
- **Purpose**: 
    - Fetches additional details about the authenticated user from the API.
    - Updates `userDetails`, `orgServices`, `isSuperUser`, and `isSuperAdmin` state.
- **Parameters**:
  - `token`: The JWT access token.
- **Return Value**: A promise resolving to the user details object.
- **Error Handling**:
  - Logs errors to the console.
  - Logs out the user if the token is unauthorized.

3. `loginUser`
- **Purpose**:
    - Handles user login by sending credentials to the API and storing the received tokens.
    - Updates `authTokens` and `user` state.
    - Stores tokens in local storage.
    - Redirects the user based on their role or a `redirectTo` query parameter.
- **Parameters**:
  - `e`: The form submission event.
  - `role`: The user's role (e.g., "admin" or "user").
- **Error Handling**:
  - Throws an error if the login request fails.

4. `logoutUser`
- **Purpose**:
    - Handles user logout by clearing authentication state and redirecting to the login page.
    - Clears `authTokens`, `user`, and `userDetails` state.
    - Removes tokens from local storage.
    - Redirects to the login page.

5. `refreshToken`
- **Purpose**: 
    - Refreshes the access token using the refresh token.
    - Updates `authTokens` and `user` state.
    - Stores new tokens in local storage.
- **Error Handling**:
  - Logs out the user if the refresh token is invalid or unauthorized.

---

## Avatar Context

The `AvatarContext.js` file is a React context provider that manages the fetching and caching of user avatars (profile pictures) within the application. It interacts with the backend API to retrieve avatar images and caches them locally to avoid redundant network requests. This context is designed to be used across the application to provide avatar URLs for user profiles.

- **File Path:** `\hr-frontend\src\context\AvatarContext.js`

### Props 

|Prop Name| Description|
|---|---|
| `AvatarContext`|Provides a context for managing and sharing avatar-related data and functions across the application.|
|`avatars`| An object that caches avatar URLs keyed by user IDs.|
|`fetchAvatar`| A function to fetch and cache avatars for a given user ID.|

### Functions and Methods

1. `fetchAvatar`
- **Purpose**: 
    - Fetches the avatar image for a specific user from the backend API and caches it locally.
    - Updates the `avatars` state with the fetched avatar URL, caching it for future use.
    - Makes an API request to fetch the avatar if it is not already cached.
- **Parameters**:
  - `userId` (Type: `number` or `string`): The ID of the user whose avatar is to be fetched.
- **Return Value**:
  - `string` (URL of the avatar image) or `null` (if the avatar cannot be fetched or is invalid).
- **Error Handling**:
  - Catches and logs errors to the console using `console.error`.
  - Returns `null` in case of errors or invalid responses.

---

## Sidebar Context

The `SidebarContext.js` file manages the state and functionality of a sidebar component within the application. It provides a boolean state (`isSidebarOpen`) to track whether the sidebar is open or closed and a function (`toggleSidebar`) to toggle the sidebar's visibility. This context is designed to be consumed by other components that need to interact with or respond to the sidebar's state.

- **File Path:** `\hr-frontend\src\context\SidebarContext.js`

### Props

|Prop Name| Description|
|---|---|
|`SidebarContext`|A context object created using `createContext()` to share the sidebar's state and toggle functionality across the application.|
|`SidebarProvider`| A provider component that wraps its children with the `SidebarContext.Provider`, making the sidebar state and toggle function available to all child components.|

### Functions and Methods

1. `SidebarProvider`
- **Purpose**:
  - Manages the `isSidebarOpen` state using React's `useState` hook.
  - Updates the state when `toggleSidebar` is called.
- **Parameters**:
  - `children` (React Node): The child components that will have access to the sidebar context.
- **Return Value**:
  - A `SidebarContext.Provider` component that provides the `isSidebarOpen` state and `toggleSidebar` function to its children.

2. `toggleSidebar`
- **Purpose**:
    - Toggles the `isSidebarOpen` state between `true` and `false`.
    - Updates the `isSidebarOpen` state using `setIsSidebarOpen`.
---
