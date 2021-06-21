import styles from './Recipients.module.css';
import Recipient from "../Recipient/Recipient";

export const Recipients = () => {
    const messagesData = [
        {id: 1, name: 'Olga'},
        {id: 2, name: 'Toha'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Marta'},
    ]

    return (
        <ul className={styles._recipientsList}>
            <Recipient name={messagesData[0].name} id={messagesData[0].id}/>
            <Recipient name={messagesData[1].name} id={messagesData[1].id}/>
            <Recipient name={messagesData[2].name} id={messagesData[2].id}/>
            <Recipient name={messagesData[3].name} id={messagesData[3].id}/>
        </ul>
    )
}

export default Recipients;
