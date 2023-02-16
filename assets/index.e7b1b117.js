(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const l of c)if(l.type==="childList")for(const b of l.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&o(b)}).observe(document,{childList:!0,subtree:!0});function n(c){const l={};return c.integrity&&(l.integrity=c.integrity),c.referrerpolicy&&(l.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?l.credentials="include":c.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(c){if(c.ep)return;c.ep=!0;const l=n(c);fetch(c.href,l)}})();const q="/Wumpus-Game.git/assets/acessgranted.a8080d6d.png",G="/Wumpus-Game.git/assets/arrow.d12509f9.png",N="/Wumpus-Game.git/assets/adventure.1edaa50a.png",P="/Wumpus-Game.git/assets/endlesshole.b7b50d5d.jpg",F=document.querySelector("#mainStage"),r=document.querySelector("#mainTextArea"),u=document.querySelector("#userTextInput"),M=document.querySelector("#errorMsg"),d=document.querySelector("#gameOver"),v=document.querySelector("#roomCanvas");let m;const E=new Image;E.src=N;const A=new Image;A.src=G;const R=new Image;R.src=q;const $=new Image;$.src=P;const O=[{name:"Mattias",score:10}],f=[{x:0,y:-1},{x:0,y:1},{x:-1,y:0},{x:1,y:0}];let g="";const a={x:0,y:0};let S,p=0,x=3,w=10,h=!1;const s=[[{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1},{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1},{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1},{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1}],[{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1},{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1},{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1},{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1}],[{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1},{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1},{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1},{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1}],[{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1},{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1},{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1},{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1}],[{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1},{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1},{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1},{containsWumpus:!1,containsItem:[],containsTrap:!1,containsBat:!1}]];function i(e){return Math.floor(Math.random()*e)}function V(){for(let e=0;e<5;e++){let t=0,n=i(5),o=i(4);for(;(n===0&&o===0||s[n][o].containsTrap||s[n][o].containsWumpus||s[n][o].containsItem.length>0||s[n][o].containsBat)&&t<20;)n=i(5),o=i(4),t+=1,t===19&&console.error("Unable to place all items.");e<2&&s[n][o].containsItem.push("bonusItem"),e<4&&s[n][o].containsItem.push("arrowItem"),e===4&&s[n][o].containsItem.push("coinItem"),console.log(`Items have been placed: ${e}: ${n}:${o}`)}}function X(){for(let e=0;e<4;e++){let t=0,n=i(5),o=i(4);for(;(n===0&&o===0||s[n][o].containsTrap||s[n][o].containsBat||s[n][o].containsWumpus)&&t<20;)n=i(5),o=i(4),t+=1,t===19&&console.error("Unable to place traps.");s[n][o].containsTrap=!0,console.log(`Traps have been placed: ${n}:${o}`)}}function K(){for(let e=0;e<6;e++){let t=0,n=i(5),o=i(4);for(;(n===0&&o===0||s[n][o].containsTrap||s[n][o].containsBat||s[n][o].containsWumpus)&&t<20;)n=i(5),o=i(4),t+=1,t===19&&console.error("Unable to place bats.");s[n][o].containsBat=!0,console.log(`Bats have been placed: ${n}:${o}`)}}function k(){let e=i(5),t=i(4),n=0;for(;(e===0&&t===0||s[e][t].containsTrap||s[e][t].containsWumpus||s[e][t].containsBat)&&n<20;)e=i(5),t=i(4),n+=1,n===19&&console.error("Unable to place the Wumpus.");s[e][t].containsWumpus=!0,S=`Wumpus location: ${e}, ${t}`,console.log(S)}function Y(){k(),X(),K(),V()}function I(e){return e<0&&(e=4),e>4&&(e=0),e}function T(e){return e<0&&(e=3),e>3&&(e=0),e}function z(){const e={bats:!1,traps:!1,wumpus:!1};for(let t=0;t<4;t++){let n=a.x+f[t].x,o=a.y+f[t].y;n=I(n),o=T(o),s[n][o].containsBat&&!e.bats&&(r.innerHTML+="<br> I hear the menacing sounds of bats nearby... <br>",e.bats=!0),s[n][o].containsTrap&&!e.traps&&(r.innerHTML+="<br> I feel a rush of wind, there must be a huge bottomless hole nearby... <br>",e.traps=!0),s[n][o].containsWumpus&&!e.wumpus&&(r.innerHTML+="<br> I smell the most awful of smells... <br>",e.wumpus=!0),n=0,o=0}!e.bats&&!e.traps&&!e.wumpus&&(r.innerHTML+="<br> I get a feeling that everything is fine... <br>")}function D(){H();for(let e=0;e<s.length;e++)for(let t=0;t<s[e].length;t++)s[e][t].containsBat=!1,s[e][t].containsTrap=!1,s[e][t].containsWumpus=!1,s[e][t].containsItem.length=0;Y(),x=3,p=0,a.x=0,a.y=0,g="",w=10,d.classList.add("hidden"),p=1,u.value="",h=!1,U()}function J(){const e={name:g,score:w};O.push(e)}function L(e,t){var n;e&&J(),r.innerHTML="",d.classList.remove("hidden"),u.classList.add("hidden"),e?d.innerHTML="VICTORY! <br> <br>":d.innerHTML="GAME OVER <br> <br>",d.innerHTML+=`
  ${g} ${t}
  <br> <br> Highscore list:
    <ul> `,O.forEach(o=>{d.innerHTML+=`<li> ${o.name}: ${o.score} </li>`}),d.innerHTML+=`</ul> 
  <button aria-label="press to restart" id="restartBtn">Restart Game?</button>`,(n=document.querySelector("#restartBtn"))==null||n.addEventListener("click",D)}function B(e,t){if(M.innerHTML="",y("show"),u.classList.remove("hidden"),s[e][t].containsBat){r.innerHTML=`As you enter the cave you see a giant bat flying straight at you! <br> 
    <br> As you try to escape the bat catches you by the leg and flyes away with you. 
    <br> You manage to break free and fall down to a cave nearby.`,u.classList.add("hidden"),y("clear"),setTimeout(()=>{Q()},3e3);return}if(s[e][t].containsTrap){if(r.innerHTML=`As you enter the cave you see a giant hole in the middle. <br> 
    <br> You easily go around the hole and as you are almost in the clear. <br>
    <br> You slip and fall into the hole.`,h){h=!1,r.innerHTML+=`<br> <br> After falling for two minutes you feel your right pocket heat up. 
      As you put your hand in the pocket and feel the burning hot coin you blink and you 
      find your self back in the cave again. <br> <br>
      Where would you like to go next? N/S/W/E`;return}y("clear"),u.classList.add("hidden"),setTimeout(()=>{m.drawImage($,0,0,300,200),L(!1,"fell into endless hole")},3e3);return}if(s[e][t].containsWumpus){if(r.innerHTML=`As you enter the cave you you smell the foulest of smells. <br>
    <br> A movement deep in the dark is the last thing you see before you are slayed.`,h){for(s[e][t].containsWumpus=!1,r.innerHTML=`As you enter the cave you you smell the foulest of smells. <br>
      <br> A movement deep in the dark is the last thing you see before 
      before the coin in your pocket bursts and the Wumpus vanishes, now he could be anywhere again... <br> <br>`,k();s[e][t].containsWumpus&&0<20;)k();h=!1,setTimeout(()=>{B(a.x,a.y)},3300);return}y("clear"),u.classList.add("hidden"),setTimeout(()=>{L(!1,"was eaten by the Wumpus")},3e3);return}r.innerHTML="You have entered a new cave. <br>",z(),s[e][t].containsItem.length>0&&(s[e][t].containsItem.includes("bonusItem")&&(r.innerHTML+="<br> I find a chest with valuables inside... (Bonus Point)",w+=3),s[e][t].containsItem.includes("arrowItem")&&(r.innerHTML+="<br> I find a chest with valuables inside... (Bonus Point)",w+=3),s[e][t].containsItem.includes("coinItem")&&(r.innerHTML+=`<br> On a table in the corner of the cave 
          there is a single gold coin... (Strange Coin Added)`,h=!0),s[e][t].containsItem=[]),r.innerHTML+="<br> <br> Where would you like to go next? N/S/W/E"}function Q(){for(i(2)===0?a.x+=i(3):a.y-=i(3),a.x=I(a.x),a.y=T(a.y);s[a.x][a.y].containsBat||s[a.x][a.y].containsTrap||s[a.x][a.y].containsWumpus;)a.x+=i(4),a.y+=i(4),a.x=I(a.x),a.y=T(a.y),console.warn("Batmove while loop triggerd");B(a.x,a.y)}function U(){var e;r.innerHTML=`<span> Great! 
  What would you like your character to be called? <br> Press "Enter" to continue </span>`,u.classList.toggle("hidden"),(e=document.querySelector("#startBtn"))==null||e.classList.add("hidden"),H()}function W(e){let t=a.x,n=a.y;x-=1;const o=l=>new Promise(b=>setTimeout(b,l));async function c(){for(let l=0;l<3;l++){if(t+=f[e].x,n+=f[e].y,t=I(t),n=T(n),m.drawImage(A,t*60,n*50,35,35),s[t][n].containsWumpus){L(!0,"has slain the Wumpus"),l=3;return}if(t===a.x&&n===a.y){L(!1,"shot himself with an arrow");return}await o(600),m.clearRect(t*60,n*50,55,45)}}c(),r.innerHTML.includes("It appears the arrow did not hit anything")||(r.innerHTML+="<br> <br> It appears the arrow did not hit anything...")}function Z(e){switch(e.toLowerCase().replace("shoot ","")){case"n":case"north":W(0);break;case"s":case"south":W(1);break;case"w":case"west":W(2);break;case"e":case"east":W(3);break;default:M.innerHTML=' <br> <br> Wrong input. Use "Shoot N/S/W/E"';break}x===1&&r.innerHTML.includes("VICTORY!")&&(r.innerHTML+="<br> <br> You are down to your last arrow. If you waste it, there is no hope."),x===0&&L(!1,"ran out of arrows")}function _(e){let t=!1;switch(w-=1,e.toLowerCase()){case"n":case"north":a.x+=f[0].x,a.y+=f[0].y;break;case"s":case"south":a.x+=f[1].x,a.y+=f[1].y;break;case"w":case"west":a.x+=f[2].x,a.y+=f[2].y;break;case"e":case"east":a.x+=f[3].x,a.y+=f[3].y;break;default:M.innerHTML="<br> <br> Wrong input. Use N/S/W/E",t=!0;break}t||(a.x=I(a.x),a.y=T(a.y),B(a.x,a.y))}function y(e){switch(e){case"clear":m.clearRect(a.x*60,a.y*50,55,45);break;case"show":m.drawImage(E,a.x*60,a.y*50,40,40);break;default:console.error("handleUserImg function param");break}}function H(){if(v.getContext){m=v.getContext("2d");for(let e=0;e<s.length;e++)for(let t=0;t<s[e].length;t++)m.fillStyle="rgb(9, 10, 41)",m.fillRect(e*60,t*50,60,50),m.clearRect(e*60,t*50,55,45)}else console.error("Canvas is not supported"),v.classList.add("hidden")}function j(e){if(e.key==="Enter"){if(p===0&&(g=u.value,r.innerHTML=`Lets get started ${g}! <br> <br> You are currently in the caves under the 
      castle of Greveholm. 
      Afraid to be alone? Lucky for you, you are not. There is also a beast by the name of Wumpus in the
      treturous cave system. Your goal is to find and slay the Wumpus. There is loot you can find along 
      the way to aid you, if you find it. Currently you only have a bow and three arrows.
      You navigate using the field below. 
      Simply put in the direktion you would like to go in. <br> <br> Either using full names or the first letter.
      <br> North / South / West / East <br> <br>
      If you wish to shoot your bow, insert "Shoot" and the direction. <br> <br>
      Press Enter again to enter the first cave;`),p===1&&(B(0,0),F.classList.add("turned-on"),v.classList.remove("hidden"),m.clearRect(0,0,300,200),m.drawImage(R,0,0,300,200),setTimeout(()=>{H(),y("show")},1500)),p>1){if(u.value.toLowerCase().includes("shoot")){Z(u.value),u.value="";return}y("clear"),_(u.value)}p+=1,u.value=""}}u.addEventListener("keypress",j);var C;(C=document.querySelector("#startBtn"))==null||C.addEventListener("click",U);Y();console.table(s);
