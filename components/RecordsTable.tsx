'use client';
import { useEffect, useState } from 'react';

import userService, { User } from '~/services/user-service';

export default function RecordsTable() {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    userService
      .getAllUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        {users?.map((user) => (
          <div className="text-cyan-50" key={user.id}>
            {user.name} {user.password} {user.email}
          </div>
        ))}
      </div>
    </div>
  );
}
