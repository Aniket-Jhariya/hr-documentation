---
sidebar_position: 1
---

## Root component

The `App.js` file is the main entry point for the React application in the `hr-frontend` project. It serves as the root component that sets up the application's routing, context providers, and overall structure.

- **File Path**: `\hr-frontend\src\App.js`

- **Dependencies**:
  - React
  - React Router DOM (`BrowserRouter`, `Route`, `Routes`)
  - Context Providers (`AuthProvider`, `AvatarProvider`)
  - Custom Components (`Sidebar`, `MainContent`, `PrivateRoute`, etc.)
  - Utility Components (`ToastContainer`, `PageNotFound`, etc.)


### Imports

The file begins by importing various components, utilities, and context providers:

- **CSS**: `App.css` for global styles.
- **Components**: Various components like `Sidebar`, `MainContent`, `Login`, `JobList`, etc.
- **Context Providers**: `AuthProvider` for authentication and `AvatarProvider` for avatar-related data.
- **React Router DOM**: `BrowserRouter`, `Route`, `Routes` for routing.
- **Utilities**: `PrivateRoute` for protected routes, `ToastContainer` for notifications, and `PageNotFound` for 404 errors.

###  App Component

The `App` function is the main component that returns the JSX structure of the application.

#### Structure

- **Root Div**: The application is wrapped in a `div` with classes for styling.
- **ToastContainer**: Used for displaying notifications.
- **BrowserRouter**: Sets up the routing context for the application.

### Routes

| Route Name|Purpose|
|---|---|
|**Public Routes**| These routes are accessible without authentication.
|*Candidate Routes*| Routes for candidate-related pages like `CandidateForm`, `Tour`, `ScreeningTour`, `VideoComponent`, `TestInstructions`, `Test`, `TestLogCompleted`, and `Completed`.|
|*Page Not Found*| A catch-all route for 404 errors.|
|||
|**Protected Routes**| These routes require authentication and are wrapped in `AuthProvider` and `AvatarProvider`.|
|*Authentication Routes*| Routes for `RegisterUser`, `Login`, `ResetPasswordEmail`, `ResetPassword`, `AdminOnboarding`, `Organization`, and `Admin`.|
|||
|**Private Routes**| Wrapped in `PrivateRoute` to ensure only authenticated users can access them.|
|*Base Route*| The main layout of the application, which includes `Sidebar` and `MainContent`.|
|*Profile Routes*| Routes for user profile management (`Profile2`, `PersonalInfo`, `Users`, `Notifications`, `Credits`).|
|*Job Routes*| Routes for job management (`JobList`, `JobDetail`, `JobOverview`, `JobApplicants`, `JobFilterGroups`, `JobQuestions`, `JobPreferences`, `JobInterviews`, `CreateJob`).|
|*Applicant Routes*| Routes for managing applicants (`Applicants`, `ApplicantProfile`, `ApplicantOverview`, `ApplicantResumeCopy`, `ApplicantPersonalityScreening`, `ApplicantTracking`, `ProfileComments`).|
|*Interview Routes*| Routes for managing interviews (`Interviews`, `InterviewWorkflow`).|
|*Test Routes*| Routes for managing tests (`Tests`, `TestBuilder`, `TestViewer`, `AssignedAssessments`).|
|*Other Routes*| Routes for `Documents`, `List`, `ResumeList`, `DemoList`, etc.|


### Props
|Prop Name| Description|
|---|---|
|`AuthProvider`| Manages authentication state and provides it to the entire application.|
|`AvatarProvider`| Manages avatar-related data and provides it to the application.|
|`ToastContainer`| Displays toast notifications throughout the application.|
|`PrivateRoute`|Ensures that certain routes are only accessible to authenticated users.|

### Key Features
- **Root Component**: `App.js` is the root component of the React application. It sets up the routing, context providers, and global utilities like `ToastContainer`.
- **Routing**: The file defines the application's routing structure, ensuring that users are directed to the correct components based on the URL.
- **Authentication**: By wrapping protected routes with `PrivateRoute` and `AuthProvider`, the application ensures that only authenticated users can access certain parts of the application.
- **Context Management**: The `AuthProvider` and `AvatarProvider` manage global state related to authentication and avatars, respectively, making this data accessible throughout the application.

### Styling
This file contains the global styles. It defines the visual presentation of the application, including layout, colors, animations, and responsive behavior.

- **File Path**: `\hr-frontend\src\App.css`. 
  - `.App`: is the root container of the application.
  - `.App-logo`: includes an animation for spinning the logo.
  - `.App-header`: defines the layout and appearance of the application header.
  - `.App-link`: used for hyperlinks within the application.
  - Keyframe animation `App-logo-spin`: used to rotate the logo.

#### Classes and Styles
| Variable Name|Purpose|
|---|---|
|**`.App`**|Styles the root container of the application.|
|`text-align: center;`| Centers all text content within the application.|
|||
|**`.App-logo`**|Styles the application logo.| 
|`height: 40vmin;`| Sets the height of the logo relative to the viewport size.|
|`pointer-events: none;`| Prevents the logo from being interactive (e.g., clickable).|
|||
|**Animation for `.App-logo`**| Adds a spinning animation to the logo. The animation is applied only if the user has not enabled reduced motion settings.|
|`animation: App-logo-spin infinite 20s linear;`| Applies the `App-logo-spin` animation infinitely with a duration of 20 seconds and a linear timing function.|
|||
|**`.App-header`**|Styles the application header.|
|`background-color: #282c34;`| Sets a dark background color.|
|`min-height: 100vh;`| Ensures the header takes up at least the full height of the viewport.|
|`display: flex;`| Uses Flexbox for layout.|
|`flex-direction: column;`| Arranges child elements vertically.|
|`align-items: center;`| Centers child elements horizontally.|
|`justify-content: center;`| Centers child elements vertically.|
|`font-size: calc(10px + 2vmin);`| Sets a responsive font size.|
|`color: white;`| Sets the text color to white.|
|||
|**`.App-link`**| Styles hyperlinks within the application.|
|`color: #61dafb;`| Sets the link color to a light blue shade.|
|||
|**`@keyframes App-logo-spin`**| Defines the spinning animation for the logo.|
|`from { transform: rotate(0deg); }`| Starts the rotation at 0 degrees.|
|`to { transform: rotate(360deg); }`| Ends the rotation at 360 degrees, creating a full spin.|

### Key Features
- **Global Styling**: `App.css` is imported into the `App.js` component, making its styles available globally within the application.
- **Component-Specific Styling**: `App.css` provides global styles, complemented by component-specific stylesheets for more granular control.
- **Responsive Design**: The use of `vmin` units and media queries ensures the application is responsive and adapts to different screen sizes.
- **Animation**: The spinning logo animation adds a dynamic visual element to the application, enhancing user engagement.

---

## Main Entry Point

The `index.js` file serves as the entry point for rendering the root component (`App`) into the DOM. Additionally, it sets up optional performance monitoring using `reportWebVitals`. The file is responsible for bootstrapping the application and ensuring the main component is rendered correctly.

- **File Path**: `\hr-frontend\src\reportWebVitals.js`
- **Dependencies**
  - `react`: Core library for building the React application.
  - `react-dom/client`: Provides DOM-specific methods for rendering React components.
  - `./index.css`: Global styles for the application.
  - `./App`: The main component of the application.
  - `reportWebVitals`: Utility for measuring performance metrics.
  - `react-router-dom`: Library for routing (commented out in this file but imported for potential use).


### Props
|Prop Name| Description|
|---|---|
|`root`|Represents the root of the React application. It is created using `ReactDOM.createRoot` and is responsible for rendering the application into the DOM element with the ID `root`.|
|`App`|The main component of the application. It is rendered into the `root` element and serves as the starting point for the application's UI.|

### Functions and Methods

1.`ReactDOM.createRoot`
- **Purpose**:
  - Initializes the React root for concurrent rendering.
- **Parameters**:
  - `container` (DOM Element): The DOM element where the React application will be rendered. In this case, `document.getElementById('root')`.
- **Return Value**:
  - `root` (ReactDOM.Root): The root object used to render the React application.

2. `root.render`
- **Purpose**:
  - Renders the provided React element into the DOM.
  - Updates the DOM to display the rendered React component.
- **Parameters**:
  - `element` (React Element): The React element to render. In this case, `<App />`.
- **Return Value**: None.

3. `reportWebVitals`
- **Purpose**:
  - Measures and reports performance metrics for the application.
- **Parameters**:
  - Optional callback function: Used to log or send performance metrics to an analytics endpoint.
- **Usage**: Typically used for performance monitoring and optimization.

### Styling
The `index.css` file is a global stylesheet for a React project that integrates Tailwind CSS, custom utility classes, and third-party fonts. It defines the visual styling for the application, including typography, color schemes, gradients, animations, and interactive components like buttons, tooltips, and scrollbars. The file also includes styles for specific UI elements such as arrows, audio players, and tables.

#### Styles and Classes

| Variable Name|Purpose|
|---|---|
|**Tailwind CSS Integration**|Initializes Tailwind CSS utilities, components, and base styles.|
| `@tailwind base;` | Imports Tailwind CSS base styles. |
| `@tailwind components;` | Imports Tailwind CSS components. |
| `@tailwind utilities;` | Imports Tailwind CSS utilities. |
|||
| `@import url(...)` | Imports Google Fonts (Poppins, Roboto, Manrope, Inter). |
| `body { margin: 0; font-family: ... }` | Sets the default font family and removes margin. |
|**Tooltip Styles**| Defines styles for tooltips that appear on hover.|
| `.tooltip { @apply invisible absolute; }` | Hides the tooltip by default and positions it absolutely. |
| `.has-tooltip:hover .tooltip { @apply visible z-50; }` | Shows the tooltip when the parent element is hovered. |
| `.custom-tooltip { max-width: 500px; background-color: rgb(240, 249, 255); }` | Styles a custom tooltip. |
|||
| `.bg-gradient-1 { background: linear-gradient(...); }` | Applies a gradient background. |
|**Audio Player Styles**| Customizes the appearance of audio players.|
| `audio { background-color: transparent; border: none; }` | Styles the `<audio>` element with no background or border. |
| `.audio-ui { background: linear-gradient(...); border-radius: 8px; padding: 10px; }` | Styles an audio-related UI component. |
|||
| `.ag-center-cols-container { width: 100% !important; }` | Ensures full width for a specific container. |
| `.inter { font-family: "Inter", sans-serif; }` | Sets the font family to Inter. |
| `.line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; ... }` | Limits text to 3 lines and hides overflow. |
|**Arrow Components**| Styles for arrow-shaped UI elements (e.g., progress indicators).|
| `.profile-arrow { width: 220px; background-color: #e6e6e6; ... }` | Styles a UI element with a right-pointing arrow. |
| `.profile-arrow::after { content: ""; border-left: 10px solid #e6e6e6; }` | Creates an arrow shape using borders. |
| `.profile-arrow.start::before { border-color: transparent #22c55e transparent transparent; }` | Styles a starting ribbon with a left arrow. |
| `.profile-arrow.applicant-profile { background-color: #7474f4; color: white; }` | Styles the applicant profile arrow. |
| `.stage-arrow { width: 250px; background-color: #e6e6e6; ... }` | Styles stage indicators with an arrow shape. |
| `.stage-arrow::after { border-left: 10px solid #8d99ae; }` | Creates an arrow effect for the stage component. |
| `.stage-arrow.cleared { background-color: #3b82f6; }` | Styles a cleared stage indicator. |
| `.stage-arrow.active { background-color: #47b881; }` | Styles an active stage indicator. |
|||
|**Button Styles**|Defines styles for primary, outlined, and disabled buttons.|
| `.bg-brand-purple { background-color: #7474f4; }` | Defines a brand-specific purple background. |
| `.btn-brand-purple:hover { background-color: #6262fc; }` | Changes button color on hover. |
| `.primary-btn { background: #7076f2; border-radius: 12px; }` | Styles a primary button. |
| `.outlined-btn { background: white; border: 1px solid #e5e7eb; }` | Styles an outlined button. |
|||
| `::-webkit-scrollbar { width: 15px; }` | Styles the scrollbar width. |
|**Flip Animation**|Adds a flip animation for card components.|
| `.flip-card { perspective: 1000px; }` | Enables 3D flip effect. |
| `.flip-card.flipped .flip-card-inner { transform: rotateY(180deg); }` | Rotates the card on flip. |
|||
| `.glowing { animation: glow 1.5s infinite alternate; }` | Adds a glowing effect using keyframes. |
| `.app-main { transition: margin-left 0.3s ease; }` | Adds a smooth transition for layout shifts. |
| `.sidebar { transition: width 0.3s ease; }` | Animates sidebar width changes. |
| `.text-brand-blue { color: #1e57fe; }` | Defines a brand-specific blue text color. |
| `.page-404 { text-align: center; font-family: "Poppins"; }` | Styles the "404" error page. |
| `code { font-family: source-code-pro, Menlo, Monaco, Consolas; }` | Sets the font for code blocks. |

### Key Features
- The `index.js` file interacts with the `App` component by rendering it into the DOM.
- It also interacts with the `reportWebVitals` utility to enable performance monitoring.

---

## reportWebVitals

The `reportWebVitals.js` file is a utility script designed to measure and report key performance metrics of a React application using the `web-vitals` library. This file plays a critical role in performance optimization by providing actionable insights into the application's runtime behavior.

- **File Path**: `\hr-frontend\src\reportWebVitals.js`
- **Dependencies**:
  - `web-vitals`: A third-party library used to measure web performance metrics.

### Functions and Methods

1. `onPerfEntry` (Function)
- **Purpose**:
  - A callback function that receives performance metric data.
- **Fields**: 
  - `metric`: An object containing performance metric details (e.g., `name`, `value`, `delta`, etc.).
- **Usage**: Passed as a parameter to `reportWebVitals` to handle performance data.

2. `reportWebVitals(onPerfEntry)`
- **Purpose**:
  - Initializes the `web-vitals` library and registers performance metric callbacks.
- **Parameters**:
  - `onPerfEntry` (Function): A callback function to handle performance metrics. Must be a valid function.
- **Error Handling**:
  - Checks if `onPerfEntry` is a valid function before proceeding.
  - If `onPerfEntry` is invalid, the function exits silently without errors.
- **Side Effects**:
  - Dynamically imports the `web-vitals` library, which may trigger a network request.
  - Registers performance metric callbacks (`getCLS`, `getFID`, `getFCP`, `getLCP`, `getTTFB`) with the `onPerfEntry` function.

### Key Features
- **React Application**:
  - Typically integrated into the `index.js` or `App.js` file of a React project.
  - Used to log or send performance data to analytics services.
- **Performance Monitoring Tools**:
  - The `onPerfEntry` callback can be configured to send metrics to tools like Google Analytics, Sentry, or custom logging systems.

---
