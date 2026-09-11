const animalImages={cow:'assets/cow-natural-thumb.jpg',pig:'assets/pig-natural-thumb.jpg',chicken:'assets/chicken-natural-thumb.jpg'};
const sceneImages={cow:'assets/scene-cow-natural.jpg',pig:'assets/scene-pig-natural.jpg',chicken:'assets/scene-chicken-natural.jpg'};
const actionImages=['assets/feed-rich.jpg','assets/water-rich.jpg','assets/brush-rich.jpg','assets/pasture-rich.jpg'];

const animals={
 cow:{name:'Kuh',needs:['passendes Futter','viel frisches Wasser','Platz und Bewegung','Ruhe und einen sauberen Liegeplatz','Pflege und Beobachtung'],scenes:[
  {need:'Hunger',text:'Der Futtertrog ist fast leer. Die Kuh schnuppert darin und sucht weiter.',observations:['Die Kuh hat Hunger.','Die Kuh ist müde.','Die Kuh möchte gebürstet werden.'],correctObservation:0,actions:[['Passendes Futter geben','Richtig: Der leere Trog und das Suchen zeigen, dass die Kuh Futter braucht.',{food:28,well:8},true],['Nur Wasser nachfüllen','Wasser ist wichtig, aber der Hunger bleibt.',{water:10,food:-10},false],['Die Kuh bürsten','Das kann angenehm sein, löst aber den Hunger nicht.',{well:4,food:-12},false],['Die Kuh nur nach draußen schicken','Bewegung ist gut, aber zuerst braucht sie Futter.',{well:4,food:-10},false]]},
  {need:'Durst',text:'Die Tränke ist fast leer. Die Kuh geht immer wieder dorthin und leckt am Rand.',observations:['Die Kuh hat Durst.','Die Kuh braucht mehr Stroh.','Die Kuh möchte schlafen.'],correctObservation:0,actions:[['Futter geben','Die Kuh bleibt durstig.',{food:8,water:-12},false],['Tränke reinigen und frisches Wasser geben','Richtig: Kühe brauchen viel sauberes Wasser.',{water:30,well:10},true],['Die Kuh bürsten','Das hilft gegen Durst nicht.',{well:2,water:-13},false],['Nur die Stalltür öffnen','Bewegung ersetzt kein Wasser.',{well:3,water:-12},false]]},
  {need:'Bewegung',text:'Die Kuh steht schon lange im Stall. Sie läuft unruhig hin und her.',observations:['Die Kuh braucht Platz und Bewegung.','Die Kuh braucht mehr Futter.','Die Kuh hat kalte Füße.'],correctObservation:0,actions:[['Noch mehr Futter geben','Mehr Futter ersetzt Bewegung nicht.',{food:8,well:-4},false],['Nur Wasser kontrollieren','Wasser ist wichtig, aber die Kuh braucht jetzt Bewegung.',{water:8,well:-4},false],['Nur bürsten','Das ist nett, aber Bewegung fehlt weiterhin.',{well:3},false],['Für Bewegung und ausreichend Platz sorgen','Richtig: Bewegung und Platz gehören zum Wohlbefinden.',{well:24},true]]},
  {need:'Pflege',text:'Das Fell ist stark verschmutzt. Die Kuh scheuert sich immer wieder am Gatter.',observations:['Die Kuh sollte gepflegt und genau angeschaut werden.','Die Kuh hat bestimmt Hunger.','Die Kuh braucht ein Spielzeug.'],correctObservation:0,actions:[['Nur füttern','Futter ist nicht das aktuelle Problem.',{food:8,well:-4},false],['Nur Wasser geben','Wasser ist wichtig, hilft hier aber nicht direkt.',{water:8,well:-4},false],['Die Kuh pflegen und prüfen, ob Haut und Fell gesund sind','Richtig: Pflege heißt auch genau beobachten, ob etwas nicht stimmt.',{well:23},true],['Die Kuh einfach in Ruhe lassen','Dann wird das Problem nicht geklärt.',{well:-15},false]]},
  {need:'Ruhe und Sauberkeit',text:'Es wird Abend. Im Liegebereich ist Stroh feucht und verschmutzt.',observations:['Die Kuh braucht einen sauberen, trockenen Ruheplatz.','Die Kuh braucht noch eine Mahlzeit.','Die Kuh möchte auf den Hof laufen.'],correctObservation:0,actions:[['Liegeplatz sauber und trocken machen und alles kontrollieren','Richtig: Zur guten Tierpflege gehören Sauberkeit, Ruhe und die tägliche Kontrolle.',{food:8,water:8,well:18},true],['Nur die Tür schließen','Das reicht als Versorgung nicht aus.',{well:-7},false],['Nur noch einmal füttern','Der Liegeplatz bleibt unangenehm.',{food:10,well:-6},false],['Schnell nach Hause gehen','Ohne Kontrolle kannst du ein Problem übersehen.',{food:-6,water:-6,well:-9},false]]}
 ]},
 pig:{name:'Schwein',needs:['passendes Futter','frisches Wasser','Beschäftigung und Möglichkeiten zum Wühlen','einen trockenen, sauberen Liegeplatz','Ruhe und Beobachtung'],scenes:[
  {need:'Durst',text:'Das Schwein hat gefressen. Die Tränke ist aber leer und es sucht dort immer wieder.',observations:['Das Schwein hat Durst.','Das Schwein hat noch Hunger.','Das Schwein möchte schlafen.'],correctObservation:0,actions:[['Noch mehr Futter geben','Das Schwein braucht gerade kein zusätzliches Futter.',{food:5,water:-12},false],['Tränke prüfen und frisches Wasser geben','Richtig: Sauberes Wasser ist ein Grundbedürfnis.',{water:30,well:10},true],['Das Schwein bürsten','Das löst den Durst nicht.',{well:3,water:-12},false],['Es nur nach draußen schicken','Bewegung ersetzt kein Wasser.',{well:4,water:-12},false]]},
  {need:'Sauberkeit',text:'Der Liegebereich ist feucht und schmutzig. Das Schwein legt sich dort nicht hin.',observations:['Der Liegeplatz ist unangenehm und muss sauber werden.','Das Schwein braucht mehr Futter.','Das Schwein möchte spielen.'],correctObservation:0,actions:[['Futter nachlegen','Der Liegeplatz bleibt ungeeignet.',{food:10,well:-8},false],['Nur Wasser geben','Wichtig, aber der nasse Liegeplatz bleibt.',{water:10,well:-7},false],['Einstreu wechseln und den Bereich sauber machen','Richtig: Ein trockener Liegeplatz gehört zum Wohlbefinden.',{well:25},true],['Nichts tun','Dann bleibt die Situation unangenehm.',{well:-17},false]]},
  {need:'Beschäftigung',text:'Das Schwein läuft immer wieder am Zaun entlang. Es kann kaum wühlen oder suchen.',observations:['Das Schwein braucht Beschäftigung und Möglichkeiten zum Wühlen.','Das Schwein hat Durst.','Das Schwein ist zu satt.'],correctObservation:0,actions:[['Wühl- und Beschäftigungsmaterial anbieten','Richtig: Schweine brauchen Beschäftigung und Möglichkeiten zum Erkunden.',{well:24},true],['Nur mehr füttern','Futter ersetzt Beschäftigung nicht.',{food:8,well:-5},false],['Nichts verändern','Die Ursache bleibt bestehen.',{well:-10},false],['Das Schwein erschrecken, damit es sich bewegt','Das macht Stress und hilft nicht.',{well:-15},false]]},
  {need:'Hunger',text:'Der Futtertrog ist leer. Das Schwein sucht darin und läuft anschließend weiter.',observations:['Das Schwein hat Hunger.','Das Schwein ist krank.','Das Schwein möchte einen anderen Stall.'],correctObservation:0,actions:[['Passendes Futter geben','Richtig: Regelmäßiges, geeignetes Futter ist wichtig.',{food:28,well:8},true],['Nur Wasser geben','Wasser ist wichtig, aber Hunger bleibt Hunger.',{water:10,food:-12},false],['Nur den Stall sauber machen','Sauberkeit ist wichtig, ersetzt aber kein Futter.',{well:3,food:-12},false],['Nichts tun','Das Schwein bleibt hungrig.',{food:-20,well:-8},false]]},
  {need:'Ruhe und Kontrolle',text:'Es wird Abend. Das Schwein liegt ruhig, aber du hast Futter, Wasser und Stall noch nicht geprüft.',observations:['Vor Feierabend muss das Tier noch vollständig kontrolliert werden.','Das Schwein braucht jetzt unbedingt mehr Futter.','Wenn es liegt, muss man gar nichts mehr tun.'],correctObservation:0,actions:[['Futter, Wasser, Liegeplatz und Tier kontrollieren','Richtig: Gute Tierpflege heißt beobachten, kontrollieren und rechtzeitig handeln.',{food:10,water:10,well:14},true],['Ohne Kontrolle gehen','Dann könntest du ein Problem übersehen.',{food:-7,water:-7,well:-7},false],['Das Schwein noch einmal aufscheuchen','Ruhe gehört auch zum Wohlbefinden.',{well:-14},false],['Nur den Futtertrog ansehen','Eine Kontrolle sollte mehrere Bedürfnisse umfassen.',{well:2,food:-4,water:-4},false]]}
 ]},
 chicken:{name:'Huhn',needs:['geeignetes Futter','frisches Wasser','Scharr- und Beschäftigungsmöglichkeiten','einen sauberen und sicheren Stall','Ruhe und Schutz'],scenes:[
  {need:'Hunger',text:'Das Huhn pickt am leeren Futterplatz und sucht anschließend weiter.',observations:['Das Huhn hat Hunger.','Das Huhn braucht einen neuen Stall.','Das Huhn möchte schlafen.'],correctObservation:0,actions:[['Geeignetes Futter geben','Richtig: Hühner brauchen regelmäßig passendes Futter.',{food:28,well:8},true],['Nur Wasser geben','Wasser ist wichtig, aber das Huhn hat Hunger.',{water:10,food:-14},false],['Nur den Stall fegen','Das ist sinnvoll, löst aber den Hunger nicht.',{well:3,food:-13},false],['Nichts tun','Der Hunger bleibt.',{food:-20,well:-8},false]]},
  {need:'Durst',text:'Die Tränke ist umgekippt. Im restlichen Wasser liegt Schmutz.',observations:['Das Huhn braucht sauberes Wasser.','Das Huhn braucht mehr Körner.','Das Huhn möchte scharren.'],correctObservation:0,actions:[['Futter streuen','Das Huhn bleibt durstig.',{food:10,water:-14},false],['Tränke reinigen und frisch füllen','Richtig: Sauberes Wasser ist wichtig und sollte gut erreichbar sein.',{water:30,well:10},true],['Nur den Stall ansehen','Das Wasserproblem bleibt bestehen.',{water:-14},false],['Warten','Das Problem löst sich nicht von allein.',{water:-18,well:-8},false]]},
  {need:'Beschäftigung',text:'Der Auslauf ist kahl. Das Huhn läuft suchend hin und her und kann kaum scharren.',observations:['Das Huhn braucht Möglichkeiten zum Scharren und Erkunden.','Das Huhn hat zu viel getrunken.','Das Huhn braucht nur mehr Futter.'],correctObservation:0,actions:[['Scharrmaterial und Struktur anbieten','Richtig: Scharren und Erkunden gehören zum natürlichen Verhalten.',{well:24},true],['Nur mehr Futter geben','Futter ersetzt Beschäftigung nicht.',{food:8,well:-5},false],['Es in eine kleine Kiste setzen','Weniger Platz hilft nicht.',{well:-15},false],['Das Huhn erschrecken','Das macht Stress und hilft nicht.',{well:-14},false]]},
  {need:'Sauberkeit',text:'Im Stall liegt feuchte Einstreu. Das Huhn meidet diese Ecke.',observations:['Der Stall muss trocken und sauber werden.','Das Huhn braucht mehr Wasser.','Das Huhn möchte hinausgetragen werden.'],correctObservation:0,actions:[['Trocken einstreuen und sauber machen','Richtig: Ein sauberer, trockener Stall schützt und gibt Ruhe.',{well:25},true],['Nur Futter geben','Das Stallproblem bleibt bestehen.',{food:8,well:-8},false],['Nur Wasser geben','Wichtig, aber nicht das aktuelle Problem.',{water:8,well:-7},false],['Nichts tun','Dann bleibt die Ecke ungeeignet.',{well:-16},false]]},
  {need:'Sicherheit',text:'Es wird dunkel. Die Hühner gehen in Richtung Stall. Die Stalltür steht noch offen.',observations:['Die Hühner brauchen für die Nacht einen sicheren Stall.','Die Hühner brauchen jetzt unbedingt Futter.','Die Hühner möchten auf dem Hof bleiben.'],correctObservation:0,actions:[['Stall, Wasser, Futter und Sicherheit prüfen und den Stall schließen','Richtig: Am Abend zählen Sicherheit und die vollständige Kontrolle.',{food:10,water:10,well:15},true],['Nur die Eier zählen','Das sagt nichts darüber, ob es den Hühnern gut geht.',{well:-6},false],['Die Stalltür offen lassen','Nachts brauchen Hühner einen sicheren Platz.',{well:-15},false],['Schnell weggehen','Ohne Kontrolle kannst du Probleme übersehen.',{food:-7,water:-7,well:-7},false]]}
 ]}
};

let state={animal:null,day:0,food:72,water:72,well:72,score:0,observed:false,answered:false,learned:[]};
const $=id=>document.getElementById(id); const screens=['modeScreen','startScreen','stallSelectScreen','gameScreen','stallGameScreen','endScreen','stallEndScreen'];
function show(id){screens.forEach(s=>$(s).classList.toggle('active',s===id));}
function clamp(v){return Math.max(0,Math.min(100,v));}
function shuffledIndices(length){
 const arr=Array.from({length},(_,i)=>i);
 for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}
 return arr;
}
function selectAnimal(type){state={animal:type,day:0,food:72,water:72,well:72,score:0,observed:false,answered:false,learned:[]};show('gameScreen');renderDay();}
function renderTabs(){document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===state.animal));}
function renderDots(){const d=$('dayDots');d.innerHTML='';for(let i=0;i<5;i++){const s=document.createElement('span');s.className='day-dot'+(i<state.day?' done':i===state.day?' current':'');d.appendChild(s)}}
function renderDay(){
 const a=animals[state.animal],scene=a.scenes[state.day];
 renderTabs();renderDots();
 $('dayLabel').textContent=`Situation ${state.day+1} von 5`;
 $('statusTitle').textContent=`So geht es meiner ${a.name==='Kuh'?'Kuh':a.name==='Huhn'?'Henne':'Tier'}:`;
 $('situationText').textContent=scene.text;
 $('observeText').textContent='Schau auf das Verhalten und auf die Umgebung. Was könnte das Tier gerade brauchen?';
 $('animalPortrait').src=animalImages[state.animal];$('animalPortrait').alt='Gezeichnete '+a.name;
 $('sceneBg').src=sceneImages[state.animal];$('sceneCard').className='scene-card animal-'+state.animal;
 $('feedback').className='feedback';$('feedback').textContent='Beobachte zuerst genau.';
 $('nextBtn').disabled=true;state.observed=false;state.answered=false;renderMeters();
 const obs=$('observationGrid');obs.innerHTML='';
 const observationOrder=shuffledIndices(scene.observations.length);
 observationOrder.forEach(originalIndex=>{
   const b=document.createElement('button');b.className='observation-btn';b.type='button';b.textContent=scene.observations[originalIndex];
   b.dataset.originalIndex=originalIndex;
   b.addEventListener('click',()=>chooseObservation(originalIndex,b));
   obs.appendChild(b);
 });
 const grid=$('actionGrid');grid.innerHTML='';
 const actionOrder=shuffledIndices(scene.actions.length);
 actionOrder.forEach(originalIndex=>{
   const act=scene.actions[originalIndex];
   const b=document.createElement('button');b.className='action-btn';b.type='button';b.disabled=true;const img=actionImages[originalIndex%4];
   b.dataset.originalIndex=originalIndex;
   b.innerHTML=`<img src="${img}" alt=""><strong>${act[0]}</strong>`;
   b.addEventListener('click',()=>chooseAction(originalIndex,b));
   grid.appendChild(b);
 });
 $('actionBlock').classList.add('locked');$('actionBlock').setAttribute('aria-disabled','true');
}
function chooseObservation(i,clickedButton){
 if(state.observed)return;
 const scene=animals[state.animal].scenes[state.day];
 if(i!==scene.correctObservation){
   clickedButton.classList.add('try-again');
   $('feedback').className='feedback bad';$('feedback').innerHTML='<strong>Schau noch einmal genau.</strong> Welche Spur in der Situation hilft dir?';
   setTimeout(()=>clickedButton.classList.remove('try-again'),500);
   return;
 }
 state.observed=true;
 document.querySelectorAll('.observation-btn').forEach(b=>{b.disabled=true;if(Number(b.dataset.originalIndex)===i)b.classList.add('selected')});
 document.querySelectorAll('.action-btn').forEach(b=>b.disabled=false);
 $('actionBlock').classList.remove('locked');$('actionBlock').setAttribute('aria-disabled','false');
 $('feedback').className='feedback good';$('feedback').innerHTML=`<strong>Gut beobachtet.</strong> Jetzt überlege: Was hilft dem Tier am besten?`;
}
function chooseAction(i,clickedButton){
 if(state.answered||!state.observed)return;
 state.answered=true;const scene=animals[state.animal].scenes[state.day],act=scene.actions[i];
 Object.entries(act[2]).forEach(([k,v])=>state[k]=clamp(state[k]+v));
 if(act[3]){state.score++;if(!state.learned.includes(scene.need))state.learned.push(scene.need)}
 state.food=clamp(state.food-6);state.water=clamp(state.water-7);state.well=clamp(state.well-4);renderMeters();
 document.querySelectorAll('.action-btn').forEach(b=>{b.disabled=true;if(b===clickedButton)b.classList.add(act[3]?'chosen-good':'chosen-bad')});
 $('feedback').className='feedback '+(act[3]?'good':'bad');
 $('feedback').innerHTML=act[3]?`<strong>Gute Entscheidung.</strong> ${act[1]}`:`<strong>Das hilft noch nicht genug.</strong> ${act[1]}`;
 $('nextBtn').disabled=false;$('nextBtn').textContent=state.day===4?'Was habe ich herausgefunden?':'Weiter';
}
function statusWord(v){return v>=68?'gut':v>=45?'Achtung':'dringend';}
function renderMeters(){
 [['food','foodBar','foodValue'],['water','waterBar','waterValue'],['well','wellBar','wellValue']].forEach(([k,b,v])=>{$(b).style.width=state[k]+'%';$(v).textContent=statusWord(state[k]);$(b).dataset.level=statusWord(state[k])});
 const avg=(state.food+state.water+state.well)/3;$('moodText').textContent=avg>=68?'wirkt ruhig und zufrieden':avg>=45?'braucht deine Aufmerksamkeit':'braucht dringend Hilfe';
}
function next(){if(state.day<4){state.day++;renderDay()}else finish();}
function finish(){
 show('endScreen');const a=animals[state.animal];
 $('endAnimal').src=animalImages[state.animal];$('endAnimal').alt='Gezeichnete '+a.name;
 $('endTitle').textContent='Du hast viel über Tierwohl herausgefunden.';
 $('endText').textContent='Ein Tier braucht mehr als nur Futter und Wasser.';
 const learnedList=state.learned.length?state.learned:['Futter und Wasser','Pflege','Platz und Ruhe'];
 $('learningSummary').innerHTML=`<strong>Darauf hast du geachtet:</strong><div class="need-chips">${learnedList.map(n=>`<span>${n}</span>`).join('')}</div><p><strong>Das braucht ${a.name}:</strong></p><ul>${a.needs.map(n=>`<li>${n}</li>`).join('')}</ul><p><strong>Merksatz:</strong> Tiere fühlen sich wohl, wenn mehrere Bedürfnisse beachtet werden.</p>`;
}
function reset(){state={animal:null,day:0,food:72,water:72,well:72,score:0,observed:false,answered:false,learned:[]};stallState=null;show('modeScreen');$('subtitle').textContent='Beobachte genau. Entscheide, was die Tiere brauchen.';}
document.querySelectorAll('.animal-card').forEach(b=>b.addEventListener('click',()=>selectAnimal(b.dataset.animal)));
document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>selectAnimal(b.dataset.tab)));
$('nextBtn').addEventListener('click',next);$('restartBtn').addEventListener('click',reset);$('playAgainBtn').addEventListener('click',reset);

// --- Modus 2: Einen ganzen Stall versorgen ---
const stallImages={cow:'assets/stall-cow.png',pig:'assets/stall-pig.png',chicken:'assets/stall-chicken.png'};
const stalls={
  cow:{name:'Kuhstall',animalLabel:'Kühe',tasks:[
    {title:'Die Kuh hat Durst.',observation:'Die Tränke ist fast leer. Eine Kuh steht davor und sucht weiter nach Wasser.',answers:[
      ['Frisches Wasser nachfüllen.','Richtig. Die Kuh braucht jetzt Wasser.',true],
      ['Mehr Futter geben.','Futter hilft gegen Durst nicht.',false],
      ['Die Kuh bürsten.','Bürsten kann angenehm sein, aber die Kuh braucht jetzt Wasser.',false]
    ]},
    {title:'Der Liegeplatz ist nass.',observation:'In einer Ecke ist das Stroh feucht. Dort möchte keine Kuh liegen.',answers:[
      ['Die nasse Stelle entfernen und trockenes Stroh nachlegen.','Richtig. Kühe brauchen einen trockenen Ruheplatz.',true],
      ['Noch mehr Futter in den Trog geben.','Das verändert den nassen Liegeplatz nicht.',false],
      ['Die Stelle einfach so lassen.','Dann bleibt der Ruheplatz unangenehm.',false]
    ]},
    {title:'Eine Kuh verhält sich anders.',observation:'Eine Kuh steht abseits und frisst nicht. Die anderen Kühe wirken ruhig.',answers:[
      ['Die Kuh genauer beobachten und Hilfe holen, wenn etwas nicht stimmt.','Richtig. Auffällige Tiere müssen besonders beobachtet werden.',true],
      ['Alle Kühe sofort füttern.','Die anderen Kühe zeigen kein Futterproblem.',false],
      ['Nichts tun, weil die anderen Kühe ruhig sind.','Gerade die einzelne auffällige Kuh ist wichtig.',false]
    ]},
    {title:'Der Weg nach draußen ist versperrt.',observation:'Vor dem Ausgang liegt ein großer Heuballen. Die Kühe kommen nur schwer vorbei.',answers:[
      ['Den Weg freimachen.','Richtig. Kühe brauchen Platz und sichere Wege.',true],
      ['Die Tür schließen.','Dann können die Kühe gar nicht mehr hinaus.',false],
      ['Mehr Wasser geben.','Wasser löst die Engstelle nicht.',false]
    ]},
    {title:'Das Futter reicht nicht für alle.',observation:'Im Trog liegt nur noch wenig Futter. Mehrere Kühe suchen daneben weiter.',answers:[
      ['Passendes Futter nachfüllen und prüfen, ob alle gut herankommen.','Richtig. Alle Kühe brauchen ausreichend Futter.',true],
      ['Die Kühe vom Trog wegschicken.','Dann bekommen sie trotzdem nicht genug Futter.',false],
      ['Nur den Stall fegen.','Sauberkeit ist wichtig, aber jetzt fehlt Futter.',false]
    ]}
  ]},
  pig:{name:'Schweinestall',animalLabel:'Schweine',tasks:[
    {title:'Das Schwein hat Durst.',observation:'Die Tränke ist leer. Ein Schwein sucht dort immer wieder nach Wasser.',answers:[
      ['Frisches Wasser geben.','Richtig. Das Schwein braucht jetzt Wasser.',true],
      ['Mehr Futter geben.','Futter hilft gegen Durst nicht.',false],
      ['Den Wühlbereich schließen.','Das löst das Wasserproblem nicht.',false]
    ]},
    {title:'Ein kleines Schwein kommt nicht ans Futter.',observation:'Mehrere Schweine drängeln am Trog. Ein kleineres Schwein kommt kaum heran.',answers:[
      ['Dafür sorgen, dass alle Schweine gut ans Futter kommen.','Richtig. Nicht nur die Futtermenge, auch der Zugang ist wichtig.',true],
      ['Das kleine Schwein wegschicken.','Auch das kleine Schwein muss fressen können.',false],
      ['Nur Wasser nachfüllen.','Das Problem ist hier der Zugang zum Futter.',false]
    ]},
    {title:'Der Ruheplatz ist feucht.',observation:'Das Stroh im Ruhebereich ist nass. Die Schweine liegen lieber daneben.',answers:[
      ['Nasses Stroh entfernen und trocken nachstreuen.','Richtig. Der Ruheplatz soll trocken sein.',true],
      ['Mehr Futter geben.','Das macht den Liegeplatz nicht trocken.',false],
      ['Nichts verändern.','Dann bleibt der Ruheplatz unangenehm.',false]
    ]},
    {title:'Ein Ferkel liegt abseits.',observation:'Ein Ferkel bewegt sich kaum und bleibt länger allein liegen.',answers:[
      ['Das Ferkel genauer beobachten und bei Bedarf Hilfe holen.','Richtig. Auffälliges Verhalten muss beachtet werden.',true],
      ['Alle Schweine in den Wühlbereich schicken.','Das hilft dem auffälligen Ferkel nicht.',false],
      ['Einfach warten und nicht mehr hinsehen.','Das Ferkel sollte weiter beobachtet werden.',false]
    ]},
    {title:'Die Schweine brauchen Beschäftigung.',observation:'Im Wühlbereich ist kaum noch Material. Mehrere Schweine suchen dort weiter.',answers:[
      ['Geeignetes Material zum Wühlen ergänzen.','Richtig. Schweine brauchen Beschäftigung und Möglichkeiten zum Erkunden.',true],
      ['Den Bereich absperren.','Dann fehlt eine wichtige Beschäftigungsmöglichkeit.',false],
      ['Nur mehr Futter geben.','Futter ersetzt Beschäftigung nicht.',false]
    ]}
  ]},
  chicken:{name:'Hühnerstall',animalLabel:'Hühner',tasks:[
    {title:'Die Hühner haben Durst.',observation:'Die Wasserschale ist fast leer. Mehrere Hühner stehen daneben.',answers:[
      ['Sauberes Wasser nachfüllen.','Richtig. Hühner brauchen immer frisches Wasser.',true],
      ['Mehr Körner streuen.','Futter hilft gegen Durst nicht.',false],
      ['Die Hühner in die Nester setzen.','Das löst das Wasserproblem nicht.',false]
    ]},
    {title:'Das Wasser ist schmutzig.',observation:'In der Wasserschale liegen Stroh und Schmutz.',answers:[
      ['Gefäß reinigen und frisches Wasser einfüllen.','Richtig. Trinkwasser muss sauber sein.',true],
      ['Nur etwas neues Wasser dazugeben.','Dann bleibt der Schmutz im Gefäß.',false],
      ['Die Schale wegstellen.','Die Hühner brauchen weiterhin Wasser.',false]
    ]},
    {title:'Die Einstreu ist stark verschmutzt.',observation:'Unter den Sitzstangen ist die Einstreu feucht und schmutzig.',answers:[
      ['Die verschmutzte Einstreu entfernen und trocken nachstreuen.','Richtig. Der Stall muss sauber und trocken bleiben.',true],
      ['Nur die Eier einsammeln.','Dann bleibt die verschmutzte Stelle bestehen.',false],
      ['Mehr Futter geben.','Futter macht die Einstreu nicht sauber.',false]
    ]},
    {title:'Eine Henne verhält sich auffällig.',observation:'Eine Henne bleibt lange sitzen und bewegt sich deutlich weniger als die anderen.',answers:[
      ['Die Henne genauer beobachten und bei Bedarf Hilfe holen.','Richtig. Auffällige Tiere müssen besonders beachtet werden.',true],
      ['Alle Hühner in den Stall sperren.','Dafür gibt es keinen Grund.',false],
      ['Die Henne einfach ignorieren.','Das auffällige Verhalten sollte überprüft werden.',false]
    ]},
    {title:'Das Tor ist nicht sicher geschlossen.',observation:'Der Verschluss am Auslauf ist locker. Die Hühner sind noch draußen.',answers:[
      ['Den Verschluss sicher schließen und den Zaun kontrollieren.','Richtig. Sicherheit gehört zur täglichen Versorgung.',true],
      ['Das Tor offen lassen.','Dann könnten Tiere hinaus oder andere Tiere hinein.',false],
      ['Nur Futter nachfüllen.','Futter löst das Sicherheitsproblem nicht.',false]
    ]}
  ]}
};
let stallState=null;
function selectStall(type){
  stallState={type,index:0,correct:0,answered:false};
  $('stallTitle').textContent=stalls[type].name;
  $('stallIntro').textContent=`Du kümmerst dich heute um den ganzen ${stalls[type].name}. Löse fünf Aufgaben nacheinander.`;
  $('stallImage').src=stallImages[type];$('stallImage').alt=stalls[type].name;
  $('subtitle').textContent='Kümmere dich um den ganzen Stall. Schau genau hin und entscheide.';
  show('stallGameScreen');
  renderStallTask();
}
function renderStallTask(){
  const data=stalls[stallState.type];
  const task=data.tasks[stallState.index];
  stallState.answered=false;
  $('stallTaskKicker').textContent=`Aufgabe ${stallState.index+1} von 5`;
  $('stallTaskTitle').textContent=task.title;
  $('stallObservation').textContent=task.observation;
  $('stallProgressText').textContent=`Aufgabe ${stallState.index+1} von 5`;
  const dots=$('stallProgressDots');dots.innerHTML='';
  for(let i=0;i<5;i++){const d=document.createElement('span');d.className='stall-progress-dot'+(i<stallState.index?' done':i===stallState.index?' current':'');dots.appendChild(d)}
  $('stallFeedback').className='stall-feedback';$('stallFeedback').textContent='Wähle eine Antwort.';
  $('nextStallTaskBtn').disabled=true;
  $('nextStallTaskBtn').textContent=stallState.index===4?'Auswertung':'Weiter';
  const answers=$('stallAnswers');answers.innerHTML='';
  const order=shuffledIndices(task.answers.length);
  order.forEach(ai=>{
    const ans=task.answers[ai];
    const b=document.createElement('button');b.type='button';b.className='stall-answer';b.textContent=ans[0];
    b.addEventListener('click',()=>answerStallTask(ai,b));answers.appendChild(b);
  });
}
function answerStallTask(answerIdx,button){
  if(stallState.answered)return;
  const task=stalls[stallState.type].tasks[stallState.index];
  const ans=task.answers[answerIdx];
  if(!ans[2]){
    button.classList.add('wrong');
    $('stallFeedback').className='stall-feedback bad';
    $('stallFeedback').innerHTML=`<strong>Noch einmal überlegen.</strong> ${ans[1]}`;
    setTimeout(()=>button.classList.remove('wrong'),550);
    return;
  }
  stallState.answered=true;stallState.correct++;
  document.querySelectorAll('#stallAnswers .stall-answer').forEach(b=>b.disabled=true);
  button.classList.add('right');
  $('stallFeedback').className='stall-feedback good';
  $('stallFeedback').innerHTML=`<strong>Richtig.</strong> ${ans[1]}`;
  $('nextStallTaskBtn').disabled=false;
}
function nextStallTask(){
  if(!stallState.answered)return;
  if(stallState.index<4){stallState.index++;renderStallTask();}else finishStall();
}
function finishStall(){
  const s=stalls[stallState.type];show('stallEndScreen');$('stallEndImage').src=stallImages[stallState.type];$('stallEndImage').alt=s.name;
  $('stallEndTitle').textContent=`${s.name}: Stallrunde geschafft!`;
  $('stallEndText').textContent='Du hast fünf typische Situationen im Stall gelöst.';
  const labels={cow:['Futter','Wasser','Ruheplatz','Tiere beobachten','Platz & Bewegung'],pig:['Futter','Wasser','Sauberkeit','Tiere beobachten','Beschäftigung'],chicken:['Futter','Wasser','Sauberkeit','Tiere beobachten','Sicherheit']};
  $('stallEndSummary').innerHTML=`<strong>Darauf hast du geachtet:</strong><div class="need-chips">${labels[stallState.type].map(x=>`<span>${x}</span>`).join('')}</div><p><strong>Merksatz:</strong> Tiere brauchen Futter und Wasser, aber auch Sauberkeit, Platz, Sicherheit und gute Beobachtung.</p>`;
}

$('singleModeBtn').addEventListener('click',()=>{show('startScreen');$('subtitle').textContent='Beobachte dein Tier. Entscheide, was es jetzt braucht.';});
$('stallModeBtn').addEventListener('click',()=>{show('stallSelectScreen');$('subtitle').textContent='Übernimm einen ganzen Stall und behalte mehrere Bereiche im Blick.';});
$('backToModeFromSingle').addEventListener('click',()=>show('modeScreen'));
$('backToModeFromStall').addEventListener('click',()=>show('modeScreen'));
$('backToStallSelect').addEventListener('click',()=>show('stallSelectScreen'));
document.querySelectorAll('.stall-card').forEach(b=>b.addEventListener('click',()=>selectStall(b.dataset.stall)));
$('nextStallTaskBtn').addEventListener('click',nextStallTask);
$('stallAgainBtn').addEventListener('click',()=>{show('stallSelectScreen');$('subtitle').textContent='Übernimm einen ganzen Stall und behalte mehrere Bereiche im Blick.';});
