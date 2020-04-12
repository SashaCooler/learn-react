import React from "react";
import "./App.css";
import Header from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/ProfileContainer";
import Users from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/DialogsContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <div className="app-container">
        <Navbar/>
        <div className="app-wrapper-content">
          <Route
              path="/profile/:userId?"
              render={() => (
                  <Profile/>
              )}
          />
          <Route
              path="/dialogs"
              render={() => (
                  <Dialogs/>
              )}
          />
          <Route path="/users" render={() => (<Users />)} />
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
        </div>
        <div className="sidebar">
          123
        </div>
      </div>
    </div>
  );
};

export default App;
