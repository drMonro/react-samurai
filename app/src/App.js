import './App.css';
import './components/Profile/Profile.module.css';
import Header from "./components/common/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Navigation from "./components/common/Navigation/Navigation";

const App = ({store}) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <Route path='/profile' render={() => <Profile store={store}/>}/>
            <Route path='/dialogs' render={() => <Dialogs store={store}/>}/>
        </div>
    );
}

export default App;
