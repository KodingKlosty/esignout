import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import Navi from './component/Navi';
import Footer from './component/Footer';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import Super from './pages/Super';
import Team from './pages/Team';
import Users from './pages/Users';
import createOrg from './pages/SuOrg';
import createLoc from './pages/AddLoc';
import createStatus from './pages/AddStatus';
import Manager from './pages/Manager';
import User from './pages/User';
import Update from './pages/Update';
import createTeam from './pages/AddTeam';
import createUser from './pages/AddUser';


/* The baseline for the pages are here. Since we dont have the api and database implimented yet
it is hard to show every single page as it should be. Most of this will be dependent on the users
level of access */

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Router>
              <Header />
              <Navi />
              <main>
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route path="/signin" component={SignIn} />
                  <Route path="/super" component={Super} />
                  <Route path="/createOrg" component={createOrg} />
                  <Route path="/createLoc" component={createLoc} />
                  <Route path="/createStatus" component={createStatus} />
                  <Route path="/team" component={Team} />
                  <Route path="/users" component={Users} />
                  <Route path="/manager" component={Manager} />
                  <Route path="/user" component={User} />
                  <Route path="/update" component={Update} /> 
                  <Route path="/createTeam" component={createTeam} />
                  <Route path="/createUser" component={createUser} />
                </Switch>
              </main>
              <Footer />
          </Router>
      </div>
    </Provider>
  );
}

export default App;
