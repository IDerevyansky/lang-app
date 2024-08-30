"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function TargetLang() {

  const [select, setSelect] =  useState(' ');

  return (
    <main className="main center-content">

      <div className="padding">
        <h3>Выбор языка</h3>
        <p>Выбери язык который хочешь учить</p>
      </div>

        <div className={select=='English'?'label-select':'label'} onClick={()=>(setSelect('English'))} >
        🇺🇸 English
        </div>

        <div className={select=='Spanish'?'label-select':'label'} onClick={()=>(setSelect('Spanish'))}>
        🇪🇸 Spanish
        </div>


      <Link href="/target-lang" className="btn">Делее</Link>

    </main>
  );
}
