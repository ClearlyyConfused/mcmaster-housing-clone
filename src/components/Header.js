import './Header.css';
import McMasterLogo from '../images/McMasterLogo.svg';
import searchIcon from '../images/search.svg';
import menuIcon from '../images/menu.svg';

function Header() {
	return (
		<header className="Header">
			<section className="HeaderBanner">
				<img className="McMasterLogo" src={McMasterLogo} alt="McMaster Logo"></img>
				<h1 className="HeaderTitle">MAC OFF-CAMPUS HOUSING</h1>
				<div className="HeaderButtons">
					<button>
						<img src={searchIcon} alt="searchIcon" />
						SEARCH
					</button>
					<button>
						<img src={menuIcon} alt="menuIcon" />
						MENU
					</button>
				</div>
			</section>
			<nav className="HeaderNav">Header Navigation</nav>
		</header>
	);
}

export default Header;
