
import UserTypes from './user.types';

export const setCurrentUser = (user) => ({
  type: UserTypes.SET_CURRENT_USER,
  payload: user,
});

export const revokeAuth = () => ({
  type: UserTypes.REVOKE_AUTH,
});

export const fetchPosts =() => {
  return (dispatch) => {
    // return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    // .then(response => response.json())
    // .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

// function fetchPosts(subreddit) {
//   return dispatch => {
//     dispatch(requestPosts(subreddit))
//     return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//       .then(response => response.json())
//       .then(json => dispatch(receivePosts(subreddit, json)))
//   }
// }
