---
sidebar_position: 3
---

# Tasks

# Tasks

### `drawColor`
This function draws a series of colored rectangles on an image.

#### Parameters:
- `img`: The image on which to draw.
- `colors`: List of colors in BGR format.

---

### `colorBackgroundText`
Draws text with a solid background on an image.

#### Parameters:
- `img`: The image on which to draw.
- `text`: The text to be displayed.
- `font`: Font type.
- `fontScale`: Size of the text.
- `textPos`: Tuple representing the text position.
- `textThickness`: Thickness of the text.
- `textColor`: Color of the text in BGR format.
- `bgColor`: Background color in BGR format.
- `pad_x`: Padding in the x-direction.
- `pad_y`: Padding in the y-direction.

---

### `textWithBackground`
Draws text with a semi-transparent background on an image.

#### Parameters:
- `img`: The image on which to draw.
- `text`: The text to be displayed.
- `font`: Font type.
- `fontScale`: Size of the text.
- `textPos`: Tuple representing the text position.
- `textThickness`: Thickness of the text.
- `textColor`: Color of the text in BGR format.
- `bgColor`: Background color in BGR format.
- `pad_x`: Padding in the x-direction.
- `pad_y`: Padding in the y-direction.
- `bgOpacity`: Opacity level of the background.

---

### `textBlurBackground`
Draws text with a blurred background on an image.

#### Parameters:
- `img`: The image on which to draw.
- `text`: The text to be displayed.
- `font`: Font type.
- `fontScale`: Size of the text.
- `textPos`: Tuple representing the text position.
- `textThickness`: Thickness of the text.
- `textColor`: Color of the text in BGR format.
- `kneral`: Kernel size for blurring.
- `pad_x`: Padding in the x-direction.
- `pad_y`: Padding in the y-direction.

---

### `fillPolyTrans`
Draws a filled polygon with transparency.

#### Parameters:
- `img`: The image on which to draw.
- `points`: List of coordinate points for the polygon.
- `color`: Color of the polygon in BGR format.
- `opacity`: Opacity level of the polygon.

---

### `rectTrans`
Draws a rectangle with transparency.

#### Parameters:
- `img`: The image on which to draw.
- `pt1`: Tuple representing the starting coordinates.
- `pt2`: Tuple representing the opposite corner.
- `color`: Color of the rectangle in BGR format.
- `thickness`: Thickness of the rectangle border.
- `opacity`: Opacity level of the rectangle.


