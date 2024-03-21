import React from "react";
import styles from './ModalWindow.module.css';
import {confetti} from '@tsparticles/confetti';

const ModalWindow = ({openMW, setOpenMW}) => {

    // fullscreen mode
    const [isFullScreen, setIsFullScreen] = React.useState(false)

    function FullScreen() {
        if(!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            window.localStorage.setItem('FullScreen', true)
             setIsFullScreen(true)
        } else {
            if(document.exitFullscreen) {
                 document.exitFullscreen()
                .then(() => {
                    window.localStorage.setItem('FullScreen', false);
                    setIsFullScreen(false)
                })  
            }
        }
    }

    // check fullscreen mode in first render
    const checkFS = window.localStorage.getItem('FullScreen')

    React.useEffect(() => { 
        if(checkFS) {
            setIsFullScreen(true)
        } 
        if(checkFS === 'false') {
            setIsFullScreen(false)
        }
    }, [checkFS])

    React.useEffect(() => {
        if(checkFS) {
            setIsFullScreen(true)
        } 
        if(checkFS === 'false') {
            setIsFullScreen(false)
        }

        const handleFullScreenChange = () => {
            if (!!document.fullscreenElement) {
            setIsFullScreen(true)
              
            } else {
                setIsFullScreen(false)
            }
          }
        
          document.addEventListener('fullscreenchange', handleFullScreenChange)
        
          return () => {
            document.removeEventListener('fullscreenchange', handleFullScreenChange)
          }
    }, [])

    // localstarage --  disable modalWindow
    function windowSetToStorage() {
        window.localStorage.setItem('ModalWindow', false)
    }

    //confetti stars
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
    });
    }
      
    function handleClick() {
        windowSetToStorage()
        setOpenMW(!openMW)
        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);
        setTimeout(shoot, 300);
        setTimeout(shoot, 400);
    }

    return (
        <div className={styles.container}>
            <div className={styles.wraper}>
                <h1 className={styles.title}>THX FOR VISIT</h1>
                <section className={styles.fsmode_container}>
                    <input 
                        type="checkbox" 
                        name="fsmode" 
                        checked={isFullScreen}
                        onChange={FullScreen}
                    />
                    <label for="fsmode">
                        <b className={styles.fullscreen_label}>FullScreen Mode</b>
                    </label>
                </section>
                <button 
                    className={styles.enter_btn}
                    onClick={handleClick} 
                >ENTER</button>
            </div>
        </div>
    )
}

export default ModalWindow;