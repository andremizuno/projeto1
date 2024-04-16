import DisplayState from "@/components/DisplayState";
import Topo from "@/components/Topo";
import { useState } from "react";

export default function UseState() {
  const [cont, setCont] = useState<number>(10);
  let count = 10;

  return (
    <div>
      <Topo />
      Usestate
      <DisplayState valor={cont} fvalor={setCont}></DisplayState>
    </div>
  );
}
