import React from 'react';
import Ponzio from "../assets/Ponzio.png";
import Estudio from "../assets/Estudio.jpg";

const ProjectCard = ({ image, title, description }) => {
    return (
        <div id="projects" className="max-w-md mx-auto border border-[#040207] shadow-lg rounded-lg overflow-hidden mb-8">
          <img src={image} alt={title} className="w-full h-30 object-cover object-center" />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2 text-white">{title}</h2>
            <p className="mt-2 text-gray-300 mb-[20px]">{description}</p>
          </div>
        </div>
      );
};

const Empleos = () => {
  const projects = [
    {
      title:'Pizzas Ponzio',
      description:'Recepcion de clientes,Atencion telefonica,Recepcion de pedidos,Manejo de caja.Tareas Varias.',
      image:Ponzio,
    },
    {
    title:'Estudio Juridico Acosta-Baldani',
    description:'Recepcion de clientes,Atencion telefonica,Facturacion.Manejo de sistema SISFE Y de seguros.Redaccion de escritos administrativos y juridicos.',
    image:Estudio ,
    },
  
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-[40px] font-semibold text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-200 white-100 py-2 mb-[25px] ">Mis Empleos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Empleos;

