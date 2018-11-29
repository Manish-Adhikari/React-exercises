import React from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import Loader from "./components/Loader";

class App extends React.Component {
    /* constructor(props) {
        super(props);
        this.state = {
            lat:null,
            lng:null,
            errMsg:""
        }
    } */

    //the code below i.e state is equivalent to the code i.e the constructor above
    state = {
        lat:null,
        lng:null,
        errMsg:""
    };
    

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }),
            (err) => this.setState({
                errMsg:"Error in Loading Coordinates"
            })
        );
    }
    
    renderContent() {
        if(this.state.lat && this.state.lng) {
            return (
                <SeasonDisplay lat={this.state.lat}/>
            );
        }

        if(this.state.errMsg) {
            return (
                <div>
                    <h2>{this.state.errMsg}</h2>
                </div>
            );
        }
        return <Loader/>;
    }

    render() {
      return this.renderContent();
    }
}

export default App;