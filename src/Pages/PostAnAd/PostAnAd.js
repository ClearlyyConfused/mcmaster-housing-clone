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
					<label className="image-input" htmlFor="location">
						Location
					</label>
					<input type="text" id="location" name="location"></input>

					<label className="image-input" htmlFor="description">
						Description
					</label>
					<input type="text" id="description" name="description"></input>

					<label className="image-input" htmlFor="cost_per_month">
						Monthly Rent
					</label>
					<input type="number" id="cost_per_month" name="cost_per_month"></input>

					<label className="image-input" htmlFor="distance">
						Distance
					</label>
					<input type="number" id="distance" name="distance"></input>

					<label className="image-input" htmlFor="rental_term">
						Rental Term
					</label>
					<input type="text" id="rental_term" name="rental_term"></input>

					<label className="image-input" htmlFor="available_bedrooms">
						Available Bedrooms
					</label>
					<input type="number" id="available_bedrooms" name="available_bedrooms"></input>

					<label className="image-input" htmlFor="date_available">
						Date Available
					</label>
					<input type="date" id="date_available" name="date_available"></input>

					<label className="image-input" htmlFor="image">
						Add Img
					</label>
					<input type="file" id="image" name="image" accept="image/png, image/jpeg"></input>
					<button type="submit">Send</button>
				</div>
			</form>
		</main>
	);
}

export default PostAnAd;
