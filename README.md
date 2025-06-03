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
```
let grd = 1-(2/(1+Math.sqrt(5)))
console.log("grd " + grd) // 0.3819660112501052
console.log("1-grd " + (1-grd)) // 0.6180339887498948
console.log("255*grd " + 255*grd) // 97.40133286877683
console.log("255*(1-grd) " + 255*(1-grd)) // 157.59866713122318
console.log("255*(1-0.5*grd) " + 255*(1-0.5*grd)) // 206.2993335656116
console.log("255*(1-0.25*grd) " + 255*(1-0.25*grd)) // 230.6496667828058
```
Stylesheet body
```
<style>
    body {
        background-color: rgb(255, 231, 206);
    }
</style>
```

## Fonts

List of preferred fonts. One font is used to render. `Times` default
```
font-family: Arial, Helvetica, sans-serif;
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
```
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
```
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
```
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

Do not use json. Have built in html enough to satify one user for a few visits. Use a hosting service to create a new content delivery network for this project. Allow both using code logic. The website either updates or loads basic code.

Do more research for sending information to the server.

## Layout

`grd` layout and colours preset in html. `grd` is also calculated client side for show and help users create haptic software.

Scroll bar and most other settings remain on default. This is an important design choice for viewing the website on different devices

Essential css. There is no way to have a reasonable zero style html website. Styling potential goes through the roof thanks to modern html graphics. Professional websites are made with css editors and website builders. Do not attempt to recreate up to professional quality. Instead, set the artistic choices to have a project that matches itself. Learn from the best

# Ideas

Set the favicon for bookmarks otherwise browsers look in the root directory by default.

```html
<!-- <link rel="icon" type="image/x-icon" href="/favicon.ico"> -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

Stylesheet link and doctype used in most html for more specific browser control
```html
<!DOCTYPE html>
<link rel="stylesheet" href="/css/screen.css">
```

Custom Font
```
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

Grid layout
```
grid-template-columns: 1fr 1fr 1fr;
grid-template-columns: 0.38fr 1fr 0.38fr;
grid-template-columns: 0.5fr 1.62fr 0.5fr;
```

Load from file
```
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
```
html { overflow-y: scroll; }
```

100% view width with the horizontal scroll bar hidden
```
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
```
<p style="display:inline"></p>
```

# To Do

- [x] Load the centre list items from a file. Parse and stringify to enable links in text. Give up on json

- [x] Make all the Sitemap links work with the same layout as the index page. Need an inheritance tree. Decide against the tree because it is static and easily controlled by changing the stylesheet

- [ ] Consider link tracker and server log

- [ ] Details page

- [ ] Form page identification. Host the website on domain name open source. Send and push the user form to a chosen API. Mainstream large website hosting company that runs mostly on advertising

- [ ] Pictures page. Future project

- [x] Body text changes the layout. It's the scroll bar appearing on some pages. In conclusion, leave the scroll bar as it is. It's more annoying to have the incorrect scroll bar. The layout changes dramatically with window size anyway. The scroll bar should stay on default visibility. Pages can be as long as the writer wants

- [ ] Feed page with custom RSS reader

- [ ] Content delivery system. Anything, just anything other than having to type between html tags. However hosting services won't make it easy to read from files because it's a security risk. Use `id` tags for each changing element, this will only be required by the html and js. Add a function to set each changing element.

- [ ] Option 1: Change between a small precoded set and keep all code within a local html filesystem. Fast. Runs forever and never breaks

- [ ] Option 2: Read from a different hosting service. Update the website content easily from anywhere on a favourite keyboard and text editor. Set up the content delivery service to require a user friendly format. Slow and could go offline. Could have unpredictable results. Risk of rigging, contracts and moderators

- [ ] Option 3: Read from a server side file such as json. This is the standard and expected route. The programming language is ready for users to parse json. Fast. Can be pushed quick and safe updates but not very easily. The content files are small and easy to edit but the json language is not human friendly and a typo or mistake will break and cause an error

- [ ] Software. Add a bunch of static code and pack it neatly into one html file. You know what to do

- [ ] id name scheme. Aim for end user friendly. `item_001_detail` Type, numeration, extension.

- [ ] Scale function. Javascript check the screen size, set a discrete scale float and alter the website layout

