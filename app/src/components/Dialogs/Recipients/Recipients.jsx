import styles from './Recipients.module.css';
import Recipient from "../Recipient/Recipient";

export const Recipients = () => {
    const recipientsData = [
        {id: 1, name: 'Olga'},
        {id: 2, name: 'Toha'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Marta'},
    ]

    const recipientsElements = recipientsData
        .map(({id, name}) => <Recipient name={name} id={id}/>)

    return (
        <ul className={styles._recipientsList}>
            {recipientsElements}
        </ul>
    )
}

export default Recipients;
