---
sidebar_position: 7
---

## Dropdown

The `Dropdown.js` file is designed to render a customizable dropdown menu for accessible and animated dropdown functionality. It is used to display a list of items (`dropdownItems`) with optional icons and titles, and it supports dynamic styling based on user interaction.

- **File Path:** `\hr-frontend\src\utils\dropdowns\Dropdown.js`
- **Dependencies**:
    - `headlessui/react`: Provides `Menu` and `Transition` components for accessible and animated dropdown functionality.
    - `@heroicons/react/20/solid`: Provides the `ChevronDownIcon` (currently commented out in the code).

### Props
| Prop Name      | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| `job`          | An object containing job-related data, used to assign an `id` to dropdown items. |
| `dropdownTitle`| The title or label displayed on the dropdown button.                        |
| `dropdownIcon` | A FontAwesome icon class name to display an icon on the button.  |
| `dropdownItems`| An array of objects representing the dropdown menu items. Each object must have a `label` field. |

### Functions and Methods

1. `classNames(...classes)`
- **Purpose**:
    - Utility function to conditionally join CSS class names.
- **Parameters**:
  - `...classes` (Array): A list of class names or falsy values.
- **Return Value**:
    - A single string of concatenated class names, excluding falsy values.

2. `Dropdown({ job, dropdownTitle, dropdownIcon, dropdownItems })`
- **Purpose**:
    - Renders a dropdown menu with customizable title, icon, and items.
- **Return Value**: A React component representing the dropdown menu.

---

## Filter Dropdown

The `FilterDropdown.js` file is a utility component in a React project that provides a dropdown filter interface. It is designed to allow users to input search terms for specific fields, which can then be used to filter data dynamically. 

- **File Path:** `\hr-frontend\src\utils\dropdowns\FilterDropdown.js`
- **Dependencies**
    - `@headlessui/react`: Provides the `Popover` and `Transition` components for creating accessible dropdowns.
    - `@heroicons/react`: Provides icons used in the dropdown button and panel.

### Props

| Prop Name      | Purpose                                                                 |
|----------------|-------------------------------------------------------------------------|
| `item`         | Represents the data item associated with the dropdown (unused in code). |
| `label`        | The text displayed on the dropdown button.                              |
| `fieldName`    | The name of the field being filtered.                                  |
| `handleSearch` | A callback function to handle search input changes.                    |
| `searchTerm`   | An object containing the current search term for the field.            |
| `setSearchTerm`| A function to update the search term state (unused in code).           |

### Functions and Methods

1. `FilterDropdown` Component
- **Purpose**
    - Updates the `searchTerm` state via the `handleSearch` callback when the input value changes.

- **Return Value**
    - Returns a JSX element representing a dropdown filter interface.

---

## Sort Dropdown

The `SortDropdown.js` file is a utility component in a React project that provides a dropdown interface for sorting data. It allows users to select a field and sort order (ascending or descending) from a list of dropdown items. It interacts with parent components by invoking callback functions (`handleAscSort` and `handleDescSort`) to handle sorting logic.

- **File Path:** `\hr-frontend\src\utils\dropdowns\SortDropdown.js`

### Props

| Prop Name       | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| `dropdownItems` | An array of objects representing the dropdown items. Each item should have a `label` and `value`. |
| `handleAscSort` | A callback function triggered when ascending sort is selected.              |
| `handleDescSort`| A callback function triggered when descending sort is selected.            |

### Functions and Methods
1. `SortDropdown`
- **Purpose**:
    - Renders a dropdown menu for sorting data.
    - Updates local state (`selectedField` and `selectedSort`) when a sort option is selected.
    - Invokes `handleAscSort` or `handleDescSort` with the selected field value.
- **Return Value**: A React component rendering a dropdown UI.

2. `classNames`
- **Purpose**:
    - Utility function to conditionally join CSS class names.
- **Parameters**:
  - `...classes`: A rest parameter representing an array of class names.
- **Return Value**: A string of concatenated class names, excluding falsy values.

---