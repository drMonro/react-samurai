import styles from './User.module.css';
import userAvatar from '../../../assets/images/user-avatar.jpg'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";

export const User = ({isFollow, name, onFollow, id, photos, toggleFollowingStatus, inFollowingUsers}) => {
    const followUser = () => {
        toggleFollowingStatus(true, id);
        if(!isFollow) {
            usersAPI.followUser(id)
                .then((data) => {
                    if (data.resultCode === 0) {
                        onFollow(id);
                    }
                    toggleFollowingStatus(false, id);

                });
        } else {
            usersAPI.unFollowUser(id)
                .then((data) => {
                    if (data.resultCode === 0) {
                        onFollow(id);
                    }
                    toggleFollowingStatus(false, id);
                });
        }
    };

    const getFollowTitle = () => {
        return isFollow ? 'Unfollow' : 'Follow';
    };

    const isUrl = (photo) => {
        return !!photo ? photo : userAvatar;
    };




    return (
        <li>
            <p>{name}</p>
            <NavLink to={`/profile/${id}`}>
                <p><img className={styles._avatar} src={isUrl(photos.small)} width="90px" height="90px" alt=""/></p>
            </NavLink>
            <button onClick={followUser} disabled={inFollowingUsers.some(followedId => followedId === id )}>{getFollowTitle()}</button>
        </li>)
}

export default User;
