import './App.css';
import './components/Profile/Profile.module.css';
import Header from "./components/common/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Navigation from "./components/common/Navigation/Navigation";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <Route path='/profile' render={() => <ProfileContainer />}/>
            <Route path='/dialogs' render={() => <DialogsContainer />}/>
        </div>
    );
}

export default App;
