import { useRouter } from "next/router";

interface CardProps {
  produto: string;
  valor: number;
  desconto: number;
  funcao: any;
  children: any;
}

function calcularDesconto(valor: number, desconto: number) {
  return (valor - valor * desconto).toPrecision(4);
}
function calcularValorDesconto(valor: number, desconto: number) {
  return (valor * desconto).toPrecision(4);
}

function componenteFilho() {
  return <div>componente filho</div>;
}

export default function Card(props: CardProps) {
  // captura parametros
  const { query } = useRouter();
  console.log(query);
  return (
    <div
      className={`flex flex-col border-4 ${
        props.desconto > 0 ? "border-red-700" : "border-blue-700"
      } rounded-sm p-1`}
    >
      <div>Produto: {props.produto}</div>
      <div>Valor: {props.valor}</div>

      {props.desconto > 0 && (
        <div>
          <div>Desconto: {props.desconto}</div>
          <div>Preço de venda: {props.funcao(props.valor, props.desconto)}</div>
        </div>
      )}
      <div>{props.children[0]}</div>
    </div>
  );
}
