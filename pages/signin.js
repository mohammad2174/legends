import React from 'react';
import styles from '../styles/signinandsignup.module.scss';
import SignIn from '../components/Signin';
import SignUp from '../components/Signup';

const signin = () => (
    <div className={styles.signinandsignup}>
        <SignIn />
        <SignUp />
    </div>
)

export default signin;