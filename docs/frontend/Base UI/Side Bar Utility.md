---
sidebar_position: 3
---

## Sidebar

This component is designed to be reusable and integrates with the application's routing system to highlight the active tab based on the current URL. It also interacts with the `AuthContext` to conditionally render tabs based on user permissions.

- **File Path:** `\hr-frontend\src\Base UI\sidebar-utils\Sidebar.js`

### Dependencies

- **AuthContext:** Provides authentication and user details.
- **Tab and IconTab Components:** Child components used to render individual tabs.


### Props

- `isSidebarOpen`: Boolean indicating whether the sidebar is open.
- `setSidebarOpen`: Function to toggle the sidebar's open state.
- `mobileSidebarOpen`: Boolean indicating whether the mobile sidebar is open.
- `setMobileSidebarOpen`: Function to toggle the mobile sidebar's open state.

### State and Context

- **State:**
  - `activeTab`: Tracks the currently active tab.
  - `jobCount`: Stores the count of jobs.
  - `applicantsCount`: Stores the count of applicants.

- **Context:**
  - `AuthContext`: Provides `authTokens` and `userDetails` for authentication and user-specific data.

### Constants

- **Tabs:**
  - `tabs`: An array of objects representing the main navigation tabs.
  - `servicesTabs`: An array of objects representing the services tabs.

### Effects

1. **Active Tab Detection:**
   - Uses `useLocation` from `react-router-dom` to detect the current URL and set the active tab accordingly.

   ```javascript
   useEffect(() => {
       const paths = location.pathname.split('/')
       setActiveTab(paths[paths.length - 1] !== "" ? (paths[paths.length - 1]).toLowerCase() : (paths[paths.length - 2].toLowerCase()))
   }, [location])
   ```

2. **Fetch Count Data:**
   - Fetches job and applicant counts on component mount.

   ```javascript
   useEffect(() => {
       getCount()
   }, [])
   ```

3. **Mobile Sidebar Click Outside:**
   - Adds an event listener to close the mobile sidebar when clicking outside of it.

   ```javascript
   useEffect(() => {
       const handleClickOutside = (event) => {
           if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
               setMobileSidebarOpen(false)
           }
       };

       if (mobileSidebarOpen) {
           document.addEventListener('mousedown', handleClickOutside);
       } else {
           document.removeEventListener('mousedown', handleClickOutside);
       }

       return () => {
           document.removeEventListener('mousedown', handleClickOutside);
       };
   }, [setMobileSidebarOpen]);
   ```

### Functions

1. **getCount:**
   - Fetches job and applicant counts from the server.

   ```javascript
   const getCount = async () => {
       try {
           const response = await fetch(`/get_count/all/`, {
               method: 'GET',
               headers: {
                   "Content-Type": "application/json",
                   Authorization: "Bearer " + String(authTokens.access),
               }
           })

           if (!response.ok) {
               throw new Error('Network response was not ok');
           } else {
               const data = await response.json()
               if (data) {
                   setJobCount(data.jobs)
                   setApplicantsCount(data.applicants)
               }
           }
       } catch (error) {
           console.log(error)
       }
   }
   ```

2. **handleToggleSidebar:**
   - Toggles the sidebar's open state.

   ```javascript
   const handleToggleSidebar = () => {
       setSidebarOpen(!isSidebarOpen);
   };
   ```

3. **handleTabClick:**
   - Sets the active tab when a tab is clicked.

   ```javascript
   const handleTabClick = (tab) => {
       setActiveTab(tab);
   };
   ```

### Rendering

The component renders an aside element that contains the sidebar content. It conditionally renders either `Tab` or `IconTab` components based on whether the sidebar is open or closed.

---

## Tab 

The `Tab` component is a reusable UI element designed for use in a React application, specifically within a sidebar or navigation menu. It provides a clickable tab that can display an icon, a title, and optional counters for specific tabs like "Jobs" or "Applicants". The component is optimized for performance using `memo` to prevent unnecessary re-renders.

- **File Path**: `\hr-frontend\src\Base UI\sidebar-utils\Tab.js`

### Component Definition

```javascript
const Tab = memo(({ link, title, iconClass, isActive, isLocked, show, lockIcon, onClick, applicantsCount, jobCount }) => {
  // Component logic and JSX
});
```

### Props

The `Tab` component accepts the following props:

- **link**: The URL to navigate to when the tab is clicked.
- **title**: The text displayed on the tab.
- **iconClass**: CSS class for the icon displayed next to the title.
- **isActive**: Boolean indicating if the tab is currently active.
- **isLocked**: Boolean indicating if the tab is locked (disabled).
- **show**: Boolean to conditionally render the tab.
- **lockIcon**: CSS class for the lock icon displayed when the tab is locked.
- **onClick**: Function to be called when the tab is clicked.
- **applicantsCount**: Optional count displayed next to the "Applicants" tab.
- **jobCount**: Optional count displayed next to the "Jobs" tab.

### Styling

The component uses dynamic class names based on the props to apply different styles:

- **Active Tab**: `bg-blue-50 brand-text shadow-md`
- **Locked Tab**: `text-gray-400`
- **Hover Effect**: `tab-hover`

```javascript
const tabClasses = `${title}  flex justify-between items-center tab cursor-pointer block py-2 px-4 mb-1 rounded-md font-medium text-sm ${isLocked ? `text-gray-400` : `text-gray-700 tab-hover`}  ${isActive && !isLocked ? 'bg-blue-50 brand-text shadow-md' : ``}`;
```

### Conditional Rendering

The component conditionally renders the tab based on the `show` prop. Additionally, it conditionally displays counters for "Jobs" and "Applicants" tabs and a lock icon if the tab is locked.

---

## IconTab 

The `IconTab` component is a reusable React component designed to render a tab with an icon in a sidebar or navigation menu. It is part of the `sidebar-utils` module within the `Base UI` directory of the `hr-frontend` project. This component is used to create interactive tabs that can navigate to different routes within the application, with support for active states, locked states, and conditional rendering.

- **File Path:** `\hr-frontend\src\Base UI\sidebar-utils\IconTab.js`


The `IconTab` component is a functional component that accepts several props to customize its appearance and behavior. The component returns a `Link` element from `react-router-dom` that wraps an icon, allowing the tab to navigate to a specified route when clicked.

### Props

| Prop Name | Type      | Description                                                                 |
|-----------|-----------|-----------------------------------------------------------------------------|
| `link`    | `string`  | The URL to navigate to when the tab is clicked.                            |
| `title`   | `string`  | The title of the tab (not currently used in the rendered output).          |
| `iconClass` | `string` | The CSS class for the icon to be displayed in the tab.                     |
| `isActive` | `boolean` | Determines whether the tab is in an active state.                          |
| `isLocked` | `boolean` | Determines whether the tab is locked (disabled).                           |
| `onClick` | `function`| A callback function to be executed when the tab is clicked.                |
| `show`    | `boolean` | Determines whether the tab should be displayed or hidden.                  |

### Component Logic

- **Class Names:** The component dynamically generates class names based on the `isActive` and `isLocked` props. If the tab is locked, it will have a gray text color (`text-gray-400`). If the tab is active and not locked, it will have a blue background (`bg-blue-50`) and a custom class (`brand-text`).
  
### Conditional Rendering:
- The component only renders the `Link` element if the `show` prop is `true`.
- The first `IconTab` renders a tab for the "Dashboard" route. It is active, not locked, and will log a message to the console when clicked.
- The second `IconTab` renders a tab for the "Settings" route. It is inactive, locked, and will not navigate when clicked due to the `isLocked` prop.
