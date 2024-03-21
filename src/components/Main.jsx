import React from 'react';
import styles from './Main.module.css';

import Menu from './Menu/Menu';
import ModalWindow from './ModalWindow/ModalWindow';
import MainBackground from './MainBackground/MainBackground';

import {confetti} from '@tsparticles/confetti';

const Main = () => {

    // Modal Window
    const [openMW, setOpenMW] = React.useState(false);

    function windowSet() {
        window.localStorage.setItem('ModalWindow', true)
        setOpenMW(!openMW)
    };

    // Close fullscreen mode
    React.useEffect(() => {
        const keyDownHandler = event => {
            if (event.key === 'Escape') {
            if (!document.fullscreenElement) {
                window.localStorage.setItem('FullScreen', false);
                }
            }
        }
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        }
    }, []);

    React.useEffect(() => {
        if(window.localStorage.getItem('ModalWindow') === null) {
            window.localStorage.setItem('ModalWindow', true)
        }
        if(window.localStorage.getItem('ModalWindow') === 'true') {
            setOpenMW(!openMW)
        } else {
            setOpenMW(openMW)
        }  
    }, []);

    // Menu
    const [toggle, setToggle] = React.useState(false);

    const check = () => {
        if(toggle) {
            setToggle(!toggle)
        }
    };

    // stars
    const defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["star"],
        colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
    };
      
    function shoot() {
        confetti({
            ...defaults,
            particleCount: 40,
            scalar: 1.2,
            shapes: ["star"],
        });
        
        confetti({
            ...defaults,
            particleCount: 10,
            scalar: 0.75,
            shapes: ["circle"],
        })
    };
      
    function starsClick() {
        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);
        setTimeout(shoot, 300);
        setTimeout(shoot, 400);
    };

    return (
        <main className={styles.wrapper} onClick={check}>
            <article className={styles.content}>
                <button 
                    className={!openMW ? styles.menu_btn : styles.menu_btn_blur} 
                    onClick={() => setToggle(!toggle)}
                > MENU
                </button>
                {toggle 
                ?   <div className={styles.menu}><Menu/></div>
                :   <section className={styles.main_content_container}>
                        <div className={!openMW ? styles.container : styles.title_container_blur}>
                            <h1 className={openMW ? styles.title : styles.title_amination}>IMMA STAR</h1> 
                        </div>
                        {!toggle && !openMW && (
                            <div className={styles.main_navigation}>
                                <button 
                                    onClick={starsClick}
                                    className={styles.more_stars_btn}>
                                    MORE STARS
                                </button>
                                <button 
                                    onClick={windowSet}
                                    className={styles.window_btn}>
                                    greeting window
                                </button>
                                <a 
                                    href='https://immastar-1.web.app' 
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.prev}
                                >prev version
                                </a>
                            </div> 
                        )}
                    </section>}
            </article> 
            {openMW && <ModalWindow openMW={openMW} setOpenMW={setOpenMW}/>}
            <MainBackground />
        </main>
    )
}

export default Main;


