import React from 'react';
import styles from './About.module.css';
import { Link } from 'react-router-dom';

import Menu from '../Menu/Menu';
import AboutBackground from './AboutBackground/AboutBackground';

import imagePhoto2 from './images/2.png';

const About = () => {
    //menu
    const [toggle, setToggle] = React.useState(false);

    //menu
    function handleClose() {
        if(toggle) {
            setToggle(!toggle)
        }
    };
    
    return (
        <div onClick={handleClose} className={styles.wrapper}>
            <aside className={styles.leftside}></aside>
            <aside className={styles.rightside}></aside>
           
            {/* MENU */}
            <nav  className={styles.navigation}>
                <button onClick={() => setToggle(!toggle)} className={styles.menu_btn}>
                    MENU
                </button>
                <section className={styles.menu}>
                    {toggle && <Menu/>}
                </section>
            </nav>

            {/* MAIN */}
            <main className={styles.main_content}>
                {!toggle && 
                <>
                    <figure className={styles.photo_container}>
                        <img src={imagePhoto2} alt={imagePhoto2} />
                    </figure>
                    <section className={styles.text}>
                        <strong style={{fontSize: '2rem'}}>Frontend development</strong>
                            <ul>
                                <li>React/Next.js</li>
                            </ul>
                            <strong style={{fontSize: '2rem'}}>Backend development</strong>
                                <ul>
                                    <li>Node.js</li>
                                </ul>
                            <strong style={{fontSize: '2rem'}}>Database</strong>
                                <ul>
                                        <li>Document-oriented database ( MongoDB )</li>
                                </ul>
                        <strong style={{fontSize: '2rem'}}>Current tech stack in project "imma star"</strong>
                        <nav className={styles.nav_container}>
                            <Link 
                                to='/about/project'
                                className={styles.about_project}
                            > ⎆ Details</Link>
                        </nav>
                        <div className={styles.city_info}>
                            <p>Kyiv, Ukraine</p>
                        </div>
                    </section>
                </>} 
            </main>
            <AboutBackground style={{zIndex: 0}}/>
        </div>
    )
}

export default About;