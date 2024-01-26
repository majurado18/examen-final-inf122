"use client"
import Imagen from "next/image";
import style from "./Pokemon.module.css";
import { useEffect, useState } from "react";

function Pokemon(){   
    const[poke, setPoke]=useState("/vercel.svg");
    const[nombre, setNombre]=useState("nom");
    const[dato, setDato]=useState("dato");
    const[altura, setAltura]=useState("alt");
    const[peso, setPeso]=useState("pes");
    const[habita, setHabita]=useState("hab");
    const url="https://pokeapi.co/api/v2/pokemon/swampert";
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{setPoke(data.sprites.front_default)
        setNombre(data.forms[0].name)
        setDato(data.types[0].type.name)
        setAltura(data.height)
        setPeso(data.weight)
        setHabita(data.abilities[0].ability.name)
            })
        },[])
    return(
        <div className={style.main}>
            <div className={style.conteiner}>
                <h1>My Pokemon</h1>
                <div className={style.containerimg}>
                    <h1>{nombre}</h1>
                    <Imagen src={poke} alt="dog" width={250} height={250}/>
                </div>
                <div className={style.date}>
                    <h1>Tipo</h1>
                    <h1>Nombre:  {nombre}</h1>
                    <h1>Type:    {dato}</h1>
                    <h1>Height:  {altura} </h1>
                    <h1>Weight {peso}</h1>
                    <h1></h1>
                </div>
            </div>
        </div>
    );
}
export default Pokemon;