import React from 'react';
import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    // GO TO HOME PAGE
    const [goHomePage, setGoHomePage] = React.useState(true);
    const currentPage = window.location.pathname;
    React.useEffect(() => {
        if(currentPage === '/') {
            setGoHomePage(!goHomePage)
        }
    }, [currentPage]);
    
    return (
        <div 
            onClick={(e) => e.stopPropagation()}
            className={styles.menu_list}
        >
            {/* About */}
            <div className={styles.menu_about}>    
            </div>
            <Link to='/about' className={styles.menu_list_about_link}> 
                <button className={styles.menu_list_about_btn}>ABOUT</button>
            </Link> 
            
            {/*GALERY */}
            <div className={styles.menu_galery}>
            </div>   
            <Link to='/galery' className={styles.menu_list_galery_link}> 
                <button className={styles.menu_list_galery_btn}>GALERY</button>
            </Link>  
            {goHomePage && 
                <Link to="/" className={styles.home_link}>
                    <button className={styles.home}>go home</button>
                </Link> 
            }
        </div> 
    )
}

export default Menu;