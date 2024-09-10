import React, { useEffect, useState } from 'react';
import { getAllUsers } from './api';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        console.log('Users fetched:', response.data);
        setUsers(response.data);
      } catch (error) {
        console.log('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>All Users</h1>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user.fid}>{user.username} - {user.role}</li>  // Changed from user.name and user.email to user.username and user.role
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default UserList;
