import React from "react";
import PropTypes from "prop-types";
import "./Tags.css";

const Tags = ({ foto, nombre, descripcion, raza }) => {
  return (
    <>
      <div className="card card-perritos">
        <img src={foto} className="card-img-top" alt="foto" />
        <div className="card-body">
          <h5 className="card-title">{nombre} </h5>
          <p className="card-text">{descripcion}</p>
          <a href="#" className="btn btn-primary">
            {raza}
          </a>
        </div>
      </div>
    </>
  );
};

Tags.propTypes = {
  nombre: PropTypes.string,
  descripcion: PropTypes.string,
  raza: PropTypes.string,
};

Tags.defaultProps = {
  nombre: "Nombre por Default",
  descripcion: "Descripcion por Default",
  raza: "Raza por Default",
};

export default Tags;
