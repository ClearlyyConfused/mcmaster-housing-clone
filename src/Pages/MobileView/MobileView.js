import './mobileView.css';
import ViewWidth from '../../Helper/ViewWidth';

function MobileView() {
	const viewWidth = ViewWidth();

	return viewWidth > 500 ? (
		<div className="mobile-view-page">
			<iframe
				className="iframeLarge"
				src="http://localhost:3000/"
				frameborder="0"
			></iframe>
			<iframe
				className="iframeMedium"
				src="http://localhost:3000/"
				frameborder="0"
			></iframe>
			<iframe
				className="iframeSmall"
				src="http://localhost:3000/"
				frameborder="0"
			></iframe>
		</div>
	) : (
		<div className="mobile-view-page">Already in mobile mode</div>
	);
}

export default MobileView;
