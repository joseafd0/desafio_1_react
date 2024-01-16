import React from "react";
import "./MyCard.css";
import Tags from "../Tags/Tags";

const perritos = [
  {
    foto: "https://cdn.pixabay.com/photo/2022/03/30/11/12/dog-7101015_1280.jpg",
    nombre: "Luna",
    descripcion: "Juguetona, muy energica, llena de amor",
    raza: "Border Collie",
  },
  {
    foto: "https://cdn.pixabay.com/photo/2022/04/05/20/21/jack-russell-terrier-7114378_1280.jpg",
    nombre: "Tonny",
    descripcion: "Tranquilo y pacifico, le gusta dormir",
    raza: "Jack Russell Terrier",
  },
  {
    foto: "https://cdn.pixabay.com/photo/2017/09/15/19/49/dog-2753369_1280.jpg",
    nombre: "Max",
    descripcion: "Muy alegre, le encanta correr y hacer ejercicio",
    raza: "Golden Retriever",
  },
  {
    foto: "https://cdn.pixabay.com/photo/2019/02/07/16/26/cocker-spaniel-3981587_1280.jpg",
    nombre: "Pamela",
    descripcion: "Totalmente engreida, solo sabe dar cariño",
    raza: "Cocker",
  },
];

const MyCard = () => {
  return (
    <>
      <div className="grid">
        {perritos.length > 0 &&
          perritos.map((tag, index) => (
            <Tags
              key={index}
              foto={tag.foto}
              nombre={tag.nombre}
              descripcion={tag.descripcion}
              raza={tag.raza}
            />
          ))}
      </div>
    </>
  );
};

export default MyCard;
