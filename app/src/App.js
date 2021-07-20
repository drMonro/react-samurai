import './App.css';
import './components/Profile/Profile.module.css';
import Header from "./components/common/Header/Header";
import {Route} from "react-router-dom";
import ProfileContainerClass from "./components/Profile/ProfileContainerClass";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainerClass";
import LoginContainer from "./components/Login/LoginContainerClass";
import NavigationContainer from "./components/common/Navigation/NavigationContainer";
import React from "react";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavigationContainer />
            <Route path='/profile/:userId?' render={() => <ProfileContainerClass />}/>
            <Route path='/dialogs' render={() => <DialogsContainer />}/>
            <Route path='/users' render={() => <UsersContainer />}/>
            <Route path='/login' render={() => <LoginContainer />}/>
        </div>
    );
}

export default App;
