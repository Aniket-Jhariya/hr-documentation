---
sidebar_position: 4
---

## Checkbox

The `Checkbox.js` file renders a customizable checkbox input. It is designed to be a controlled component, meaning its state (`checked`) and state update logic (`setChecked`) are managed externally by the parent component. 

- **File Path:** `\hr-frontend\src\utils\checkbox\Checkbox.js`

### Props
| Prop Name   | Type       | Purpose                                                                 |
|-------------|------------|-------------------------------------------------------------------------|
| `className` | `string`   | Optional. Adds custom CSS classes to the checkbox container.           |
| `checked`   | `boolean`  | Required. Determines whether the checkbox is checked or unchecked.     |
| `setChecked`| `function` | Required. Callback function to update the `checked` state externally.  |


### Functions and Methods
1. `Checkbox` Component
- **Purpose**:
    - Renders a styled checkbox input with customizable behavior.
- **Return Value**:
  - A JSX element representing the checkbox input and its associated label.

### Styling
| CSS Statement | Purpose |
|--------------|---------|
|**`.checkbox-container`**|Wrapper for the custom checkbox, providing positioning and interactivity.|
|`display: inline-block`|Ensures the container behaves like an inline element.|
|`position: relative`|Allows child elements to be positioned absolutely within it.|
|`cursor: pointer`|Changes the cursor to a pointer on hover, indicating interactivity.|
|`font-size: 16px`|Sets the base font size.|
|`padding: 2px`|Adds padding around the checkbox.|
|`width: 20px`, `height: 20px`|Defines the dimensions of the checkbox container.|
|`user-select: none`|Prevents text selection within the checkbox.|
|||
|**`.custom-checkbox`**|Represents the actual checkbox input element, hidden from view.|
|`position: absolute`|Positions the input element absolutely within its container.
|`opacity: 0`|Makes the input element invisible.
|`cursor: pointer`|Ensures the cursor changes to a pointer on hover.
|`height: 0`, `width: 0`|Hides the input element by setting its dimensions to zero.
|||
|**`.checkmark`**|Represents the visual representation of the checkbox.|
|`position: absolute`|Positions the checkmark absolutely within the container.
|`top: 0`, `left: 0`|Aligns the checkmark to the top-left corner of the container.
|`height: 20px`, `width: 20px`|Matches the dimensions of the container.
|`background-color: #eee`|Sets the default background color.
|`border-radius: 4px`|Rounds the corners of the checkmark.
|`transition: background-color 0.3s`|Adds a smooth transition for background color changes.
|`box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2)`|Adds a subtle shadow for depth.
|||
|**`.checkmark:after`**|Represents the checkmark icon (a rotated square) that appears when the checkbox is checked.|
|`content: ""`|Ensures the pseudo-element is rendered.
|`position: absolute`|Positions the checkmark icon absolutely.
|`display: none`|Hides the checkmark icon by default.
|`left: 9px`, `top: 5px`|Positions the checkmark icon within the container.
|`width: 5px`, `height: 10px`|Defines the dimensions of the checkmark icon.
|`border: solid white`|Creates the checkmark using a border.
|`border-width: 0 3px 3px 0`|Defines the border thickness for the checkmark shape.
|`transform: rotate(45deg)`|Rotates the checkmark to form a right angle.
|||
|**`.custom-checkbox:checked ~ .checkmark`**|Styles the checkmark when the checkbox is checked.|
|`background-color: #3D73FD`|Changes the background color to blue.
|`box-shadow: 0 3px 7px rgba(33, 150, 243, 0.3)`|Adds a shadow effect.
|||
|**`.custom-checkbox:checked ~ .checkmark:after`**|Displays and animates the checkmark icon when the checkbox is checked.|
|`display: block`|Makes the checkmark icon visible.
|`animation: checkAnim 0.2s forwards`|Applies the `checkAnim` animation.
|||
|**`@keyframes checkAnim`**|Defines the animation for the checkmark icon when the checkbox is checked.|
|`0% { height: 0; }`|Starts the animation with no height.
|`100% { height: 10px; }`|Ends the animation with the full height of the checkmark icon.

---
