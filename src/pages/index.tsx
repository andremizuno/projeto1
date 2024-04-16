import Card from "@/components/Card";
import CompTest from "@/components/CompTest";
import Topo from "@/components/Topo";

export default function Home() {
  return (
    <main>
      <Topo />
      <div>================</div>
      <div style={testecss}>
        <div>Curso de React Next</div>
        <div>Typescript</div>
        <div style={{ color: "#f00", backgroundColor: "#bbb" }}>React</div>
      </div>
    </main>
  );
}

const testecss = {
  display: "flex",
  justifyContent: "center",
  alignItens: "center",
  color: "#00f",
  backgroundColor: "#dfdede",
  fontSize: "20px",
};
