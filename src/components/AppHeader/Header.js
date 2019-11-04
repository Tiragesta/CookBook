import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';
import UserMenu from '../UserMenu/UserMenu';
//import EditHistoryPage from '../pages/EditHistoryPage';
import router from '../../configs/routes';

const Header = () => (
    <section className={styles.header}>
        <div className="logo">
            <Logo image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66ILkGwSbTXq2YOF1YoS-Td-5cv2BHqaBIUG3ZpqznDqPWA4CDA&s"/>
        </div>
        <header><Link to={router.RECIPES}><h2>CookBook</h2></Link></header>
        <div>
            <UserMenu />
        </div>
    </section>
);

export default Header;