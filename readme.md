# Overview

This repo should get you up and running quickly for developing an app using 
Typescript and SCSS using webpack.

## Installation instructions

>npm install

## How to develop

To make npm build and watch for changes in your typescript code, run:

>npm run develop

You should see a new folder "dist" appear and within that, the files index.html and index_bundle.js

I've included a basic webserver as a part of this installation package, so you can then do:

> cd dist
> 
> ../node_modules/http-server/bin/http-server

At this point you should see that a webserver is running on port 8080, so in your browser open:

> http://localhost:8080

If all is working well you should see a blue screen with the words "Hello from Typescript" in the main heading.


## Working on your code

Update src/html/index.html with whatever content you like but make sure the index_bundle script include is 
left at the bottom so your code logic is included.

The app entry point is src/index.ts, so you can add any typescript there you like.

Add any additional typescript classes or modules should be added to the src/ts directory 
which can then be imported as normal into the main index.ts file.

Styling is done via SCSS, and for convenience there is a src/scss/main.scss file which includes a basic css reset.



