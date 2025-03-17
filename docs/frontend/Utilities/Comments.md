---
sidebar_position: 5
---

## Add Comment

The `AddComment.js` file provides a user interface for adding comments. It integrates with the `@headlessui/react` library to create a popover interface, which contains a form (`AddCommentForm`) for submitting comments. 

- **File Path:** `\hr-frontend\src\utils\comments\AddComment.js`
- **Dependencies**
    - **@headlessui/react**:`Popover`, `PopoverButton`, `PopoverPanel`: Used to create a popover interface.
    - **@heroicons/react/20/solid**: `PlusIcon`: Used as the icon for the popover button.
    - **AddCommentForm**: A child component responsible for rendering the comment submission form and handling the submission logic.

### Props
| Prop Name   | Type       | Purpose                                                                 |
|-------------|------------|-------------------------------------------------------------------------|
| `setComments` | Function   | Callback function to update the list of comments in the parent component. |
| `jobId`       | String/Number | Identifier for the job associated with the comment.                     |
| `candidate`   | Object     | Candidate details to associate with the comment.                        |
| `user`        | Object     | User details of the person adding the comment.                          |

### Functions and Methods

1. `AddComment` Component
- **Purpose**:
    - Uses `useRef` to create a reference (`buttonRef`) for the `PopoverButton` to manage focus or other interactions.
    - The `AddComment` component is a functional React component that renders a popover button and a form for adding comments.

- **Return Value**
    - Returns a JSX structure that includes:
        - A `Popover` component from `@headlessui/react` with a button (`PopoverButton`) and a panel (`PopoverPanel`).
        - The `PopoverPanel` contains the `AddCommentForm` component, which handles the actual comment submission.

---

## Add Comment Form

The `AddCommentForm.js` file is responsible for rendering a form that allows users to add comments related to a candidate's interview process. It integrates with the application's backend to submit comments and updates the UI to reflect the new comment. 

- **File Path:** `\hr-frontend\src\utils\comments\AddCommentForm.js`
- **Dependencies**
    - `@headlessui/react`: Used for the popover UI component.
    - `react-select`: Provides a customizable dropdown for selecting interview steps.
    - `@heroicons/react`: Supplies icons for UI elements.

### State Variables
| Variable Name|Purpose|
|---|---|
|`selectedStep`|Tracks the selected interview step from the dropdown.|
|`comment`|Stores the comment text entered by the user.|
|`loading`|Indicates whether the form is in a loading state (e.g., during API calls).|
|`error`|Stores any errors that occur during form submission.|
|`steps`|Contains predefined interview steps for the dropdown.|

### Props
|Prop Name| Description|
|---|---|
|`AuthContext`|Provides authentication tokens, user details, and team member avatars.|
|`AvatarContext`|Manages avatar data and provides a function to fetch avatars.|
|`setComments`|Updates the parent component's comments state.|
|`jobId`|Identifies the job associated with the comment.|
|`candidate`|Contains candidate details (e.g., `id`, `name`).|
|`user`|Contains user details (e.g., `id`).|

### Functions and Methods
1. `addComment`
- **Purpose**:
    - Submits the comment to the backend and updates the UI with the new comment.
    - Updates the `loading` state during the API call.
    - Updates the `comments` state via the `setComments` prop.
    - Updates the `teamMembersAvatars` state via `setTeamMembersAvatars`.
    - Closes the form popover after submission.                       
- **Error Handling**: 
  - Catches errors during the API call and sets the `error` state.
  - Logs errors to the console.

2. `handleClose`
- **Purpose**:
    - Resets the form state and closes the popover.
    - Resets `selectedStep`, `comment`, and `error` states.
    - Calls the `close` function from `useClose` to close the popover.

---
## Comment Card

The `CommentCard.js` file is responsible for rendering and managing individual comments within a comment section. It provides functionality for viewing, editing, and deleting comments. 

- **File Path:** `\hr-frontend\src\utils\comments\CommentCard.js`

### Props
|Prop Name| Description|
|---|---|
|**`comment`**| Represents the comment data. It contains the following fields:|
|`id`|Unique identifier for the comment.|
|`text`|The content of the comment.|
|`user`|Details of the user who posted the comment.|
|*`id`*|Unique identifier for the user.|
|*`name`*|Name of the user.|
|*`email`*|Email of the user.|
|`profile_pic`|URL to the user's profile picture.|
|`created_at`|Timestamp of when the comment was created.|
|`replies`|List of replies to the comment.|
|||
|**`onEdit`**| Callback function triggered when a comment is edited. It accepts:|
|`commentId`|The ID of the comment being edited.|
|`newText`|The updated text of the comment.|
|||
|**`onDelete`**| Callback function triggered when a comment is deleted. It accepts:|
|`commentId`| The ID of the comment being deleted.|

### State Variables
| Variable Name|Purpose|
|---|---|
|`menuOpen`|Controls the visibility of the dropdown menu.|
|`isEditing`|Tracks whether the comment is in edit mode.|
|`editedText`|Stores the text being edited.|
|`showDeleteModal`|Controls the visibility of the delete confirmation modal.|
|`menuRef`|Reference to the dropdown menu for handling click-outside events.|


### Functions and Methods
1. `handleMenuToggle`
- **Purpose**:
    - Toggles the visibility of the dropdown menu.
    - Updates the `menuOpen` state.

2. `handleClickOutside`
- **Purpose**:
    - Closes the dropdown menu when clicking outside of it.
    -  Updates the `menuOpen` state.
- **Parameters**:
    - `event` (Event): The DOM event object.

3. `handleEditClick`
- **Purpose**:
    - Enables edit mode for the comment.
    - Sets `isEditing` to `true`.
    - Closes the dropdown menu by setting `menuOpen` to `false`.

4. `handleCancelClick`
- **Purpose**:
    - Cancels edit mode and resets the edited text to the original comment text.
    - Sets `isEditing` to `false`.
    - Resets `editedText` to the original `comment.text`.

5. `handleSaveClick`
- **Purpose**:
    -  Saves the edited comment text.
    - Calls the `onEdit` callback with the comment ID and updated text.
    - Exits edit mode by setting `isEditing` to `false`.

6. `handleDeleteClick`
- **Purpose**:
    - Triggers the deletion of the comment.
    - Calls the `onDelete` callback with the comment ID.
    - Closes the dropdown menu by setting `menuOpen` to `false`.
    - Closes the delete confirmation modal by setting `showDeleteModal` to `false`.

---

## Comments Drawer

The `CommentsDrawer.js` file manages and displays comments related to a specific applicant and job within a recruitment platform. It provides functionality to fetch, display, add, edit, and delete comments. The component integrates with a backend API to perform CRUD operations on comments.

- **File Path:** `\hr-frontend\src\utils\comments\CommentsDrawer.js`

### Props
|Prop Name| Description|
|---|---|
|`applicantId`| The ID of the applicant for whom comments are being managed.|
|`jobId`| The ID of the job associated with the comments.|
|`content_type`| The type of content the comments are associated with.|
|`object_id`| The ID of the object the comments are associated with.|

### State Variables

| Variable Name|Purpose|
|---|---|
|`comments`| Stores the list of comments fetched from the API.|
|`currentComment`| Stores the text of the comment being written by the user.|
|`open`| Controls the visibility of the comments drawer.|

### Functions and Methods

1. `getComments()`
- **Purpose**:
    - Fetches comments from the backend API based on the provided `jobId`, `applicantId`, `content_type`, and `object_id`.
    - Updates the `comments` state with the fetched data.
- **Error Handling**: Logs errors to the console if the API request fails.

2. `handleEdit(commentId, editedText)`
- **Purpose**:
    - Updates a specific comment's text in the backend and updates the local state.
    - Updates the `comments` state with the edited comment and displays a success toast.
- **Parameters**:
  - `commentId` (string/number): The ID of the comment to be edited.
  - `editedText` (string): The new text for the comment.
- **Error Handling**: Logs errors to the console and displays a toast notification if the API request fails.

3. `handleDelete(commentId)`
- **Purpose**:
    - Marks a comment as deleted in the backend and removes it from the local state.
    - Updates the `comments` state by removing the deleted comment and displays a success toast.
- **Parameters**:
  - `commentId` (string/number): The ID of the comment to be deleted.
- **Error Handling**: Logs errors to the console and displays a toast notification if the API request fails.

4. `handlePublishComment()`
- **Purpose**:
    - Publishes a new comment to the backend and updates the local state.
    - Adds the new comment to the `comments` state, clears the `currentComment` input, and displays a success toast.
- **Error Handling**: Logs errors to the console and displays a toast notification if the API request fails.

---