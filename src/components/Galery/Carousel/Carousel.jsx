import React from 'react';
import styles from './Carousel.module.css';
import arrow_left from './arrow_left.png';
import arrow_right from './arrow_right.png';

const Carousel = ({children}) => {

    const MAX_VISIBILITY = 3;
    const [active, setActive] = React.useState(2);
    const count = React.Children.count(children);

    return (
        <div className={styles.carousel}> 
            {active > 0 && (
                <button 
                  className={styles.nav + ' ' + styles.left}
                  onClick={() => setActive((i) => i-1)}
                >
                  <img 
                    src={arrow_left} 
                    alt={arrow_left}
                    className={styles.arrow_left}
                  />   
                </button>
            )}

            {/* NoActive */}
            {active === 0 && (
              <button 
              className={styles.nav + ' ' + styles.left_noactive}
              >
                <img 
                  src={arrow_left} 
                  alt={arrow_left}
                  className={styles.arrow_left_noactive}
                />   
              </button>
            )}

            {React.Children.map(children, (child, i) => (
                <div
                    className={styles.card_container}
                    style={{
                        '--active': i === active ? 1 : 0,
                        '--offset': (active - i) / 3,
                        '--direction': Math.sign(active - i),
                        '--abs-offset': Math.abs(active - i) / 3,
                        'pointer-events': active === i ? "auto" : "none",
                        'opacity': Math.abs(active - i) >= 
                        MAX_VISIBILITY ? "0" : "1", 
                        'display': Math.abs(active - i) > 
                        MAX_VISIBILITY ? "none" : "block", 
                    }}
                >
                    {child}
                </div>
            ))}
            {active < count - 1 && (
                <button 
                  className={styles.nav + ' ' + styles.right}
                  onClick={() => setActive((i) => i+1)}
                >
                  <img 
                    src={arrow_right} 
                    alt={arrow_right}
                    className={styles.arrow_right}
                  />   
                </button>
            )}

            {/* NoActive */}
            {active === count - 1 && (
                <button 
                  className={styles.nav + ' ' + styles.right_noactive}
                >
                  <img 
                    src={arrow_right} 
                    alt={arrow_right}
                    className={styles.arrow_right_noactive}
                  />   
                </button>
            )}
        </div>
    )
}

export default Carousel;