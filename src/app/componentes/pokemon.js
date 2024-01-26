"use client"
import Imagen from "next/image";
import style from "./pokemon.module.css";
import { useEffect, useState } from "react";

function Pokemon(){   
    const[poke, setPoke]=useState("/vercel.svg");
    const[nombre, setNombre]=useState("nom");
    const[dato, setDato]=useState("dato");
    const[altura, setAltura]=useState("alt");
    const[peso, setPeso]=useState("pes");
    const[habita, setHabita]=useState("hab");
    const[hab, setHab]=useState("habi");
    const[estadistica, setEstadistica]=useState("est");
    const[estadisticas, setEstadisticas]=useState("est");
    const[estad, setEstad]=useState("est");
    const[estadi, setEstadi]=useState("est");
    const[estado, setEstado]=useState("est");
    const[estada, setEstada]=useState("est");
    const[estadu, setEstadu]=useState("est");
    const[estadit, setEstadit]=useState("est");
    const url="https://pokeapi.co/api/v2/pokemon/1";
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{setPoke(data.sprites.front_default)
        setNombre(data.forms[0].name)
        setDato(data.types[0].type.name)
        setAltura(data.height)
        setPeso(data.weight)
        setHabita(data.abilities[0].ability.name)
        setHab(data.abilities[1].ability.name)
        setEstadistica(data.stats[0].stat.name)
        setEstadisticas(data.stats[0].base_stat)
        setEstad(data.stats[1].stat.name)
        setEstadi(data.stats[1].base_stat)
        setEstado(data.stats[2].stat.name)
        setEstada(data.stats[2].base_stat)
        setEstadu(data.stats[5].stat.name)
        setEstadit(data.stats[5].base_stat)
            })
        },[])
    return(
        <div className={style.main}>
            <div className={style.conteiner}>
                <h1>My Pokemon</h1>
                <div className={style.containerimg}>
                    <h1>{nombre}  </h1>
                    <div className={style.num}>
                        <p>#260</p>
                    </div>
                    
                    <Imagen src={poke} alt="260" width={250} height={250}/>
                </div>
                <div className={style.date}>
                    <h1>About</h1> 
                    <h1>type:    {dato}</h1>
                    <h1>Height:  {altura}m </h1>
                    <h1>Weight {peso}kg</h1>
                    <h1>Abilities: {hab}, {habita}</h1>
                </div>
                <div className={style.stast}>

                    <h1> Stats</h1>
                    <h1>{estadistica}:  {estadisticas} </h1>
                    <h1>{estad}:  {estada} </h1>
                    <h1>{estado}:  {estadi} </h1>
                    <h1>{estadu}:  {estadit} </h1>
                </div>
            </div>
        </div>
    );
}
export default Pokemon;