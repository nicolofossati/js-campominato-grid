/*
Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

const containerDom = document.querySelector('#main-container'); 
const playButtonDom = document.querySelector('#play'); 

playButtonDom.addEventListener('click', function(){
    for(let i=1; i<101; i++){
        const squareDom = document.createElement('div');
        squareDom.classList.add('square');
        
        const spanDom = document.createElement('span');
        spanDom.innerHTML = i;
        spanDom.classList.add('center');
    
        squareDom.addEventListener('click', function(){
            this.classList.add('onclick');
            console.log(i);
            spanDom.innerHTML = "";
        });
    
        containerDom.append(squareDom);
        squareDom.append(spanDom);
    }
});