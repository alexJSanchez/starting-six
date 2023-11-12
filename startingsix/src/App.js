import logo from "./assets/icon-hamburger.svg";

function App() {
	return (
		<div className="App bg-[#000000] ">
			<nav className="flex justify-between items-center px-[1.5rem] py-4 border-b-[1px] border-opacity-[0.2] border-white">
				<p className="header-two text-[1.5rem]">The Planets</p>
				<div>
					<img src={logo}></img>
				</div>
			</nav>
			<main className="bg-black ">hello my friend</main>
		</div>
	);
}

export default App;
