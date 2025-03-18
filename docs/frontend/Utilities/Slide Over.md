---
sidebar_position: 17
---

## SlideOver

The `SlideOver.js` file renders a sliding overlay panel that is used to display detailed analysis results, specifically for personality screening, including audio analysis data. The component is designed to be controlled externally via props, allowing it to be opened, closed, and populated with data dynamically.

- **File Path:** `\hr-frontend\src\utils\slide-over\SlideOver.js`
- **Dependencies**:
    - `@headlessui/react`: Provides `Dialog` and `Transition` components for creating accessible and animated dialogs.
    - `@heroicons/react/24/outline`: Provides the `XMarkIcon` used for the close button.

### Props

| Prop Name          | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `open`             | Controls the visibility of the slide-over panel.                            |
| `onClose`          | Callback function triggered when the panel is closed.                       |
| `screeningDetails` | (Unused in the current implementation) Contains screening details.         |
| `selectedAnswer`   | Contains analysis data, specifically `video_analysis.audio_analysis`.      |

### Functions and Methods

1. `SlideOver` 
- **Purpose**:
    - The `SlideOver` component is a functional React component that renders a sliding panel with analysis details.
    - Logs `selectedAnswer` to the console for debugging purposes.
    - Renders a sliding panel with animation effects using `@headlessui/react` components.
- **Return Value**:
    - Returns a JSX structure representing the slide-over panel.

---

