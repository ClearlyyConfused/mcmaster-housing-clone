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
			<nav className="HeaderNav">
				<button>HOME</button>
				<button>POST AN AD</button>
				<button>AVAILABLE PROPERTIES</button>
			</nav>
			<section className="CallToAction">
				<section>
					<h3>Help Support Ukrainian Students and Scholars</h3>
					<p>
						The Centre for Advanced Research in Experimental and Applied Linguistics
						(ARiEAL) is looking for landlords willing to offer discounted housing for
						Ukrainian students and scholars coming to McMaster this spring.
					</p>
				</section>
			</section>
		</header>
	);
}

export default Header;
