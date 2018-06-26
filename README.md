## Intro
This project was created with [Create React App](https://github.com/facebookincubator/create-react-app) starter kit. It sets up the development environment enabling the latest JavaScript features and uses build tools like Babel and webpack under the hood, but works with zero configuration.

## Getting started

1. Clone or download the project
2. Enter the project directory
3. Install the node_modules
4. Start the project
````
git clone https://github.com/devnull9/segura.git
cd segura
npm install
npm start
````

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


#### `npm test`

Launches the test runner in the interactive watch mode.<br>
On Linux or Mac OS there is a max number of system<br>
watchers that eventually need to be increased for larger<br>
projects if Jest is trying to watch too many files. Fix here:
````
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```` 


#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.


## Folder Structure

The project structure look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
    containers/
    reducers/
    index.js
  store/
    configureStore
  build/
    index.html
    static/
      js/
        main.5955878b.js (62.21 KB)
      css/
        main.63d1dafd.css (21.97 KB)
      media/
        ...
  deploy/
    widget.js
    widget.css
    minified/
      widget-minigied.js
      widget-minigied.css
    screenshots/
      js.png
      css.png
      success.png
```

## Optimized Production Build

The optimized production build can be found in /build folder ready for deployment


## Prototype Distribution (to merchants)

In order to distribute the widget to the merchants, you should copy the contents of the **deploy/minified** folder into the HTML document root directory and then add the following two lines to product-page.html:

```<link href="widget-minified.css" rel="stylesheet">```

in HTML document <head>, just after the other stylesheet links:
![GitHub Logo](/deploy/screenshots/css.png)

```<script type= "text/javascript" src="widget-minified.js"></script>```

at the end of the HTML document:
![GitHub Logo](/deploy/screenshots/js.png)

The Widget should successfully appear under the "Add to the cart" button:
![GitHub Logo](/deploy/screenshots/success.png)


## NOTES

* using redux, thunk, axios and axios middleware to make API calls and fetch the instalments data
* using the component's state to store the product (phone) details that was previously hardcoded into the page, the active item (16/32/64GB) and the item quantity
* using proptypes to make sure all data passed between the components is the expected type
* using react-bootstrap and react-modal libraries

* The pictures for the widget (that I took from mockups.pdf) had different size and was not possible to align well without setting them to the same size.

* The text used in the whole page was really bad formatted and hardcoded. I had to extract it from HTML into an object that can be reused, translated, etc. Here I lost almost one hour :/

* The project was made with jQuery so I had to refactor it completely with React that took half of my time.

## TODO


* I used inline styles at first to make things work, then I usually put them into a seperate CSS/SCSS file for each component.

* No time to implement any tests and without them the project looks naked to me.

* After clicking the - or + buttons to change quantity, the price and instalments is not updating

* More refactoring and code cleaning should be done

* Minor style fixes