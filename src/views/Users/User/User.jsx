import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import UserCard from "../../../components/Card/Card";

function User(props) {
  let history = useHistory();
  let user;
  if (props.user.length > 0) {
    user = (
      <div>
        {props.user &&
          props.user.map((user) => (

            <UserCard key={user.login.uuid} user={user} />
          ))}
      </div>
    );
  } else {
    user = <div>Choose user</div>;
  }
  return <React.Fragment>{user}</React.Fragment>;
}
const mapStateToProps = (state) => ({
  user: state.users.userData,
});

export default connect(mapStateToProps, null)(User);
