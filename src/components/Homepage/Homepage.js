import CallToAction from './CallToAction';
import './Homepage.css';
import sectionImg1 from '../../images/sectionImg1.png';
import sectionImg2 from '../../images/sectionImg2.jpg';
import sectionImg3 from '../../images/sectionImg3.jpeg';
import sectionImg4 from '../../images/sectionImg4.jpeg';

function Homepage() {
	return (
		<main className="HomepageContent">
			<CallToAction />
			<div className="ContentContainer">
				<section>
					<img src={sectionImg1} alt="" />
					<div className="Content">
						<h2>Want to post a rental listing? </h2>
						<div className="divider"></div>
						<p>
							When you post with us, your rental properties will be viewed exclusively by
							the McMaster community. Our redeveloped listings software makes it easy for
							you to list your property and for great tenants to find your ads!
						</p>
						<h4>List your property on here</h4>
					</div>
				</section>
				<section>
					<img src={sectionImg2} alt="" />
					<div className="Content">
						<h2>Student First is Back!</h2>
						<div className="divider"></div>
						<p>
							We are rewarding landlords that go above and beyond during these uncertain
							times. As students search for off-campus housing, they are looking for
							flexible lease terms and payment options – and properties that meet that
							criteria are going to stand apart from the rest.
						</p>
						<h4>Learn More</h4>
					</div>
				</section>
				<section>
					<img src={sectionImg3} alt="" />
					<div className="Content">
						<h2>McMatch - McMaster's Student Housemate Connector </h2>
						<div className="divider"></div>
						<p>
							McMatch is an online platform where students can connect with each other to
							find housemates for their off-campus homes. Each McMatch user will create a
							public profile by answering a series of questions about their living
							preferences. From these answers you will be able to search other McMatch
							profiles and sort them based on compatibility.
						</p>
						<h4>Learn more about McMatch</h4>
					</div>
				</section>
				<section>
					<img src={sectionImg4} alt="" />
					<div className="Content">
						<h2>McMaster students and Older Adults Co-Housing Program </h2>
						<div className="divider"></div>
						<p>
							Symbiosis is a housing project that matches students with seniors in
							Hamilton and area. The concept – already successfully piloted around the
							globe – is a win-win. It connects students in need of low-cost housing with
							seniors who have a spare room and who could benefit from a bit of extra
							support and company. By connecting students and seniors, we are aiming to
							fill two needs at the same time: affordable housing for students and company
							and/or extra income for seniors.
						</p>
						<p>
							Interested students can reach out to the Symbiosis team by email at
							email@service.com or phone at 123-456-7890
						</p>
						<h4>Learn more about Symbiosis</h4>
					</div>
				</section>
			</div>
		</main>
	);
}

export default Homepage;
