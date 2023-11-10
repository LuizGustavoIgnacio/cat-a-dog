import create from './http-service';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export default create('/users');
