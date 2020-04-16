import React from 'react'

export default function UserList(props) {
    return (
        <div 
        onClick={props.getDetailInfo}
        >
           {props.user.name.first} {props.user.name.last}
        </div>
    )
}
