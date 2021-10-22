
import './App.css';
import Header from "./components/header";
import Home from "./components/home";
import { useState} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {UserContext} from "./utils/UserContext";
import {decodeToken} from "react-jwt";
import ProtectedRoute from './components/protectedRoute'
import Dashboard from "./components/dashboard";
import {NavTransparentContext} from './utils/NavTransparentContext'
import AddResume from "./components/dashboard-components/add-resume";
import ResumeManager from "./components/dashboard-components/resume-manager";
import EditResume from "./components/dashboard-components/edit-resume";


function App() {
    const some = {
            isLoggedIn: !!localStorage.getItem('user'),
            userData: decodeToken(localStorage.getItem('user'))
    }

    const [user, setUser] = useState(some)

    const [navTrans, setNavTrans] = useState(false);




  return (
      <BrowserRouter>
          <div style={{position: 'relative'}}>
              <UserContext.Provider value={{user, setUser}}>
                  <NavTransparentContext.Provider value={{navTrans, setNavTrans}}>
                      <Header/>
                      <Switch>
                          <Route exact path={'/'} component={Home}/>
                          <ProtectedRoute exact path={'/dashboard/page'} component={Dashboard}/>
                          <ProtectedRoute exact path={'/dashboard/addresume'} component={AddResume}/>
                          <ProtectedRoute exact path={'/dashboard/resumemanager'} component={ResumeManager}/>
                          <ProtectedRoute exact path={'/dashboard/editresume/:id'} component={EditResume}/>
                      </Switch>
                  </NavTransparentContext.Provider>
              </UserContext.Provider>
          </div>
      </BrowserRouter>
  );
}

export default App;
