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

	const buttons = [
		<Link to="/">
			<button
				onClick={() => {
					setDisplay('active');
				}}
			>
				HOME
			</button>
		</Link>,
		<Link to="post-a-property">
			<button
				onClick={() => {
					setDisplay('active');
				}}
			>
				POST AD
			</button>
		</Link>,
		<Link to="available-properties">
			<button
				onClick={() => {
					setDisplay('active');
				}}
			>
				AVAILABLE PROPERTIES
			</button>
		</Link>,
	];

	const [display, setDisplay] = useState('inactive');
	let firstButton;
	const [buttonStatus, setButtonStatus] = useState(false);

	if (currentPage === 'HOME') {
		firstButton = buttons[0];
	}
	if (currentPage === 'POST AD') {
		firstButton = buttons[1];
	}
	if (currentPage === 'AVAILABLE PROPERTIES') {
		firstButton = buttons[2];
	}

	let x;
	if (display === 'active') {
		x = 'inactive';
	} else {
		x = 'active';
	}

	return (
		<nav
			className="HeaderDropdown HeaderNav"
			disabled={buttonStatus}
			onClick={() => {
				setDisplay(x);
			}}
		>
			{firstButton}
			<div className={`dropdownItems${display}`}>
				<Link to="/">
					<button
						onClick={() => {
							setCurrentPage('HOME');
						}}
					>
						HOME
					</button>
				</Link>
				<Link to="post-a-property">
					<button
						onClick={() => {
							setCurrentPage('POST AD');
						}}
					>
						POST AD
					</button>
				</Link>
				<Link to="available-properties">
					<button
						onClick={() => {
							setCurrentPage('AVAILABLE PROPERTIES');
						}}
					>
						AVAILABLE PROPERTIES
					</button>
				</Link>
				{user === null ? (
					<button className="loginBtn" onClick={signIn}>
						<span className="headerText">LOGIN</span>
					</button>
				) : (
					/* prettier-ignore */
					<button className="loginBtn" onClick={() => {auth.signOut();}}>
							<span className="headerText">LOGOUT</span>
						</button>
				)}
			</div>
		</nav>
	);
}

export default HeaderDropDown;
