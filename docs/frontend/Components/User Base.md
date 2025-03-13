---
sidebar_position: 15
---

## Base

The `Base.js` file serves as the foundational layout for the application. It integrates a navigation bar (`Navbar`), a sidebar (`Sidebar`), and a content area (`Outlet`) from `react-router-dom`. The component dynamically adjusts its layout based on the sidebar's state (open or closed) and handles mobile responsiveness.

- **File Path:** `\hr-frontend\src\components\u-base\Base.js`
- **Dependencies**:
    - `AuthContext`: Accesses `userDetails` for authentication-related functionality.
    - `SidebarContext`: Manages the sidebar's open/close state.
    - `Navbar` and `Sidebar`: Renders the navigation bar and sidebar, respectively.
    - `Zoho Desk Script`: Injects an external script for Zoho Desk functionality.

### Contexts
|Variable Name| Description|
|---|---|
| **`AuthContext`**| Provides user authentication details.|
| `userDetails`| Contains information about the authenticated user.|
|||
|**`SidebarContext`**|Manages the state of the sidebar (open or closed).|
| `isSidebarOpen`| Boolean indicating whether the sidebar is open.|

### Functions and Methods

1. `Base` Component

- **Purpose** 
1. **Script Injection**:
   - Dynamically injects a Zoho Desk script into the DOM on component mount.
   - Cleans up by removing the script on component unmount to avoid memory leaks.

2. **State Management**:
   - Manages the `mobileSidebarOpen` state to control the mobile sidebar's visibility.

- **Return Value**
    - **JSX**: Returns a layout structure containing:
    - A `Navbar` component.
    - A `Sidebar` component.
    - A content area (`Outlet`) for nested routes.
    - Dynamic styling based on the sidebar's state.

---

## Code Snippets

### Dynamic Layout Adjustment
The layout dynamically adjusts based on the sidebar's state (`isSidebarOpen`):

```js
<div className={`w-auto ${isSidebarOpen ? "sm:ml-64" : "sm:ml-20"} `}>
  <div
    style={{ height: "calc(100dvh - 50px)" }}
    className="w-full rounded-lg mt-12 bg-gray-50 pt-2"
  >
    <Outlet />
  </div>
</div>
```

### Mobile Sidebar State Management
The `mobileSidebarOpen` state is passed to both `Navbar` and `Sidebar` for mobile responsiveness:

```js
<Navbar
  mobileSidebarOpen={mobileSidebarOpen}
  setMobileSidebarOpen={setMobileSidebarOpen}
/>
<Sidebar
  mobileSidebarOpen={mobileSidebarOpen}
  setMobileSidebarOpen={setMobileSidebarOpen}
/>
```

---

## Conclusion
The `Base` component is a critical part of the application's layout, providing a responsive and dynamic structure for navigation and content rendering. It integrates multiple contexts and external dependencies to deliver a seamless user experience.