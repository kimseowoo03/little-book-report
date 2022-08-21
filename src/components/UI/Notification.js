import classes from './Notification.module.css';

const Notification = (props) => {
  return (
    <section className={classes.section} >
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;