import styles from './UsersList.module.css'
import React, {useState} from 'react';
import User from './User.jsx';
import Card from '../UI/Card';

const UsersList = (props) => {
    
  
  if (props.users.length === 0) {
    return <h2 className='users-list__fallback'>Found no user</h2>
  }
  return ( <Card>
  <ul>
    {props.users.map(user => (
        <li>
            {user.name} ({user.age} years old)
      </li>
    ))}
  </ul>
  </Card>);
  //The snippet above is sublime, fixes everything so to have like 2 lines in the return statement.
};

export default UsersList;