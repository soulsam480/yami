import { atom } from 'recoil';
interface User {
  id?: string;
  username?: string;
  email?: string;
  name?: string;
  imgUrl?: string;
  orders?: string[];
  createdAt?: string;
}
// count here is passed to useRecoilState
export const user = atom({
  key: 'user',
  default: {} as User,
});

export const isLoggedIn = atom({
  key: 'isLoggedIn',
  default: false,
});
