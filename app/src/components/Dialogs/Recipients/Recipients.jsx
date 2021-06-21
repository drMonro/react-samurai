import styles from './Recipients.module.css';
import Recipient from "../Recipient/Recipient";

export const Recipients = ({recipientsData}) => {

    const recipientsElements = recipientsData
        .map(({id, name}) => <Recipient name={name} id={id}/>)

    return (
        <ul className={styles._recipientsList}>
            {recipientsElements}
        </ul>
    )
}

export default Recipients;
