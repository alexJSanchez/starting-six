import bug from "./assets/images/bug.png";
import dark from "./assets/images/dark.png";
import dragon from "./assets/images/dragon.png";
import electric from "./assets/images/electric.png";
import fairy from "./assets/images/fairy.png";
import fighting from "./assets/images/fighting.png";
import fire from "./assets/images/fire.png";
import flying from "./assets/images/flying.png";
import ghost from "./assets/images/ghost.png";
import grass from "./assets/images/grass.png";
import ground from "./assets/images/ground.png";
import ice from "./assets/images/ice.png";
import normal from "./assets/images/normal.png";
import poison from "./assets/images/poison.png";
import psychic from "./assets/images/psychic.png";
import rock from "./assets/images/rock.png";
import steel from "./assets/images/steel.png";
import water from "./assets/images/water.png";

function typeImage(type) {
	switch (type) {
		case "bug":
			return bug;
		case "dark":
			return dark;
		case "dragon":
			return dragon;
		case "electric":
			return electric;
		case "fairy":
			return fairy;
		case "fighting":
			return fighting;
		case "fire":
			return fire;
		case "flying":
			return flying;
		case "ghost":
			return ghost;
		case "grass":
			return grass;
		case "ground":
			return ground;
		case "ice":
			return ice;
		case "normal":
			return normal;
		case "poison":
			return poison;
		case "psychic":
			return psychic;
		case "rock":
			return rock;
		case "steel":
			return steel;
		case "water":
			return water;
		default:
	}
}
export default typeImage;
