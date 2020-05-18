import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Page1 from "../../pages/page1";
import Page2 from "../../pages/page2";
import Page3 from "../../pages/page3";
import Page4 from "../../pages/page4";

const Routing = (props) => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
      <Route path="/page4" component={Page4} />
    </Switch>
  );
};

export default Routing;
