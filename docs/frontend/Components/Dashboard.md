---
sidebar_position: 4
---

## Dashboard
The `Dashboard.js` file serves as the main analytics dashboard for the HR frontend application. It aggregates and visualizes various recruitment-related metrics, such as applications received, assessments, video interviews, applicant scores, and feature usage. The component fetches data from an API and displays it using multiple graphs and tables. 

- **File Path:** `\hr-frontend\src\components\dashboard\Dashboard.js`
- **Dependencies**:
  - `react-select-async-paginate`: Used for the job selection dropdown.
  - `useFetchJobsDropDown` for fetching job dropdown data.



### State Variables
| Variable Name               | Type       | Purpose                                                                 |
|-----------------------------|------------|-------------------------------------------------------------------------|
| `loading`                   | `boolean`  | Tracks whether data is being fetched.                                  |
| `error`                     | `string`   | Stores error messages from API calls.                                  |
| `applicationsReceived`      | `object`   | Stores data for applications received over time.                       |
| `assessments`               | `object`   | Stores data for assessments completed over time.                       |
| `videoInterviews`           | `object`   | Stores data for video interviews conducted over time.                  |
| `applicantsPerStage`        | `object`   | Stores data for applicants distributed across stages.                  |
| `applicantFeatureUsage`     | `object`   | Stores data for feature usage by applicants.                           |
| `applicantsScore`           | `array`    | Stores data for applicant score distribution.                          |
| `applicantsData`            | `array`    | Stores data for application stage overview.                            |
| `kpiData`                   | `object`   | Stores key performance indicator (KPI) data.                           |
| `selectedJob`               | `object`   | Stores the currently selected job from the dropdown.                   |
| `jobSelected`               | `boolean`  | Tracks whether a job has been selected in the dropdown.                |
| `kpiLoading`                | `boolean`  | Tracks whether KPI data is being fetched.                              |
| `greeting`                  | `string`   | Stores a greeting message (e.g., "Good Morning").                      |


### Functions and Methods

1. `fetchInfoBarGraph(jobId)`
- **Purpose**: 
  - Fetches data for the "Applications Over Time" graph.
  - Updates `applicationsReceived`, `assessments`, and `videoInterviews` state.
  - Sets `loading` to `false` after the operation.
- **Parameters**:
  - `jobId` (`string`): Optional job ID to filter data.
- **Return Value**: None.
- **Error Handling**: Sets `error` state if the API call fails.
  

2. `fetchApplicantsPerStage(jobId)`
- **Purpose**: 
  - Fetches data for the "Applicants By Current Stage" graph.
  - Updates `applicantsPerStage` state.
  - Sets `loading` to `false` after the operation.
- **Parameters**:
  - `jobId` (`string`): Optional job ID to filter data.
- **Return Value**: None.
- **Error Handling**: Sets `error` state if the API call fails.
  

3. `fetchApplicantScore(jobId)`
- **Purpose**: 
  - Fetches data for the "Resume Screening Score Distribution" graph.
  - Updates `applicantsScore` state.
  - Sets `loading` to `false` after the operation.
- **Parameters**:
  - `jobId` (`string`): Optional job ID to filter data.
- **Return Value**: None.
- **Error Handling**: Sets `error` state if the API call fails.

4. `fetchFeatureUsage(jobId)`
- **Purpose**: 
  - Fetches data for the "Features Consumption" graph.
  - Updates `applicantFeatureUsage` state.
  - Sets `loading` to `false` after the operation.
- **Parameters**:
  - `jobId` (`string`): Optional job ID to filter data.
- **Return Value**: None.
- **Error Handling**: Sets `error` state if the API call fails.

5. `fetchApplicantsStageGraphOverview(jobId)`
- **Purpose**: 
  - Fetches data for the "Application Stages Overview" table.
  - Updates `applicantsData` state.
  - Sets `loading` to `false` after the operation.
- **Parameters**:
  - `jobId` (`string`): Optional job ID to filter data.
- **Return Value**: None.
- **Error Handling**: Sets `error` state if the API call fails.

6. `fetchKpiDetails(jobId)`
- **Purpose**: 
  - Fetches KPI data for the dashboard.
  - Updates `kpiData` state.
  - Sets `kpiLoading` to `false` after the operation.
- **Parameters**:
  - `jobId` (`string`): Optional job ID to filter data.
- **Return Value**: None.
- **Error Handling**: Sets `error` state if the API call fails.

7. `fetchAllData(jobId)`
- **Purpose**: 
  - Fetches all dashboard data in parallel.
  - Calls multiple fetch functions concurrently using `Promise.all`.
- **Parameters**:
  - `jobId` (`string`): Optional job ID to filter data.
- **Return Value**: None.
- **Error Handling**: Handled by individual fetch functions.

---

## KPI Overview 

The `KPIOverview` component is designed to display Key Performance Indicators (KPIs) in a dashboard. It visualizes metrics such as total applications, total jobs, applicant-to-assessment ratio, and more. The component uses the `FlipNumbers` library to animate the display of KPI values.

- **File Path:** `\hr-frontend\src\components\dashboard\KPIOverview.js`
- **Dependencies**:
  - `react-flip-numbers`: Provides animated number flipping for KPI values.

### Props and Objects

1. `kpiMapping`
- **Purpose**: 
  - Maps KPI labels to their corresponding keys in the `kpiData` object.
- **Fields**:
  - `label` (string): The display name of the KPI.
  - `key` (string): The key used to fetch the corresponding value from `kpiData`.

```js
const kpiMapping = [
  { label: "Total Applications", key: "total_applicants" },
  { label: "Total Jobs", key: "total_jobs" },
  { label: "Applicant to Assessment Ratio", key: "assessment_ratio" },
  { label: "Applicant to Interview Ratio", key: "personality_screening_ratio" },
  { label: "Days to Fill", key: "close_fill" },
  { label: "Closed Jobs", key: "closed_jobs_count" },
  { label: "Opened Jobs", key: "opened_jobs_count" },
];
```

---

### Functions and Methods

1. `KPIOverview` 
- **Purpose**: 
 - Renders a grid of KPI cards, each displaying a label and its corresponding value.
- **Parameters**:
  - `kpiData` (object): An object containing KPI values, where keys match those in `kpiMapping`.
  - `kpiLoading` (boolean): Indicates whether the KPI data is still being fetched.
- **Return Value**: A JSX element representing the KPI overview grid.
- **Error Handling**: No explicit error handling is implemented. Missing or undefined values in `kpiData` default to `"0"` using the nullish coalescing operator (`??`).

---

## Applicant Info Bar Graph

The `ApplicantInfoBarGraph` component is designed to render a line graph using the ECharts library. It visualizes applicant data over time, such as weekly counts, and is used within the dashboard of the HR management system. The component dynamically adjusts to changes in data and viewport size, ensuring responsiveness and accurate data representation.

- **File Path:** `\hr-frontend\src\components\dashboard\ApplicantInfoBarGraph.js`
- **Dependencies**:
- `ECharts`: Used for rendering the line graph.
- `useRef`, `useContext`, `useMemo`, `useCallback`, and `useEffect`: used for state and lifecycle management.
- `isSidebarOpen` state: handles layout changes when the sidebar is toggled.

### Props and objects
1. `graphData` Prop
- **Purpose**: Provides the data required to render the line graph.
- **Parameters**:
  - `datasets`: Array of objects containing:
    - `name`: String (name of the dataset, e.g., "Applicants").
    - `data`: Array of numbers (data points for the graph).
  - `start_dates`: Array of strings (dates corresponding to the data points).

2. `memoizedGraphData`
- **Purpose**: Optimizes performance by memoizing processed graph data.
- **Fields**:
  - `isDataEmpty`: Boolean (indicates if the dataset is empty or contains only zeros).
  - `formattedDates`: Array of strings (formatted dates for the x-axis).
  - `series`: Array of objects (ECharts series configuration for each dataset).
  - `legendData`: Array of strings (names of datasets for the legend).

### Functions and Methods

1. `formatDate(dateString)`
- **Purpose**: Formats date strings for display on the x-axis.
- **Parameters**:
  - `dateString`: String (date in string format).
- **Return Value**: String (formatted date in "DD MMM" format or "Invalid Date" if parsing fails).

2. `handleResize()`
- **Purpose**: 
  - Ensures the graph remains responsive to viewport changes.
  - Resizes the ECharts instance to fit the container when the window is resized.

3. `useEffect` Hook
- **Purpose**:
  - Initializes the ECharts instance if it doesn't exist.
  - Updates the chart with new data when `memoizedGraphData` changes.
  - Adds and removes a window resize event listener.
  - Manages the lifecycle of the ECharts instance and ensures the graph updates dynamically.

### Error Handling
- **Data Validation**: Checks if `graphData` is valid and contains non-empty datasets before processing.
- **Date Parsing**: Handles invalid date strings by returning "Invalid Date".
- **Empty Data State**: Displays a "No Data Available" message if all datasets are empty or contain only zeros.

---

## Applicant Feature Usage Graph

The `ApplicantFeatureUsageGraph` component is a visualization tool designed to display the usage statistics of various applicant-related features (e.g., resume screening, assessments, and video interviews) in a dashboard. It leverages the `echarts` library to render either a bar chart or a pie chart, depending on user preference.

- **File Path:** `\hr-frontend\src\components\dashboard\ApplicantFeatureUsageGraph.js`
- **Dependencies**:
  - **`echarts`**: Used for rendering interactive charts.
  - **`@heroicons/react`**: Provides icons for the chart type toggle buttons.

### Props
- **`data`**: An object containing usage statistics for different features. Expected fields:
  - `resume_screening`: Object with `total_resumes_parsed` (number).
  - `assessment`: Object with `total_count` (number).
  - `video_interview`: Object with `total_count` (number).

### State
- **`chartType`**: A string (`"bar"` or `"pie"`) that determines the type of chart to display.

### Context
- **`SidebarContext`**: Provides the `isSidebarOpen` boolean to handle layout adjustments when the sidebar is toggled.

### Functions and Methods

1. `useEffect` Hook
- **Purpose**: 
  - Initializes and updates the chart based on the `data`, `chartType`, and `isSidebarOpen` state.
  - Initializes an `echarts` instance.
  - Updates the chart configuration based on `chartType`.
  - Adds a resize event listener to handle window resizing.
  - Cleans up the chart instance and removes the resize listener on unmount.
- **Parameters**: None (dependencies: `data`, `isSidebarOpen`, `chartType`).
- **Return Value**: None.
- **Error Handling**: If `data` is missing, the chart is not rendered.

2. Chart Configuration
- **`commonOptions`**: Shared configuration for both bar and pie charts.
  - `tooltip`: Displays feature usage data on hover.
  - `legend`: Displays categories at the bottom of the chart.
- **`barChartOptions`**: Configuration for the bar chart.
  - `xAxis`: Displays feature categories.
  - `yAxis`: Displays applicant counts.
  - `series`: Renders bars with gradient colors and labels.
- **`pieChartOptions`**: Configuration for the pie chart.
  - `series`: Renders a donut-shaped pie chart with gradient colors and labels.

3. Event Handlers
- **`handleResize`**: Resizes the chart when the window is resized.
- **`setChartType`**: Updates the `chartType` state to toggle between bar and pie charts.

---

## Applicant Per Stage Graph

The `ApplicantPerStageGraph.js` file is responsible for rendering a bar chart that visualizes the number of applicants at different stages of the hiring process. The component dynamically adjusts to changes in the provided data and the state of the sidebar (open/closed) to ensure the chart is always displayed correctly.

- **File Path:** `\hr-frontend\src\components\dashboard\ApplicantPerStageGraph.js`
- **Dependencies**
  - `echarts`: A powerful charting library used to create the bar chart.
  - `SidebarContext`: A React context that provides the state of the sidebar (open/closed). This is used to trigger a re-render of the chart when the sidebar state changes.

### Props
- **`data` (Object)**: Contains the number of applicants at each stage of the hiring process. Expected fields:
  - `resume_screening` (Number): Number of applicants in the resume screening stage.
  - `assessment_test` (Number): Number of applicants in the assessment stage.
  - `video_interview` (Number): Number of applicants in the automated video interview stage.
  - `rejected` (Number): Number of rejected applicants.
  - `on_hold` (Number): Number of applicants on hold.
  - `hired` (Number): Number of hired applicants.

### Functions and Methods

1. `ApplicantsPerStageGraph`
#### Purpose
  - Initializes and renders an `echarts` bar chart.
  - Adds a resize event listener to adjust the chart size when the window is resized.
  - Cleans up the chart instance and removes the resize event listener when the component unmounts.

#### Parameters
- **`data` (Object)**: The data object containing applicant counts for each stage.
#### Return Value
- **`JSX.Element`**: A `div` element that serves as the container for the chart.
#### Error Handling
- If the `data` object is `null` or `undefined`, the chart rendering is skipped.
- If all values in the `values` array are zero, the chart displays a "No Data Available" message.

---

## Applicant Score Bar Graph


The `ApplicantScoreBarGraph` component is designed to render a bar graph visualizing applicant scores and their corresponding counts. It leverages the `echarts` library for chart rendering and integrates with the `SidebarContext`.

- **File Path:** `\hr-frontend\src\components\dashboard\ApplicantScoreBarGraph.js`
- **Dependencies**
  - **`echarts`**: Used for rendering the bar graph.
  - **`SidebarContext`**: Provides the `isSidebarOpen` state to handle layout adjustments when the sidebar is toggled.


### Props
- **`graphData`**: An array of objects representing the data to be visualized in the bar graph.
  - **Fields**:
    - `score`: A number or string representing the applicant score.
    - `count`: A number representing the count of applicants with the corresponding score.

### Functions and Methods

1. `ApplicantScoreBarGraph` 
#### Purpose
- Initializes and renders an ECharts bar graph within the `div` container.
- Listens for window resize events to dynamically resize the chart.
- Cleans up the chart instance and removes the resize event listener on component unmount.
#### Parameters
- **`graphData`**: An array of objects containing `score` and `count` fields. This data is used to populate the bar graph.
#### Return Value
- Returns a `div` element that serves as the container for the ECharts bar graph.
#### Error Handling
- If `graphData` is not provided or is empty, the chart displays a "No Data Available" message.

---

## Application Stage Overview

The `ApplicationStageOverview` component is designed to visualize the stages of job applications using a bar chart. It renders a stacked bar chart that displays the distribution of applicants across various stages for the top 10 jobs. 

- **File Path:** `\hr-frontend\src\components\dashboard\ApplicationStageOverview.js`
- **Dependencies**
  - **`echarts`**: A charting library used to render the stacked bar chart.
  - **`SidebarContext`**: Provides the `isSidebarOpen` state to adjust the chart layout when the sidebar is toggled.


### Props
- **`applicantsData`**: An object containing applicant data.
  - **Fields**:
    - `results`: An array of job objects, each containing:
      - `job_name`: The name of the job.
      - `stages`: An object with counts of applicants in each stage:
        - `resume_screening`: Number of applicants in the resume screening stage.
        - `video_interview`: Number of applicants in the video interview stage.
        - `assessment_test`: Number of applicants in the assessment test stage.
        - `hired`: Number of applicants hired.
        - `reject`: Number of applicants rejected.
        - `on_hold`: Number of applicants on hold.

### Functions and Methods

1. `ApplicationStageOverview`
- **Purpose**:
  - Renders a stacked bar chart to visualize applicant data across different stages.
  - Initializes and renders an `echarts` instance.
  - Updates the chart when `applicantsData` or `isSidebarOpen` changes.
  - Adds and removes a `resize` event listener to handle window resizing.
  - Disposes of the chart instance when the component unmounts.
- **Parameters**:
  - `applicantsData`: The data object containing applicant information.
- **Return Value**: A `div` element containing the chart container.
  
2. `useEffect`
- **Purpose**:
  - Handles the initialization, rendering, and cleanup of the `echarts` chart.
  - Extracts the top 10 jobs from `applicantsData.results`.
  - Configures the chart options based on screen size and data availability.
  - Renders the chart using `echarts.setOption`.
- **Dependencies**:
  - `applicantsData`: Triggers chart updates when the data changes.
  - `isSidebarOpen`: Adjusts the chart layout when the sidebar state changes.
  
### Error Handling
- The component gracefully handles cases where no data is available by displaying a "No Data Available" message.
- It does not explicitly handle errors in data fetching or parsing, assuming the parent component provides valid data.

---

## Application Stage Overview Table

The `ApplicationStageOverviewTable` component is designed to display a tabular overview of applicant data for various job stages. It leverages the Tabulator library to render a responsive and interactive table. The table includes columns for job details, applicant counts at different stages, and job status.

- **File Path:** `\hr-frontend\src\components\dashboard\ApplicationStageOverviewTable.js`
- **Dependencies**
  - `Tabulator`: Used to create and manage the interactive table.

### Props

1. `applicantsData` Prop
- **Purpose**: Contains the data to be displayed in the table. Each object represents a job and its associated applicant counts at various stages.
- **Fields**:
  - `job_name`: `string` - Name of the job.
  - `total_applicants`: `number` - Total number of applicants.
  - `stages`: `Object` - Contains counts for each stage:
    - `resume_screening`: `number`
    - `assessment_test`: `number`
    - `video_interview`: `number`
    - `hired`: `number`
    - `reject`: `number`
    - `on_hold`: `number`
  - `close_date`: `string` - Date when the job closes.
  - `is_closed`: `boolean` - Indicates whether the job is closed.

---

### Functions and Methods

1. `ApplicationStageOverviewTable`
- **Purpose**:
  - Initializes and renders a Tabulator table when `applicantsData` is provided.
  - Cleans up the Tabulator instance on component unmount to prevent memory leaks.
- **Parameters**:
  - `applicantsData`: `Array<Object>` - Data to populate the table.
- **Return Value**: A `div` element that serves as the container for the Tabulator table.

2. `useEffect` 
- **Purpose**:
  - Handles the initialization and cleanup of the Tabulator table.
  - Checks if `applicantsData` is available and not empty.
  - Initializes the Tabulator table with the provided data and column configurations.
  - Destroys the Tabulator instance on component unmount.
- **Dependencies**: `applicantsData` - Re-renders the table when `applicantsData` changes.  

3. `formatDate`
- **Purpose**: 
  - Formats a date string into a human-readable format.
- **Parameters**:
  - `dateString`: `string` - The date string to format.
- **Return Value**: `string` - Formatted date in `DD MMM YYYY` format (e.g., `01 Jan 2023`).

### Error Handling
- The component does not explicitly handle errors. However, it includes a guard clause in the `useEffect` hook to prevent table initialization if `applicantsData` is empty or unavailable.

### Styling
- The table uses Tailwind CSS classes for styling:
  - Status badges: `bg-red-100`, `text-red-700`, `bg-green-100`, `text-green-700`.
  - Table container: `dashboard-table` (custom class).

---

