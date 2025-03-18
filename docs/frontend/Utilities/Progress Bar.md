---
sidebar_position: 14
---

## ProgressBar

The `ProgressBar` component represents the progress of a user through a series of steps or questions. It calculates the progress percentage based on the current step index and the total number of steps, and renders a dynamic progress bar that updates as the user progresses.

### Props
|Prop Name| Description|
|---|---|
|`currentIndex`| The current step or question index (0-based).|
|`length`| The total number of steps or questions.||

### Functions and Methods

1. `ProgressBar`

- **Purpose**:
    - The component returns a `div` element representing the progress bar. The inner `div` dynamically adjusts its width based on the calculated progress percentage.