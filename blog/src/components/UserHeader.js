import React from "react";
import {connect} from "react-redux";
import {fetchPostsAndUsers} from "../actions";

class UserHeader extends React.Component{
    render() {
        if(this.props.user) {
            return <div className="header">{this.props.user.name}</div>;
        }
        return null;
    }
}

const mapStateToProps = (state,ownProps) => {
    const user = state.user.find(user => user.id === ownProps.userID)
    return {user};
}

export default connect(mapStateToProps,{fetchPostsAndUsers})(UserHeader);