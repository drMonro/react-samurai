import './App.css';
import './components/Profile/Profile.module.css';
import Header from "./components/common/Header/Header";
import Navigation from "./components/common/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            {/*<Profile/>*/}
            <Dialogs/>
        </div>
    );
}

export default App;
