import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import PageNotFound from "./PageNotFound";
import ManageCoursePage from "./ManageCoursePage";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course/" component={ManageCoursePage} />
        <Redirect from="/about-page" to="/about" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
