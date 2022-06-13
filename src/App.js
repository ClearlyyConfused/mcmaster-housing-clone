import Header from './components/Header';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer';
import PostAnAd from './components/PostAnAd/PostAnAd';
import PropertyListings from './components/PropertyListings/PropertyListings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="post-a-property/" element={<PostAnAd />}></Route>
				<Route path="available-properties" element={<PropertyListings />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
