// One component per file

// Cannot make any references to variables in other files
// This is the concept of Javascript modules
// Must explicitly say that you want something (using import statements)
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// We write the actual relative path from the file that we are importing it from
// Don't need to include the .js if it is a js file
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// API Key for YouTube API
const API_KEY = 'AIzaSyCkWnNcMk5cuyn7aYD5VV7Zi69Uf-2cDXU';

// Downward data flow
// Only the most parent component in an application should be responsible for fetching data

// const is a ES6 concept
// Declares a constant; the value of App will NEVER change

// () => { ... }
// This is another way of defining a function
class App extends Component
{
    constructor(props)
    {
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null
        };
        
        this.videoSearch('pokemon');
    }
    videoSearch(term)
    {
        // Key and value are the same
        // Condense to: "key" or "value"
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]    
            });
            // this.setState({ videos }) and
            // this.setState({ videos: videos });
            // are the same
        });
    }
    // Passing props
    // Allows parent to pass data to the children
    render()
    {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);
        
        return (
        <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
        </div>
        );   
    }
};

// Instantiating a component
// <Class /> (self closing tag)
// Use self closing tag if there is nothing between the tags (instead of <Class></Class>, use <Class />)

// render functions need a second argument, which is a reference to a target container
// Insert the instance into the target container
ReactDOM.render(<App />, document.querySelector('.container'));