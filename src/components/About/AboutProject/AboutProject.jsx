import React from 'react';
import styles from './AboutProject.module.css';
import { Link } from 'react-router-dom';

const AboutProject = () => {

    return (
        <main className={styles.wrapper}>
            <article className={styles.content}>

                <ul>
                    <li><strong><em>Summery</em></strong></li>
                    <li>I created this project from own scratch</li>
                    <li>idea ➪ design ➪ logic ➪ some testing ➪ deploy</li>
                </ul>

                <hr/>

                <ul>
                    <li><strong><em>Frontend side:</em></strong></li>
                    <li>React ver. 18.2.0</li>
                    <li>for deploy I used Firebase.com</li>
                </ul>

                <hr/>

                <ul>
                    <li><strong><em>Backend side:</em></strong></li>
                    <li>Node.js ver. 19.7.0</li>
                    <li>Express 4.18.2</li>
                    <li>for deploy I used Render.com</li>
                </ul>

                <hr/>

                <ul>
                    <li><strong><em>Send Data</em></strong></li>
                    <li>I created proxy server for sending data from form.</li>
                    <li>target point for messages is Telegram. </li>
                    <li>so I used NPM package node-telegram-bot-api</li>
                </ul>

                <hr/>

                <ul>
                    <li><strong><em>Layout</em></strong></li>
                    
                    <li>this web app has Adaptive/Responsive layout from 320*480 to UHDTV+ (4K+)</li>
                    <li>Css styles I maked with built-in Css modules in React &#10;
                        also I implemented custom Css libraries for background </li>
                    <li>I used actually semantic tags in HTML5.2</li>
                    <li>Carousel I developed with React only, &#10;
                    I didn't used another libraries like Swiper.js</li>
                </ul>

                <hr/>

                <ul>
                    <li><strong><em>Additional</em></strong></li>
                    <li>Full-Screen Mode support out of the box</li>
                    <li>I applied LocalStorage to save state/UX</li>
                    <li>So Enjoy!</li>
                </ul>

                <ul>
                    <li>
                        <a  
                            href='https://github.com/DmitriyALEX/imma_star_frontend'
                            target="_blank"
                            rel="noreferrer"
                            className={styles.codesourse}
                        ><strong><em>CODE SOURCE</em></strong>
                        </a>
                    </li>
                </ul>

                {/* Navigation */}
                <nav className={styles.navigation}>
                    <Link 
                        to='/about'
                        className={styles.about_link}
                        >⇨ come back
                    </Link>
                </nav> 
            </article>
        </main>
    )
}

export default AboutProject;