import styles from './AllEvents.module.css';
import React from 'react';
import ContainerEventDetails from '../../components/ContainerEventDetails.jsx';


function AllEvents() {
return (
  <>
    <h1 className={styles.title}>Próximos Eventos</h1>
    <ContainerEventDetails />
  </>
);
}

export default AllEvents;
