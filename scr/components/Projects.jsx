import React, { useState } from "react";

export default function Projects() {
  const [projects] = useState([
    {
      id: 1,
      name: "Portfólio React",
      description: "Meu site pessoal feito em React",
    },
    { id: 2, name: "Todo-List", description: "Lista de Tarefas diárias" },
    {
      id: 3,
      name: "Projeto Eduque",
      description:
        "Dashboard de atividades para proficionais da área da Educação",
    },
  ]);

  return (
    <section className="projects__2">
      <h2>Meus Projetos</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
