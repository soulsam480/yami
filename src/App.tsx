import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="content">
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </div>
  );
};

export default App;
