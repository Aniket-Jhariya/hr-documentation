---
sidebar_position: 4
---
## Layout Wrapper

The `Base.js` file is a foundational React component that serves as the layout wrapper for the application. It integrates essential UI elements such as the navigation bar (`Navbar`), sidebar (`Sidebar`), and a dynamic content area (`Outlet`). This component is responsible for managing the overall structure and layout of the application.

1. **Integrate Authentication Context**: It uses the `AuthContext` to access user details, which can be used for conditional rendering or other logic.
2. **Dynamic Content Rendering**: It uses the `Outlet` component from `react-router-dom` to render nested routes dynamically.

- **File Path**: `\hr-frontend\src\Base UI\u-base\Base.js`

### State Management

```javascript
const [isSidebarOpen, setSidebarOpen] = useState(true);
const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
const {userDetails} = useContext(AuthContext);
```

- **`isSidebarOpen`**: A boolean state to manage the visibility of the sidebar in desktop view.
- **`mobileSidebarOpen`**: A boolean state to manage the visibility of the sidebar in mobile view.
- **`userDetails`**: Data fetched from the `AuthContext`, which can be used to personalize the UI based on the logged-in user.

### JSX Structure

- **`Navbar`**: The navigation bar component, which receives state and setter functions for managing the mobile sidebar.
- **`Sidebar`**: The sidebar component, which receives state and setter functions for managing both desktop and mobile sidebar states.
- **`Outlet`**: The dynamic content area where child routes are rendered.
- **Conditional Styling**: The `className` for the main content area dynamically adjusts based on the state of `isSidebarOpen` to accommodate the sidebar's width.

### Key Features

- **Responsive Design**: The component handles both desktop and mobile views, ensuring a responsive user experience.
- **State Management**: It manages the state of the sidebar, allowing users to toggle its visibility.
- **Context Integration**: It leverages the `AuthContext` to access user details, enabling personalized UI elements.

