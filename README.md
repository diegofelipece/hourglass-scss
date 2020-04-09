# Hourglass SCSS

Hourglass is a bunch of CSS loaders I've been doing with SASS, based on the concept of heaving a single HTML only, with some simple class options, like:

``` html
<span class="hourglass --square-spin"></span>
```

With some animations options based on the class added:

|name | class | used colors |
|--|--|--|
| Circle Border | `--circle-border` | `$hourglassColor1` |
| Circle Colors | `--circle-colors` | `$hourglassColor1`, `$hourglassColor2`, `$hourglassColor3` |
| Circle Dots | `--circle-dots` | `$hourglassColor1`, `$hourglassColor2`, `$hourglassColor3` |
| Circle Spin | `--circle-spin` | `$hourglassColor2`, `$hourglassColor3` |
| Square Spin | `--square-spin` | `$hourglassColor1`, `$hourglassColor5`, `$hourglassColor3` |
| Square Turning | `--square-turning` | `$hourglassColor1`, `$hourglassColor3` |

## Getting started

Add it to the project `npm install hourglass-scss --save` or `yarn add hourglass-scss` and import it globally.

If you preffer, you can customize the colors by replacing the desired color variable before importing hourglass.

|color|code|
|--|--|
|`$hourglassColor1`|`rgba(139, 30, 63, 1)`|
|`$hourglassColor2`|`rgba(60, 21, 59, 1)`|
|`$hourglassColor3`|`rgba(206, 121, 107, 1)`|
|`$hourglassColor4`|`rgba(50, 41, 47, 1)`|
|`$hourglassColor5`|`rgba(236, 200, 175, 1)`|
|`$black`|`#000`|
|`$white`|`#fff`|

#### Example

```javascript
$hourglassColor1: red;
$hourglassColor2: green;
$hourglassColor3: blue;
$hourglassColor4: maroon;
$hourglassColor5: cian;

@import 'scss/hourglass';
```
