import { useState } from 'react';
import CheckLogin from '../../Auth/CheckLogin';
import Login from '../../Auth/Login/LoginPage';
import './PostAnAd.css';

function PostAnAd() {
	const user = CheckLogin()[0];

	function handleSubmit(event) {
		event.preventDefault();

		// if message has an image, convert it then call sendMessage with result
		let reader = new FileReader();
		reader.readAsDataURL(event.target.elements.image.files[0]);
		reader.onloadend = () => {
			const image = reader.result;

			const reqOptions = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					landlord_email: user.email,
					location: event.target.elements.location.value,
					description: event.target.elements.description.value,
					cost_per_month: event.target.elements.cost_per_month.value,
					distance: event.target.elements.distance.value,
					rental_term: event.target.elements.rental_term.value,
					available_bedrooms: event.target.elements.available_bedrooms.value,
					date_available: event.target.elements.date_available.value,
					image: image,
				}),
			};

			fetch('https://mcmaster-housing-clone-api.vercel.app/newProperty', reqOptions).then((res) =>
				res.json().then((data) => {
					console.log(data);
					event.target.elements.message.value = '';
					event.target.elements.image.value = '';
				})
			);
		};
	}

	return user === null ? (
		<Login />
	) : (
		<main className="post-an-ad">
			<form onSubmit={handleSubmit}>
				<h1>CREATE YOUR AD</h1>

				<div className="form-inputs">
					{/* LOCATION ---------------------------- */}
					<div>
						<label className="image-input" htmlFor="location">
							Location
						</label>
						<input
							required
							type="text"
							id="location"
							name="location"
							placeholder="1280 Main Street West"
						></input>
					</div>
					{/* MONTHLY RENT ---------------------------- */}
					<div>
						<label className="image-input" htmlFor="cost_per_month">
							Monthly Rent ($)
						</label>
						<input
							required
							type="number"
							id="cost_per_month"
							name="cost_per_month"
							min={0}
							placeholder="$"
						></input>
					</div>
					<div>
						<label className="image-input" htmlFor="distance">
							Distance (km)
						</label>
						<input required type="number" id="distance" name="distance" min={0} placeholder="km"></input>
					</div>
					{/* RENTAL TERM ---------------------------- */}
					<div>
						<label htmlFor="rental_term">Rental Term</label>
						<select className="dropdown" name="rental_term" id="rental_term">
							<option value="12 Month Lease">12 Month Lease</option>
							<option value="8 Month Lease">8 Month Lease</option>
							<option value="Short-term/Sublet/Flexible">Short-term/Sublet/Flexible</option>
						</select>
					</div>
					{/* AVAILABLE BEDROOMS ---------------------------- */}
					<div>
						<label className="image-input" htmlFor="available_bedrooms">
							Available Bedrooms
						</label>
						<select className="dropdown" name="available_bedrooms" id="available_bedrooms">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5+</option>
						</select>
					</div>
					{/* DATE AVAILABLE ---------------------------- */}
					<div>
						<label className="image-input" htmlFor="date_available">
							Date Available
						</label>
						<input
							required
							type="date"
							id="date_available"
							name="date_available"
							min={new Date().toISOString().split('T')[0]}
						></input>
					</div>
					{/* IMAGE ---------------------------- */}
					<div>
						<label className="image-input" htmlFor="image">
							Add Img
						</label>
						<input required type="file" id="image" name="image" accept="image/png, image/jpeg"></input>
					</div>
					{/* DESCRIPTION ---------------------------- */}
					<div className="description-input">
						<label className="image-input" htmlFor="description">
							Description
						</label>
						<textarea
							required
							type="text"
							id="description"
							name="description"
							placeholder="Describe your property here"
						></textarea>
					</div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</main>
	);
}

export default PostAnAd;
