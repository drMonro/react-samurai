import styles from './User.module.css';
import userAvatar from '../../../assets/images/user-avatar.jpg'
import {NavLink} from "react-router-dom";
import axios from "axios";

export const User = ({isFollow, name, onFollow, id, photos}) => {
    const followUser = () => {
        if(!isFollow) {
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},
                {withCredentials: true,
                        headers: {
                            "API-KEY": "a50253f5-893a-40d8-8d68-f0f185ded4d4",
                        }})
                .then(({data}) => {
                    if (data.resultCode === 0) {
                        onFollow(id);
                    }
                });
        } else {
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
                {withCredentials: true,
                    headers: {
                        "API-KEY": "a50253f5-893a-40d8-8d68-f0f185ded4d4",
                    }})
                .then(({data}) => {
                    if (data.resultCode === 0) {
                        onFollow(id);
                    }
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
            <button onClick={followUser}>{getFollowTitle()}</button>
        </li>)
}

export default User;
