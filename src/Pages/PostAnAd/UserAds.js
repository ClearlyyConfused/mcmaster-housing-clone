import { useEffect } from 'react';
import { useState } from 'react';
import CheckLogin from '../../Auth/CheckLogin';

function UserAds() {
	const [userAds, setUserAds] = useState();
	const user = CheckLogin()[0];

	useEffect(() => {
		const reqOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: user.email }),
		};

		fetch('https://mcmaster-housing-clone-api.vercel.app/user-property', reqOptions).then((res) =>
			res.json().then((data) => {
				setUserAds(data);
			})
		);
	}, [userAds]);

	function deleteProperty(propertyName) {
		const reqOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: user.email, location: propertyName }),
		};

		fetch('https://mcmaster-housing-clone-api.vercel.app/delete-property', reqOptions).then((res) =>
			res.json().then((data) => {
				console.log(data);
			})
		);
	}

	return (
		<section className="user-ads">
			<h1>YOUR ADS</h1>
			<div className="ads">
				{userAds === undefined
					? ''
					: userAds.map((ad) => {
							return (
								<div className="ad">
									<img src={ad.propertyImage} alt="" srcset="" />
									<h2>{ad.location}</h2>
									<button
										onClick={() => {
											deleteProperty(ad.location);
										}}
									>
										X
									</button>
								</div>
							);
					  })}
			</div>
		</section>
	);
}

export default UserAds;
