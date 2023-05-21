import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("")
	
	return (
		<>
		<div className="caja-1">
			<div className={color === "red" ? "red on" : "red"} onClick={() => setColor("red")}></div>
			<div className={color === "yellow" ? "yellow on" : "yellow"} onClick={() => setColor("yellow")}></div>
			<div className={color === "green" ? "green on" : "green"} onClick={() => setColor("green")}></div>
		</div>
		<div className="d-grid gap-2 col-2 mx-auto">
			<button type="button" class="btn btn-dark m-3" onClick={(event) => {
				if(color === "red"){
					setColor("yellow");
				} else if(color === "yellow"){
					setColor("green");
				} else if(color === "green"){
					setColor("red");
				}
			}}>Click me to change</button>
		</div>
		
		</>
	);
};

export default Home;
