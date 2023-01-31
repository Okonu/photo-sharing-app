import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Album Count</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.albumCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
