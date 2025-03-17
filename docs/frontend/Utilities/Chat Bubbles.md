---
sidebar_position: 3
---

## Audio Bubble

The `AudioBubble` component renders a chat bubble in a messaging interface. It is specifically tailored to display an audio-related message, including a user avatar, a status indicator for submitted responses, and a placeholder for an audio player (currently commented out). 

- **File Path:** `\hr-frontend\src\utils\chat-bubbles\AudioBubble.js`

### Props
The `AudioBubble` component accepts the following props:

| Prop Name | Description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| `question`| Determines whether the chat bubble should be rendered.                      |
| `index`   | A unique identifier for the chat bubble, used as a `key` in the list item.  |
| `audioURL`| (Currently unused) The URL of the audio file to be played in the bubble.    |
| `submitted`| Indicates whether the user's response has been submitted.                   |

### Functions and Methods

1. `AudioBubble` 
- **Purpose**:
    - Renders a chat bubble with a user avatar, a status indicator for submitted responses, and a placeholder for an audio player.
- **Return Value**: A JSX element representing the chat bubble.


---
## Chat Bubble

The `ChatBubble.js` file renders individual chat bubbles in a chat interface. It is designed to display a question along with a user avatar and metadata (e.g., the question's index and text). 

- **File Path:** `\hr-frontend\src\utils\chat-bubbles\ChatBubble.js`

### Props
|Prop Name| Description|
|---|---|
|**`question`**| Contains the text and metadata of the question to be displayed.|
|`text`| The content of the question.|
|||
|`index`| The position of the question in a list, used for numbering.|
|`submitted`| Indicates whether the question has been submitted (not currently used in the component).|

### Functions and Methods

1. `ChatBubble` 

- **Purpose**:
    - Returns a JSX element representing a chat bubble with the following structure:
        - A user avatar (default image).
        - The question text, prefixed by its index.
        - Styling and layout for the chat bubble.

### Styling
| CSS Statement | Purpose |
|--------------|---------|
|**`.talk-bubble`**| Defines the base style for chat bubbles.|
|`margin`| Adds spacing around the bubble.|
|`display`| Sets the bubble as an inline-block element.|
|`position`| Enables relative positioning for child elements.|
|`width`| Sets the width of the bubble.|
|`height`| Allows the height to adjust based on content.|
|`background-color`| Sets the background color of the bubble.|
|||
|**`.tri-right.right-in:after`**|Creates a triangular pointer for chat bubbles, positioned to the left.|
|`content`| Adds a pseudo-element for the pointer.|
|`position`| Positions the pointer absolutely within the bubble.|
|`width` and `height`| Sets the size of the pointer.|
|`border`| Defines the shape and color of the pointer.|
|||
|**`.chat`**|Styles the container for chat messages.|
|`position`|Enables relative positioning for child elements.|
|||
|**`.chat::before`**|Adds a gradient overlay at the top of the chat container.|
|`content`|Adds a pseudo-element for the gradient.|
|`position`|Positions the gradient absolutely.|
|`z-index`|Ensures the gradient is layered above other content.|
|`background`|Defines a linear gradient for the overlay.|
|||
|**`.chat p`**|Resets default margin and padding for paragraph elements within chat bubbles.|
|**`.chat__message`**|Styles individual chat messages.|
|`width`|Sets the width of the message.|
|`transform`|Scales the message for animation.|
|`max-height`|Controls the height during animation.|
|`overflow`|Hides overflow content during animation.|
|`animation`|Applies a scaling animation with a delay.|
|Custom properties (`--bgcolor`, `--radius`, `--delay`)|Define reusable styles for message variants.|
|||
|**`.chat__message_B`**|Styles chat messages for the second user (e.g., sender B).|
|`flex-direction`|Reverses the layout for right-aligned messages.|
|`text-align`|Aligns text to the right.|
|`align-self`|Aligns the message to the end of the container.|
|Custom properties|Overrides default styles for sender B.|
|||
|**`@keyframes message`**|Defines an animation for chat messages.|
|`0%`|Starts the animation with the message scaled down and hidden.|
|`80%`|Scales the message slightly larger for a bounce effect.|
|`100%`|Completes the animation with the message fully visible and scaled to normal size.|

---
