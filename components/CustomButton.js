import React from 'react';
import styles from '../styles/CustomButton.module.scss';


const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? styles.googlesignin : ''} ${styles.custombutton}`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton