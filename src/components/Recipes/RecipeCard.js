import React from 'react';
import styles from './RecipeCard.module.css';

const RecipeCard = ({name, image}) => (
    <div className={styles.card}>
        <img src={image} alt={name} width={100} height={100} />
        <div >
            <p>{name}</p>
            <p>`Date: ${Date.now()}`</p>
        </div>
    </div>

);

export default RecipeCard; 