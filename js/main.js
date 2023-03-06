const containerDom = document.querySelector('#main-container'); 
const playButtonDom = document.querySelector('#play'); 
const difficultyDom = document.querySelector('#difficulty'); 

playButtonDom.addEventListener('click', function(){
    let levelValue = difficultyDom.value;
    if(levelValue == "easy"){
        containerDom.innerHTML = "";
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
        containerDom.innerHTML = "";
        for(let i=1; i<82; i++){
            const squareDom = document.createElement('div');
            squareDom.classList.add('square');
            squareDom.classList.add('square-hard');
            
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
        containerDom.innerHTML = "";
        for(let i=1; i<50; i++){
            const squareDom = document.createElement('div');
            squareDom.classList.add('square');
            squareDom.classList.add('square-crazy');
            
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

