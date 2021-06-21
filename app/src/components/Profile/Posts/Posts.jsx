import styles from './Posts.module.css';
import Post from "../Post/Post";

export const Posts = () => {
    const postsData = [
        {message: 'Hello!'},
        {message: 'Hi!'},
        {message: "What's up!"},
    ]

    const postsElements = postsData
        .map(({message}) => <Post message={message}/>)


    return (
        <ul className={styles._}>
            {postsElements}
        </ul>)
}

export default Posts;
