
  // let puntos= 0;
    // if(isNaN(valor)){

    //     puntos= (valor=== 'A') ? 11 :10;
        
    //     puntos= valor * 1;
    // }

    // console.log(puntos);

let deck =[];
const tipos = ['C','D','H','S'];
const especiales= ['A','J','Q','K'];

let puntosJugador= 0;
let    puntosComputadora=0;


const btnPedir= document.querySelector('#btnPedir');
const btnDetener= document.querySelector('#btnDetener');
const btnNuevo= document.querySelector('#btnNuevo');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntosHTML= document.querySelectorAll('small');

const crearDeck =() =>{

    for (let i=2;i<=10;i++){

        for(let tipo of tipos){

            deck.push(i + tipo );
        }



    }

    for(let tipo of tipos){

        for( let esp of especiales){
            deck.push(esp + tipo );

        }
    }

    deck = _.shuffle(deck);


    
    return deck;

}

crearDeck();


const pedirCarta = ()=> {


if(deck.length===0){
    throw 'No hay cartas en el deck';


}

const carta= deck.pop();

return carta ;

}

pedirCarta();



//valor carta 


const turnoComputadora=(puntosMinimos)=>{

do{
    const carta = pedirCarta();

    puntosComputadora = puntosComputadora + valorCarta(carta);
    
    puntosHTML[1].innerText = puntosComputadora;
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assects/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasComputadora.append( imgCarta );
    if(puntosMinimos>21){

        break;
    }


} while( (puntosComputadora < puntosMinimos)  &&  (puntosMinimos<=21));


setTimeout(()=>{




  if(puntosComputadora === puntosMinimos){
    alert('Nadie gano :(*)');


  } else if (puntosMinimos>21){
    alert('Computadora gana');
  }else if(puntosComputadora >21){
    alert(' ganaste');
  }else{
    alert('Computadora gana')
  }
}, 13);
}


const valorCarta =(carta)=> {

    const valor = carta.substring(0, carta.length-1);
    return(isNaN(valor))?
        (valor==='A') ? 11: 10
        : valor * 1;





}

//eventos
btnPedir.addEventListener('click',() => {

const carta = pedirCarta();

puntosJugador = puntosJugador + valorCarta(carta);

puntosHTML[0].innerText = puntosJugador;

const imgCarta = document.createElement('img');
imgCarta.src = `assects/cartas/${carta}.png`;
imgCarta.classList.add('carta');
divCartasJugador.append( imgCarta );

if(puntosJugador> 21){
    console.warn('lo siento mucho, perdiste jaja');
    btnPedir.disabled = true;
    btnDetener.disabled= true;
    turnoComputadora(puntosJugador);


}else if(puntosJugador=== 21){

    console.warn('Ganaste');
    btnPedir.disabled = true;
    btnDetener.disabled= true;
    turnoComputadora(puntosJugador);
}

});



btnDetener.addEventListener('click',()=>{
    btnPedir.disabled= true;
    btnDetener.diseble= true;
    turnoComputadora(puntosJugador);

});



btnNuevo.addEventListener('click',()=>{
console.clear();
deck=[];
deck = crearDeck();
puntosJugador = 0;
puntosComputadora =0;

puntosHTML[0].innerText=0;
puntosHTML[1].innerText=0;


divCartasComputadora.innerHTML='';
divCartasJugador.innerHTML='';

btnPedir.disabled= false;
btnDetener.disabled= false;


});