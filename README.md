# Background Generator 
Link to website: (https://skylar-kim.github.io/backgroundgenerator/)
 Zero to Mastery Udemy Course Lecture 135

### How to Use:
Select two colors from the two colored boxes to customize the background color gradient.  
Or, you can get a random background by clicking the "Randomize" button.  
If you want to use the style in your CSS file, you can copy the CSS line of code!
### Input Type: Color
`<input>` elements of type __color__ provide a UI element that lets a user specify a color.
Example in Code:
```html
<input class="color1" type="color" name="color1" value="#ff0000">
<input class="color2" type="color" name="color2" value="#00ff00">
```

We want to add an event listener to the color input, but the color input isn't necessarily a click, mouseenter, or a keypress. Instead it's just called __input__.
```javascript
// add an event listener to the two color inputs
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
```

### CSS Linear Gradient
[CSS linear-gradient() Function W3 Schools](https://www.w3schools.com/cssref/func_linear-gradient.asp)
The syntax used in the CSS file:
```css
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
```
