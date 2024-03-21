import React from 'react';
import styles from './Card.module.css';
import {data} from './data.js';

import TelegramForm from '../../TelegramForm/TelegramForm.jsx';

const Card = ({idx}) => (
    <div className={ (idx + 1) !== 3 ? styles.card : styles.card_3}>
        {data.map((element, i) => (
            (idx + 1 === i + 1) && 
            <>
                <h1 className={styles.title}>{element.title}</h1>
                <main>
                    {element.id === 1 && 
                        <section className={styles.content}>
                            <iframe width="560" height="315" 
                                src="https://www.youtube.com/embed/ghB2X0NfHfU?si=cpo9HBXz1Tijvke-" 
                                title="video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen>
                            </iframe>
                            <a href={element.link} className={styles.link}>L I N K</a>
                        </section>
                    }
                    {element.id === 2 && 
                    <section className={styles.content}>
                        <img src={element.img} alt={element.img} className={styles.img}/> 
                        <a href={element.link} className={styles.link}>L I N K</a> 
                    </section>
                    }
                    {element.id === 3 && 
                        <section className={styles.nav_arrows}>
                            <TelegramForm/>
                        </section>
                    }
                    {element.id === 4 &&
                        <section className={styles.content}>
                            <img src={element.img} alt={element.img} className={styles.img}/>  
                            <a href={element.link}  className={styles.link}>L I N K</a>
                        </section>   
                    }
                    {element.id === 5 && 
                        <section className={styles.content}>
                            <img src={element.img} alt={element.img} className={styles.img}/>
                            <a href={element.link} className={styles.link}>L I N K</a>
                        </section>  
                    }
                </main> 
            </>)
        )}
    </div>
)

export default Card;