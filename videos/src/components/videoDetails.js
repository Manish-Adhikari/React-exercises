import React from "react";

class VideoDetails extends React.Component {
    render() {
        if(!this.props.selectedVideo){
            return <div>Loading...</div>
        }

        const videoSrc = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`
        return (
        <div>
            <div className="ui embed">
                <iframe title="Video Player" src={videoSrc}/>
            </div>
        <div className="ui segment">
                <h4 className="ui header">{this.props.selectedVideo.snippet.title}</h4>
                <p>{this.props.selectedVideo.snippet.description}</p>
            </div>
        </div>
        );
    }
}

export default VideoDetails;