import {combineReducers} from "redux";

const songsReducer = () => {
    return [
        {title:'Smells Like Teen Spirit', duration:'4:05'},
        {title: 'No women No cry', duration:'3:30'},
        {title: 'Here I go again', duration:'4:45'},
        {title: 'Bhomeian Rhapsody', duration:'6:12'},
        {title: 'Sultans of Swing', duration: '5:53'}
    ];
};

const selectedSongReducer = (selectedSong = null,action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer

});