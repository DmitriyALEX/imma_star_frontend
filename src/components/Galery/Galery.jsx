import React from 'react';
import styles from './Galery.module.css';
import Menu from '../Menu/Menu.jsx';

import Card from './Card/Card.jsx';
import Carousel from './Carousel/Carousel.jsx';

import GaleryBackground from './GaleryBackground/GaleryBackground.jsx';

const CARDS = 5;

const Galery = () => {

    // MENU
    const [toggle, setToggle] = React.useState(false);

    function handleClose() {
        if(toggle) {
            setToggle(!toggle)
        }
    }

    return (
        <div onClick={handleClose} className={styles.wrapper}>

            <button 
                onClick={() => setToggle(!toggle)}
                className={styles.menu_btn}>MENU
            </button>

            {/* MENU */}
            <div className={styles.menu}>
                {toggle && <Menu/>}
            </div>

            {/* SLIDER */}
            {!toggle && 
                <>
                    <Carousel>
                        {[...new Array(CARDS)].map((_, i) => (
                            <Card idx={i}/>    
                        ))}       
                    </Carousel>
            </>}

            {/* BACKGROUND */}
            <GaleryBackground/>
        </div>
    )
}

export default Galery;
