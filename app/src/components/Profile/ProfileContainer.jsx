import StoreContext from "../../StoreContext";
import Profile from "./Profile";

const ProfileContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                const {profilePage: {postsData, newPostText}} = store.getState();
                return <Profile newPostText={newPostText} postsData={postsData} store={store}/>;
            }}
        </StoreContext.Consumer>);
}

export default ProfileContainer;
