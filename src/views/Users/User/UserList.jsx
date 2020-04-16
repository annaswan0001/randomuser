import React from 'react'

const UserList= React.memo((props)=> {
    return (
        <div>
            <div>{props.user.login.uuid}  {props.user.name.first}  {props.user.name.last}</div>
            <div></div>
            <div></div>
        </div>
    )
})

export default UserList