import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtubeApi";
import VideoList from "./videoList";
import VideoDetails from "./videoDetails";

 class App extends React.Component {  
    state = {
        videos: [],
        selectedVideo : null
    }
    
    componentDidMount = () => {
        this.onFormSubmit('happy');
    }

    onFormSubmit = (term) => {
        youtube.get('/search',
            {params: {
                q: term
            }
        }).then((response) => {
            this.setState({
                videos : response.data.items,
                selectedVideo: response.data.items[0]
            });
        });
    }

    onSelectVideo = (video) => {
       this.setState({
            selectedVideo : video
        });
    }
    
    render() {
        return (
            <div>
                <div className="search-bar">
                    <SearchBar onSubmit = {this.onFormSubmit}/>
                </div>
                <div className="ui container" style={{ paddingTop:'20px'}}>
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column">
                            <VideoDetails selectedVideo = {this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onSelectVideo={this.onSelectVideo}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default App;
