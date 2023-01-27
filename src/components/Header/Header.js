import './Header.css';
import LOGO_URL from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <div className="nav">
            <Link to={'/'}>
                <img className="logo" src={LOGO_URL} alt="logo" />
            </Link>
            <div className="nav-item">
                <span>
                    <Link to={'/'} className={'link'}>
                        Home
                    </Link>
                </span>
                <span>
                    <Link to={'/about'} className={'link'}>
                        About
                    </Link>
                </span>
                <span>
                    <Link to={'/contact'} className={'link'}>
                        Contact
                    </Link>
                </span>
                <span>
                    <Link to={'/instamart'} className={'link'}>
                        Instamart
                    </Link>
                </span>
                <span>Cart</span>
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <div id="header">
            <Nav />
        </div>
    );
};

export default Header;
