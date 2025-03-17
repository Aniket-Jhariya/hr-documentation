---
sidebar_position: 1
---

## Assessment Card

The `AssessmentCard.js` file renders a card displaying details of an assessment. It is part of a larger React project, likely used in a user interface where assessments are listed and managed. The component supports viewing, editing, and publishing/unpublishing assessments, depending on the user's permissions. It also integrates with a custom hook (`usePublishPreBuiltAssessment`) to handle the publishing logic.

- **File Path:** `\hr-frontend\src\utils\cards\AssessmentCard.js`
- **Dependencies**
    - `@heroicons/react/24/outline`: Provides icons used in the UI (e.g., `ChevronDoubleRightIcon`, `ClockIcon`, `EllipsisVerticalIcon`, `EyeIcon`, `PencilIcon`).
    - `react-router-dom`: Used for navigation via the `Link` component.
    - `@headlessui/react`: Provides headless UI components for building accessible dropdown menus (`Menu`, `MenuButton`, `MenuItem`, `MenuItems`, `Transition`).
    - `usePublishPreBuiltAssessment`: A custom hook for handling the logic of publishing/unpublishing assessments.

### Props
|Prop Name| Description|
|---|---|
|`item`| An object representing the assessment data. It contains fields like `title`, `description`, `category`, `difficulty`, `total_question`, `time_duration`, and `is_published`.|
|`editable`| A boolean indicating whether the assessment can be edited or published/unpublished by the user.|

### State
| Variable Name|Purpose|
|---|---|
|`assessment`| A state variable that stores the assessment data passed via the `item` prop. It is updated whenever the `item` prop changes.|


### Functions and Methods

1. `updateAssessment(assessmentId, isPublished)`
- **Purpose**:
    - Updates the assessment's published status.
    - Calls `publishPreBuiltAssessment` to update the assessment's status on the server.
    - Updates the local `assessment` state with the returned updated assessment data.
- **Parameters**:
  - `assessmentId` (string/number): The ID of the assessment to update.
  - `isPublished` (boolean): The new published status (`true` for publish, `false` for unpublish).

---

## Kpi Card

The `KpiCard.js` file is a utility component in a React project designed to display Key Performance Indicator (KPI) metrics. It is a reusable, presentational component that renders a card with a title and a corresponding value. The component is styled using Tailwind CSS and is intended to be used across the application to consistently display KPI data.

- **File Path:** `\hr-frontend\src\utils\cards\KpiCard.js`

### Props
|Prop Name| Description|
|---|---|
|`title`| The title or label for the KPI card. It describes the metric being displayed.|
|`value`| The value of the KPI metric. This is the primary data displayed in the card.|


### Functions and Methods

1. `KpiCard` 
- **Purpose**:
The `KpiCard` component is a functional React component that renders a styled card to display a KPI metric.

- **Parameters**:
    - **`title`** (`string`): The title or label for the KPI card.
    - **`value`** (`string` or `number`): The value of the KPI metric.

- **Return Value**:
    - Returns a JSX element representing a styled card with the provided `title` and `value`.

### Styling and Layout
- **Container**: The card container uses Tailwind classes for responsive width (`w-full md:w-1/4`), height (`h-40`), padding (`p-5`), border (`border border-gray-300`), shadow (`shadow-sm`), background (`bg-white`), and rounded corners (`rounded-lg`).
- **Title**: The title is styled with medium font weight (`font-medium`), gray text color (`text-gray-500`), and margin-bottom (`mb-5`).
- **Value**: The value is styled with bold font weight (`font-bold`), large text size (`text-3xl`), primary color (`text-primary-600`), and truncation for long values (`truncate max-w-full`).

---

## Recent Applicant Card

The `RecentApplicantCard.js` file is a React functional component that renders a card displaying information about a recent applicant. This component is designed to be reusable and is likely used in a dashboard or list view to present key details such as the applicant's title, date, and time. It is styled using Tailwind CSS for a clean and responsive design.

- **File Path:** `\hr-frontend\src\utils\cards\RecentApplicantCard.js`

### Props
|Prop Name| Description|
|---|---|
|`title`| The title or name of the applicant.|
|`date`| The date associated with the applicant.|
|`time`| The time associated with the applicant.|


### Functions and Methods

1. `RecentApplicantCard` 

- **Purpose**:
    - This functional component renders a card with details about a recent applicant. It uses Tailwind CSS for styling and is designed to be responsive.

- **Return Value**
    - Returns a JSX element representing a styled card with the provided `title`, `date`, and `time`.

---

## Top Location Card

The `TopLocationCard.js` file renders a card displaying key information about a top location. It is designed to present a title, a primary value, and a count of applicants in a visually appealing and structured format. This component is likely used in a dashboard or analytics section of the HR frontend application to highlight important metrics.

- **File Path:** `\hr-frontend\src\utils\cards\TopLocationCard.js`

### Props
|Prop Name| Description|
|---|---|
|`title`| The title or label for the card (e.g., "Top Location").|
|`value`| The primary value to display (e.g., a location name or metric).|
|`count`| The number of applicants associated with the location.|

### Functions and Methods

1. `TopLocationCard` Component

- **Description**:
    - The `TopLocationCard` component is a stateless functional component that renders a card with a title, a primary value, and a count of applicants.

2. Return Value
    - Returns a JSX element representing a styled card with the provided `title`, `value`, and `count`.


### Key Features
- **Responsive Design**: The card's width adjusts based on screen size (`w-full md:w-1/4`).
- **Truncation**: The primary value (`value`) is truncated if it exceeds the available space (`truncate max-w-full`).
- **Styling**: Tailwind CSS classes are used for consistent styling, including background color, border, shadow, and text formatting.

---

## Top Skills Card

The `TopSkillsCard.js` file is to display a card that showcases the top skills of applicants. It is a reusable UI component that takes in a `title` and a `value` (an array of skills with their respective counts) as props and renders them.

- **File Path:** `\hr-frontend\src\utils\cards\TopSkillsCard.js`

### Props
|Prop Name| Description|
|---|---|
|`title`| Used to label the card and provide context for the data being displayed.|
|**`value`**|Used to populate the card with skill data. An array of objects, where each object contains:|
|`skill`| The name of the skill.|
|`count`| The number of applicants associated with that skill.|

### Functions and Methods

1. `TopSkillsCard` Component
- **Purpose**
    - The `value` array is mapped to render each skill and its associated count.
    - The first skill in the array is styled differently (larger font size) to emphasize its importance.

- **Return Value**
    - Returns a JSX element representing a styled card with the provided `title` and `value` data.

### Styling

- **Layout**: `flex`, `flex-col`, `justify-start`, `items-start`, `w-full`, `md:w-1/4`, `h-40`, `max-w-96`, `p-4`.
- **Typography**: `font-medium`, `font-bold`, `text-2xl`, `text-sm`, `text-gray-500`, `text-primary-600`, `text-gray-400`.
- **Borders and Shadows**: `border`, `border-gray-300`, `shadow-sm`, `rounded-lg`.

---
