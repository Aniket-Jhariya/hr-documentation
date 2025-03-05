---
sidebar_position: 12
---

The `Tab.js` file renders a tab-like navigation element. It is designed to be reusable and customizable, allowing for dynamic rendering of tabs with optional icons, counts and locked states.

- **File Path**: `\hr-frontend\src\components\applicants\Tab.js`

### Props

| Prop Name         | Purpose                                                                 |
|-------------------|-------------------------------------------------------------------------|
| `link`            | The URL or path to navigate to when the tab is clicked.                 |
| `title`           | The display text of the tab.                                           |
| `iconClass`       | CSS class for the icon displayed alongside the title.                  |
| `isActive`        | Indicates whether the tab is currently active.                         |
| `isLocked`        | Determines if the tab is locked (disabled).                            |
| `show`            | Controls whether the tab should be rendered.                           |
| `lockIcon`        | CSS class for the lock icon displayed when the tab is locked.          |
| `onClick`         | Callback function triggered when the tab is clicked.                   |
| `applicantsCount` | Displays a count of applicants (only for the "Applicants" tab).        |
| `jobCount`        | Displays a count of jobs (only for the "Jobs" tab).                    |


### Functions and Methods

1. `Tab` Component
#### Purpose
- None directly within the component.
- The component triggers the `onClick` callback when the tab is clicked.
#### Return Value
- **JSX Element**: Returns a `Link` element wrapped in a fragment (`<>...</>`). The `Link` element is conditionally rendered based on the `show` prop.
#### Error Handling
- No explicit error handling is implemented. Errors are likely to be handled by the parent component or React's error boundaries.

---