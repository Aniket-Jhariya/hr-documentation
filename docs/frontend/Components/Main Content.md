---
sidebar_position: 1
---

## Main Content Area

The `MainContent.js` file is a React component that serves as the main content area of the application. It is responsible for rendering the primary content of the application, including the navigation bar (`Navbar`) and a heading (`Heading`).

- **File Path:** `Diacto\CandidHR\hr-frontend\src\components\MainContent.js`

### Props

|Prop Name| Description|
|---|---|
| `isSidebarOpen` | This prop is a boolean that determines whether the sidebar is currently open or closed. It is used to conditionally set the width of the `MainContent` component.|
|`setSidebarOpen` | This prop is a function that allows the `MainContent` component to toggle the sidebar's state. Although it is passed as a prop, it is not directly used within the `MainContent` component in the provided code.|

### Styling

The component uses Tailwind CSS for styling. The main `div` element has the following classes:

- `bg-gray-50`: Sets the background color to a light gray.
- `overflow-hidden`: Ensures that any content that overflows the container is hidden.
- `max-h-screen`: Sets the maximum height of the container to the height of the screen.
- `flex-1`: Allows the container to grow and fill the available space.
- `flex`: Enables flexbox layout.
- `flex-col`: Arranges the child elements in a column.

The width of the `MainContent` component is dynamically adjusted based on the `isSidebarOpen` prop:

- If `isSidebarOpen` is `true`, the width is set to `w-3/4` (75% of the parent container).
- If `isSidebarOpen` is `false`, the width is set to `w-1/2` (50% of the parent container).

### Child Components

- **`Navbar`**: This component is imported from `../utils/navbar/Navbar` and is rendered at the top of the `MainContent` component. It typically contains navigation links or other navigation-related elements.

- **`Heading`**: This component is imported from `../utils/header/Heading` and is rendered below the `Navbar`. It is likely used to display a heading or title for the current page or section.

