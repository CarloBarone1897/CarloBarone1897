import React from 'react';

import Card from '../UI/Card';
import styles from './UsersList.module.css';
const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
  //The snippet above is sublime, fixes everything so to have like 2 lines in the return statement.
};

export default UsersList;
