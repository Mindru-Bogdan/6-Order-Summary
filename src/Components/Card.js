import Img from './Img';

import IllustrationHero from '../../src/illustration-hero.svg';
import IconMusic from '../../src/icon-music.svg';

import classes from './Card.module.css';

const Card = () => {
  return (
    <div>
      <Img />
      <div className={classes.card}>
        <img src={IllustrationHero} className={classes.illustrationHero}></img>
        <h1>Order Summary</h1>
        <p className={classes.details}>
          You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
        </p>
        <div className={classes.plan}>
          <img src={IconMusic} className={classes.iconMusic}></img>
          <h5>Annual Plan</h5>
          <p className={classes.price}>$59.99/year</p>
          <p className={classes.change}>Change</p>
        </div>
        <h6>Proceed to Payment</h6>
        <h7>Cancel Order</h7>
      </div>
    </div>
  );
};

export default Card;
