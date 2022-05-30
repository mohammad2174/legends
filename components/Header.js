import styles from '../styles/Header.module.scss'
import Link from 'next/link';
import Logo from '../assets/crown.svg'
import { deleteCurrentUser } from '../redux/user/user.action';
import { connect } from 'react-redux';

function Header(props) {
    const { currentUser } = props
    return (
        <div className={styles.header}>
            <Link href='/' className={styles.logocontainer}>
                <img src={Logo.src} />
            </Link>
            <div className={styles.options}>
                <Link className={styles.option} href='/shop'>SHOP</Link>
                <Link className={styles.option} href='/shop'>CONTACT</Link>
                {
                    currentUser
                        ? <div className={styles.option} onClick={() => { this.props.deleteCurrentUser({ currentUser: null }) }}>SIGN OUT</div>
                        : <Link className={styles.option} href='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
    deleteCurrentUser: user => dispatch(deleteCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)