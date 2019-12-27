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
        console.log(this.state.allWords.wordcloud)
        let myObject = this.state.allWords.wordcloud
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
            <div className="doughnut">
                <div className="doughnut-cont">
                    <div classname="word-cloud-text-cont">
                        <h1>Word Cloud</h1>
                        <h3>(Click and hold to enlarge)</h3>
                        
                    </div>
                    {this.state.cloudWords.length > 1 ? (
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
                    ) : null }
                </div> 
            </div>
        )
    }
}
