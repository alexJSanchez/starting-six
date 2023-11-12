import logo from "./assets/icon-hamburger.svg";

function App() {
	return (
		<div className="App bg-mysterious ">
			<nav className="flex justify-between items-center px-[1.5rem] py-4 border-b-[1px] border-opacity-[0.2] border-white">
				<p className="header-two text-[1.5rem]">The Planets</p>
				<div>
					<img src={logo}></img>
				</div>
			</nav>
			<main className=" bg-mysterious text-white">
				<div className="grid">
					<button className="flex pl-7 py-3 border-[1px] border-opacity-[0.2] border-white">
						<p>01</p>button
					</button>
					<button className="flex pl-7 py-3 border-[1px] border-opacity-[0.2] border-white">
						<p>02</p>button
					</button>
					<button className="flex pl-7 py-3 border-[1px] border-opacity-[0.2] border-white">
						<p>03</p>button
					</button>
					<button className="flex pl-7 py-3 border-[1px] border-opacity-[0.2] border-white">
						<p>04</p>button
					</button>
					<button className="flex pl-7 py-3 border-[1px] border-opacity-[0.2] border-white">
						<p>05</p>button
					</button>
					<button className="flex pl-7 py-3 border-[1px] border-opacity-[0.2] border-white">
						<p>06</p>button
					</button>
				</div>
			</main>
		</div>
	);
}

export default App;
