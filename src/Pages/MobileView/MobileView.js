import './mobileView.css';
import ViewWidth from '../../Helper/ViewWidth';

function MobileView() {
	const viewWidth = ViewWidth();

	return viewWidth > 500 ? (
		<div className="mobile-view-page">
			<iframe
				title="Large mobile display of website"
				className="iframeLarge"
				src="https://offcampus-mcmaster-clone.netlify.app/"
				frameborder="0"
			></iframe>
			<iframe
				title="Medium mobile display of website"
				className="iframeMedium"
				src="https://offcampus-mcmaster-clone.netlify.app/"
				frameborder="0"
			></iframe>
			<iframe
				title="Small mobile display of website"
				className="iframeSmall"
				src="https://offcampus-mcmaster-clone.netlify.app/"
				frameborder="0"
			></iframe>
		</div>
	) : (
		<div className="mobile-view-page">Already in mobile mode</div>
	);
}

export default MobileView;
