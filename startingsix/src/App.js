import logo from "./assets/icon-hamburger.svg";

function App() {
	return (
		<div className="App bg-[#000000] bg-contain bg-no-repeat">
			<nav className="flex justify-between items-center px-[1.5rem] py-4">
				<p className="header-two text-[1.5rem]">The Planets</p>
				<div>
					<img src={logo}></img>
				</div>
			</nav>
		</div>
	);
}

export default App;
