---
sidebar_position: 14
---

## Demo List

The `DemoList.js` file is responsible for rendering a table of demo requests in the HR frontend application. It fetches and displays data related to demo requests, including details such as name, email, phone, job title, company, consent, creation date, demo date, status, and feedback. 

- **File Path:** `\hr-frontend\src\components\superuser-components\DemoList.js`

### State Variables
| Variable Name|Purpose|
|---|---|
|`loadingDemos`|Tracks whether the demo list is currently being fetched.|
|`demoList`|Stores the list of demo requests fetched from the server.|
|||
|`columns`|Defines the structure and formatting of the table columns. Each object contains:|
| `title`| Column header text.|
| `field`| Key in the data object to display.|
| `hozAlign`| `vertAlign`: Alignment settings.|
| `width`, `minWidth`, `maxWidth`| Column sizing.|
| `formatter`| Custom formatting function for cell content.|
| `titleFormatter`| Custom formatting function for column headers.|
|||
|`tableRowCount`|Tracks the number of rows in the table.|
|`tableInstance`|Stores the instance of the table for further manipulation.
|`fieldMapping`|Maps fields for data transformation.|

### Functions and Methods

1. `linkFormatter(cell, formatterParams, onRendered)`
- **Purpose**:
    - Formats the "Name" column to display a clickable link.
- **Parameters**:
  - `cell`: The cell object containing the value and metadata.
  - `formatterParams`: Additional formatting parameters (unused).
  - `onRendered`: Callback function triggered after rendering (unused).
- **Return Value**: HTML string representing the formatted cell content.

2. `emailFormatter(cell, formatterParams, onRendered)`
- **Purpose**:
    - Formats the "Email" column to display an email address with an icon.
- **Parameters**: Same as `linkFormatter`.
- **Return Value**: HTML string with an email icon and the email address.

3. `contactFormatter(cell, formatterParams, onRendered)`
- **Purpose**:
    - Formats the "Phone" column to display a phone number with an icon.
- **Parameters**: Same as `linkFormatter`.
- **Return Value**: HTML string with a phone icon and the formatted phone number.

4. `openOutlook(toEmail)`
- **Purpose**: 
    - Opens the default email client with a pre-filled email to the specified address.
    - Opens the default email client.
- **Parameters**:
  - `toEmail` (`string`): The recipient's email address.

5. `luxonDateDiffFormatter(cell, formatterParams, onRendered)`
- **Purpose**:
    - Formats date fields (e.g., "Created At", "Demo Date") to display human-readable dates.
- **Parameters**: Same as `linkFormatter`.
- **Return Value**: HTML string representing the formatted date.

### Error Handling
- Set `loadingDemos` to `false` on error.
- Log the error to the console.

---
