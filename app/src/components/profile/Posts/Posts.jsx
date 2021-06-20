import styles from './Posts.module.css';
import Post from "../Post/Post";

export const Posts = () => {
    return (
        <ul className={styles._}>
            <Post/>
            <Post/>
            <Post/>
        </ul>)
}

export default Posts;
