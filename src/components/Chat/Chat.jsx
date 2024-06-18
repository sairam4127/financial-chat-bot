{/*import { BsRobot } from "react-icons/bs";*/}

import styles from './Chat.module.css'

const Chat=(props)=>{
    const {chatList}=props;

    return <ul className={styles.chatMainCont}>
        {chatList.map(obj=>{
            return <li className={styles.chatItemCont} key={obj.id}>
            <div className={styles.userChatItem} >
                <img src='https://th.bing.com/th/id/R.b544146a8e95908f097fe86343f9140b?rik=jX7vw4SGwprkmQ&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fhuman-icon-png-68.png&ehk=6%2fQzY0BOQSjQjQezTPTHGr%2fZ7zGlyHnCLtaD9hyBwKs%3d&risl=&pid=ImgRaw&r=0' alt='user' className={styles.userIcon}/>
                <p className={styles.userText}>{obj.q}</p></div>
            <div  className={styles.botChatItem} >
            <img src='https://static.vecteezy.com/system/resources/previews/000/199/370/original/vector-robot-cheerful-isolated-on-blue-background-concept-illustration.jpg' alt='bot' className={styles.botIcon}/>
            {/* <BsRobot className={styles.botIcon}/> */}
            <p className={styles.botText}>{obj.a}</p></div>
            </li>
        }
        )}
    </ul>
}

export default Chat