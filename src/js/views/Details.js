import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsImg from "../../img/star_wars_img.jpg";

export const Details = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getInfoDetails(params.uid, params.endpoint);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={starWarsImg} className="img-top" alt="..." style={{width:"600", height:"400" }} />
        </div>
        <div className="col">
          <h2>
            {store.details && store.details.properties.name}
          </h2>
            <p>
            {store.details && store.details.description}
            </p>
        </div>
      </div>
	  <hr className="linea" style={{color:"black", widht:"100%", height:"5px"}}></hr>
	  <div className="row">
	
		<div className="col fw-bold">
			<h3 className="text-danger">Name</h3>
			{store.details && store.details.properties.name}
		</div>
		
		<div className="col fw-bold">
		<h3 className="text-danger">{params.endpoint == "people" ? "Birth": params.endpoint == "planets" ? "Diameter": "Model"}</h3>
		{params.endpoint == "people" ? store.details && store.details.properties.birth_year : params.endpoint == "planets" ? store.details && store.details.properties.diameter : store.details && store.details.properties.model}
		</div>
		
		<div className="col fw-bold">
		<h3 className="text-danger">{params.endpoint == "people" ? "Gender": params.endpoint == "planets" ? "Gravity": "vehicle_class"}</h3>
		{params.endpoint == "people" ? store.details && store.details.properties.gender : params.endpoint == "planets" ? store.details && store.details.properties.gravity : store.details && store.details.properties.vehicle_class}

		</div>
		
		<div className="col fw-bold">
		<h3 className="text-danger">{params.endpoint == "people" ? "Height": params.endpoint == "planets" ? "Climate": "cargo_capacity"}</h3>
		{params.endpoint == "people" ? store.details && store.details.properties.height : params.endpoint == "planets" ? store.details && store.details.properties.climate : store.details && store.details.properties.cargo_capacity}

		</div>
		
		<div className="col fw-bold">
		<h3 className="text-danger">{params.endpoint == "people" ? "Skin color": params.endpoint == "planets" ? "Terrain": "manufacturer"}</h3>
		{params.endpoint == "people" ? store.details && store.details.properties.skin_color : params.endpoint == "planets" ? store.details && store.details.properties.terrain : store.details && store.details.properties.manufacturer}
		</div>
		
		<div className="col fw-bold">
		<h3 className="text-danger">{params.endpoint == "people" ? "Eye color": params.endpoint == "planets" ?"orbital_period": "length"}</h3>
		{params.endpoint == "people" ? store.details && store.details.properties.eye_color : params.endpoint == "planets" ? store.details && store.details.properties.orbital_period : store.details && store.details.properties.length}
		</div>
	  </div>
    </div>
  );
};
