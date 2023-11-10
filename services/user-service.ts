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

    const request = apiClient.get<User[]>('/users', {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();
