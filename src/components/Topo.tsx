import Link from "next/link";
import Card from "./Card";

export default function Topo() {
  return (
    <div className="flex flex-col justify-between items-center bg-zinc-300 h-[100]">
      <div>Logo</div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl">Portfolio Mizuno</div>
        <div className="subtitulo">Curso de React Node.js</div>
      </div>
      <nav className="myContainer">
        <Link className="myBox" href={"/"}>
          Home
        </Link>
        <Link
          className="myBox"
          href={{
            pathname: "/produtos/Produtos",
            query: { nome: "Mizuno", curso: "React Next" },
          }}
        >
          Produtos
        </Link>
        <Link className="myBox" href={"/datafetching/DataFetching"}>
          Data Fetching
        </Link>
        <Link className="myBox" href={"/usestate/UseState"}>
          UseState
        </Link>
        <Link className="myBox" href={"/useeffect/UseEffect"}>
          UseEffect
        </Link>
        <Link className="myBox" href={"/inputs/Inputs"}>
          Inputs
        </Link>
        <Link className="myBox" href={"/filtragem/Filtragem"}>
          Filtragem
        </Link>
        <Link className="myBox" href={"/calcimc/Calcimc"}>
          Calcimc
        </Link>
      </nav>
    </div>
  );
}
