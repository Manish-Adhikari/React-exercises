import React from "react";
import "./SeasonDisplay.css";

class SeasonDisplay extends React.Component {
    
    state = {
        summer: {
            text:"Let's go to the beach",
            iconName:"sun"
        },
        winter: {
            text:"Blurr, It's Chilly.",
            iconName:"snowflake"
        }
    }

    getSeason() {
        let month = new Date().getMonth();
        console.log(this.props.lat);
        if(month >= 3 && month <=8) {
            return this.props.lat>0?'summer':'winter';
        }
        else {
            return this.props.lat>0?'winter':'summer';
        }
    }
    
    render() {
        let season = this.getSeason();
        let {text,iconName} = this.state[season];
        return (
                <div className={`display-season ${season}`}>
                    <i className={`icon-1 massive ${iconName} icon`}></i>
                    <h2>{text}</h2>
                    <i className={`icon-2 massive ${iconName} icon`}></i>
                </div>               
            );

    }
}

export default SeasonDisplay;