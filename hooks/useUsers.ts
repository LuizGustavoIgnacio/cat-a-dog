import { useEffect, useState } from 'react';

import { CanceledError } from 'axios';
// eslint-disable-next-line import-helpers/order-imports
import userService, { User } from '~/services/user-service';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>();
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const { request, cancel } = userService.getAll<User>();
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

  return { users, error, isLoading, setUsers, setError };
};
