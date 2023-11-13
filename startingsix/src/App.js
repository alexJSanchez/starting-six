import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./assets/icon-hamburger.svg";
import planet from "./assets/planet-mercury.svg";
import { pokemon, randomSix } from "./data.js";

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPoke, setCurrentPoke] = useState();

	useEffect(() => {
		const requests = pokemon.map((url) => axios.get(url.url));
		axios.all(requests).then((Responses) => {
			let finalData = [];
			Responses.forEach((resp, index) => {
				finalData.push({
					name: pokemon[index].name,
					data: resp.data,
				});
			});
			setData(finalData);
			setLoading(false);
		});
	}, []);

	return (
		<>
			<div className="App bg-mysterious pb-12">
				<nav className="flex justify-between items-center px-[1.5rem] py-4 border-b-[1px] border-opacity-[0.2] border-white">
					<p className="header-two text-[1.5rem]">Starting Six</p>
					<div>
						<img src={logo}></img>
					</div>
				</nav>
				<main className="bg-mysterious text-white">
					{/* top */}
					{loading ? (
						<div className="btn flex justify-center">loading data</div>
					) : (
						<>
							<div className="grid grid-cols-3">
								{randomSix.map((num) => {
									return (
										<button
											onClick={() => setCurrentPoke(data[num])}
											className="btn flex items-center justify-center border-[1px] border-opacity-[0.2] border-white "
										>
											{data[num].name}
										</button>
									);
								})}
							</div>
							{/* middle */}
							<div className="flex flex-col items-center justify-center">
								<img src={planet} className="px-[132px] py-24" />
								<h2 className="header-two">pokemon name</h2>
								<p className="description px-9 pt-4 pb-8">
									Pokemon description
								</p>
							</div>
							{/*bottom*/}
							<div className="grid gap-4 px-6">
								<button className="flex border opacity-50 items-center px-6 py-4 justify-between">
									<p className="body-two">pokemon weight</p>
									<p>58.6 days</p>
								</button>

								<button className="flex border opacity-50 items-center px-6 py-4 justify-between">
									<p className="body-two">ROTATION TIME</p>
									<p>58.6 days</p>
								</button>
								<button className="flex border opacity-50 items-center px-6 py-4 justify-between">
									<p className="body-two">ROTATION TIME</p>
									<p>58.6 days</p>
								</button>
								<button className="flex border opacity-50 items-center px-6 py-4 justify-between">
									<p className="body-two">ROTATION TIME</p>
									<p>58.6 days</p>
								</button>
							</div>
						</>
					)}
				</main>
			</div>
		</>
	);
}

export default App;
