import './Header.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/compat/app';
import { auth } from '../../Firebase';
import HeaderBanner from './HeaderBanner';
import HeaderNavBtn from './HeaderNavBtn';
import HeaderDropDown from './HeaderDropdown';

function Header() {
	const [user] = useAuthState(auth);
	const [viewWidth, setViewWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setViewWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('reisze', handleResize);
		};
	}, []);

	function signIn() {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	}

	const [currentPage, setCurrentPage] = useState('HOME');

	if (viewWidth < 600) {
		return (
			<header className="Header">
				<HeaderBanner />
				<HeaderDropDown currentPage={currentPage} setCurrentPage={setCurrentPage} />
			</header>
		);
	}

	return (
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
			</nav>
		</header>
	);
}

export default Header;
