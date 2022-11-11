import styles from './UsersList.module.css'
import React, {useState} from 'react';
import User from './User.jsx';

const UsersList = (props) => {
    
  
  if (props.users.length === 0) {
    return <h2 className='users-list__fallback'>Found no user</h2>
  }
  return ( <ul>
    {props.users.map0(user => (
        <li>
            {user.name} ({user.age} years old)
      </li>
    ))}
  </ul>);
  //The snippet above is sublime, fixes everything so to have like 2 lines in the return statement.
};

export default UsersList;