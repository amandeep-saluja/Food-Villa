import LOGO_URL from '../assets/logo.jpg';

export const Nav = () => {
    return (
        <div className="nav">
            <img className="logo" src={LOGO_URL} alt="logo" />
            <div className="nav-item">
                <span>Home</span>
                <span>About</span>
                <span>Contact</span>
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
