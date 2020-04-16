import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import{Route}from 'react-router-dom'
import { usersInit, usersFilter, getUserInfo } from "../../redux/actions/usersAction";
import UserList from "./UserList/UserList";
import Search from "./Search/Search";
import User from './User/User'

const filterUser = (users, filter) => {
  if (users) {
    if (!filter) {
      return users;
    } else {
      const newUsers = users.filter((user) => {
        const fullName =
          user.name.first.toLowerCase() + " " + user.name.last.toLowerCase();
        return fullName.indexOf(filter.toLowerCase()) >= 0;
      });
      console.log(newUsers);
      return newUsers;
    }
  }
}; // utils for correct filtering users from MapStateTpProps

function Users(props) {
  const [isFetching, setIsFetching] = useState(false); // for making infinite-scroll

  const { users, usersInit, usersFilter ,getUserInfo} = props;

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
    if (isFetching || users.length === 0) {
      usersInit(users);
      setIsFetching(false);
    } else if (users.length >= 100) {
      setIsFetching(false);
      return;
    }
  }, [isFetching, usersInit, users]);

  const getDetailInfo = useCallback((uuid) => {
    getUserInfo(uuid);
    props.history.push(`user/${uuid}`)
  }, []);

  return (
    <div>
      <Search filterUsers={filterUsers} />
      {props.users &&
        props.users.map((user) => (
          <UserList
            getDetailInfo={() => getDetailInfo(user.login.uuid)}
            key={user.login.uuid}
            user={user}
          />
          
        ))}

    </div>
  );
}

const mapStateToProps = (state) => ({
  users: filterUser(state.users.usersData, state.users.filter),
});

export default connect(mapStateToProps, { usersInit, usersFilter,getUserInfo })(Users);
