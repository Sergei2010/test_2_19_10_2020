import React from 'react';
import {BrowserRouter, Route, Switch, /*Redirect,*/ withRouter} from 'react-router-dom';
import {Form} from "./pages/Form";
import {FormPassword} from "./pages/FormPassword";
import {Card} from "./pages/Card";
import {Navbar} from "./components/Navbar";
import {About} from "./pages/About";
import {CardList} from "./pages/CardList";
//import {CardItem} from "./components/CardItem";

function App(props) {
  const {history} = props.history;
  return (
      <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
              <Switch>
                  <Route history={history} path={'/'} exact component={Form} />
                  <Route history={history} path={'/formPassword'} component={FormPassword} />
                  <Route history={history} path={'/cardList'} component={CardList} />
                  <Route history={history} path={'/card'} component={Card} />
                  <Route history={history} path={'/about'} component={About} />
                  {/*<Route history={history} path={'/cardItem'} component={CardItem} />*/}
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default withRouter(App);
