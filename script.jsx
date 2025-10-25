import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
///Get Search input
 const search=document.querySelector("#spell-search");

    

/// Fetch Spells from API
    const getSpells= async ()=>{
        const response= await fetch(`https://www.dnd5eapi.co/api/2014/spells/`);
        const data= await response.json();
        return data.results; 
    };
/// Store Spells in Array
    let allSpells=[];
    (async()=>{
        allSpells=await getSpells();})();











/// Search Functionality
    search.addEventListener("keyup", () => {
        allSpells.forEach(spell => {
            if(spell.name.toLowerCase().includes(search.value.toLowerCase())){
                console.log(spell.name);
            }})});




///Generate Spell Cards
    const generateSpellCards= async () =>{
        
    }




    createRoot(document.getElementById("root")).render();