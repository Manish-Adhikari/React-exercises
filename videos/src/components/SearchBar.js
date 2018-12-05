import React from "react";

class SearchBar extends React.Component {
    state = {
        term:""
    };

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui container" style={{marginTop:"10px"}}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search Videos</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange} placeholder="Search here.."/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;