---
sidebar_position: 5
---

## Comments Quick List

The `CommentsQuickList.js` file renders a popover interface for displaying and managing feedback comments associated with a candidate during the hiring process. It allows users to view comments and delete their own comments.

- **File Path**: `\hr-frontend\src\components\applicants\CommentsQuickList.js`
- **Dependencies**
   - `@headlessui/react`: Provides headless UI components (`Popover`, `PopoverButton`, `PopoverPanel`) for building accessible and customizable popovers.
   - `@heroicons/react/20/solid`: Supplies SVG icons (`ChevronDownIcon`, `TrashIcon`) for UI elements.

### Props
|Prop Name| Description|
|---|---|
| `setComments`| A state setter function to update the comments list after deletion.|
| `comment`| Contains the comment data, including the user's avatar, name, and nested comments.|
| `candidateName`| Name of the candidate (unused in the current implementation).|
| `img`| Image URL for the candidate (unused in the current implementation). |

### State Variables
| `deleting` | Tracks whether a comment deletion is in progress.|
| `error` | Stores any errors encountered during the deletion process.|


1. `feedback` 
- **Purpose**: 
  - Represents a mock feedback object for testing or demonstration purposes.
- **Fields**:
  - `id` (number): Unique identifier for the feedback.
  - `interviewStep` (string): The stage of the interview process (e.g., "Initial Screening").
  - `candidate` (string): Name of the candidate.
  - `user` (string): Name of the user who provided the feedback.
  - `feedback` (string): The actual feedback text.

### Functions and Methods

1. `FeedbackList` Component

#### `handleClose` Function
- **Purpose**: 
  - Closes the popover by programmatically clicking the `PopoverButton`.
  - Triggers a click event on the `PopoverButton` reference.

#### `deleteComment` Function
- **Purpose**: 
  - Deletes a comment from the backend and updates the local state.
  - Sends a `DELETE` request to the backend API.
  - Updates the `comments` state by removing the deleted comment.
  - Sets `deleting` to `true` during the deletion process and resets it afterward.
- **Parameters**:
  - `stepName` (string): The name of the interview step associated with the comment.
  - `id` (number): The unique identifier of the comment to delete.
- **Error Handling**: Catches and sets errors in the `error` state if the API request fails.

---

## Comments Detailed List

The `CommentsDetailedList.js` file is responsible for rendering a detailed list of comments associated with a candidate in a hiring process. It displays comments grouped by their respective steps in the hiring workflow, along with the commenter's details. 

- **File Path**: `\hr-frontend\src\components\applicants\CommentsDetailedList.js`
- **Dependencies**
  - `heroicons/react`: Used to render the `TrashIcon` for the delete button.

### Props
|Prop Name| Description|
|---|---|
| `setComments`| A function to update the comments state in the parent component.|
| **`comment`**| An object containing details about the commenter and their comments. Expected Fields:|
| `avatar`| URL of the commenter's avatar.|
| `name`| Name of the commenter.|
| `role`| Role of the commenter.|
| `id`| Unique identifier of the commenter.|
|||
| **`comments`**| An object where keys represent step names and values are arrays of comments for that step. Each comment object contains:|
| `step_name`| The name of the hiring step.|
| `id`| Unique identifier of the comment.|
| `updated_at`| Timestamp of when the comment was last updated.|
| `feedback`| The actual comment text.|
| `candidateName`| Name of the candidate (unused in the current implementation).|
| `img`| Image URL of the candidate (unused in the current implementation).|

### Context
| Variable Name|Purpose|
|---|---|
|`authTokens`| Authentication tokens for API requests.|
|`userDetails`| Details of the currently logged-in user, including their `id`.|

### Functions and Methods

1. `deleteComment`
- **Purpose**: 
  - Intended to handle the deletion of a comment.
  - Intended to update the comments state in the parent component via `setComments`.
  - May involve an API call to delete the comment from the backend.
- **Parameters**:
  - `step_name`: The name of the step associated with the comment.
  - `id`: The unique identifier of the comment to be deleted.
- **Return Value**: None (currently unimplemented).
- **Error Handling**: None (currently unimplemented).

2. *Rendering Comments*
The component maps through the `comments` object to render comments grouped by step names:

3. *Conditional Delete Button*
The delete button is only rendered if the comment belongs to the current user:

---

