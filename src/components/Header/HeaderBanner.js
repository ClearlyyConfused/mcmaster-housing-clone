import McMasterLogo from '../../images/McMasterLogo.svg';
import searchIcon from '../../images/search.svg';
import menuIcon from '../../images/menu.svg';

function HeaderBanner() {
	return (
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
	);
}

export default HeaderBanner;
