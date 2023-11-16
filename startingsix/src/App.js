import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./assets/images/pokemon_bw_ball.png";
import bug from "./assets/images/bug.png";
import typeImage from "./typeimage.js";
import {
	pokemon,
	randomSix,
	extractFirstWord,
	percentageCalculator,
} from "./data.js";

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPoke, setCurrentPoke] = useState();

	function refreshPage() {
		window.location.reload(false);
	}
	useEffect(() => {
		const fetchData = async () => {
			try {
				const pokemonResponses = await axios.all(
					pokemon.map((url) => axios.get(url.url))
				);

				let finalData = [];

				pokemonResponses.forEach((resp, index) => {
					finalData.push({
						name: pokemon[index].name,
						data: resp.data,
					});
				});

				setData(finalData);
				setCurrentPoke(finalData[randomSix[0]]);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<div className="App h-screen bg-mysterious pb-12">
				<nav className="flex justify-between items-center px-[1.5rem] py-4 border-b-[1px] border-opacity-[0.2] border-white">
					<p className="header-two text-[1.5rem]">Starting Six</p>
					<div>
						<img onClick={refreshPage} className="w-7" src={logo}></img>
					</div>
				</nav>
				<main className="bg-mysterious text-white">
					{/* top */}
					{loading ? (
						<div className="btn flex justify-center h-screen">loading data</div>
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
							<div className="md:grid grid-cols-2 justify-content items-center md:mx-4">
								<div className="flex flex-col items-center justify-center">
									<img
										src={currentPoke.data.sprites.front_default}
										className="w-[75%] rotate-vert-center"
										alt="pokemon sprite"
									/>
									<h2 className="header-two">{currentPoke.name}</h2>
									<h2 className="header-four">{currentPoke.data.id}</h2>
									<div className="flex gap-4 header-four py-4">
										{currentPoke.data.types.map((type) => {
											return <p className="description">{type.type.name}</p>;
										})}
									</div>
								</div>
								{/*bottom*/}

								<div className="grid gap-4 px-6">
									<div id="stats container" className="">
										{currentPoke.data.stats.map((stat) => {
											return (
												<div className="grid flex-nowrap items-center">
													<p className=" ">
														{extractFirstWord(stat.stat.name)}
													</p>
													<div className="loader-container">
														<div
															className="loader-bar flex justify-end"
															style={{
																width: `${percentageCalculator(
																	stat.base_stat
																)}%`,
															}}
															id="loader-bar"
														>
															<p className="ml-4">{stat.base_stat}</p>
															<img src={logo} />
														</div>
													</div>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</>
					)}
				</main>
			</div>
		</>
	);
}

export default App;
