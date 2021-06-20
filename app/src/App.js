import './App.css';
import './components/profile/Profile.module.css';
import Header from "./components/common/Header/Header";
import Navigation from "./components/common/Navigation/Navigation";
import Profile from "./components/profile/Profile";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <Profile/>
        </div>
    );
}

export default App;
