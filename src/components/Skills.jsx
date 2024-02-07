import React from "react";

import Abogada from "../assets/Abogada.avif";
import Escrito from "../assets/Escrito.avif";
import Facturacion from "../assets/Facturacion.jpg";
import Iconos from "../assets/Iconos.png";
import Recepcion from "../assets/Recepcion.jpg";


const Skills = () =>{
const Skilss=[
[Recepcion,Escrito,Facturacion],
[Iconos,Abogada],
];

return (
    <div id="skills" className="container mx-auto p-8 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Mejorando Constantemente.</h2>
      <p  className=" cursive text-lg mb-3">Nunca dejes de aprender, nunca te rindas</p>

      {Skilss.map((level, index) => (
        <div key={index} className="flex justify-center mt-8">
          {level.map((tech, techIndex) => (
            <div key={techIndex} className="flex flex-col items-center">
              <img src={tech} alt={`Tech ${techIndex}`} className="w-16 h-16 mb-2" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;