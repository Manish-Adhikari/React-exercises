import _ from 'lodash';
import JSONplaceholder from "../apis/JSONplaceholder";

export const fetchPostsAndUsers = () => async (dispatch,getState) => {
    await dispatch(fetchPost());
    const userIDs = _.uniq(_.map(getState().post,'userId'));
    console.log(userIDs);
    userIDs.forEach(id => {
        dispatch(fetchUser(id));
    });
};

export const fetchPost = () => async dispatch => {
    const response = await JSONplaceholder.get('/posts');
    dispatch({type:'FETCH_POST', payload: response.data});
};

export const fetchUser = (id) => async dispatch => {
    const response = await JSONplaceholder.get(`/users/${id}`);
    dispatch({type:'FETCH_USER', payload:response.data});
};