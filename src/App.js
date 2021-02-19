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
											<h2>kort om mig</h2>
										</header>
										<p>
										jag heter Ahmed Ali och är 22år gammal. Studerar Frontendutveckling, som person är jag lättlärd, villig
										och redo att lära mig nya saker. Jag har stora ambitioner och är samtidigt målmedveten och målinriktad i
										de fronter jag väljer att jobba/studera inom.

										</p>
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
							<h2>kontakt uppgifter</h2>
							<dl className="alt">
								<dt>Address</dt>
								<dd>Östregårdsgränd10 &bull; lessebo, TN 00000 &bull;sverige</dd>
								<dt>Phone</dt>
								<dd>073 674 31 49</dd>
								<dt>Email</dt>
								<dd><a href="mailto:aahmedabdi98@gmail.com">Aahmedabdi98@gmail.com</a></dd>
							</dl>
						</section>
					</footer>

			</div>

    </div>
  );
}

export default App;
