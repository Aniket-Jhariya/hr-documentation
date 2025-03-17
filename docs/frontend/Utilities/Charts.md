---
sidebar_position: 2
---

## Basic Radar Chart

The `BasicRadarChart.js` file renders a radar chart using the `echarts-for-react` library. It dynamically generates a radar chart based on the provided data, indicators, and legend data. 

- **File Path:** `\hr-frontend\src\utils\charts\BasicRadarChart.js`
- **Dependencies**:
    - **`ReactEcharts`**: A React wrapper for the ECharts library, used to render the radar chart.

### Props

|Prop Name| Description|
|---|---|
|**`data`**| An array of objects representing the data points to be plotted on the radar chart. Each object contains a `value` array and a `name` string.|
|`value`| Array of numbers representing data points.|
|`name`| String representing the name of the dataset.|
|||
|**`indicator`**| An array of objects defining the axes of the radar chart. Each object contains a `name` string and a `max` number.|
|`name`| String representing the name of the axis.|
|`max`| Number representing the maximum value for the axis.|
|||
|`legendData`| An array of strings representing the legend labels for the chart.|

### State Variable
| Variable Name|Purpose|
|---|---|
|`options`| A state variable that holds the configuration options for the radar chart. It is initialized as `null` and updated dynamically based on the `data` prop.|

### Functions and Methods

1. `BasicRadarChart` Component
- **Purpose**
    - The `useEffect` hook updates the `options` state whenever the `data` prop changes. This ensures the chart is re-rendered with the latest data.
- **Return Value**
    - Returns a JSX element that renders a radar chart using the `ReactEcharts` component.

---

## Metric Pie

The `MetricPie.js` file a gauge chart using the `echarts-for-react` library. It visualizes a single metric's value within an ideal range, providing a clear and interactive representation of the data. 

- **File Path:** `\hr-frontend\src\utils\charts\MetricPie.js`
- **Dependencies**
    - `echarts-for-react`: A React wrapper for the ECharts library, used to render the gauge chart.

### Props
|Prop Name| Description|
|---|---|
|**`data`**| An object containing the following fields:|
|`field` | The name of the metric being visualized.|
|`value` | The current value of the metric.|
|`ideal_range` | Contains `min` and `max` values defining the ideal range for the metric.|
|`units` | The unit of measurement for the metric.|

### State Variable
| Variable Name|Purpose|
|---|---|
|`options`| A state variable that stores the configuration object for the ECharts gauge chart. It is initialized as `null` and updated dynamically based on the `data` prop.|

### Functions and Methods

1. `useEffect` Hook
- **Purpose**:
    - Dynamically generates the ECharts configuration (`options`) based on the `data` prop.
    - Formats the `data` prop into a structure suitable for ECharts.
    - Configures the gauge chart's appearance.
    - Updates the `options` state with a new ECharts configuration object.
- **Parameters**: 
  - A dependency array `[data]` that triggers the effect whenever the `data` prop changes.


2. `MetricPie` Component
- **Purpose**: 
  - Renders a `ReactEcharts` component wrapped in a `div` if `options` is not `null`.
  - The `ReactEcharts` component is configured with the `options` state and styled to fill its container.

---

## Pie Chart

The `PieChart` component renders a pie chart using the `echarts-for-react` library. It visualizes data passed to it as a pie chart, with customizable colors for each category. The component is primarily used to display categorical data distributions, such as emotion analysis results, in a visually appealing and interactive manner.

- **File Path:** `\hr-frontend\src\utils\charts\PieChart.js`

### Props
|Prop Name| Description|
|---|---|
|`data`| A key-value pair object where keys represent category names (e.g., emotions) and values represent their corresponding numerical values (e.g., counts or percentages).|
|`colorMap`| A key-value pair object where keys match the category names in `data` and values represent the color codes for each category.  |

### Functions and Methods

1. `useEffect`
- **Purpose**:
    - Initializes and updates the chart configuration (`options`) based on the provided `data` and `colorMap`.  
    - Formats the `data` prop into an array of objects compatible with ECharts.  
    - Sets the `options` state with the chart configuration, including tooltips, legends, and series data.  
    - Sorts the data in descending order of values for better visualization.  

2. `ReactEcharts` 
- **Purpose**:
    - Renders the pie chart using the `options` state.  
- **Parameters**:  
  - `option` (`Object`): The chart configuration object.  
  - `notMerge` (`Boolean`): Prevents merging with previous options.  
  - `lazyUpdate` (`Boolean`): Delays updates for performance optimization.  
  - `style` (`Object`): Specifies the dimensions of the chart container.  
- **Return Value**: A React element representing the pie chart.  

---
