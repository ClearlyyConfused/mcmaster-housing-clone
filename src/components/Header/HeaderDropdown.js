import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/compat/app';
import { auth } from '../../Firebase';

function HeaderDropDown({ currentPage, setCurrentPage }) {
	const [user] = useAuthState(auth);
	function signIn() {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	}

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
	}

	return (
		/* prettier-ignore */
		<nav className="HeaderDropdown HeaderNav" onClick={() => {setDisplay(!display);}}>
			{headerTop}

			<div className={`dropdownActive-${display}`}>
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
					<button className="loginBtn" onClick={signIn}>
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
