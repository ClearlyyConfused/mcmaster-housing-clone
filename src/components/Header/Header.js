import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../../Auth/Firebase';

import HeaderBanner from './HeaderBanner';
import HeaderNavBtn from './HeaderNavBtn';
import HeaderDropDown from './HeaderDropdown';

import CheckLogin from '../../Auth/CheckLogin';
import SignInFunction from '../../Auth/SignIn';
import ViewWidth from '../../Helper/ViewWidth';
import CurrentPage from '../../Helper/CurrentPage';

function Header() {
	const user = CheckLogin()[0];
	const SignIn = SignInFunction();
	const viewWidth = ViewWidth();
	const [currentPage, setCurrentPage] = useState(CurrentPage());

	return viewWidth < 600 ? (
		<header className="Header">
			<HeaderBanner />
			<HeaderDropDown currentPage={currentPage} setCurrentPage={setCurrentPage} />
		</header>
	) : (
		<header className="Header">
			<HeaderBanner />
			<nav className="HeaderNav">
				<Link to="/">
					<HeaderNavBtn
						buttonName="HOME"
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</Link>
				<Link to="post-a-property">
					<HeaderNavBtn
						buttonName="POST AD"
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</Link>
				<Link to="available-properties">
					<HeaderNavBtn
						buttonName="AVAILABLE PROPERTIES"
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</Link>
				<Link to="mobile-view">
					<HeaderNavBtn
						buttonName="MOBILE VIEW"
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</Link>
				{user === null ? (
					<button className="loginBtn" onClick={SignIn}>
						<span className="headerText">LOGIN</span>
					</button>
				) : (
					/* prettier-ignore */
					<button className="loginBtn" onClick={() => {auth.signOut();}}>
						<span className="headerText">LOGOUT</span>
					</button>
				)}
			</nav>
		</header>
	);
}

export default Header;
