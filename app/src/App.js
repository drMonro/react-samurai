import './App.css';
import './components/Profile/Profile.module.css';
import Header from "./components/common/Header/Header";
import Navigation from "./components/common/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = ({postsData, messagesData, recipientsData}) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navigation/>

                <Route path='/profile' render={() => <Profile postsData={postsData}/>}/>
                <Route path='/dialogs' render={() => <Dialogs messagesData={messagesData} recipientsData={recipientsData}/>}/>

            </div>
        </BrowserRouter>
    );
}

export default App;
