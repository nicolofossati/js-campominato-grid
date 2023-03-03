/*
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

const containerDom = document.querySelector('#main-container'); 
const playButtonDom = document.querySelector('#play'); 
const difficultyDom = document.querySelector('#difficulty'); 

playButtonDom.addEventListener('click', function(){
    let levelValue = difficultyDom.value;
    if(levelValue == "easy"){
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
    } else if(levelValue == "hard"){
        for(let i=1; i<82; i++){
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
    } else if(levelValue == "crazy"){
        for(let i=1; i<65; i++){
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
    } else {
        
    }
});

