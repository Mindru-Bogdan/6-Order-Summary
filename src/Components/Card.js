import classes from './Card.module.css';

const Card = () => {
  return (
    <div>
      <h1>Order Summary</h1>
      <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
      <div className={classes.plan}>
        <h5>Annual Plan</h5>
        <p className={classes.price}>$59.99/year</p>
        <p className={classes.change}>Change</p>
      </div>
      <h6>Proceed to Payment</h6>
      <h7>Cancel Order</h7>
    </div>
  );
};

export default Card;
