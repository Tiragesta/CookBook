import React from 'react';
import {Link} from 'react-router-dom';
import userNavItems from '../../../configs/userNav';
import styles from './Dropdown.module.css';

const Dropdown = () => (
    <div className={styles.dropdown}>
        <ul>
            {userNavItems.map(item => (
                <li key={item.name}>
                    <Link to={item.path}>{item.name}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default Dropdown;