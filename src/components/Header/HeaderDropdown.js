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
			<button onClick={() => {setDisplay(true);}}>HOME</button>
		);
	} else if (currentPage === 'POST AD') {
		headerTop = (
			<button onClick={() => {setDisplay(true);}}>POST AD</button>
		);
	} else if (currentPage === 'AVAILABLE PROPERTIES') {
		headerTop = (
			<button onClick={() => {setDisplay(true);}}>AVAILABLE PROPERTIES</button>
		);
	} else if (currentPage === 'MOBILE VIEW') {
		headerTop = (
			<button onClick={() => {setDisplay(true);}}>MOBILE VIEW</button>
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
