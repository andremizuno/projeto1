import DisplayState from "@/components/DisplayState";
import Topo from "@/components/Topo";
import { useEffect, useState } from "react";

export default function UseEffect() {
  const [cont, setCont] = useState<number>(0);
  const [aux, setAux] = useState<number>(0);

  useEffect(() => {
    alert("UseEffect disparou!");
  }, [aux]);

  function add() {
    let a = aux;
    a++;
    setAux(a);
  }

  return (
    <div>
      <Topo />
      <div>
        <p>{`Valor de cont: ${aux}`}</p>
        <button onClick={add}>Adicionar 1</button>
      </div>
    </div>
  );
}
