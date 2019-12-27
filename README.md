<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project, we will learn how to create a word cloud using a 3rd party npm package and convert our data to be compatible with their formatting.

## Setup

* Fork and clone this project.
* Run npm install.

## Step 1

### Summary

In this step, we'll install react-d3-cloud and import our data set.

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

## Step 2

### Summary

In this step, we'll begin to write our function that transforms our data.json file into the correct format so that the react-d3 library can properly interpret and display the data.

### Instructions

* Create a function called getWords.  
* Create a variable called 'myObject' and set it to this.state.allWords.wordCloud.
* Create another variable called 'words', and set it to an empty array.
* Write a function that loops over every key value pair in our data and puts it in the correct object format that react-d3-cloud can interpret, pushing it into our emptry array 'words'.  Hint: {text: "", value: 0,}
* Set our state variable 'cloudWords' to our current new array of words.

### Solution
  
<details>

<summary> <code> WordCloudComponent.js </code> </summary>

```js
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

    getWords() {
        let myObject = this.state.allWords.wordCloud
        const words = [
            {
            text: "", 
            value: 0
            }
        ]

        for (let i = 0; i < 1000; i ++) {
            words.push({text: `${Object.keys(myObject)[i]}`, value: Object.values(myObject)[i]})
        }

        this.setState({
            cloudWords: words,
        })
    }
```

</details>

<details>

<summary> <code> Detailed Instructions/Explanation </code> </summary>

<br />

-  Let's break down what the function getWords() is doing.
-  For the react-d3 library to properly interpret the data, we need to transform our data.json file data into the proper {text: "example", value: 8} format.  Where "text" is the word in string value, and "value" is the amount of times it's inserted into the data.  i.e., the bigger the value, the bigger the word will appear in the word cloud.  
- We begin by writing a for loop, and looping through it 1000 times, the amount of words in our data file.  Inside the for loop, we push each individual key value pair into our empty array as an object.  
- We use Object.keys and Object.values to select each part of our data set correctly (Please see MDN docs for more info on using these two methods.  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys & https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values).  
- Reminder: We surround our text value in back ticks to ensure the value is pushed in as a string.

</details>

## Step 3

### Summary

Now let's call this function at the end of our componentDidMount function, after we set state correctly.

### Instructions

* Turn our componentDidMount function into an asynchronous function using async and await.  We do this to ensure the function getWords() only fires after state is properly set.
* Display and set up our <WordCloud /> inside of the return() section of our component using proper d3 syntax (https://www.npmjs.com/package/react-d3-cloud)
* Our <WordCloud /> will take in four props that comes with the package.  1) data = Will be equal to our data set we want to display.  2) fontSizeMapper = Maps over each element of data to a selected font size in pixels.  3) rotate = Rotates each word up to a certain degree.  3) padding = Padding given to each word to reduce the amount of clutter we choose in pixels.
* Create our variables fontSizeMapper and rotate inside the render section of our component, so that <WordCloud /> can access them propertly.  


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

    async componentDidMount() {
        await this.setState({
            allWords: data
        })
        await this.getWords()
    }
    
    getWords() {
        let myObject = this.state.allWords.wordCloud
        const words = [
            {
            text: "", 
            value: 0,
            }
        ]

        for (let i = 0; i < 1000; i ++) {
            words.push({text: `${Object.keys(myObject)[i]}`, value: Object.values(myObject)[i]})
        }

        this.setState({
            cloudWords: words,
        })
    }

    render() {
    
        const fontSizeMapper = word => Math.log2(word.value) * 3;
        const rotate = word => word.value % 90;
        
        return(
            <div>
                <div className="doughnut-cont">
                    <div>
                        <div className="word-cloud">
                            <WordCloud
                                data={this.state.cloudWords}
                                fontSizeMapper={fontSizeMapper}
                                rotate={rotate}
                                padding="1px"
                            />
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

```

</details>

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Notes

This project was created for the sole purpose as an optional project done by Stephen Hubbard to apply for a DevMountain mentor position. 

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
