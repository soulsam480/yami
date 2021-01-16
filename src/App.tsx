import React from 'react';
import { Route, Switch, Redirect, RouteProps } from 'react-router-dom';
import Home from './views/Home';
import Product from './views/Product';
import User from './views/User';
import Cat from './views/Cat';
import { authState } from './utils/authState';
import { useUser } from './store';
import AppLogin from './components/AppLogin';
import { useModal } from './store/LoginModal';
authState();
interface Props {}

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any;
  isSignedIn: boolean;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, isSignedIn, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isSignedIn ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};

const App: React.FC<Props> = () => {
  const { isLoggedIn } = useUser();
  const { isModal } = useModal();

  return (
    <div className='content'>
      {' '}
      {isModal ? <AppLogin></AppLogin> : ''}
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/p/:id' component={Product}></Route>
        <PrivateRoute
          path='/user'
          component={User}
          isSignedIn={isLoggedIn}
        ></PrivateRoute>
        <Route path='/category/:cat' component={Cat}></Route>
      </Switch>
    </div>
  );
};

export default App;
