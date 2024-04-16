import Link from "next/link";
import Card from "./Card";

function ChildComponent() {
  return <p>Este é o componente filho.</p>;
}

export default function CompTest() {
  return (
    <div>
      <h1>Este é o componente pai</h1>
      <ChildComponent />
    </div>
  );
}
