import './App.css';
import './components/Profile/Profile.module.css';
import Header from "./components/common/Header/Header";
import {Route} from "react-router-dom";
import Navigation from "./components/common/Navigation/Navigation";
import ProfileContainerClass from "./components/Profile/ProfileContainerClass";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainerClass";
import LoginContainer from "./components/Login/LoginContainerClass";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <Route path='/profile/:userId?' render={() => <ProfileContainerClass />}/>
            <Route path='/dialogs' render={() => <DialogsContainer />}/>
            <Route path='/users' render={() => <UsersContainer />}/>
            <Route path='/login' render={() => <LoginContainer />}/>
        </div>
    );
}

export default App;
