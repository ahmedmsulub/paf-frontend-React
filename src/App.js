import './App.css';
import profile from './img/ahmed (2).jpg'
import LandingPage from './Components/LandingPage/LandingPage'
import Search from './Components/Serach-bar/SearchBar'
function App() {
  return (
    <div className="App">
      
      {/* <LandingPage /> */}
      <Search />

      <div id="wrapper">

				{/* <!-- Header --> */}
					<header id="header" className="alt">
						<span className="logo"><img src="images/logo.png" alt="" /></span>
						<h1>Ahmed</h1>
						{/* <!-- första som dyker upp--> */}
					</header>

				{/* <!-- Main --> */}
					<div id="main">

						{/* <!-- Introduction --> */}
							<section id="intro" className="main">
								<div className="spotlight">
									<div className="content">
										<header className="major">
											<h2>utvecklings områden</h2>
										</header>
										<p>Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna
										adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus.
										Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.</p>
										<ul className="actions">
										</ul>
									</div>
									<span className="image"><img src={profile} alt="" /></span>
								</div>
							</section>


					</div>

				{/* <!-- Footer --> */}
					<footer id="footer">
						<section>
							<h2>Aliquam sed mauris</h2>
							<p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
							<ul className="actions">
							</ul>
						</section>
						<section>
							<h2>kontakt uppgifter</h2>
							<dl className="alt">
								<dt>Address</dt>
								<dd>Östregårdsgränd10 &bull; lessebo, TN 00000 &bull;sverige</dd>
								<dt>Phone</dt>
								<dd>073 674 31 49</dd>
								<dt>Email</dt>
								<dd><a href="#">Aahmedabdi98@gmail.com</a></dd>
							</dl>
						</section>
					</footer>

			</div>

    </div>
  );
}

export default App;
