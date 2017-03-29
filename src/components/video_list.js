import React from 'react';
import VideoListItem from './video_list_item';

// Props arrive from our parent

// In a functional component, props are passed into the function (as below)
// In a class, props are available anywhere; refer to it by "this.props"
const VideoList = (props) => {
    // array.map(function(number) {...});
    // This will call the function with each number of the array
    
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video} />
        );
    });
    
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;