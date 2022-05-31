import React from 'react';
import styles from '../styles/Signup.module.scss';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.action';
import axios from 'axios';


class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert("pass don't match")
            return;
        }

        axios.post(`http://localhost:63342/reactMarketPhp/insertUser.php?_ijt=jsjkvo8d2mvgj26e20df290a9i&display_name=${displayName}&email=${email}&password=${password}`)
            .then(response => {
                console.log(response.data);
                if (response.data === 200) {
                    this.props.setCurrentUser({
                        currentUser: {
                            id: response.data.id,
                            email: response.data.email,
                            display_name: response.data.display_name
                        }
                    })
                }
            })
            .catch(err => console.log(err))
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className={styles.signup}>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with Email and Password</span>
                <form className='sign-up-from' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='displayName'
                        required />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='ConfirmPassword'
                        required />

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(SignUp);