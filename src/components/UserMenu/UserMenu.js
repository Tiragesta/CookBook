import React, { Component, createRef } from 'react';
import Dropdown from './Dropdown/Dropdown';
import styles from './UserMenu.module.css';

export default class UserMenu extends Component {
    containerRef = createRef();

    state = {
        isDropdownOpen: false,
    };

    componentDidMount(){
        window.addEventListener('click', this.handleWindowClick);
    };

    shouldComponentUpdate(nextProps, nextState){
        
        const { isDropdownOpen } = this.state;
        return nextState.isDropdownOpen !== isDropdownOpen;
    }

    componentWillUnmount(){
        window.removeEventListener('click', this.handleWindowClick);
    }

    handleWindowClick = e => {
        const isTargetInsideContainer = this.containerRef.current.contains(e.target);

        const { isDropdownOpen } = this.state;
    
        if(!isTargetInsideContainer && isDropdownOpen){
            this.closeDropdown();
        }
    };

    openDropdown = () => {
        this.setState({ isDropdownOpen: true })
    };

    closeDropdown = () => {
        this.setState({ isDropdownOpen: false })
    };

    render(){
        const { isDropdownOpen }= this.state;

        return (
            <div onClick={this.openDropdown} className={styles.UserMenu} ref={this.containerRef}>
                <img src="https://image.flaticon.com/icons/svg/2089/2089765.svg" alt="User menu" width="30px" height="30px"/>
                {isDropdownOpen && <Dropdown />}
            </div>
        );
    }
}