import BackgroundDesktop from '../../src/pattern-background-desktop.svg';
import BackgroundMobile from '../../src/pattern-background-mobile.svg';

import classes from './Img.module.css';

const Img = () => {
  return (
    <div>
      <img className={classes.backgroundDesktop} src={BackgroundDesktop}></img>
      <img className={classes.backgroundMobile} src={BackgroundMobile}></img>
    </div>
  );
};

export default Img;
