import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../Auth/Firebase';
import CheckLogin from '../../Auth/CheckLogin';
import SignInFunction from '../../Auth/SignIn';

function HeaderDropDown({ currentPage, setCurrentPage }) {
	const user = CheckLogin()[0];
	const SignIn = SignInFunction();

	const [display, setDisplay] = useState(false);

	let headerTop;
	/* prettier-ignore */
	if (currentPage === 'HOME') {
		headerTop = (
			<Link to="/">
				<button onClick={() => {setDisplay(true);}}>HOME</button>
			</Link>
		);
	} else if (currentPage === 'POST AD') {
		headerTop = (
			<Link to="post-a-property">
				<button onClick={() => {setDisplay(true);}}>POST AD</button>
			</Link>
		);
	} else if (currentPage === 'AVAILABLE PROPERTIES') {
		headerTop = (
			<Link to="available-properties">
				<button onClick={() => {setDisplay(true);}}>AVAILABLE PROPERTIES</button>
			</Link>
		);
	} else if (currentPage === 'MOBILE VIEW') {
		headerTop = (
			<Link to="mobile-view">
				<button onClick={() => {setDisplay(true);}}>MOBILE VIEW</button>
			</Link>
		);
	}

	return (
		/* prettier-ignore */
		<nav className="HeaderDropdown HeaderNav" onClick={() => {setDisplay(!display);}}>
			{headerTop}

			<div className={`nav-dropdown-active-${display}`}>
				<Link to="/">
					<button onClick={() => {setCurrentPage('HOME');}}>HOME</button>
				</Link>
				<Link to="post-a-property">
					<button onClick={() => {setCurrentPage('POST AD');}}>POST AD</button>
				</Link>
				<Link to="available-properties">
					<button onClick={() => {setCurrentPage('AVAILABLE PROPERTIES');}}>
						AVAILABLE PROPERTIES
					</button>
				</Link>
				<Link to="mobile-view">
					<button onClick={() => {setCurrentPage('MOBILE VIEW');}}>
						MOBILE VIEW
					</button>
				</Link>
				
				{user === null ? (
					<button className="loginBtn" onClick={SignIn}>
						<span className="headerText">LOGIN</span>
					</button>
				) : (
					<button className="loginBtn" onClick={() => {auth.signOut();}}>
							<span className="headerText">LOGOUT</span>
					</button>
				)}
			</div>
		</nav>
	);
}

export default HeaderDropDown;
