import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/starWarsLogo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const {store,actions} = useContext(Context)
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <div className="container ">
        <Link to="/">
          <img style={{ width: "60px" }} src={starWarsLogo}></img>
          <span className="navbar-brand text-white fw-bold">StarWars</span>
        </Link>
        <div className="ml-auto">
          <div className="dropdown">
            <button
              className="btn btn-dark dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favoritos <span className="badge bg-secondary">{store.favorites.length}</span>
            </button>
            <ul className="dropdown-menu">
             {store.favorites.map((favorite,index) =>{
              return (
                <li className="d-flex align-item-center" key={index}>
                  <Link to ={favorite.url} className="dropdown-item">{favorite.favName}</Link>
                  <i className="far fa-trash-alt pe-2" onClick={()=>{actions.removeFavorite(index)}}></i>
                </li>
              )
             })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
