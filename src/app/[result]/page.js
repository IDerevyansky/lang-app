import Image from "next/image";

export default function result({ params }) {

  return (
    <main className="main center-content">
      <p>{params.result}</p>
    </main>
  );
  
}
 