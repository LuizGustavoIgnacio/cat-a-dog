import apiClient from './api-client';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

class UserService {
  getAllUsers() {
    const controller = new AbortController();

    return apiClient.get<User[]>('/users', {
      signal: controller.signal,
    });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();
