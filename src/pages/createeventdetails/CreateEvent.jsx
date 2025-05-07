import styles from './CreateEvent.module.css';
import FormCreateEvent from '../../components/FormCreateEvent/FormCreateEvent';

function CreatedEvent() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}></h1>
      <FormCreateEvent />
    </div>
  );
}

export default CreatedEvent;
