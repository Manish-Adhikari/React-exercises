import React from "react";
import VideoItem from "./videoItem";

class VideoList extends React.Component {
    render() {
        const renderedList = this.props.videos.map((video)=> {
            return <VideoItem key={video.id.videoId} video={video} onSelectVideo ={this.props.onSelectVideo}/>;
        });
        return <div className="ui relaxed divided list">{renderedList}</div>
    }
}

export default VideoList;