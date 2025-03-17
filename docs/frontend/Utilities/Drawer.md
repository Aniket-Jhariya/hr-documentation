---
sidebar_position: 6
---
## Drawer

The `Drawer.js` file is a modal-like drawer that slides in from the right side of the screen, providing a flexible and interactive UI element for displaying content. The drawer can be toggled open or closed and supports customizable content, title, and background styling.

- **Dependencies**
    - `@headlessui/react`: Used for accessible and animated dialog components (`Dialog`, `DialogBackdrop`, `DialogPanel`, `DialogTitle`, `TransitionChild`).
    - `@heroicons/react/24/outline`: Provides the `XMarkIcon` for the close button.

### Props
| Prop Name    | Purpose                                                                 |
|--------------|-------------------------------------------------------------------------|
| `open`       | Controls the visibility of the drawer.                                 |
| `setOpen`    | Callback function to update the `open` state (typically from a parent).|
| `children`   | Content to be displayed inside the drawer.                             |
| `title`      | Title displayed at the top of the drawer.                              |
| `background` | Determines if the drawer should have a blue background (`bg-blue-50`). |

### Functions and Methods

1. `Drawer` Component
- **Purpose**:
    - Toggles the visibility of the drawer based on the `open` prop.
    - Updates the state using the `setOpen` function when the close button is clicked.
- **Return Value**:
    - Returns a `Dialog` component from `@headlessui/react` with a backdrop and a sliding panel containing the provided `title` and `children`.

---

## Custom Drawer
The `CustomDrawer.js` file provides a customizable drawer (side panel) functionality to create a modal-like drawer that slides in from the right side of the screen. The drawer can be toggled open or closed and is designed to display content dynamically based on the `children` prop. 

### Props
| Prop Name | Description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| `open`    | Controls the visibility of the drawer. `true` opens the drawer, `false` closes it. |
| `setOpen` | A state setter function to update the `open` state.                         |
| `children`| The content to be displayed inside the drawer.                              |
| `title`   | The title displayed at the top of the drawer.                               |

### Functions and Methods

1. `Drawer` Component
- **Purpose** 
    - The drawer's visibility is controlled by the `open` prop. When the `XMarkIcon` button is clicked, the `setOpen(false)` function is called, closing the drawer.
- **Return Value**
    - Returns a `Dialog` component from `@headlessui/react` that renders the drawer UI.

---
