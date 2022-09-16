import React, {useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Card from "../component/Card.js";


export const Home = () => {
	const {store, actions} = useContext(Context)
	useEffect(()=>{
		actions.getInfo()
	},[])

	const perUrl = "https://starwars-visualguide.com/assets/img/characters/";
	const vehUrl = "https://starwars-visualguide.com/assets/img/vehicles/";
	const plaUrl = "https://starwars-visualguide.com/assets/img/planets/";

	return(
	<div className="container">
		
		<h1 className="text-dark fw-bold">Personajes</h1>
		<div className="d-flex flex-row flex-nowrap overflow-auto">
			{store.characters && store.characters.map((alien)=> {
				return <Card key={alien.uid} item={alien} endpoint="people" imagen={perUrl}/>
			})}
		</div>
		
		<h1 className="text-dark fw-bold">Planetas</h1>
		<div className="d-flex flex-row flex-nowrap overflow-auto">
			{store.planets && store.planets.map((planet)=> {
				return <Card key={planet.uid} item={planet} endpoint="planets" imagen={plaUrl}/>
			})}
		</div>
		
		<h1 className="text-dark fw-bold">Vehiculos</h1>
		<div className="d-flex flex-row flex-nowrap overflow-auto">
			{store.vehicles && store.vehicles.map((vehicle)=> {
				return <Card key={vehicle.uid} item={vehicle} endpoint="vehicles" imagen={vehUrl}/>
			})}
		</div>
	</div>
)};
