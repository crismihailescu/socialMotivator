import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@material-ui/core';

//with help from: https://javascript.plainenglish.io/how-to-create-a-responsive-navbar-with-react-bb9ce4cebddd


function Nav() {

    const user = useSelector(state => state.userInfo);
    const largerThanPhone = useMediaQuery('(min-width:800px)');

    const [open, setOpen] = React.useState(false);

    const useStyles = makeStyles({
        Nav: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            background: '#4c8bf5',
            justifyContent: 'space-between'
        },
        Logo: {
            paddingLeft: '20px',

        },
        Menu: {
            display: `${largerThanPhone ? 'none' : 'flex'}`,
            justifyContent: 'flex-end',
        },
        NavLinksDesktop: {
            width: '33%',
            listStyleType: 'none',
            display: 'flex',
            justifyContent: 'space-around',
        },
        NavLinksMobile: {
            left: 0,
            flexDirection: 'column',
            listStyleType: 'none',
        },
        LinkDesktop: {
            display: `${(largerThanPhone && !open) ? 'flex' : 'none'}`,
            textDecoration: "none",
            color: 'white',
            fontFamily: 'verdana'
        },
        LinkMobile: {
            display: `${(!largerThanPhone && open) ? 'flex' : 'none'}`,
            textDecoration: "none",
            color: 'white',
            fontFamily: 'verdana',
            paddingRight: '30px',
            paddingBottom: '10px',
        },
        greetings: {
            justifyContent: 'space-around',
        }
    })

    const navStyle = useStyles()

    const openAction = () => {
        setOpen(!open);
    }

    const reset = () => {
        setOpen(false);
    }
    const dispatch = useDispatch();

    return (
        <nav className={navStyle.Nav}>
            <div className={navStyle.Logo}><DirectionsRunIcon /><DirectionsRunIcon /><DirectionsRunIcon /></div>
            <div className = {navStyle.greetings}>
            {Object.keys(user).length !== 0 && <Box>
                    {`Hello ${user.firstname}`}
                </Box>}
            </div>
            <div className={navStyle.NavLinksMobile}>
            </div>
            <ul className={largerThanPhone ? navStyle.NavLinksDesktop : navStyle.NavLinksMobile} >
                <Link to='/' className={largerThanPhone ? navStyle.LinkDesktop : navStyle.LinkMobile} onClick={reset}>
                    <li>Home</li>
                </Link>
                {Object.keys(user).length !== 0 ?
                    <Link to='/' className={largerThanPhone ? navStyle.LinkDesktop : navStyle.LinkMobile}
                        onClick={() => dispatch({ type: "SIGN_OUT" })}>
                        Sign out
                    </Link>
                    : <Link to='/Signup' className={largerThanPhone ? navStyle.LinkDesktop : navStyle.LinkMobile} onClick={reset}>
                        <li>Sign Up</li>
                    </Link>
                }
                {/* <Link to = '/leaderboard'>
                    <li>Leaderboard</li>
                </Link> */}
                {Object.keys(user).length !== 0 && user.type === 'User' && <Link to='/UserDashboard' className={largerThanPhone ? navStyle.LinkDesktop : navStyle.LinkMobile} onClick={reset}>
                    <li>My Account</li>
                </Link>
                }
                {Object.keys(user).length !== 0 && user.type === 'Company' && <Link to='/OrganizationDashboard' className={largerThanPhone ? navStyle.LinkDesktop : navStyle.LinkMobile} onClick={reset}>
                    <li>My Account</li>
                </Link>
                }
                {Object.keys(user).length !== 0 && user.type === 'User' && <Link to='/Groups' className={largerThanPhone ? navStyle.LinkDesktop : navStyle.LinkMobile} onClick={reset}>
                    <li>Groups</li>
                </Link>}
            </ul>
            <div className={navStyle.Menu} onClick={openAction}>{open ? <CloseIcon /> : <MenuIcon />}</div>
        </nav >
    );
}

export default Nav;