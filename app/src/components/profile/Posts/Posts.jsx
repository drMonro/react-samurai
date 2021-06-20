import styles from './Posts.module.css';
import Post from "../Post/Post";

export const Posts = () => {
    return (
        <ul className={styles._}>
            <Post message='Hello!)'/>
            <Post message='Hi!)'/>
            <Post message="What's up!"/>
        </ul>)
}

export default Posts;
