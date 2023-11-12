import logo from "./assets/icon-hamburger.svg";

function App() {
	return (
		<div className="App bg-[#070724]">
			<nav className="flex justify-between items-center">
				<p className="header-two">The Planets</p>
				<div>
					<img src={logo}></img>
				</div>
			</nav>
		</div>
	);
}

export default App;
