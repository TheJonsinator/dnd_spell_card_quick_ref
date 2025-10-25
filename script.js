
///Get Search input
 const search=document.querySelector("#spell-search");
 const field=document.querySelector(".spellfield")

    

/// Fetch Spells from API
    const getSpells= async (spellName="")=>{
        const response= await fetch(`https://www.dnd5eapi.co/api/2014/spells/${spellName}`);
        const data= await response.json();
        return data.results||data;; 
    };
/// Store Spells in Array
    let allSpells=[];
    (async()=>{
        allSpells=await getSpells();})();











/// Search Functionality
    search.addEventListener("keyup", () => {
        field.innerHTML="";
        
        allSpells.forEach(spell => {
            
            if(spell.name.toLowerCase().includes(search.value.toLowerCase())){
            let spellName=spell.index;
            getSpells(spellName).then(data=>{
                const name=data?.name||"N/A";
                const level=data?.level||"c";
                const casting_time=data?.casting_time||"N/A";
                const range=data?.range||"N/A";
                const components=data?.components||"N/A";
                const duration=data?.duration||"N/A";
                const damagelevel=data.damage?.damage_at_slot_level?.[data.level]||"N/A";
                const damagechlevel=data.damage?.damage_at_character_level||"N/A";
                if(damagelevel==="N/A"&&damagechlevel!=="N/A"){generateSpellCards(name,level,casting_time,range,components,duration,damagechelevel)}
                else if(damagelevel!=="N/A"&&damagechlevel==="N/A"){generateSpellCards(name,level,casting_time,range,components,duration,damagelevel)}
                else if(damagelevel==="N/A"&&damagechlevel==="N/A"){generateSpellCards(name,level,casting_time,range,components,duration,"No Damage")}
            });
              }})});




///Generate Spell Cards
function generateSpellCards(name,level,casting_time,range,components,duration,damage){
    field.innerHTML+=`
    <div class="main-card">
        
    <div class="main-card-body">
        <div id="level" class="level-sphere">
        <p  class="level-int">${level}</p>
     </div>
        <div class="main-window">
            <div class="title-window">
                <h1 class ="title">${name}</h1>
            </div>
            
            <div>

            </div>
        </div>
        <div class="info-screen">
        <ul class="values">
            <li class="value">Damage: ${damage}</li>
            <li class="value">Casting Time: ${casting_time}</li>
            <li class="value">Range: ${range}</li>
            <li class="value">Components: ${components} </li>
            <li class="value">Duration: ${duration}</li>
        </ul>
        </div>
    
    </div>
    </div>`             

}




