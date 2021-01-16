import Axios, { AxiosResponse } from 'axios';
import create, { State } from 'zustand';
import { Order, User } from '../models/models';

export interface userData {
  user?: User;
  orders?: Order[];
  accessToken?: string;
  refreshToken?: string;
}
interface UserLogin {
  username?: string;
  password?: string;
  email?: string;
}

interface userSignup {
  username: string;
  email: string;
  password: string;
  name: string;
}

interface userState extends State {
  userData: userData;
  isLoggedIn: boolean;
  login: (state: UserLogin) => void;
  register: (user: User) => void;
  logout: () => void;
}

export const useUser = create<userState>((set) => ({
  userData: {},
  isLoggedIn: false,
  login: async (user: UserLogin) => {
    await Axios({
      method: 'post',
      url: 'http://localhost:4000/auth/login',
      data: {
        ...user,
      },
    })
      .then((res: AxiosResponse<userData>) => {
        localStorage.setItem('ref-token', res.data.refreshToken as string);
        set((state) => ({ userData: res.data, isLoggedIn: true }));
      })
      .catch((err) => {
        set((state) => ({ userData: {}, isLoggedIn: false }));
        console.log(err);
      });
  },
  register: async (user: User) => {
    await Axios({
      method: 'post',
      url: 'http://localhost:4000/auth/register',
      data: {
        ...user,
      },
    })
      .then((res: AxiosResponse<userData>) => {
        localStorage.setItem('ref-token', res.data.refreshToken as string);
        set((state) => ({ userData: res.data, isLoggedIn: true }));
      })
      .catch((err) => {
        set((state) => ({ userData: {}, isLoggedIn: false }));
        console.log(err);
      });
  },
  logout: () => {
    localStorage.removeItem('ref-token');
    set((state) => ({ userData: {}, isLoggedIn: false }));
  },
}));
