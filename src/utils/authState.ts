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
          ? useUser.setState({ userData: user.data })
          : useUser.setState({ userData: {} });
      }
    } catch (error) {
      console.log(error);
    }
    setTimeout(async () => {
      try {
        Axios({
          method: 'post',
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
      }
    }, 840000);
  }
};
