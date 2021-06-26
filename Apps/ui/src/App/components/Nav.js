import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

//with help from: https://javascript.plainenglish.io/how-to-create-a-responsive-navbar-with-react-bb9ce4cebddd


function Nav() {

    const largerThanPhone = useMediaQuery('(min-width:600px)');

    const [open, setOpen] = React.useState(false);

    const useStyles = makeStyles({
        Nav: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#4c8bf5',
        },
        Logo: {
            paddingLeft: '20px',

        },
        Menu: {
            display: `${largerThanPhone ? 'none': 'flex'}`,
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
            display: `${(largerThanPhone && !open) ? 'flex': 'none'}`,
            textDecoration: "none",
            color: 'white',
            fontFamily: 'verdana'
        },
        LinkMobile: {
            display: `${(!largerThanPhone && open) ? 'flex': 'none'}`,
            textDecoration: "none",
            color: 'white',
            fontFamily: 'verdana',
            paddingRight: '30px',
            paddingBottom: '10px',
        },
    })

    const navStyle = useStyles()


    const openAction = () => {
        setOpen(!open);
    }

    const reset = () => {
        setOpen(false);
    }

    return (
        <nav className = {navStyle.Nav}> 
        <div className = {navStyle.Logo}><DirectionsRunIcon/><DirectionsRunIcon/><DirectionsRunIcon/></div>
        <div className = {navStyle.Menu} onClick = {openAction}>{open ? <CloseIcon/>:<MenuIcon/>}</div>
            <ul className = {largerThanPhone ? navStyle.NavLinksDesktop : navStyle.NavLinksMobile} >
                <Link to = '/' className = {largerThanPhone ? navStyle.LinkDesktop : navStyle.LinkMobile} onClick = {reset}>
                    <li>Home</li>
                </Link>
                <Link to = '/Signup' className = {largerThanPhone ? navStyle.LinkDesktop : navStyle.LinkMobile} onClick = {reset}>
                    <li>Sign Up</li>
                </Link>
                {/* <Link to = '/leaderboard'>
                    <li>Leaderboard</li>
                </Link> */}
            </ul>
        </nav>
    );
}

export default Nav;