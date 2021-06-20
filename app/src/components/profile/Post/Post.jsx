import styles from './Post.module.css';

export const Post = ({message}) => {
    return (
        <li className={styles._}>
            <img className={styles._avatar} src="https://live.staticflickr.com/6113/6218694944_3c9e9bd97a_b.jpg" width="90px" height="90px"  alt=""/>
            <span>{message}</span>
        </li>)
}

export default Post;
