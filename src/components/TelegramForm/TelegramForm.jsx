import React from "react";
import styles from './TelegramForm.module.css';

const TelegramForm = () => {

    const URL_API = process.env.REACT_APP_URL_API;

    // inputs
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [textMessage, setTextMessage] = React.useState('');

    //check data
    const [checkName, setCheckName] = React.useState(false);
    const [checkEmail, setCheckEmail] = React.useState(false);
    const [checkTextMessage, setCheckTextMessage] = React.useState(false);
    //send data
    const [dataSend, setDataSend] = React.useState(false);

    //check email
    function isConfirmEmail(email) {
        const regExp = /[\-_%+\.\w]+@([\w-]+\.)+[\w-]+/g
        return regExp.test(email)
    };

    // show Notification 
    function successSend() {
        setTimeout(() => {
            setDataSend(dataSend)
        }, 3000)   
    };

    async function sendData() {
        try {
            const response = await fetch(URL_API, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    text: textMessage,
                })
            })
            console.log(response.status)
            if(response.status === 200) {
                // clear inputs
                setName('')
                setEmail('')
                setTextMessage('')
                //show success message send data
                setDataSend(!dataSend)
                successSend()
            }  
            if(response.status >= 400) {
                alert('try again')
            }
        } catch (error) {
            console.error(error)
            alert(error)
        }
    };

    function handleSubmit(event) {
        event.preventDefault()

        // is corect email
        const confirmedEmail = isConfirmEmail(email)

        // check data
        if (name === '') setCheckName(!checkName)
        if (!confirmedEmail) setCheckEmail(!checkEmail)
        if (textMessage === '') setCheckTextMessage(!checkTextMessage)
        
        // send data
        if(confirmedEmail && (name !== '') && (textMessage !== '')) {
            sendData()
            // not show WARNINGS if correct after send
            checkName && setCheckName(!checkName)
            checkEmail && setCheckEmail(!checkEmail)
            checkTextMessage && setCheckTextMessage(!checkTextMessage)
        }
    };
    
    return (
        <main  className={styles.wrapper}>
            <section className={styles.success_send}>
                {dataSend && <span>Your message has been sent!</span>}
            </section>
            
            <form onSubmit={handleSubmit} className={styles.form}>
                {/* NAME */}
                <section className={styles.name_conteiner}>
                    {checkName && <p className={styles.uncorrect}>uncorrect Name</p>}
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.name}
                        placeholder="Name"
                    />
                    <div className={styles.name_border}></div>
                </section>
                    
                {/* EMAIL */}
                <section className={styles.email_conteiner}>
                    {checkEmail && <p className={styles.uncorrect}>uncorrect Email</p>}
                    <input 
                        type="email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.email}
                        placeholder="Email"
                    />
                    <div className={styles.name_border}></div>
                </section>
                    
                {/* MESSAGE */}
                <section className={styles.text_conteiner}> 
                    {checkTextMessage && <p className={styles.uncorrect_text}>write your Text</p>}
                    <textarea 
                        style={{resize: 'none'}} 
                        value={textMessage} 
                        onChange={(e) => setTextMessage(e.target.value)}
                        className={styles.text}
                        placeholder="Your Mesagge..."
                    />
                 </section> 

                <div className={styles.submit_container}>
                    <button type="submit"className={styles.submit}>
                        Send
                    </button>
                </div>
            </form>
        </main>
    )
}

export default TelegramForm;

   