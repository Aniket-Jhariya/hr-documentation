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

## Interview Workflow

The `InterviewWorkflow.js` file serves as the core interface for managing and customizing interview workflows within the CandidHR application. It allows users to create, edit, and save interview steps (rounds), configure preferences, and manage question sets for different types of screenings.

- **File Path:** `\hr-frontend\src\components\interviews\InterviewWorkflow.js`
- **Dependencies**:
  - `@dnd-kit/core`: Provides drag-and-drop functionality.
  - `react-router-dom`: Handles navigation and URL parameters.

### State Variables
| Variable Name            | Purpose                                                                 |
|--------------------------|-------------------------------------------------------------------------|
| `openDrawer`             | Controls the visibility of a drawer/sidebar.                           |
| `containers`             | Represents interview steps (rounds) with them          |
| `activeId`               | Tracks the currently active draggable item ID.  |
| `parent`                 | Tracks the parent container for drag-and-drop|
| `currentDraggable`       | Represents the currently dragged module.            |
| `interviewsLoading`      | Indicates if interview data is being fetched.     |
| `saving`                 | Indicates if the workflow is being saved.            |
| `currentContainer`       | Represents the currently selected interview step.   |
| `showQuestions`          | Controls the visibility of the questions section.  |
| `optionsData`            | Stores configuration data for the selected step.     |
| `currentTab`             | Represents the currently selected tab in the setting|
| `showModal`              | Controls the visibility of the question set creation.|
| `questionSetName`        | Stores the name of a new question set.              |
| `questionSets`           | Stores the list of available question sets.   |
| `questionSetLoading`     | Indicates if question sets are being fetched.    |
| `selectedQuestionSet`    | Represents the currently selected question set.                        |
| `interviewData`          | Stores data for the current interview.                                |

### Constants
| Constant Name            | Purpose                                                                 |
|--------------------------|-------------------------------------------------------------------------|
| `settingTabs`            | Defines the tabs available in the settings panel.                       |
| `modules`                | Defines the draggable modules available for adding to the workflow.     |
| `selectStyle`            | Custom styles for the dropdown component.                               |


### Functions and Methods

1. `handleDragStart(event)`
- **Purpose**: 
  - Sets the active draggable item ID and updates the `currentDraggable` state.
  - Updates `activeId` and `currentDraggable`.
- **Parameters**:
  - `event`: Drag event object.

2. `handleDragEnd(event)`
- **Purpose**: 
  - Handles the end of a drag operation, updating the `containers` state with the new content.
  - Updates `containers`, `activeId`, `currentDraggable`, and `parent`.
- **Parameters**:
  - `event`: Drag event object.

3. `handleCancelClick()`
- **Purpose**: 
  - Navigates the user back to the interviews list.
  - Uses `navigate` from `react-router-dom` to change the route.

4. `handleClose()`
- **Purpose**: 
  - Closes the question set creation modal and resets related state.
  - Updates `questionSetName` and `showModal`.

5. `addRound(params)`
- **Purpose**: 
  - Adds a new round to the interview workflow.
  - Updates `containers` with a new step.

6. `fetchInterview()`
- **Purpose**: 
  - Fetches interview data from the backend API.
  - Updates `interviewData` and `containers` with fetched data.
- **Error Handling**: Catches and logs errors, updates `interviewsLoading`.

7. `saveStepstoWorkflow()`
- **Purpose**: 
  - Saves the current workflow steps to the backend.
  - Updates `saving` and `containers` with the saved data.
- **Error Handling**: Catches and logs errors, updates `saving`.

8. `removeContainer(itemId)`
- **Purpose**:
  - Removes a container (interview step) from the workflow.
  - Updates `containers`.
- **Parameters**:
  - `itemId`: ID of the container to remove.

9. `createQuestionSet(e)`
- **Purpose**:
  - Creates a new question set and updates the state.
  - Updates `questionSets`, `optionsData`, `selectedQuestionSet`, and `showModal`.
- **Parameters**:
  - `e`: Form submission event.
- **Error Handling**: Catches and logs errors, updates `showModal`.

10. `fetchQuestionSet()`
- **Purpose**:
  - Fetches available question sets from the backend.
  - Updates `questionSets` and `questionSetLoading`.
- **Error Handling**: Catches and logs errors, updates `questionSetLoading`.

11. `handleSelectChange(selectedOption)`
- **Purpose**: 
  - Updates the selected question set and related state.
  - Updates `optionsData` and `selectedQuestionSet`.
- **Parameters**:
  - `selectedOption`: Selected question set object.

12. `onContainerChange(item)`
- **Purpose**:
  - Handles changes to the selected container and updates related state.
  - Updates `currentContainer`, `showQuestions`, and `optionsData`.
- **Parameters**:
  - `item`: Selected container object.

---

## MiniCard 

The `MiniCard` component is designed to display a compact card with an icon, label, and an optional service menu. It is primarily used to represent a selectable or interactive item in a list or grid layout.

- **File Path:** `\hr-frontend\src\components\interviews\MiniCard.js`

### Props
|Prop Name| Description|
|---|---|
|`item`| Contains the data to be displayed in the card. It has the following fields:|
|`id`|  A unique identifier for the item.|
|`icon`|  The URL or path to the icon image.|
|`label`|  The text label to display below the icon.|
|`id`|  A custom ID to override the `item.id` for the card's DOM element.|
|`current`| Indicates whether the card is currently selected or active. When `true`, the card is highlighted with a ring.|

### Functions and Methods

1. `MiniCard` Component
- **Parameters**:
  - `item` (Object): The data object containing `id`, `icon`, and `label`.
  - `id` (String/Number, optional): A custom ID for the card.
  - `current` (Boolean, optional): Indicates if the card is currently selected.
- **Return Value**:
  - A JSX element representing the card UI.
---

## Questions

The `Questions.js` file is responsible for managing and displaying questions within a questionnaire or interview setup. It allows users to select, add, and remove questions, configure question types, and manage question sets.

- **File Path:** `\hr-frontend\src\components\interviews\Questions.js`
- **Dependencies**:
  - `@heroicons/react/20/solid`: Provides icons for UI elements.
  - `react-select`: Used for dropdowns (e.g., selecting question sets).

### Props 
1. **Answer Types**
An array of objects representing the types of answers allowed for questions:
```js
const answerTypes = [
    { label: "Text", value: "text" },
    { label: "Audio", value: "audio" },
    { label: "Video", value: "video" },
];
```
|Prop Name| Description|
|---|---|
 |`label`| Display name for the answer type.|
 |`value`| Internal value used for logic.|

2. **State Variables**
|`questions`| Array of fetched questions.|
|`selectedQuestionsIds`| Array of IDs of selected questions.|
|`selectedQuestions`| Array of selected question objects.|
|`selectedAnswerType`| Currently selected answer type (default: `answerTypes[0]`).|

### Functions and Methods

1. `fetchQuestions`
- **Purpose**:
  - Updates the `questions` state with fetched data.
  - Requires `authTokens` for authorization.
- **Error Handling**: Logs errors to the console.

2. `handleTypeChange`
- **Purpose**:
  - Updates the selected answer type.
  - Updates the `selectedAnswerType` state.

- **Parameters**:
  - `selectedOption`: The selected answer type object.

3. `deleteQuestion`
- **Purpose**:
  - Deletes a question from the backend and updates the UI.
  - Removes the question from the `questions` state.
- **Parameters**:
  - `id`: The ID of the question to delete.
- **Error Handling**: Logs errors to the console.

4. `handleQuestionSelection`
- **Purpose**
  - Toggles the selection of a question.
  - Updates `selectedQuestions` and `selectedQuestionsIds` states.
  - Updates `optionsData` with the new list of selected questions.
- **Parameters**:
  - `selectedQuestion`: The question object to toggle.

5. `removeQuestion`
- **Purpose**
  - Removes a question from the selected list.
- **Parameters**:
  - `questionId`: The ID of the question to remove.
  - Updates `selectedQuestions`, `selectedQuestionsIds`, and `optionsData`.

---

## Rules Builder

The `RulesBuilder.js` file is designed to manage and build complex filtering rules for a workflow stage in a job application process. It allows users to create, update, and visualize rules composed of conditions and nested groups, which can be saved to a backend service.

- **File Path:** `\hr-frontend\src\components\interviews\RulesBuilder.js`

### State Variables

| Variable Name|Purpose|
|---|---|
|**`fields`**| Stores the list of valid rule fields fetched from the backend.|
|`key`| Unique identifier for the field.|
|`name`| Display name of the field.|
|`label`| Used for rendering in dropdowns.|
|`value`| Used for selection in dropdowns.|
|`datatype`| Determines the type of operators applicable.|
|||
|**`rule`**| Stores the current rule fetched from the backend or being created.|
| `id`| Unique identifier for the rule.|
| `rule`| The rule logic and conditions.|
|||
|**`filterRules`** | Represents the current state of the rule being built.|
|`logic`| The logical operator ("AND" or "OR") for the group.|
|`conditions`| List of conditions or nested groups.|
|||
|**`numberOperators`** and **`textOperators`** (`Array`)| Define the valid operators for numeric and text fields, respectively.|

### Functions and Methods

1. `fetchRule(stageId)`
- **Purpose**:
  - Fetches an existing rule for a given stage from the backend.
  - Updates `filterRules` and `rule` state with the fetched data.
- **Parameters**:
  - `stageId` (string): The ID of the stage for which the rule is fetched.
- **Return Value**: The fetched rule object.
- **Error Handling**: Logs errors to the console.  

2. `createRule()`
- **Purpose**: 
  - Creates or updates a rule in the backend.
  - Updates `rule` and `filterRules` state.
  - Calls `addRuleToStage` to associate the rule with the stage.
- **Return Value**: The created or updated rule object.
- **Error Handling**: Logs errors to the console.

3. `addRuleToStage(ruleId)`
- **Purpose**: 
  - Associates a rule with a specific stage.
  - Updates the backend with the rule association.
- **Parameters**:
  - `ruleId` (string): The ID of the rule to associate.
- **Return Value**: The updated stage data.
- **Error Handling**: Logs errors to the console.

4. `fetchValidRuleFields(serviceId)`
- **Purpose**:
  - Fetches valid rule fields for a given service.
  - Updates `fields` state with the fetched data.
- **Parameters**:
  - `serviceId` (string): The ID of the service.
- **Error Handling**: Logs errors to the console.

5. `addCondition(parent)`
- **Purpose**: 
  - Adds a new condition to a group.
  - Updates `filterRules` state.
- **Parameters**:
  - `parent` (Array): The array of conditions to which the new condition is added.  

6. `addNestedGroup(parent)`
- **Purpose**: 
  - Adds a new nested group to a group.
  - Updates `filterRules` state.
- **Parameters**:
  - `parent` (Array): The array of conditions to which the new group is added.

7. `deleteCondition(parent, index)`
- **Purpose**: 
  - Deletes a condition from a group.
  - Updates `filterRules` state.
- **Parameters**:
  - `parent` (Array): The array of conditions from which the condition is deleted.
  - `index` (number): The index of the condition to delete.

8. `updateCondition(parent, index, key, value)`
- **Purpose**:
  - Updates a specific field of a condition.
  - Updates `filterRules` state.
- **Parameters**:
  - `parent` (Array): The array of conditions containing the condition to update.
  - `index` (number): The index of the condition to update.
  - `key` (string): The field to update (e.g., "field", "operator", "value").
  - `value` (any): The new value for the field.

9. `updateGroupLogic(group, value)`
- **Purpose**:
  - Updates the logical operator of a group.
  - Updates `filterRules` state.
- **Parameters**:
  - `group` (Object): The group to update.
  - `value` (string): The new logical operator ("AND" or "OR").  

10. `getOperators(fieldKey)`
- **Purpose**: 
  - Returns the valid operators for a given field.
- **Parameters**:
  - `fieldKey` (string): The key of the field.
- **Return Value**: An array of operators (e.g., `[">", "<", "="]`).

---

## Service Menu

The `ServiceMenu.js` file renders a dropdown menu for selecting different interview-related services. The menu provides options such as "Automated Video Interview" and "Assessment," which are represented with icons and labels.

- **Dependencies**
  - `Menu`, `MenuButton`, `MenuItem`, `MenuItems`: Components from `@headlessui/react` used to create an accessible dropdown menu.
  - `ComputerDesktopIcon`, `DocumentChartBarIcon`, `VideoCameraIcon`: Icons from `@heroicons/react/24/outline` used to visually represent menu options.
  - `EllipsisVerticalIcon`: An icon from `@heroicons/react/24/solid` used as the menu trigger button.

### Functions and Methods

1. `ServiceMenu` Component
- **Purpose**: Renders a dropdown menu with options for interview-related services.
- **Return Value**: A JSX element representing the dropdown menu.

2. **Dropdown Menu Structure**
- The menu is triggered by an `EllipsisVerticalIcon` button.
- Menu items are displayed in a grid-like layout with icons and labels.
- Each menu item is wrapped in a `MenuItem` component for accessibility and interactivity.

3. **Styling**
- Tailwind CSS is used for styling, including hover effects, transitions, and positioning.
- The menu items have a hover effect (`hover:bg-gray-50`) to indicate interactivity.

4. **Accessibility**
- The `@headlessui/react` library ensures the dropdown menu is accessible, with proper focus management and keyboard navigation.

---

## Tabulator Movable

The `TabulatorMovable.js` file integrates the Tabulator library to create a table with movable rows. It allows users to drag and drop rows from the table into a designated drop area.

- **File Path:** `\hr-frontend\src\components\interviews\TabulatorMovable.js`

- **Dependencies**
  - `tabulator-tables`:
   - Used to create and manage the interactive table.
   - Provides the `Tabulator` class for table initialization and configuration.
   - Enables features like movable rows and event handling.

### Functions and Methods

1. `useEffect` Hook
- **Purpose**: 
  - Initializes and configures the Tabulator table when the component mounts and cleans up when the component unmounts.
  - Initializes a Tabulator table with movable rows and predefined data.
  - Attaches an event listener (`movableRowsElementDrop`) to handle row drops.
  - Destroys the Tabulator instance on component unmount to prevent memory leaks.
- **Error Handling**: No explicit error handling is implemented.

2. Event Listener: `movableRowsElementDrop`
- **Purpose**: 
  - Handles the event when a row is dropped onto the designated drop area.
  - Dynamically creates a list item (`<li>`) with the row's `name` property and appends it to the drop area.
- **Parameters**:
  - `e`: The mouseup event object.
  - `element`: The DOM element where the row is dropped.
  - `row`: The Tabulator row component representing the moved row.  
- **Error Handling**: No explicit error handling is implemented.

---
