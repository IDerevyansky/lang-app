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

        <div className="lng-box">

          <div className={select=='en-US'?'label-select':'label'} onClick={()=>(setSelect('en-US'))} >
          🇺🇸 English
          </div>

          <div className={select=='es-ES'?'label-select':'label'} onClick={()=>(setSelect('es-ES'))}>
          🇪🇸 Spanish
          </div>

        </div>


      <Link href={"/"+ select.slice(0,2)} className="btn">Делее</Link>


    </main>
  );
}
