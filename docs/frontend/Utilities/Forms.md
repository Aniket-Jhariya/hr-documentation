---
sidebar_position: 8
---

## Job Form

The `JobForm.js` file is responsible for rendering and managing a form used to create or edit job postings within the HR frontend application to provide a rich user interface for input fields such as job descriptions, skills, and notifications. The form handles user input, updates the state, and submits data to a parent component via a callback function.

- **File Path:** `\hr-frontend\src\utils\forms\JobForm.js`
- **Dependencies**:
    - `react-select/creatable`: Provides a customizable dropdown for selecting and creating skills.
    - `react-quill`: Rich text editor for job descriptions.

### Props
|Prop Name| Description|
|---|---|
|`handleFormSubmit`| Function to handle form submission.|
|`formData`| Object containing the current form data (e.g., job title, description, skills, etc.).|
|`setFormData`| Function to update the `formData` state.|
|`errors`| Object containing validation errors (if any).|
|`setErrors`| Function to update the `errors` state.|
|`successMessage`| String containing a success message (if applicable).|
|`setSuccessMessage`| Function to update the `successMessage` state.|

### State Variables

| Variable Name|Purpose|
|---|---|
|`currentDate`| String representing the current date in `YYYY-MM-DD` format.|
|`text`| String containing the plain text version of the job description.|
|`htmlContent`| String containing the HTML version of the job description.|

### Constants

| Variable Name|Purpose|
|---|---|
|`skills`| Array of predefined skill options for the "Must have skills" field.|
|`modules`| Configuration object for the `ReactQuill` toolbar.|
|`formats`| Array of supported formats for the `ReactQuill` editor.|

### Functions and Methods

1. `useEffect`
- **Purpose**:
    - Synchronizes the `text` and `htmlContent` state with the `formData.description` and `formData.jd_html` fields when the form is loaded or updated.

2. `handleInputChange`
- **Purpose**:
    - Handles changes to standard input fields (e.g., text, number, date).
    - Updates the `formData` state with the new input value.
- **Parameters**:
  - `e`: Event object containing the target input field's name and value.

3. `handleChange`
- **Purpose**:
    - Handles changes to the `ReactQuill` editor (job description).
    - Updates `htmlContent`, `text`, and `formData` state variables.
- **Parameters**:
  - `content`: HTML content from the editor.
  - `delta`: Delta object representing the changes.
  - `source`: Source of the change (e.g., "user").
  - `editor`: Editor instance.

4. `handleSkillsAdd`
- **Purpose**:
    - Handles the selection of skills in the `CreatableSelect` component.
    - Updates the `formData.must_have_skills` field.
- **Parameters**:
  - `selectedOption`: Array of selected skill options.

---
