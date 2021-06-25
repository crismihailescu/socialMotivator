import { Link } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
    return (
        <nav className = "Nav">
            <ul className = 'Nav-Links'>
                <Link to = '/' className = "Link">
                    <li>Home</li>
                </Link>
                <Link to = '/Signup' className = "Link">
                    <li>Sign Up</li>
                </Link>
                {/* <Link to = '/leaderboard'>
                    <li>Leaderboard</li>
                </Link> */}
                <Link to = '/UserDashboard' className = "Link">
                    <li>My Account</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;