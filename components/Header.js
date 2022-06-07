import React from 'react';
import { HeaderContainer, LogoContainer, OptionContainer, OptionLink } from './HeaderStyles'
import Logo from '../assets/crown.svg'
import { deleteCurrentUser } from '../redux/user/user.action';
import { connect } from 'react-redux';
import CardIcon from './CardIcon';
import CardDropDown from './CardDropdown'
import { createStructuredSelector } from 'reselect'
import { selectCardHidden } from '../redux/card/card.selectors'
import { selectCurrentUser } from '../redux/user/user.selectors'


class Header extends React.Component {
    render() {
        const { currentUser, hidden } = this.props
        return (
            <HeaderContainer>
                <LogoContainer href='/'>
                    <img src={Logo.src} />
                </LogoContainer>
                <OptionContainer>
                    <OptionLink href='/shop'>SHOP</OptionLink>
                    <OptionLink href='/shop'>CONTACT</OptionLink>
                    {
                        currentUser
                            ? <OptionLink as='div' onClick={() => { this.props.deleteCurrentUser({ currentUser: null }) }}>SIGN OUT</OptionLink>
                            : <OptionLink href='/signin'>SIGN IN</OptionLink>
                    }
                    <CardIcon />
                </OptionContainer>
                {
                    hidden ? null : <CardDropDown />
                }
            </HeaderContainer>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCardHidden
})

const mapDispatchToProps = dispatch => ({
    deleteCurrentUser: user => dispatch(deleteCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
