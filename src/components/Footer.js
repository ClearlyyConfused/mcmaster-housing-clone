import './Footer.css';
import Logo from '../images/McMasterBrighterWorldLogo.png';
import Instagram from '../images/instagram.svg';
import Twitter from '../images/twitter.svg';
import Facebook from '../images/facebook.svg';
import Youtube from '../images/youtube.svg';
import Linkedin from '../images/linkedin.svg';

function Footer() {
	return (
		<footer className="Footer">
			<img src={Logo} alt="Logo" />
			<section className="section1">
				<div className="divider"></div>
				<div className="section1Content">
					<a href="">CONTACT</a>
					<a href="">TERMS AND CONDITIONS</a>
					<a href="">PRIVACY POLICY</a>
				</div>
				<div className="divider"></div>
			</section>
			<section className="section2">
				<a href="">
					<img src={Instagram} alt="Instagram" />
				</a>
				<a href="">
					<img src={Twitter} alt="Twitter" />
				</a>
				<a href="">
					<img src={Facebook} alt="Facebook" />
				</a>
				<a href="">
					<img src={Youtube} alt="Youtube" />
				</a>
				<a href="">
					<img src={Linkedin} alt="Linkedin" />
				</a>
			</section>
			<section className="section3">
				<a href="">1280 Main Street West</a>
				<a href="">Hamilton, Ontario L8S 3L8</a>
				<a href="">(905) 525-9140</a>
			</section>
			<h6>© 2022 McMaster University</h6>
		</footer>
	);
}

export default Footer;
