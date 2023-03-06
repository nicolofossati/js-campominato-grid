const containerDom = document.querySelector('#main-container'); 
const playButtonDom = document.querySelector('#play'); 
const difficultyDom = document.querySelector('#difficulty');
const scoreDom = document.querySelector('#score span');

let bombs_array= [];
let cells_array = [];
let score = 0;


playButtonDom.addEventListener('click', function(){
    
    scoreDom.innerHTML = "PUNTEGGIO: 0";
    bombs_array = [];

    let levelValue = difficultyDom.value;
    if(levelValue == "easy"){
        containerDom.innerHTML = "";

        for(let i=0; i<100; i++){
            cells_array[i] = i+1; 
        }
        for(let i=0;i<16 ;i++){
            random_test(cells_array, 100);
        }
        console.log(`Stampa dopo creazione cells-array EASY: ${bombs_array}`);
        
        
        for(let i=1; i<101; i++){
            const squareDom = document.createElement('div');
            squareDom.classList.add('square');
            
            const spanDom = document.createElement('span');
            spanDom.innerHTML = i;
            spanDom.classList.add('center');
        
            squareDom.addEventListener('click', function(){
                console.log(i);
                if(bombs_array.includes(i)){
                    this.classList.toggle('onclick_bomb');
                    scoreDom.innerHTML = `PUNTEGGIO: ${score}, HAI PERSO!`;
                } else {
                    this.classList.toggle('onclick_correct');
                    score++;
                    scoreDom.innerHTML = `PUNTEGGIO: ${score}`;
                }
            });
        
            containerDom.append(squareDom);
            squareDom.append(spanDom);
        }
    } else if(levelValue == "hard"){
        containerDom.innerHTML = "";

        for(let i=0; i<81; i++){
            cells_array[i] = i+1; 
        }
        for(let i=0;i<16 ;i++){
            random_test(cells_array, 81);
        }
        console.log(`Stampa dopo creazione cells-array HARD: ${bombs_array}`);

        for(let i=1; i<82; i++){
            const squareDom = document.createElement('div');
            squareDom.classList.add('square');
            squareDom.classList.add('square-hard');
            
            const spanDom = document.createElement('span');
            spanDom.innerHTML = i;
            spanDom.classList.add('center');
        
            squareDom.addEventListener('click', function(){
                console.log(i);
                if(bombs_array.includes(i)){
                    this.classList.toggle('onclick_bomb');
                    scoreDom.innerHTML = `PUNTEGGIO: ${score}, HAI PERSO!`;
                } else {
                    this.classList.toggle('onclick_correct');
                    score++;
                    scoreDom.innerHTML = `PUNTEGGIO: ${score}`;
                }
            });
        
            containerDom.append(squareDom);
            squareDom.append(spanDom);
        }
    } else if(levelValue == "crazy"){
        containerDom.innerHTML = "";

        for(let i=0; i<49; i++){
            cells_array[i] = i+1; 
        }
        for(let i=0;i<16 ;i++){
            random_test(cells_array, 49);
        }
        console.log(`Stampa dopo creazione cells-array CRAZY: ${bombs_array}`);

        for(let i=1; i<50; i++){
            const squareDom = document.createElement('div');
            squareDom.classList.add('square');
            squareDom.classList.add('square-crazy');
            
            const spanDom = document.createElement('span');
            spanDom.innerHTML = i;
            spanDom.classList.add('center');
        
            squareDom.addEventListener('click', function(){
                console.log(i);
                if(bombs_array.includes(i)){
                    this.classList.toggle('onclick_bomb');
                    scoreDom.innerHTML = `PUNTEGGIO: ${score} HAI PERSO!`;
                } else {
                    this.classList.toggle('onclick_correct');
                    score++;
                    scoreDom.innerHTML = `PUNTEGGIO: ${score}`;
                }
            });
        
            containerDom.append(squareDom);
            squareDom.append(spanDom);
        }
    } else {
        console.log("Qui non devi finirci");
    }

     

});


//test func random



console.log(cells_array);
console.log(bombs_array);

function random_test(array, a_length){ // cells_array
    let extract;
    extract = random_inclusive(1, a_length);
    if(bombs_array.includes(extract)){
        while(bombs_array.includes(extract)){
            extract = random_inclusive(1, a_length);
        }
        if(!bombs_array.includes(extract)){
            bombs_array[bombs_array.length] = extract;
        }
    } else {
        bombs_array[bombs_array.length] = extract; //empy_array[0] = 2
    }
}

function random_inclusive(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}

/*
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta 
la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per
evitare problemi con l’inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella
stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri
uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato 
una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e 
l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri 
consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su 
una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/
