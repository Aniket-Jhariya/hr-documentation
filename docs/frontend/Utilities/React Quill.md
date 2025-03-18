---
sidebar_position: 15
---

## Toolbar Options

The `ToolbarOptions.js` file defines the configuration for the toolbar options in a React-Quill rich text editor. It exports a structured array of toolbar formats and options, which are used to customize the editor's toolbar. This file plays a crucial role in enabling or disabling specific formatting features in the editor, such as font styles, colors, alignment, and more.

- **File Path:** `\hr-frontend\src\utils\react-quill\ToolbarOptions.js`
- **Dependencies**:
    - `React-Quill`: The exported `formats` array is passed to the `modules.toolbar` prop of the React-Quill component.

### Props
|Prop Name| Description|
|---|---|
|**`colors`**| Defines a list of color options available for text and background color formatting in the editor.
|`red`, `green`, `blue`, `orange`, `violet`| Predefined color options.|
|**`formats`**| A nested array of objects that define the toolbar options and their configurations for the React-Quill editor.
|`className`| A string representing the Quill class name for the toolbar option.|
|`options` | An array of available options for the toolbar feature.|
|`value` | A specific value for the toolbar option. |


### Styling
| CSS Statement | Purpose |
|--------------|---------|
|**`.ql-toolbar`**|Styles the toolbar of the React Quill editor.|
|`border-radius`|Rounds the top corners of the toolbar (`6px 6px 0px  0px`).|
|`border`|Applies a solid border with a light gray color (`rgb(230, 230, 230)`).|
|**`.ql-container`**|Styles the container of the React Quill editor where the content is displayed.|
|`font-size`|Sets the font size to `1rem`.|
|`font-family`|Uses `"Roboto", sans-serif` and `'Poppins', sans-serif` as fallback fonts.|
|`border-radius`|Rounds the bottom corners of the container (`0px 0px 6px 6px`).|
|`border`|Applies a solid border with a light gray color (`rgb(230, 230, 230)`).|
|`border-top`|Removes the top border to seamlessly connect with the toolbar.|

---
