import Card from "@/components/Card";
import Topo from "@/components/Topo";
import Router, { useRouter } from "next/router";

const produtos = [
  {
    id: 1,
    produto: "Mouse",
    valor: 35.0,
    desconto: 10.5,
    disponivel: true,
  },
  {
    id: 2,
    produto: "Teclado",
    valor: 35.0,
    desconto: 10,
    disponivel: false,
  },
  {
    id: 3,
    produto: "Monitor",
    valor: 35.0,
    desconto: 0,
    disponivel: true,
  },
  {
    id: 4,
    produto: "CPU",
    valor: 35.0,
    desconto: 0,
    disponivel: true,
  },
  {
    id: 5,
    produto: "Caixa de Som",
    valor: 351.0,
    desconto: 5,
    disponivel: true,
  },
];

function calcdesc(v: number, d: number) {
  return v - d;
}

function calcdesc2(v: number, d: number) {
  return v - d / 2;
}
export default function Produtos() {
  return (
    <div>
      <Topo />
      <div className="flex justify-center gap-3 ">
        {produtos.map((e) => {
          if (e.disponivel)
            return (
              <Card
                key={e.id}
                produto={e.produto}
                valor={e.valor}
                desconto={e.desconto}
                funcao={calcdesc}
              >
                <div>teste curso de react</div>
                <div>Mizuno Cursos</div>
              </Card>
            );
        })}
      </div>
    </div>
  );
}
