import { Switch, Route } from "react-router-dom";
import { Main } from "./pages/Main";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main}></Route>
    </Switch>
  );
};

export default Routes;