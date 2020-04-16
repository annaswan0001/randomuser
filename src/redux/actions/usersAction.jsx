import axios from "axios";
import * as actionsType from "../actions/actionTypes";



//Actions provide set users data
export const usersInit = (users) => (dispatch) => {
  dispatch(usersFetchStart());
  if (users.length < 100) {
    axios
      .get("https://randomuser.me/api/?results=50&inc=name,login")
      .then((res) => {
        console.log(res.data.results);
        dispatch(usersFetchSuccsess(res.data.results));
      })
      .catch((err) => {
        dispatch(usersFetchFail());
      });
  } else {
    return;
  }
};

export const usersFetchStart = () => ({
  type: actionsType.USERS_FETCH_START,
});
export const usersFetchSuccsess = (users) => ({
  type: actionsType.USERS_FETCH_SUCCESS,
  users,
});
export const usersFetchFail = () => ({
  type: actionsType.USERS_FETCH_FAIL,
});

//Action provide users filtering
export const usersFilter = (filter) => ({
  type: actionsType.USERS_FILTER,
  filter,
});

//Action to set detailed userData
export const getUserInfo = (userUuid) => (dispatch) => {
  dispatch(userFetchStart());
if(userUuid){
  axios
    .get(`https://randomuser.me/api?uuid=${userUuid}`)
    .then((res) => {
      console.log(res.data.results);
      dispatch(userFetchSuccsess(res.data.results));
    })
    .catch((err) => {
      dispatch(userFetchFail());
    });
};
}


export const userFetchStart = () => ({
  type: actionsType.USER_FETCH_START,
});
export const userFetchSuccsess = (user) => ({
  type: actionsType.USER_FETCH_SUCCESS,
  user,
});
export const userFetchFail = () => ({
  type: actionsType.USER_FETCH_FAIL,
});
