---
sidebar_position: 12
---
## Assign Test Modal

The `AssignTestModal.js` file is a React component that renders a modal dialog for assigning assessments (tests) to candidates. It provides a form for selecting tests, setting validity dates, and sending assessment links. The modal is designed to be reusable and integrates with other components to handle form submission and state management.

- **File Path:** `\hr-frontend\src\utils\modals\AssignTestModal.js`

### Props
|Prop Name| Description|
|---|---|
|`onClose`| A function passed as a prop to handle the closing of the modal. It is triggered when the user clicks the "Cancel" button or the close icon (`XMarkIcon`).|

### Functions and Methods

1. `AssignTestModal`
- **Purpose**:
    - The main functional component that renders the modal.
    - Renders a modal with a form for assigning tests.
    - Updates the UI based on user interactions (e.g., selecting tests, setting dates).
- **Parameters**:
  - `onClose`: Function to close the modal.
- **Return Value**: A JSX structure representing the modal UI.

2. `handleClose`
- **Purpose**:
    - Handles the closing of the modal.
- **Side Effects**:
  - Calls the `onClose` function passed as a prop to close the modal.

3. `ShareTest`
- **Purpose**:
    - Handles form submission for sharing tests.
    - Submits the form data to assign tests to candidates.
    - Updates the UI to reflect the submission state (e.g., disabling the submit button during submission).

4. `handleValidFromChange` and `handleValidToChange`
- **Purpose**:
    - Handle changes to the "Valid From" and "Valid To" date inputs.
    - Updates the state for `validFrom` and `validTo` based on user input.
- **Parameters**:
  - `event`: The input change event.

---
## Header

The `Header.js` file serves as a reusable header for modal dialogs within the application. It provides a title (`label`) and a close button (`XMarkIcon`) to dismiss the modal.

- **File Path:** `\hr-frontend\src\utils\modals\Header.js`
- **Dependencies**
    - `@heroicons/react/20/solid`: Provides the `XMarkIcon` component used for the close button.

### Props
|Prop Name| Description|
|---|---|
|`label`| The text to display as the modal title.|
|`onClose`| A callback function triggered when the close button is clicked.|

### Functions and Methods

1. `Header` 
- **Purpose**:
    - Renders the header section of a modal, including a title and a close button.
    - Triggers the `onClose` callback when the close button is clicked.
    - Updates the UI to reflect the modal header's appearance.  
- **Return Value**:
    - A JSX element representing the modal header.

### Styling
| **CSS Statement** | **Purpose** |
|-------------------|------------|
| **`.error-message`** | Styles error messages with a small font size, red color, and bold weight. |
| `font-size: .65rem;` | Makes the text small to fit within UI elements without taking too much space. |
| `color: rgb(231, 49, 49);` | Uses a red color to indicate an error or warning message. |
| `font-weight: 600;` | Increases font weight to make the text stand out. |
| `padding-left: 5px;` | Adds some spacing from the left to separate it from surrounding elements. |
|||
| **`.modal-dialog-centered`** | Ensures the modal dialog is vertically centered. |
| `height: 100% !important;` | Forces the modal to take up the full height of its parent container. |
| `min-height: auto;` | Resets any minimum height constraint, ensuring flexible height. |
|||
| **`.modal-dialog`** | Centers the modal horizontally and ensures it takes full height. |
| `margin: 0 auto !important;` | Centers the modal horizontally. |
| `height: 100%;` | Ensures the modal takes up the full available height. |
|||
| **`.share-button`** | Styles a share button with a small font size, white text, and rounded corners. |
| `font-family: inherit;` | Ensures the button inherits the parent font style. |
| `font-size: .65rem;` | Sets a small font size for compact design. |
| `color: white;` | Makes the text color white for better contrast. |
| `height: 30px;` | Defines a fixed button height. |
| `width: 60px;` | Defines a fixed button width. |
| `border-radius: 4px;` | Rounds the button corners slightly for a modern appearance. |
| `transition: all 0.2s;` | Adds a smooth transition effect for hover and click interactions. |
|||
| **`.custom-modal .modal-content`** | Defines the size and appearance of the modal content. |
| `min-height: 500px !important;` | Ensures the modal has a minimum height of 500px. |
| `max-height: 550px;` | Restricts the modal height to 550px to avoid excessive size. |
| `border-radius: 10px;` | Rounds the modal’s corners for a softer look. |
| `overflow: hidden;` | Prevents content from overflowing outside the modal boundary. |
|||
| **`.custom-modal .modal-body`** | Styles the modal body with a max height and background color. |
| `max-height: 400px !important;` | Restricts the modal body height to 400px. |
| `background-color: #f4f7fb;` | Sets a light blue background for contrast. |
| `border-radius: 10px;` | Rounds the body’s corners for consistency with the modal content. |
| `overflow: hidden;` | Ensures content stays within the modal body. |
|||
| **`.custom-modal .nav-item .nav-link`** | Styles navigation links within the modal. |
| `width: 90px;` | Gives each nav link a fixed width. |
| `font-family: 'Inter', sans-serif !important;` | Forces the font to be 'Inter' for uniformity. |
| `font-weight: 500;` | Sets a medium font weight for better readability. |
| `color: #2b2d42;` | Uses a dark gray color for visibility. |
| `position: relative;` | Ensures positioning context for the underline effect. |
| `padding-bottom: .2rem !important;` | Adds space below the link for better spacing. |
| `margin: 0px .2rem;` | Adds horizontal spacing between navigation links. |
|||
| **`.custom-modal .nav-item .nav-link::after`** | Adds an underline effect on hover or focus. |
| `content: '';` | Creates an empty pseudo-element for the underline. |
| `height: 3px;` | Defines the thickness of the underline. |
| `width: 100%;` | Ensures the underline matches the link width. |
| `background: rgb(90, 90, 95);` | Sets the underline color to dark gray. |
| `opacity: 0;` | Initially hides the underline. |
| `transition: all .2s;` | Smoothly animates the underline appearance. |
|||
| **`.form-active`** | Styles active form elements with a green icon. |
| `border: 0 !important;` | Removes default borders for a cleaner design. |
| `box-shadow: none !important;` | Eliminates any box-shadow effect. |
| `margin-bottom: 0 !important;` | Removes bottom margin for alignment. |
| `padding-left: 5px !important;` | Adds slight left padding. |
| `.form-icon { color: #1ce687; }` | Changes the form icon color to green for active state indication. |
|||
| **`.form-inactive`** | Styles inactive form elements with a gray icon and text. |
| `color: #8f8f8f;` | Uses gray color for disabled text. |
| `.form-icon { color: #8f8f8f; }` | Makes the icon gray to indicate inactivity. |
|||
| **`.form-subtext`** | Styles subtext within forms. |
| `font-size: .7rem;` | Sets a slightly smaller font size for form subtext. |

---
