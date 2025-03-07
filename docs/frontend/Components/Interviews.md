---
sidebar_position: 6
---

## Interviews

The `Interviews.js` file is responsible for managing and displaying interview workflows within the CandidHR application. It provides functionality to fetch, filter, create, edit, and delete interview workflows. The component integrates with a backend API to perform CRUD operations and uses a table component to display the list of interviews. It also includes role-based access control for context menu options and modal dialogs for creating and deleting interview workflows.

- **File Path:** `\hr-frontend\src\components\interviews\Interviews.js`
- **Dependencies**:
  - `@dnd-kit/core`: Used for drag-and-drop functionality (not fully utilized in this file).
  - `Table`: A reusable table component for displaying interview data.
  - `SpinLoader`: A loading spinner component.
  - `react-toastify`: Displays toast notifications.

### State Variables
| Variable Name           | Purpose                                                                 |
|-------------------------|-------------------------------------------------------------------------|
| `tableRowCount`         | Tracks the status of table row count (e.g., "fetching").                |
| `cellContextMenu`       | Stores context menu options based on user role.                         |
| `authTokens`            | Authentication tokens for API requests.                                 |
| `userDetails`           | Details of the logged-in user.                                          |
| `error`                 | Stores error information.                                               |
| `successMessage`        | Stores success messages.                                                |
| `navigate`              | React Router navigation function.                                       |
| `tableInstance`         | Stores the table instance for dynamic updates.                          |
| `interviews`            | Stores the list of interviews fetched from the API.                     |
| `filteredInterviews`    | Stores the filtered list of interviews based on search criteria.        |
| `interviewsLoading`     | Tracks the loading state of interview data.                             |
| `searchTerm`            | Stores the search term for filtering interviews.                        |
| `filterSearchTerm`      | Stores search terms for multiple fields.                                |
| `showModal`             | Controls the visibility of the create interview modal.                  |
| `redirectToWorkflow`    | Determines if the user should be redirected to the workflow setup page. |
| `showDeleteModal`       | Controls the visibility of the delete confirmation modal.               |
| `rowToDelete`           | Stores the row data of the interview to be deleted.                     |
| `deleting`              | Tracks the deletion process state.                                      |
| `interviewData`         | Stores form data for creating a new interview workflow.                 |

### Functions and Methods

1. `useEffect`
- **Context Menu Setup**
   - **Purpose**: Configures the context menu options based on the user's role.
   - **Dependencies**: `userDetails`.
   - **Side Effects**: Updates `cellContextMenu` state.

- **Fetch Interviews**
   - **Purpose**: Fetches the list of interviews from the API on component mount.
   - **Dependencies**: None (runs once on mount).
   - **Side Effects**: Updates `interviews` and `filteredInterviews` states.

2. `fetchInterviews`
- **Purpose**: 
  - Fetches the list of interviews from the API.
  - Updates `interviews`, `filteredInterviews`, and `interviewsLoading` states.
- **Error Handling**: Sets `error` state if the request fails.

3. `handleSearch`
- **Purpose**:
  - Filters the list of interviews based on a search term.
  - Updates `filteredInterviews` state.
- **Parameters**:
  - `fieldName` (string): The field to search within.
  - `searchValue` (string): The search term.

4. `createInterviewModule`
- **Purpose**:
  - Creates a new interview workflow.
  - Navigates to the workflow setup page if `redirectToWorkflow` is true.
- **Parameters**:
  - `e` (Event): The form submission event.
- **Error Handling**: Logs errors to the console.

5. `deleteInterviewWorkflow`
- **Purpose**: 
  - Deletes an interview workflow.
  - Updates the table and closes the delete modal.
- **Parameters**:
  - `rowToDelete` (Object): The row data of the interview to delete.
- **Error Handling**: Logs errors to the console.

---

## Add Question

The `AddQuestion.js` file renders a form to add new questions to a questionnaire in the CandidHR application. It handles user input for the question text, time limit, and answer type, and submits the data to an API endpoint. The component interacts with the application's authentication context and updates the state of the parent component to reflect the newly added question.

- **File Path:** `\hr-frontend\src\components\interviews\AddQuestion.js`
- **Dependencies**
  - `react`: Core React library for building the component.
  - `react-select`: Library for rendering a customizable dropdown for answer types.
  - `AuthContext`: Provides authentication tokens and user details.
  - `api` and `selectStyle`: Constants for API URLs and styling configurations.

### State Variables

| Variable Name       | Purpose                                                                     |
|---------------------|-----------------------------------------------------------------------------|
| `question`:              |Stores the current state of the question input fields.                                     |
|    - `text`           | The text of the question.                                     |
|    - `time_limit`           | The time limit (in seconds) for answering the question.                                     |
| `error`               |  Stores error messages related to form validation.                                     |

### Props
| Prop Name           | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `selectedQuestionSet`              |The currently selected question set.                                     |
| `handleTypeChange`               | Callback to handle changes in the answer type dropdown.                                     |
| `answerTypes`               | List of available answer types.                                     |
| `questions`              |List of existing questions.                                     |
| `setQuestions`               | Function to update the list of questions.                                     |
| `setSelectedAnswerType`               | Function to update the selected answer type.                                     |
| `selectedAnswerType`               | The currently selected answer type.                                     |
| `selectTheme`              |Theme configuration for the `react-select` dropdown.                                     |

### Functions and Methods

1. `handleQuestionChange`
- **Purpose**: 
  - Handles changes in the question text input field.
  - Updates the `question` state with the new text value.
- **Parameters**:
  - `e` (Event): The input change event.
- **Return Value**: None.
- **Error Handling**:
  - Sets an error if the question text exceeds 200 characters.

2. `addQuestion`
- **Purpose**:
  - Submits the new question to the API and updates the parent component's state.
  - Sends a POST request to the API with the question data.
  - Updates the `questions` state in the parent component with the new question.
  - Resets the form fields and selected answer type.
- **Parameters**:
  - `e` (Event): The form submission event.
- **Return Value**: None.
- **Error Handling**:
  - Validates the question text and time limit.
  - Displays an error if the question text is empty or exceeds 200 characters.
  - Logs errors to the console if the API request fails.
  
---

## Create Interview Flow

The `CreateInterviewFlow.js` file is responsible for managing the creation and customization of interview workflows. It allows users to drag and drop modules into a workflow, configure preferences, and manage questionnaires. The component integrates with the backend to fetch and save interview data, question sets, and workflow steps.

- **File Path:** `\hr-frontend\src\components\interviews\CreateInterviewFlow.js`
- **Dependencies**
  - `@dnd-kit/core`: Used for drag-and-drop functionality (`DndContext`, `DragOverlay`).
  - `Child Components`: `Draggable`, `MiniCard`, `ResumeOptions`, `Questions`, `EditableWorkflow`.


### State Variables

| Variable Name       | Purpose                                                                     |
|---------------------|-----------------------------------------------------------------------------|
| `containers`              |Represents the steps in the interview workflow. Each step has an `id`, `order`, and `content` (module details).                                     |
| `activeId`              |Tracks the ID of the currently dragged module.                                     |
| `parent`             |Tracks the ID of the container where a module is dropped.                                     |
| `currentDraggable`              |Stores the currently dragged module's details.                                     |
| `interviewData`              |Stores the details of the interview being created or edited.                                     |
| `optionsData`              |Stores configuration data for the selected module (e.g., preferences for Resume Screening).                                     |
| `questionSets`              |Stores the list of available question sets.                                     |
| `selectedQuestionSet`              |Tracks the currently selected question set.                                     |

### Functions and Methods

1. `handleDragStart(event)`
   - **Purpose**: 
    - Sets the `activeId` and `currentDraggable` state when a module is dragged.
    - Updates `activeId` and `currentDraggable`.
  - **Parameters**:  
    - `event`: Drag event object containing `active.id`.

2. `handleDragEnd(event)`
   - **Purpose**: 
    - Updates the `containers` state when a module is dropped into a container.
    - Updates `containers`, `parent`, `activeId`, and `currentDraggable`.
   - **Parameters**:  
     - `event`: Drag event object containing `active` and `over`.

 3. `addRound()`
   - **Purpose**: 
    - Adds a new step (round) to the interview workflow.
    - Updates the `containers` state.

 4. `fetchInterview()`
   - **Purpose**: 
    - Fetches interview details from the backend using the `interviewId`.
    - Updates `interviewData` and `containers` state.
   - **Error Handling**: Logs errors and updates `interviewsLoading`.

 5. `saveStepstoWorkflow()`
   - **Purpose**: 
    - Saves the current workflow steps to the backend.
    - Updates `saving` state and `containers` if successful.
   - **Error Handling**: Logs errors and updates `saving`.

 6. `removeContainer(itemId)`
   - **Purpose**: 
    - Removes a step from the workflow.
    - Updates `containers`.
   - **Parameters**:  
     - `itemId`: ID of the container to remove.

 7. `createQuestionSet(e)`
   - **Purpose**: 
    - Creates a new question set and updates the list of question sets.
    - Updates `questionSets`, `selectedQuestionSet`, and `showModal`.
   - **Error Handling**: Logs errors and updates `showModal`.
   - **Parameters**:  
     - `e`: Form submission event.

 8. `fetchQuestionSet()`
   - **Purpose**: 
    - Fetches the list of question sets from the backend.
    - Updates `questionSets` and `questionSetLoading`.
   - **Error Handling**: Logs errors and updates `questionSetLoading`.

 9. `onContainerChange(item)`
   - **Purpose**: 
    - Updates the UI to show details for the selected step.
    - Updates `currentContainer`, `showQuestions`, and `selectedQuestionSet`.
   - **Parameters**:  
     - `item`: The selected container (workflow step).

---

## Detail Mini Card

The `DetailMiniCard.js` file is a React component that renders a mini card representing an interview step for a candidate in a hiring workflow. It displays the status of the step and provides functionality to update the step's status. 

- **File Path:** `\hr-frontend\src\components\interviews\DetailMiniCard.js`
- **Dependencies**:
  - `React Toastify`: Displays toast notifications for errors.
  - `Heroicons`: Provides icons for UI elements.

### Props
| Prop Name           | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `item`              | An object containing details about the interview step.                                     |
| `id`               | A unique identifier for the card (optional).                                     |
| `candidate`               |An object representing the candidate, including their `interview_steps`.|
| `selectedRow`               |An object with an `update` method to update the candidate's data.                                     |
| `updateXarrow`               | A function to update the UI layout when the card's size changes.                                     |
| `selectedWorkflow`               | An object representing the selected workflow, including its `id`.                                     |


### State Variables
| Variable Name       | Purpose                                                                     |
|---------------------|-----------------------------------------------------------------------------|
| `currentStatus`               | Tracks the current status of the interview step                                      |
| `detailView`              |  Controls whether the card is in a detailed or compact view.                                     |
| `currentStep`              | Tracks the current step's details.                                     |
| `previousStep`              | Tracks the previous step's details.                                     |


### Functions and Methods

1. `useEffect`
   - **Purpose**: 
    - Sets the initial status of the interview step based on the candidate's `interview_steps`.
    - Updates the `currentStatus` when `currentStep` changes.
    - Observes the card's size changes and calls `updateXarrow` to adjust the UI layout.
    - Attaches and detaches a `ResizeObserver`.
    - Updates `previousStep`, and `currentStatus`.


2. `updateStep`
- **Purpose**: 
  - Updates the status of the interview step (e.g., start, complete, approve) by making a POST request to the backend.
  - Updates `currentStep` and `currentStatus`.
  - Updates the candidate's data in `selectedRow`.
- **Parameters**:
  - `action`: A string representing the action to perform.
- **Error Handling**: Displays a toast notification if the request fails.


### Rendering
The component renders a card with:
- A compact view showing the step's icon and label.
- A detailed view showing the step's label, status, and action buttons (e.g., "Start," "Approve").
- Dynamic styling based on the step's status (e.g., outline colors for "Completed," "Approved," "In Progress").

---

## Draggable & Droppable

The `Draggable` and `Droppable` components are designed to enable drag-and-drop functionality for UI elements within the CandidHR project. It handles drags and drops interactions and renders a draggable button with an icon and label and it manages droppable behavior and visual feedback when an item is dragged over it.

- **File Path:** `\hr-frontend\src\components\interviews\Draggable.js` | `\hr-frontend\src\components\interviews\Draggable.js`
- **Dependencies**
  - **`@dnd-kit/core`**: Provides the `useDraggable` and `useDroppable` hooks to manage drag-and-drop interactions.

### Props
| Prop Name           | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `id`            |A unique identifier for the draggable or droppable item.                     |
| `item`            |An object containing the following fields:                     |
| `icon`             |The icon or visual element to display.                     |
| `label`             |The text label associated with the draggable item.                     |
| `children`            |The child elements to be rendered inside the droppable area.                     |

### Functions and Methods

1. `Draggable(props)`
- **Purpose**:
  - Utilizes the `useDraggable` hook from `@dnd-kit/core` to enable drag-and-drop functionality.
  - Updates the component's style dynamically based on the `transform` value returned by `useDraggable`.
  - The main functional component that renders a draggable button.
- **Return Value**:
  - Returns a JSX element representing a draggable button with an icon and label.

2. `Droppable`
- **Purpose**:
  - The component uses the `useDroppable` hook, which internally manages state related to drag-and-drop interactions. This includes tracking whether an item is being dragged over the droppable area (`isOver`). 
- **Return Value**:
  - `JSX.Element`: Returns a `div` element that serves as the droppable area. The `div` is assigned a `ref` using the `setNodeRef` function from the `useDroppable` hook and applies a dynamic style based on whether an item is being dragged over it.


### Styling
- **Container**: `flex space-y-2 flex-col w-24 h-24 items-center justify-center rounded-lg bg-sky-100 shadow-md hover:outline outline-sky-600/20`
- **Label**: `text-xs w-full text-center text-gray-700`

---

## Editable Workflow

The `EditableWorkflow` component is designed to manage and display an editable workflow interface. It allows users to add, remove, and interact with workflow rounds (containers) in a drag-and-drop environment.

- **File Path:** `\hr-frontend\src\components\interviews\EditableWorkflow.js`
- **Dependencies**
  - `react-xarrows`: Used to render arrows between workflow rounds.
   - `Xarrow`: Renders arrows between containers.
   - `useXarrow`: Hook to update arrow positions on re-render.
   - `Xwrapper`: Wrapper component for `Xarrow` functionality.
  - `@heroicons/react`: Provides icons for UI elements (e.g., `PlusIcon`, `XMarkIcon`, `CheckIcon`).


### Props

| Prop Name           | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `saving`            | Indicates whether the workflow is currently being saved.                    |
| `addRound`          | Callback function to add a new round to the workflow.                       |
| `containers`        | Array of container objects representing workflow rounds.                    |
| `currentContainer`  | The currently selected container object.                                    |
| `onContainerChange` | Callback function triggered when a container is clicked or modified.        |
| `removeContainer`   | Callback function to remove a container from the workflow.                  |


### Functions and Methods

1. `EditableWorkflow` Component
- **Purpose**
  - Updates the `react-xarrows` library when the component re-renders.
  - Triggers state changes in parent components via callback functions (`addRound`, `onContainerChange`, `removeContainer`).
- **Parameters**:
  - `saving`: Boolean indicating if the workflow is being saved.
  - `addRound`: Function to add a new round.
  - `containers`: Array of container objects.
  - `currentContainer`: Currently selected container.
  - `onContainerChange`: Function to handle container selection.
  - `removeContainer`: Function to remove a container.
- **Return Value**: Renders a React component displaying the workflow interface.
- **Error Handling**: No explicit error handling is present. Errors are likely handled by parent components.

---