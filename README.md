# Website

Website Kutchup 2025

# Tools Required:
- Github account
- html
- javascript
- css

# Software:
- Windows 11
- VSCode
- Chrome
- Notepad++
- Copilot

# Screen Setup

## Background Colour
Finding the colour in js
```js
let grd = 1-(2/(1+Math.sqrt(5)))
console.log("grd " + grd) // 0.3819660112501052
console.log("1-grd " + (1-grd)) // 0.6180339887498948
console.log("255*grd " + 255*grd) // 97.40133286877683
console.log("255*(1-grd) " + 255*(1-grd)) // 157.59866713122318
console.log("255*(1-0.5*grd) " + 255*(1-0.5*grd)) // 206.2993335656116
console.log("255*(1-0.25*grd) " + 255*(1-0.25*grd)) // 230.6496667828058
```
Stylesheet body
```html
<style>
    body {
        background-color: rgb(255, 231, 206);
    }
</style>
```

## Fonts

List of preferred fonts. One font is used to render. `Times` default
```css
font-family: Cambria, sans-serif;
```

```
Like Fonts:
Lucida Sans Unicode
Cambria
Verdana
Georgia
Trebuchet MS
Tahoma

Dislike Fonts:
Arial
Courier
Courier New
Times
```

Font Test
```html
<style>
h1 {
    color: rgb(255, 0, 0);
    font-family: 'Lucida Sans Unicode';
}
h2 {
    color: rgb(97, 97, 97);
    font-family: Cambria;
}
h3 {
    color: rgb(97, 97, 97);
    font-family: Verdana;
}
h4 {
    color: rgb(97, 97, 97);
    font-family: Georgia;
}
h5 {
    color: rgb(97, 97, 97);
    font-family: Trebuchet MS;
}
h6 {
    color: rgb(97, 97, 97);
    font-family: Tahoma;
}
</style>
<body>
<h1>Kutchup</h1>
<h2>Kutchup</h2>
<h3>Kutchup</h3>
<h4>Kutchup</h4>
<h5>Kutchup</h5>
<h6>Kutchup</h6>
</body>
```

Changing the font for a class
```html
<style>
.style_instructions {
    color: rgb(97, 97, 97);
    font-family: Trebuchet MS;
}
</style>
<body>
<p id="instructions" class="style_instructions">Watch this space</p>
</body>
```

All the hyperlink controls
```html
<style>
a {
    color: rgb(158, 158, 255);
    cursor: help;
    text-decoration: unset;
}
a:link {
    color: rgb(97, 97, 97);
}
a:visited {
    color: rgb(97, 97, 97);
}
a:hover {
    color: rgb(97, 97, 97);
    text-decoration: underline;
}
a:active {
    color: rgb(97, 97, 97);
}
</style>
```

# Design Choices

Once the website opens in the browser two main features are required. A satisying sitemap and a layout plan. The sitemap makes the website deep and navigable. The designer will be able to work on the sitemap to create long reading times, user attention, feedback and help the user do their research. A layout plan is important to avoid being a console or command line database. A cascading style sheet means one `style` command defines a whole set of on screen elements. Users will be very quick to judge a layout. There are essential CSS settings the web designer must define in order to avoid blank and generic looking websites. Unfortunately a lot of default html looks weak compared to professional graphic design work.

I would guess that html was more built for reading a book. Now html enables lots of graphics and layout.

## Content Delivery Network

To have a website that changes to match a real person's life, use a content delivery network. The website and person should flow in parallel. Without such a content delivery network the website is like a motionless painting. To increase hit count update the page with fresh information.

Do not use json. Have built in html enough to satify one user for a few visits. Use a service to create a new content delivery network for this project. Allow both online and offline using code logic. The website either updates or loads basic code.

Do more research for sending information to the server.

## Layout

To make the layout and colours `grd` is preset in html. `grd` is also calculated client side for show and to help users create haptic software.

Scroll bar and most other settings remain set to default. This is an important design choice for viewing the website on different devices

Essential css. There is no way to have a reasonable zero style html website. Styling potential goes through the roof thanks to modern html graphics. Professional websites are made with css editors and website builders. Do not attempt to recreate up to professional quality. Instead, set the artistic choices to have a project that matches itself. Learn from the best.

> Styling potential

# Scale and Mobile Compatibility

Define a scale float `let scale = 1`. It will be a discrete float because we only set `scale` to three possible values. Those values are `0.5, 1, 2`. When `scale = 1` the screen is a `1920 1080` high definition (HD) or better computer monitor resolution. Decide where the boundaries should be. There will never be a screen width of zero. Use screen width to change the scale float `if(window.screen.width < 500){scale = 0.5}`. From here any changes can be multiplied by the same scale.

Use Javascript to change every HTML element with the same class. Alternatively use the `id` of every element.

```html
<script>
var grid_elements = document.getElementsByClassName('grid_container');
for(i = 0; i < grid_elements.length; i++) {
    grid_elements[i].style.gridTemplateColumns = "0.5fr 1.62fr";
}
</script>
```

# Ideas

Set a nice icon for the user's bookmarks. Apparently most browsers look in the root directory by default but I have used the most common name scheme and attached the file to the html code with one minimal string `favicon.ico`.

```html
<link rel="icon" href="./favicon.ico">
```

Trim down code. A blank document is like a blank piece of paper. Someone making code should not have to write any generic or pointless symbols. Currently UTF-8 Latin characters are compiled into C code, machine code and graphic processor scripts. The graphics are always interesting because there are some smart optimisations about graphics processing units. Since the basic shapes require a very fixed and specific quantity of numbers, such as 3 points for a triangle, the physics and hardware corresponds very nicely to run fast programs. By defining a matrix instead of a list of variables, another brilliant application of mathematics allows for matrices to be multiplied together in advance of the render to make a matrix stack.

We shouldn't even be running better graphics! Graphics should be ultra smooth and haptic.

Most convential projects use this format but it is not necessary for this project and the direct code will be easier for a beginner to read. For more specific browser control we could add a Stylesheet link and doctype.
```html
<!DOCTYPE html>
<link rel="stylesheet" href="/css/screen.css">
```

Custom Font. Remember there are languages and writing systems. Some languages vary by country. Users have a short list of languages `en-GB, en, zh, fr`.
```html
<style>
@font-face {
    font-family: 'YourFontName'; /*a name to be used later*/
    src: url('http://domain.example/fonts/font.ttf'); /*URL to font*/
}
.classname {
    font-family: 'YourFontName';
}
</style>
```

Grid layout using relative widths.
```css
grid-template-columns: 1fr 1fr 1fr;
grid-template-columns: 0.38fr 1fr 0.38fr;
grid-template-columns: 0.5fr 1.62fr 0.5fr;
```

Use the trendy 3 column layout and switch to 2 columns depending on the scale. The scale is set after checking the user's device details.
```css
grid-template-columns: 0.5fr 1.62fr 0.5fr;
grid-template-columns: 0.5fr 1.62fr;
```

Load from file. I don't do it this way anymore
```html
<script>
function readFile(database_file_name) {
    fetch(database_file_name, {mode: 'cors'})
        .then(response => response.json())
        .then(data => list(JSON.parse(data)))
        .catch(err => console.log(err))
    return data
}
function run() {
// Load
let items = readFile('items.json')
console.log(items)
}
run();
</script>
```

Scroll bar visible at all times. This would fix the resizing issue when the scroll bar appears for page and browser
```css
html { overflow-y: scroll; }
```

100% view width with the horizontal scroll bar hidden
```html
<style>
body {
    overflow-x: hidden;
}
#wrap-wrap {
    width: 100vw;
}
</style>
```

Stylesheet display inline to avoid new lines with every paragraph `<p>` element
```html
<p style="display:inline"></p>
```

Original console log
```js
console.log("Kutchup")
let grd = 1-(2/(1+Math.sqrt(5)))
console.log("grd " + grd) // 0.3819660112501052
```

Hyperlinks change colour to lighter blue when visited
```
<style>
a:visited {
    color: rgb(158, 158, 255);
}
</style>
```

# To Do

- [x] Load the centre list items from a file. Parse and stringify to enable links in text. Give up on json

- [x] Make all the Sitemap links work with the same layout as the index page. Need an inheritance tree. Decide against the tree because it is static and easily controlled by changing the stylesheet

- [x] Consider link tracker and server log. Unpopular. Link trackers are built in to the internet anyway, just obtain better information. The hosting service has logs which I don't have access to

- [ ] Details page. Add more information. Give instructions to the reader. Help to define the website. Stay within the scope of the website and browser

- [ ] Form page identification. Host the website on domain name open source. Send and push the user form to a chosen API. Mainstream large website hosting company that runs mostly on advertising. Connect HTML elements so that when the user completes the form the form data is sent to an API. The API must be chosen carefully therefore chose the largest stability. I'm also doubting what is stable however there are now companies that have been running cloud services for over a decade

- [ ] Pictures page. Future project

- [x] Body text changes the layout. It's the scroll bar appearing on some pages. In conclusion, leave the scroll bar as it is. It's more annoying to have the incorrect scroll bar. The layout changes dramatically with window size anyway. The scroll bar should stay on default visibility. Pages can be as long as the writer wants

- [ ] Feed page with custom RSS reader. Instead, just add hyperlinks and chose the website's content

- [x] Content delivery system. Anything, just anything other than having to type between html tags. However hosting services won't make it easy to read from files because it's a security risk. Use `id` tags for each changing element, this will only be required by the html and js. Add a function to set each changing element. Option 1 complete

- [x] Option 1: Change between a small precoded set and keep all code within a local html filesystem. Fast. Runs forever and never breaks

- [x] Option 2: Read from a different hosting service. Update the website content easily from anywhere on a favourite keyboard and text editor. Set up the content delivery service to require a user friendly format. Slow and could go offline. Could have unpredictable results. Risk of rigging, contracts and moderators

- [x] Option 3: Read from a server side file such as json. This is the standard and expected route. The programming language is ready for users to parse json. Fast. Can be pushed quick and safe updates but not very easily. The content files are small and easy to edit but the json language is not human friendly and a typo or mistake will break and cause an error

- [ ] Software. Add a bunch of static code and pack it neatly into one html file. You know what to do. Typesetting for maths functions. Graphs

- [x] id name scheme. Aim for end user friendly. `item_001_detail` Type, numeration, extension. `item_001` is a good tag. Add lots of blank tags as needed for the page, index page only needs 2 items. Set item text content in javascript because it the most functional of the three. `string =` or `string +=`

- [x] Scale function. Javascript check the screen size, set a discrete scale float and alter the website layout. Scale factor 2 for screens greater than 4K which is a bit of a novelty

