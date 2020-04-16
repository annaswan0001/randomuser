import React from "react";
import { connect } from "react-redux";

function User(props) {
  let user;
  if (props.user.length > 0) {
    user = (
      <div>
        {props.user &&
          props.user.map((user) => (
            <div key={user.login.uuid}>{user.name.first}</div>
          ))}
      </div>
    );
  } else {
    user = <div>Choose user</div>;
  }
  return user;
}
const mapStateToProps = (state) => ({
  user: state.users.userData,
});

export default connect(mapStateToProps, null)(User);
