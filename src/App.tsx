import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Product from './views/Product';
import User from './views/User';
import Cat from './views/Cat';
import { authState } from './utils/authState';
authState();
interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className='content'>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/p/:id' component={Product}></Route>
        <Route path='/user' component={User}></Route>
        <Route path='/category/:cat' component={Cat}></Route>
      </Switch>
    </div>
  );
};

export default App;
