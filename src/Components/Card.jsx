import React from "react";

export default function card(props) {
  return (
    <div className="card mx-auto text-white bg-dark" style={{ width: "18rem" }}>
      <img src={props.imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text">{props.descripcion}</p>
        <p className="card-text1">{props.puntaje}</p>
      </div>
    </div>
  );
}
