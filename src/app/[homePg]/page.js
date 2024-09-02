import Image from "next/image";

export default function homePg({ params }) {

  return (
    <main className="main center-content">
      <p>{params.homePg}</p>
    </main>
  );
  
}
 