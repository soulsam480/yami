import { useUser, userData } from './../store/index';
import { useToken } from './../store/Token';
import Axios, { AxiosResponse } from 'axios';

export const authState = async () => {
  const token = localStorage.getItem('ref-token');

  if (token) {
    try {
      const res = await Axios({
        url: 'http://localhost:4000/token',
        method: 'get',
        headers: {
          'refresh-token': token,
        },
      });

      if (res.data) {
        const tok = res.data.accessToken;
        localStorage.setItem('ref-token', res.data.refreshToken);
        useToken.setState({ token: tok });
        const user: AxiosResponse<userData> = await Axios({
          url: 'http://localhost:4000/users',
          method: 'get',
          headers: {
            'access-token': useToken.getState().token,
          },
        });

        user.data
          ? useUser.setState({ userData: user.data, isLoggedIn: true })
          : useUser.setState({ userData: {}, isLoggedIn: false });
      }
    } catch (error) {
      console.log(error);
      localStorage.removeItem('ref-token');
      useUser.setState({ userData: {}, isLoggedIn: false });
    }
    setTimeout(async () => {
      try {
        Axios({
          method: 'get',
          url: 'http://localhost:4000/token',
          headers: {
            'refresh-token': token,
          },
        }).then((res) => {
          localStorage.setItem('ref-token', res.data.refreshToken);
          useToken.setState({ token: res.data.accessToken });
        });
      } catch (err) {
        console.log(err);
        localStorage.removeItem('ref-token');
        useUser.setState({ userData: {}, isLoggedIn: false });
      }
    }, 840000);
  }
};
