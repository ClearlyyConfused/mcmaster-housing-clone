import './Footer.css';
import Logo from '../images/McMasterBrighterWorldLogo.png';

function Footer() {
	return (
		<footer className="Footer">
			<img src={Logo} alt="Logo" />
			<section className="section1">
				<a href="">CONTACT</a>
				<a href="">TERMS AND CONDITIONS</a>
				<a href="">PRIVACY POLICY</a>
			</section>
			<section className="section2">
				<a href="">INSTAGRAM</a>
				<a href="">TWITTER</a>
				<a href="">FACEBOOK</a>
				<a href="">YOUTUBE</a>
				<a href="">LINKEDIN</a>
			</section>
			<section className="section3">
				<a href="">1280 Main Street West  Hamilton, Ontario L8S 3L8</a>
				<a href="">(905) 525-9140</a>
			</section>
			<h6>© 2022 McMaster University</h6>
		</footer>
	);
}

export default Footer;
