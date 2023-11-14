import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./assets/icon-hamburger.svg";
import bug from "./assets/images/bug.png";
import typeImage from "./typeimage.js";
import { pokemon, randomSix } from "./data.js";

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPoke, setCurrentPoke] = useState();

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
						<img src={logo}></img>
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
							<div className="flex flex-col items-center justify-center">
								<img
									src={currentPoke.data.sprites.front_default}
									className="w-[400px] rotate-vert-center"
								/>
								<h2 className="header-two">{currentPoke.name}</h2>
								<p className="description px-9 pt-4 pb-8">description</p>
							</div>
							{/*bottom*/}
							<div className="grid gap-4 px-6">
								<div class="loader-container">
									<div class="loader-bar" id="loader-bar"></div>
								</div>
								<div className="flex border  gap-2 justify-center items-center px-6 py-4">
									{currentPoke.data.types.map((type) => {
										return (
											<img
												className="w-20"
												src={typeImage(type.type.name)}
											></img>
										);
									})}
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
