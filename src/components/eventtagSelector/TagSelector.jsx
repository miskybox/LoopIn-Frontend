import React from 'react';
import TagButton from './TagButton';
import styles from './TagSelector.module.css';
import babyIcon from '../../assets/icons/baby.png';
import disabledIcon from '../../assets/icons/disabled.png';
import autismIcon from '../../assets/icons/autism.png';
import prideIcon from '../../assets/icons/pride.png';
import seniorsIcon from '../../assets/icons/seniors.png';
import animalsIcon from '../../assets/icons/animals.png';


function TagSelector({ tags, setTags }) {
  const toggleTag = (key) => {
    setTags(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const tagOptions = [
    { key: 'baby', label: 'Bebés', icon: babyIcon },
    { key: 'disabled', label: 'Accesible silla de ruedas', icon: disabledIcon },
    { key: 'autism', label: 'Autismo-friendly', icon: autismIcon },
    { key: 'lgbt', label: 'Inclusivo LGBTQ+', icon: prideIcon },
    { key: 'seniors', label: 'Mayores', icon: seniorsIcon },
    { key: 'pets', label: 'Pet Friendly', icon: animalsIcon },
    
  ];

  return (
    <div className={styles.container}>
      {tagOptions.map(tag => (
        <TagButton
          key={tag.key}
          icon={tag.icon}
          label={tag.label}
          active={tags[tag.key]}
          onToggle={() => toggleTag(tag.key)}
        />
      ))}
    </div>
  );
}

export default TagSelector;
