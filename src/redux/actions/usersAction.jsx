import axios from "axios";
import * as actionsType from "../actions/actionTypes";

//USERS
export const usersInit = (users) => (dispatch) => {
  dispatch(usersFetchStart());
  if (users.length < 100) {
    axios
      .get("https://randomuser.me/api/?results=50")
      //.get("https://randomuser.me/api/?results=50&inc=name,login,picture,id")
      .then((res) => {

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

//Action provides users filtering
export const usersFilter = (filter) => ({
  type: actionsType.USERS_FILTER,
  filter,
});

//Action provides reset userList data
export const usersReset = () => ({
  type: actionsType.USERS_RESET,
});

//Action provides refreth userList data
export const userListRefresh = () => (dispatch, getState) => {
  dispatch(usersReset());
  console.log(getState().users.usersData);
  dispatch(usersInit(getState().users.usersData));
};



//USER
export const getUserInfo = (user) => (dispatch) => {
  dispatch(userFetchStart());
  if (user) {
    dispatch(userFetchSuccsess(user));
    // localStorage.setItem("user", user)
    // if randomUser had below setting - we could have been to get user data by uuid
    // axios
    //   .get(`https://randomuser.me/api?uuid=${userUuid}`)
    //   .then((res) => {
    //     console.log(res.data.results);
    //     dispatch(userFetchSuccsess(res.data.results));
    //   })
    //   .catch((err) => {
    //     dispatch(userFetchFail()); t
    //   });
  }
};

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


