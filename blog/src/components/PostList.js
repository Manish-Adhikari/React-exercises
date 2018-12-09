import React from "react";
import {connect} from "react-redux";
import {fetchPostsAndUsers} from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
    componentDidMount =() => {
        this.props.fetchPostsAndUsers();
    }
    
    renderAllList = () => {
        return this.props.post.map((post)=> {
            return (
                <div className="item" key ={post.id}>
                    <i className="large user middle aligned icon"></i>
                    <div className="content">
                        <a className="header">{post.title}</a>
                        <div className="description">{post.body}</div>
                        <UserHeader userID = {post.userId}/>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui relaxed divided list">{this.renderAllList()}</div>      
        );
    }
}

const mapStateToProps = (state) => {
    return {post: state.post};
}

export default connect(mapStateToProps,{fetchPostsAndUsers})(PostList);
