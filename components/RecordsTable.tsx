/* eslint-disable import-helpers/order-imports */
'use client';
import { useEffect, useState } from 'react';

import { CanceledError } from 'axios';
import userService, { User } from '~/services/user-service';

import Spinner from './Spinner';

export default function RecordsTable() {
  const [users, setUsers] = useState<User[]>();
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const { request, cancel } = userService.getAllUsers();
    setLoading(true);
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return (
    <div>
      <div>
        {error && <p className="text-red-500">{error}</p>}
        {isLoading && <Spinner />}
        {users?.map((user) => (
          <div className="text-cyan-50" key={user.id}>
            {user.name} {user.password} {user.email}
          </div>
        ))}
      </div>
    </div>
  );
}
