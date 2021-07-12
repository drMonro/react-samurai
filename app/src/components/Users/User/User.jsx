import styles from './User.module.css';
import userAvatar from '../../../assets/images/user-avatar.jpg'
import {NavLink} from "react-router-dom";

export const User = ({isFollow, name, onFollow, id, photos}) => {
    const followUser = () => {
        onFollow(id);
    };

    const getFollowTitle = () => {
        return isFollow ? 'Unfollow' : 'Follow';
    }

    const isUrl = (photo) => {
        return !!photo ? photo : userAvatar;
    }


    return (
        <li>
            <p>{name}</p>
            <NavLink to={`/profile/${id}`}>
                <p><img className={styles._avatar} src={isUrl(photos.small)} width="90px" height="90px" alt=""/></p>
            </NavLink>
            <button onClick={followUser}>{getFollowTitle()}</button>
        </li>)
}

export default User;
