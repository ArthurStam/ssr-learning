import React, { Fragment, useContext, useState, useEffect } from 'react';
import { DataProviderContext } from '../DataProvider';

export const Home = () => {
  const { users, updateData } = useContext(DataProviderContext);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
     if (!users) {
       fetch('/api/users').then(res => res.json()).then(({ users }) => {
         updateData({ users });
       });
     }
  }, [users]);

  return (
    <Fragment>
      {users?.length && users.map((user) => {
        return <div key={user.id}>{user.first_name}</div>
      })}
      <div>clicks count: {clicks}</div>
      <button onClick={() => setClicks(clicks + 1)}>Click + 1</button>
    </Fragment>
  )
}
