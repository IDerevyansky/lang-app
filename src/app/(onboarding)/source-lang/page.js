import Image from "next/image";
import Link from "next/link";

export default function srcLng() {
  return (
    <main className="main center-content">

      <div className="padding">
        <h3>Выбери свой родной язык</h3>
        <p>А хотя не надо! Мы и так знаем, что он Русский 🇷🇺</p>
      </div>

      <Link href="/target-lang" className="btn">Делее</Link>

    </main>
  );
}
