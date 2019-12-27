<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project, we will go over how to use a 3rd party npm package and convert our data to be compatible with their formatting.

## Setup

* Fork and clone this project.
* cd into it.
* npm install to install project packages.

## Step 1

### Summary

In this step, we'll install massive into our project and require it in `index.js`.

### Instructions

* We'll be using the npm package react-d3-cloud.  Docs can be found here for further understanding (https://www.npmjs.com/package/react-d3-cloud).
*

### Solution

<details>

<summary> <code> index.js </code> </summary>

```js
require("dotenv").config();
const express = require("express");
const massive = require("massive");

const app = express();

const { SERVER_PORT } = process.env;

app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});

```

</details>
