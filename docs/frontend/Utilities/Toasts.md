---
sidebar_position: 21
---
The `Toast.css` file is a stylesheet used in a React project to define the visual appearance of toast notifications. Toast notifications are typically used to provide feedback to users, such as success messages, warnings, or errors. This file contains custom CSS classes that style different types of toast notifications, ensuring they are visually consistent with the application's design system.

## Styles
| CSS Statement | Purpose |
|---------------|---------|
|**`.custom-toast`**| Defines the base styling for a generic toast notification.|
|`background-color: white;`| Sets the background color of the toast to white.|
|`border-left: 5px solid rgb(255, 57, 57);`| Adds a left border with a red color to indicate an error or warning.|
|`font-family: inherit;`| Inherits the font family from the parent element.|
|||
|**`.custom-toast-candidate-form`**| Defines the styling for a toast notification specifically used in the candidate form section of the application.|
|`background-color: #fef3f2;`| Sets a light red background color.|
|`border: 1px solid #f5c6cb;`| Adds a light red border.|
|`border-radius: 6px;`| Rounds the corners of the toast.|
|`padding: 8px;`| Adds padding inside the toast.|
|`display: flex;`| Uses flexbox to align items.|
|`align-items: center;`| Centers items vertically within the toast.|
|`font-family: 'Roboto', sans-serif;`| Sets the font family to Roboto.|
|||
|**`.custom-toast-candidate-form .text-sm`**| Defines the font size for small text within the candidate form toast.|
|`font-size: 14px;`| Sets the font size to 14 pixels.|
|||
|**`.custom-toast-candidate-form .font-semibold`**| Defines the font weight for semi-bold text within the candidate form toast.|
|`font-weight: bold;`| Sets the font weight to bold.|
