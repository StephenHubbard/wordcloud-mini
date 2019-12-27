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
* Open the src folder and get familiar with the file structure. 
* npm install npm install react-d3-cloud.
* Open WordCloudComponent.js and import our data.json file, as well as importing our react-d3-cloud package.
* In our ComponentDidMount function, Set our data.json file to state as 'allWords'.  

### Solution

<details>

<summary> <code> WordCloudComponent.js </code> </summary>

```js
import React, {Component} from 'react';
import WordCloud from 'react-d3-cloud';
import data from './data.json';



export default class WordCloudComp extends Component {
    state = {
        allWords: [],
        cloudWords: [],
    }

    componentDidMount() {
        this.setState({
            allWords: data
        })
    }
    
    
    render() {
        return(
            <div>
                
            </div>
        )
    }
}

```

</details>
