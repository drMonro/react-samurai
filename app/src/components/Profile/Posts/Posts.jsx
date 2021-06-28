import styles from './Posts.module.css';
import Post from "../Post/Post";

export const Posts = ({postsData}) => {
    const postsElements = postsData
        .map(({message, id}) => <Post message={message} key={id}/>)

    return (
        <ul className={styles._}>
            {postsElements}
        </ul>)
}

export default Posts;
