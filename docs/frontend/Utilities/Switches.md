---
sidebar_position: 19
---

## Switch2

The `Switch2.js` file renders a customizable toggle switch. The switch's state is controlled externally via props, making it a controlled component. It includes visual indicators for the "on" and "off" states, represented by a checkmark and an "x" icon, respectively.

- **File Path:** `\hr-frontend\src\utils\switches\Switch2.js`

### Props
| Prop Name   | Purpose                                                                 |
|-------------|-------------------------------------------------------------------------|
| `checked`   | Determines whether the switch is in the "on" (`true`) or "off" (`false`) state. |
| `setChecked`| A function to update the `checked` state externally.                    |
| `onChange`  | A callback function triggered when the switch's state changes.         |


### Functions and Methods

1. `Switch2`
- **Purpose**:
    - Renders a toggle switch with customizable visual indicators.
- **Return Value**:
    - A JSX element representing the toggle switch.

### Styling

| CSS Statement               | Purpose                                                                 |
|-----------------------------|-------------------------------------------------------------------------|
| `--switch-width`            | Width of the switch container.                                          |
| `--switch-height`           | Height of the switch container.                                         |
| `--switch-bg`               | Background color of the switch in the "off" state.                     |
| `--switch-checked-bg`       | Background color of the switch in the "on" state.                      |
| `--switch-offset`           | Offset for positioning the circle within the switch.                    |
| `--switch-transition`       | Transition effect for the switch.                                       |
| `--circle-diameter`         | Diameter of the circle (thumb) inside the switch.                       |
| `--circle-bg`               | Background color of the circle.                                         |
| `--circle-shadow`           | Shadow effect for the circle in the "off" state.                        |
| `--circle-checked-shadow`   | Shadow effect for the circle in the "on" state.                         |
| `--circle-transition`       | Transition effect for the circle.                                       |
| `--icon-transition`         | Transition effect for icons (checkmark and cross).                      |
| `--icon-cross-color`        | Color of the cross icon.                                                |
| `--icon-checkmark-color`    | Color of the checkmark icon.                                            |
| `--icon-checkmark-size`     | Size of the checkmark icon.                                             |
| `--effect-width`            | Width of the effect line.                                               |
| `--effect-height`           | Height of the effect line.                                              |
| `--effect-bg`               | Background color of the effect line.                                    |
| `--effect-border-radius`    | Border radius of the effect line.                                       |
| `--effect-transition`       | Transition effect for the effect line.                                  |

---

## Preference Toggle

The `PreferenceToggle.js` file is designed to provide a user interface for toggling between three preference states: "Mandatory," "Optional," and "Off." It is a reusable UI component that allows users to select one of these states, and it communicates the selected state back to the parent component via a callback function (`onChange`). 

- **File Path:** `\hr-frontend\src\utils\switches\PreferenceToggle.js`

### Props
|Prop Name| Description|
|---|---|
|`value`|Represents the currently selected preference state. It can be one of the following values: `'mandatory'`, `'optional'` or `'off'`|
|`onChange`| A callback function that is triggered when the user selects a new preference state. It takes the new value as an argument.|

### Functions and Methods

1. `handleSelection(newValue)`
- **Purpose**:
    - Handles the user's selection of a preference state and communicates it to the parent component.
    - Calls the `onChange` callback function, which may trigger state updates or other logic in the parent component.
- **Parameters**:
  - `newValue` (`string`): The new preference state selected by the user. It can be `'mandatory'`, `'optional'`, or `'off'`.

### Styling

| CSS Statement | Purpose |
|--------------|---------|
|`.preference-toggle`| Styles the container for the toggle buttons.|
|`display: flex`: Arranges child elements in a row.|
|`border: 1px solid #ddd`: Adds a light gray border.|
|`border-radius: 20px`: Rounds the corners of the container.|
|`background-color: #f9f9f9`: Sets a light gray background.|
|`padding: 4px`: Adds internal spacing.|
|`width: fit-content`: Adjusts the width to fit its content.|
|`gap: 8px`: Adds spacing between child elements.|
|`z-index: 1`: Ensures the toggle has its own stacking context.|
|||
|**`.toggle-button`**|Styles the individual toggle buttons.|
|`flex: 1`| Allows buttons to grow and fill available space.|
|`border: none`| Removes the default button border.|
|`padding: 2px 16px`| Adds padding for better clickability.|
|`background: transparent`| Sets a transparent background.|
|`color: #333`| Sets the text color to dark gray.|
|`font-size: 14px`| Sets the font size.|
|`cursor: pointer`| Changes the cursor to a pointer on hover.|
|`border-radius: 20px`| Rounds the corners of the buttons.|
|`transition: all 0.3s ease`| Adds smooth transitions for hover effects.|
|`z-index: 1`| Ensures buttons do not overlap dropdown elements.|
|||
|**`.toggle-button.selected`**|Styles the selected toggle button.|
|`background-color: #7474f3`| Sets a purple background.|
|`color: white`| Changes the text color to white.|
|||
|**`.toggle-button:hover`**|Styles the hover state of toggle buttons.|
|`background-color: #e0e0f8`| Adds a light purple background on hover.|
|||
|**`.toggle-button.selected:hover`**|Styles the hover state of the selected toggle button.|
|`background-color: #6161e0`| Darkens the purple background slightly on hover.|
|||
|**`.select-container`**|Styles the container for dropdown elements.|
|`position: relative`| Positions the dropdown relative to its container.|
|`z-index: 0`| Ensures the dropdown is layered correctly.|
|||
|**`.select-container .react-select__control`**|Styles the control element of the dropdown.|
|`z-index: 0`| Ensures the dropdown does not appear above toggle buttons.|

---
## Preference Switch

The `PreferenceSwitch.js` file renders a customizable toggle switch for toggling user preferences or settings within the application. It accepts a `checked` state and a `setChecked` function as props, allowing it to be controlled by a parent component.

- **File Path:** `\hr-frontend\src\utils\switches\PreferenceSwitch.js`

### Props
|Prop Name| Description|
|---|---|
|`checked`|Represents the current state of the switch (on/off).  |
|`setChecked`|A callback function triggered when the switch is toggled. It updates the `checked` state in the parent component.|

### Functions and Methods

1. `PreferenceSwitch` 
- **Purpose**:  
    - Renders a toggle switch with a custom design, including a checkmark icon for the "on" state and an "x" icon for the "off" state.

---
