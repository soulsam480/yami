import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Men from "./views/Men";
import Product from "./views/Product";
import User from "./views/User";
import Women from "./views/Women";
interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/p/:id" component={Product}></Route>
        <Route path="/user" component={User}></Route>
        <Route path="/women-clothing" component={Women}></Route>
        <Route path="/men-clothing" component={Men}></Route>
      </Switch>
    </div>
  );
};

export default App;
