---
sidebar_position: 20
---

## Table

The `Table.js` file integrates the Tabulator library to render and manage dynamic, server-side paginated, sortable, and filterable tables. It is designed to fetch data from a backend API, handle user interactions like sorting and filtering, and persist certain table states (e.g., filters, pagination) using cookies.

- **File Path:** `\hr-frontend\src\utils\tables\Table.js`
- **Dependencies**
    - `tabulator-tables`: Library used to render and manage the table.
    - `AuthContext`: Provides authentication tokens for API requests.

### Props
| Prop Name           | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `setTableInstance`  | Callback to pass the Tabulator instance to the parent component.            |
| `data`              | Initial data to populate the table (optional).                              |
| `columns`           | Column definitions for the table.                                           |
| `url`               | API endpoint to fetch data from.                                            |
| `fieldMapping`      | Mapping of table fields to API fields for filtering and sorting.            |
| `setTableRowCount`  | Callback to pass the total row count to the parent component.               |
| `initialSortColumns`| Initial sorting configuration for the table.                                |
| `persistenceId`     | Unique identifier for persisting table state (default: `"custom-table"`).   |


---

### Functions and Methods

1. `Table` Component
- **Purpose**:
    - Initializes and destroys the Tabulator table on mount/unmount.
    - Updates the parent component with the Tabulator instance and row count.

- **Return Value**:
    - Returns a `div` element containing the Tabulator table.


2. `useEffect` Hook
- **Purpose**
    - Initializes the Tabulator table when the `url` prop changes.
    - Creates a new Tabulator instance with the provided configuration.
    - Sets up server-side pagination, sorting, and filtering.
    - Persists table state (filters, pagination) using cookies.
    - Destroys the table instance when the component unmounts.

3. `buildQueryParams` Function
- **Purpose**:
    - Constructs query parameters for filtering and sorting based on user input.

- **Parameters**
    - `filters`: Array of filter objects.
    - `sortModel`: Array of sort objects (unused in the current implementation).

- **Return Value**
    - A string of query parameters formatted for the backend API.

### Styling
| CSS Statement | Purpose |
|--------------|----------|
|`.dashboard-table.tabulator`|Styles for tables used in dashboards, including rounded corners, box shadows, and background colors.|
|`.data-table .tabulator`|Styles for general data tables, with similar properties but slightly different border radii and background colors.|
|`.dashboard-table.tabulator .tabulator-header .tabulator-col`|Styles for table headers in dashboard tables, including background color, font , and padding.|
|`.data-table .tabulator .tabulator-header .tabulator-col`|Styles for headers in general data tables, with a white background and gray text.|
|`.dashboard-table.tabulator .tabulator-row`|Styles for rows in dashboard tables, including padding, font size, and border.|
|`.data-table .tabulator .tabulator-row`|Styles for rows in general data tables, with similar properties but different padding and border styles.|
|`.dashboard-table .tabulator-cell`|Styles for cells in dashboard tables, including vertical alignment and padding.|
|`.data-table .tabulator-cell`|Styles for cells in general data tables, with similar properties.|
|`.dashboard-table.tabulator .tabulator-row:hover`|Adds a hover effect for rows in dashboard tables.|
|`.dashboard-table.tabulator-row.tabulator-selected`|Styles for selected rows in dashboard tables.|
|`.data-table .tabulator-row.tabulator-selected`|Styles for selected rows in general data tables.|
|`.dashboard-table .tabulator-cell .bg-green-100`|Styles for green status badges.|
|`.dashboard-table .tabulator-cell .bg-red-100`|Styles for red status badges.|
|`.dashboard-table .tabulator-footer`|Styles for table footers in dashboard tables.|
|`.dashboard-table .tabulator-footer .tabulator-page.active`|Styles for active pagination buttons in dashboard tables.|
|`.data-table .tabulator-footer .tabulator-page.active`|Styles for active pagination buttons in general data tables.|
|`.column-filter-icon`|Styles for filter icons in table columns.|
|`.column-filter`|Styles for filter inputs in table columns.|
|`.column-filter input`|Styles for input fields within column filters.|
|`#custom-table .tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-sorter`|Styles for sorting icons in custom tables.|
|`#custom-table .tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-sorter .tabulator-arrow`|Styles for sorting arrows.|

---

## Menu

The `Menu.js` file provides a dropdown menu with options for "Edit" and "Delete" actions. The component manages its own state for toggling the visibility of the dropdown menu and logs actions to the console for demonstration purposes.

- **File Path:** `\hr-frontend\src\utils\tables\Menu.js`

### Props
|Prop Name| Description|
|---|---|
|`data`| An object representing the data associated with the menu item.|

### Functions and Methods

1. `toggleMenu`
- **Purpose**:
    - Toggles the visibility of the dropdown menu.
    - Updates the `menuOpen` state to either `true` or `false`, controlling the visibility of the dropdown menu.

2. `handleEdit`
- **Purpose**: 
    - Handles the "Edit" action.
    - Logs the associated `props.data` to the console.
    - Closes the dropdown menu by setting `menuOpen` to `false`.

3. `handleDelete`
- **Purpose**:
    - Handles the "Delete" action.
    - Logs the associated `props.data` to the console.
    - Closes the dropdown menu by setting `menuOpen` to `false`.

---

## Progressive Load Table

The `ProgressiveLoadTable.js` file implements a progressively loading table using the Tabulator library. It is designed to handle large datasets by loading data in chunks as the user scrolls, reducing initial load time and improving performance. The component integrates with an API to fetch data dynamically and supports features like pagination, filtering, and column visibility toggling.

- **File Path:** `\hr-frontend\src\utils\tables\ProgressiveLoadTable.js`

### Props
|Prop Name| Description|
|---|---|
|`setTableInstance`| A function to pass the Tabulator table instance to the parent component.|
|`data`| Initial data to populate the table (optional).|
|`columns`| Column definitions for the table.|
|`url`| API endpoint URL for fetching data.|

### Functions and Methods
1. `ProgressiveLoadTable`
-**Purpose**:
    - Initializes and configures a Tabulator table on component mount.
    - Destroys the table on component unmount to prevent memory leaks.
- **Return Value:**
    - A React component that renders a progressively loading table.

2. `useEffect`
- **Purpose**:
    - Initializes the Tabulator table when the component mounts.
    - Configures the table with progressive loading, pagination, and API integration.
    - Creates a Tabulator instance and binds it to the `#custom-table` DOM element.
    - Sets up AJAX configuration for API requests, including headers with authentication tokens.
    - Destroys the table instance when the component unmounts.

3. `headerMenu`
- **Purpose**:
    - Generates a context menu for table columns to toggle visibility.
- **Return Value**:
    - An array of menu items, each containing a label and an action to focus the header filter.

4. `dynamicColumns`
- **Purpose**:
    - Dynamically generates column definitions based on the data structure.
- **Parameters**:
    - `data`: Array of objects representing table rows.
- **Return Value**:
    - An array of column definitions for the Tabulator table.

5. `headerPopupFormatter`
- **Purpose**:
    - Creates a custom header filter popup for columns.
- **Parameters**:
    - `e`: Event object.
    - `column`: The column object.
    - `onRendered`: Callback function for rendering.
- **Return Value**:
    - A DOM element containing an input field for filtering.

---
