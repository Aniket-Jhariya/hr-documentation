---
sidebar_position: 16
---

## Sidebar

The `Sidebar.js` file is responsible for rendering a dynamic and responsive sidebar in the HR Frontend application. It integrates with the application's routing system, authentication context, and sidebar state management to display navigation tabs and service-related tabs. The sidebar adapts to user roles, permissions, and screen sizes, providing a seamless navigation experience.

- **File Path:** `\hr-frontend\src\utils\sidebar\Sidebar.js`

### State Variables
| Variable Name|Purpose|
|---|---|
|**`Tab`**|Represents a navigation tab in the sidebar.|
|`name`| Display name of the tab|
|`id`| Unique identifier for the tab|
|`href`| URL path for navigation|
|`current`| Indicates if the tab is currently active|
|`icon`| FontAwesome icon class for the tab|
|`show`| Determines if the tab should be displayed based on user role|
|`isLocked`| Indicates if the tab is locked|
|`lockIcon`|FontAwesome icon class for the lock icon|
|||
|**`service-tab`**|Represents a service-related tab in the sidebar.|
|`name`| Display name of the service tab|
|`id`| Unique identifier for the service|
|`href`| URL path for navigation|
|`key`| Key identifier for the service type|
|`show`| Determines if the tab should be displayed|
|`current`| Indicates if the tab is currently active|
|`locked`| Indicates if the tab is locked|
|`icon`|ontAwesome icon class for the tab|

### Functions and Methods

1. `useEffect`
- **Initialization of Tabs**  
   - **Purpose**:
        - Sets up the navigation tabs based on the user's role and details.
        - **Side Effects**: Updates the `tabs` state with an array of tab objects.

- **Active Tab Detection**  
   - **Purpose**:
        - Determines the active tab based on the current URL path.
        - Updates the `activeTab` state.

- **Service Tabs Initialization**  
   - **Purpose**:
        - Maps organization services to service tabs.
        - Updates the `serviceTabs` state.

- **Click Outside Handling**  
   - **Purpose**:
        - Closes the mobile sidebar when clicking outside of it.
        - Adds/removes a `mousedown` event listener.

2. `getCount`
- **Purpose**:
    - Fetches job and applicant counts from the API.
    - Updates `jobCount` and `applicantsCount` states.
- **Error Handling**: Logs errors to the console.


3. `handleToggleSidebar`
- **Purpose**:
    - Toggles the sidebar's open/closed state.
    - Calls `toggleSidebar` from `SidebarContext`.

4. `handleTabClick`
- **Purpose**:
    - Updates the active tab state when a tab is clicked.
    - Updates the `activeTab` state.
- **Parameters**: 
    - `tab`: The name of the clicked tab.


### Rendering
1. `Tab`  
   - Renders a full-width tab with an icon, title, and optional lock icon.
2. `IconTab`
   - Renders a compact tab with only an icon, used when the sidebar is collapsed.

---

## Icon Tab 
The `IconTab` component is designed to render a clickable tab with an icon and a title. It is typically used in a sidebar or navigation menu within the React project. The component supports conditional rendering, styling based on active state, and locking functionality to disable interaction.

- **File Path:** `\hr-frontend\src\utils\sidebar\IconTab.js`

### Props

|Prop Name| Description|
|---|---|
|`link`|The URL or path to navigate to when the tab is clicked.|
|`title`|The title or label associated with the tab. |
|`iconClass`|The CSS class for the icon displayed in the tab.|
|`isActive`|Determines if the tab is in an active state. If `true`, the tab will have additional styling to indicate its active status.|
|`isLocked`|Determines if the tab is locked. If `true`, the tab will be visually disabled (grayed out) and non-interactive.|
|`onClick`|A callback function triggered when the tab is clicked.|
|`show`|Controls the visibility of the tab. If `false`, the tab will not be rendered.|

### Functions and Methods

1. `IconTab` Component
- **Purpose**
    - Navigation to the specified `link` when clicked.  
    - Execution of the `onClick` callback function when the tab is clicked.

- **Return Value**
    - **JSX Element**: Returns a `Link` component from `react-router-dom` wrapped in a fragment. The `Link` is conditionally rendered based on the `show` prop.  

---

## Tab

The `Tab.js` file renders a tab in a sidebar navigation. It is designed to be reusable and memoized for performance optimization. The tab can display a title, an icon, and optional counts for "Jobs" or "Applicants." 

- **File Path:** `\hr-frontend\src\utils\sidebar\Tab.js`

### Props

| Prop Name        | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| `link`           | The URL to navigate to when the tab is clicked.                             |
| `title`          | The display text for the tab.                                               |
| `iconClass`      | CSS class for the icon displayed next to the title.                         |
| `isActive`       | Indicates if the tab is currently active.                                   |
| `isLocked`       | Indicates if the tab is locked (disabled).                                  |
| `show`           | Controls whether the tab is rendered.                                       |
| `lockIcon`       | CSS class for the lock icon displayed when the tab is locked.               |
| `onClick`        | Callback function triggered when the tab is clicked.                        |
| `applicantsCount`| Optional count displayed for the "Applicants" tab.                          |
| `jobCount`       | Optional count displayed for the "Jobs" tab.                                |


### Functions and Methods

1. `Tab` 
- **Purpose**:
    - The `Tab` component is a memoized functional component that renders a navigation tab.

- **Return Value**
- **JSX Element**: A `Link` element wrapped in a fragment. The `Link` element includes:
  - A title and icon.
  - Optional count badges for "Jobs" or "Applicants."
  - A lock icon if the tab is locked.

---
