import './App.css';
import './views/profile/Profile.module.css';
import Header from "./views/common/Header";
import Navigation from "./views/common/Navigation";
import Profile from "./views/profile/Profile";

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
