interface DispProps {
  valor: number;
  fvalor: any;
}

export default function DisplayState(props: DispProps) {
  function operacao(op: number): void {
    let c = props.valor;
    c += op;
    props.fvalor(c);
  }

  return (
    <div className="flex flex-col p-5 rounded-md bg-zinc-300 items-center w-[300px]">
      <div className="flex bg-black text-green-500 justify-center items-center w-[200px] mb-3">
        {props.valor}
      </div>
      <div className="flex gap-5">
        <button className="btnPadrao" onClick={() => operacao(1)}>
          Plus 1
        </button>
        <button className="btnPadrao" onClick={() => operacao(-1)}>
          Minus 1
        </button>
      </div>
    </div>
  );
}
