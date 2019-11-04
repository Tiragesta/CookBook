import React from 'react';
import {Link} from 'react-router-dom';
import routes from '../../configs/routes';
import RecipeCard from './RecipeCard';
import styles from './RecipeCard.module.css';


const RecipesGrid = ({ items }) => (
    <ul className={styles.ul}>
        {items.map(item => (
            <li key={item.id} className={styles.grid}>
                <Link to={`${routes.RECIPES}/${item.id}`} className={styles.link}>
                    <RecipeCard name={item.name} image={item.image}/>
                </Link>    
            </li>
        ))}
    </ul>
);

export default RecipesGrid;