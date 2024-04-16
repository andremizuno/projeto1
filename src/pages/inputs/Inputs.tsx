import Globais from "@/components/Globais";
import Topo from "@/components/Topo";
import { useState } from "react";

const cursos = ["", "HTML", "React", "Next", "Javascript"];
const jcursos = [
  { curso: "HTML" },
  { curso: "React" },
  { curso: "Next" },
  { curso: "Javascript" },
];

export default function Inputs() {
  const [nome, setNome] = useState<string>("");
  const [curso, setCurso] = useState<string>("");

  function fcursos() {
    return cursos.map((c: any) => {
      return (
        <option key={c} value={c}>
          {c}
        </option>
      );
    });
  }

  const ccursos = jcursos.map((c: any) => {
    return (
      <option key={c.curso} value={c.curso}>
        {c.curso}
      </option>
    );
  });

  return (
    <div>
      <Topo />
      <div className="campoForm">
        <label>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(evt) => setNome(evt.target.value)}
        />
      </div>
      <div className="campoForm">
        <label>Curso</label>
        <select value={curso} onChange={(evt) => setCurso(evt.target.value)}>
          {ccursos}
        </select>
      </div>
      <div>Nome: {nome}</div>
      <div>Curso: {curso}</div>
      <div>
        <p>{Globais.canal}</p>
        <p>{Globais.curso}</p>
        <p>{Globais.ano}</p>
      </div>
    </div>
  );
}
