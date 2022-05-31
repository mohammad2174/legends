import React from 'react';
import styles from '../styles/Signin.module.scss';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { signInWithGoogle } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.action';
import axios from 'axios';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        axios.post(`http://localhost:63342/reactMarketPhp/login.php?_ijt=uvsbfvmlv8v0nmtv473idkekls&email=${email}&password=${password}`)
            .then(response => {
                console.log(response.data);
                if (response.status === 200) {
                    this.setState({
                        email: '',
                        password: ''
                    })
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

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className={styles.signin}>
                <h2>I already have an account!</h2>
                <span>Sign In with Your Email and Password!</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label='email' name='email' type='email' value={this.state.email} required />

                    <FormInput handleChange={this.handleChange} label='password' name='password' type='password' value={this.state.password} required />

                    <div className={styles.buttons}>
                        <CustomButton type='submit' value='Submit Form'>SIGN IN</CustomButton>

                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>SIGN IN With Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(SignIn);