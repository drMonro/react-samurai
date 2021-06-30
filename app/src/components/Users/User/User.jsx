import styles from './User.module.css';

export const User = ({photoUrl, isFollow, name, onFollow, id}) => {
    const followUser = () => {
        onFollow(id);
    };

    const getFollowTitle = () => {
        return isFollow ? 'Unfollow' : 'Follow';
    }

    return (
        <li>
            <p><img className={styles._avatar} src={photoUrl} width="90px" height="90px" alt=""/></p>
            <button onClick={followUser}>{getFollowTitle()}</button>
        </li>)
}

export default User;
