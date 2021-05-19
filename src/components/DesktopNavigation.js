import { NavLink } from 'react-router-dom';

function DesktopNavigation() {
    return (
        <header className="desktop-header">
            <nav className="desktop-navigation">
                <NavLink activeClassName="active" className="link" exact to="/">
                    Home
                </NavLink>
                <NavLink activeClassName="active" className="link" to="/standard-slider">
                    Standard Slider
                </NavLink>
                <NavLink activeClassName="active" className="link" to="/carousel">
                    Carousel
                </NavLink>
            </nav>
        </header>
    );
}

export default DesktopNavigation;