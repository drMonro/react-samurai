import loader from "./../../../assets/images/loader.gif"
import styles from './Preloader.module.css';

const Preloader = () => {
    return <img className={styles._} alt={'preloader'} src={loader}/>;
}

export default Preloader;
