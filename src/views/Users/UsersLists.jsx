import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import {
  usersInit,
  usersFilter,
  getUserInfo,
  userListRefresh,
} from "../../redux/actions/usersAction";
import UserList from "./UserList/UserList";
import Search from "./Search/Search";
import classes from "./UserLists.module.css";
import Button from "../../components/Button/Button";
import { createSelector } from 'reselect'

//reselect for memo selectors
const getUsers = (state) => state.users.usersData
const getFilter = (state) => state.users.filter

const filterUser = createSelector(
  [ getUsers, getFilter ],
  (users, filter)=> {
  if (users) {
    if (!filter) {
      return users;
    } else {
      const newUsers = users.filter((user) => {
        const fullName =
          user.name.first.toLowerCase() + " " + user.name.last.toLowerCase();
        return fullName.indexOf(filter.toLowerCase()) >= 0;
      });

      return newUsers;
    }
  }
}); // utils for correct filtering users from MapStateTpProps

function Users(props) {
  const [isFetching, setIsFetching] = useState(false); // for making infinite-scroll

  const {
    users,
    usersInit,
    usersFilter,
    getUserInfo,
    userListRefresh,
    history,
  } = props;

  const filterUsers = useCallback(
    (filter) => {
      usersFilter(filter.trim());
    },
    [usersFilter]
  );

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  }, [isFetching]); //add onScroll+ 50 users

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (users.length === 0) {
      usersInit(users);
      setIsFetching(false);
    }
  }, [usersInit, setIsFetching]);

  useEffect(() => {
    if (isFetching) {
      usersInit(users);
      setIsFetching(false);
    }
  }, [isFetching, usersInit, users, setIsFetching]);

  const getDetailInfo = useCallback(
    (uuid, allUsers) => {
      const user = allUsers.filter((user) => user.login.uuid === uuid);
      getUserInfo(user);
      history.push(`user/${uuid}`);
    },
    [ getUserInfo, history]
  );

  const handleDownload = () => {
    userListRefresh();
  };

  return (
    <div>
      <div className={classes.Search}>
        <Search filterUsers={filterUsers} />
        <div className={classes.ButtonRefresh}>
          <Button onClick={handleDownload}> Download new users</Button>
        </div>
      </div>
      <div className={classes.CardListContainer}>
        <ul className={classes.CardList}>
          {props.users &&
            props.users.map((user) => (
              <UserList
                getDetailInfo={() =>
                  getDetailInfo(user.login.uuid, props.users)
                }
                key={user.login.uuid}
                user={user}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: filterUser(state),
});

export default connect(mapStateToProps, {
  usersInit,
  usersFilter,
  getUserInfo,
  userListRefresh,
})(Users);
