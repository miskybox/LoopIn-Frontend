import styles from './Profile.module.css';
import React from 'react';
import FormProfile from '../../components/FormProfile/FormProfile.jsx';

function Profile() {
  return (
    <div>
      <h1 className={styles.title}></h1>
      <FormProfile />
    </div>
  );
}

export default Profile;
