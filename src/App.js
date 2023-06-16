import Header from './components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import PostAnAd from './Pages/PostAnAd/PostAnAd';
import PropertyListings from './Pages/PropertyListingPage/PropertyListings';
import DisplayedProperty from './Pages/PropertyListingPage/DisplayedProperty';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="post-a-property/" element={<PostAnAd />}></Route>
				<Route path="available-properties/" element={<PropertyListings />}></Route>
				<Route path="available-properties/:propertyName" element={<DisplayedProperty />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
