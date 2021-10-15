import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import './assets/css/font-awesome.css';
import './assets/css/animate.css';
import './assets/css/bootstrap.min.css';
import './assets/css/hover.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RacingProvider } from './helpers/context/racingContext';
import AuthCheck from './components/authCheck';
import Header from './components/header';
import Main from './pages/main';
import ScheduledRaces from './pages/scheduledRaces';

ReactDOM.render(
  <React.StrictMode>
    <RacingProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <AuthCheck allowAnon>
              <Main />
            </AuthCheck>
          </Route>
          <Route path="/scheduled-races">
            <AuthCheck allowAnon>
              <ScheduledRaces />
            </AuthCheck>
          </Route>
          {/* <Route path="/">
            <AuthCheck allowAnon>
              <Main />
            </AuthCheck>
          </Route>
          <Route path="/">
            <AuthCheck allowAnon>
              <Main />
            </AuthCheck>
          </Route>
          <Route path="/">
            <AuthCheck allowAnon>
              <Main />
            </AuthCheck>
          </Route>
          <Route path="/">
            <AuthCheck allowAnon>
              <Main />
            </AuthCheck>
          </Route>
          <Route path="/">
            <AuthCheck allowAnon>
              <Main />
            </AuthCheck>
          </Route> */}
        </Switch>
      </Router>
    </RacingProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
