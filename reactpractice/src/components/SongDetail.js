import React, {Component} from "react";
import { connect } from "react-redux";

class SongDetail extends Component {
    render() {
        if(!this.props.song) {
            return <h3>Select a song!</h3>
        }
        return (
            <div>
                <h2><strong>Title: </strong>{this.props.song.title}</h2>
                <h3><strong>Duration: </strong>{this.props.song.duration}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {song: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);