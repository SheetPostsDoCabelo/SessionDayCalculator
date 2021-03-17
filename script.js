let sextaCounter = 0;
let SabadoCounter = 0;

let players = [];
let podesexta = [];
let podesabado = [];

let facadasSexta = [];
let facadasSabado = [];

let resultSexta = document.getElementById('resultSexta');
let resultSabado = document.getElementById('resultSabado');

function addItem() {
 
    let list = document.getElementById('list');
    let input =  document.getElementById('input');
    let li1 = document.createElement('li');
    let newClose = document.createElement('span');

    newClose.className = "close";
    newClose.innerHTML = 'x';

                    //close function
            newClose.onclick = function() { 
                let li1 = this.parentElement
                newClose.innerHTML = '';
                for(i=0;i<players.length;i++){if(players[i] == li1.innerText){players.splice(i, 1);}}
                li1.parentElement.removeChild(this.parentElement);
           }  //
 
    let NewContent = document.createTextNode(input.value)

  if(NewContent.length>0){ //creates 1 list
    li1.innerText = input.value;
   list.appendChild(li1);
   li1.appendChild(newClose); 
   newClose.style.display='inline-block';
    } 

    players.push(input.value);

      input.value = ''
   }


function Next1() {
    if (players.length > 2){
    let div1 = document.getElementById('div1');
    let div2 = document.getElementById('div2');
    div2.classList.remove("hide");
    div1.classList.add('hide');

    for(i=0;i<players.length;i++){
        let list2 = document.getElementById('list2');
        let li2 = document.createElement('li');
///////////////////////
        /////sexta
let checkBoxSexta = document.createElement('input');
checkBoxSexta.type = 'checkbox';
let Sexta = document.createElement('span');
Sexta.innerHTML = 'Sexta';
Sexta.appendChild(checkBoxSexta); 
Sexta.className = "sexta";
//// function sexta
checkBoxSexta.onclick = function() {if(checkBoxSexta.checked){li2.removeChild(Sexta);li2.removeChild(Sabado); 
    sextaCounter+=1;podesexta.push(li2.innerText);li2.appendChild(Sabado);li2.appendChild(Sexta);} 
else{sextaCounter-=1;li2.removeChild(Sexta);li2.removeChild(Sabado); 
    for(i=0;i<podesexta.length;i++){if(podesexta[i] == li2.innerText){podesexta.splice(i, 1);}}
    li2.appendChild(Sabado);li2.appendChild(Sexta);
}
}
///sabado
let checkBoxSabado = document.createElement('input');
checkBoxSabado.type = 'checkbox';
let Sabado = document.createElement('span');
Sabado.innerHTML = 'Sábado';
Sabado.appendChild(checkBoxSabado); 
Sabado.className = "rigth";
//// function sabado
checkBoxSabado.onclick = function() {if(checkBoxSabado.checked){li2.removeChild(Sexta);li2.removeChild(Sabado); 
    SabadoCounter+=1;podesabado.push(li2.innerText);li2.appendChild(Sabado);li2.appendChild(Sexta);} 
else{SabadoCounter-=1;li2.removeChild(Sexta);li2.removeChild(Sabado); 
    for(i=0;i<podesabado.length;i++){if(podesabado[i] == li2.innerText){podesabado.splice(i, 1);}}
    li2.appendChild(Sabado);li2.appendChild(Sexta);
}
}

let NewContent2 = document.createTextNode(players[i])

//creates 2 list
    li2.appendChild(NewContent2);
    list2.appendChild(li2);
    
    li2.appendChild(Sabado); 
    checkBoxSabado.style.display='inline-block';  
    li2.appendChild(Sexta); 
    Sexta.style.display='inline-block';
    
        
}} else {let error1 = document.getElementById('error1'); error1.classList.remove('hide')}//set a message
  }

  let facadasValue = [];
 
  function Next2() {
      if(sextaCounter >= 2|| SabadoCounter >= 2){
    let div2 = document.getElementById('div2');
    let div3 = document.getElementById('div3');
    div2.classList.add('hide');

/*     div1.classList.add('hide');div2.classList.add('hide'); div3.classList.add('hide'); */
    let dia = ''
    if(sextaCounter>SabadoCounter){dia = 'sexta';}
    if(sextaCounter<SabadoCounter){dia = 'Sabado';}

    if(dia=='sexta'){resultSexta.classList.remove('hide')}
    if(dia=='Sabado'){resultSabado.classList.remove('hide')}

    if(dia==''){console.log('fidin morreu');
    div3.classList.remove("hide");
    /* desempate */
      for(i=0;i<players.length;i++){
      ///////////////////////third List
    let list3 = document.getElementById('list3');
    let li3 = document.createElement('li');

    let NewContent3 = document.createTextNode(players[i])

    let Facadas = document.createElement('input');
    Facadas.type = 'number'
    Facadas.max = "10";
    Facadas.min = "0";
    Facadas.className = "facadas";

        //onclick pega o value e armazena em variavel

    Facadas.oninput = function () { let parent = Facadas.parentElement;
        for(i=0;i<players.length;i++){


            if(podesabado[i]==parent.innerText){facadasSabado[i] = Facadas.value;}
            if(podesexta[i]==parent.innerText){facadasSexta[i] = Facadas.value;}
        }

    }
    //creates 3 list
        li3.appendChild(NewContent3); li3.appendChild(Facadas);
        list3.appendChild(li3);
  }
}} else console.log('marks insuficiente') //set a message
  }

  function next3() {

    let div3 = document.getElementById('div3');
    div3.classList.add('hide');

      for(i=0;i<facadasSabado.length;i++){SabadoCounter = SabadoCounter + parseInt(facadasSabado[i])}
      for(i=0;i<facadasSexta.length;i++){sextaCounter +=  parseInt(facadasSexta[i])}

      let dia = ''
      if(sextaCounter<SabadoCounter){dia = 'sexta';}
      if(sextaCounter>SabadoCounter){dia = 'Sabado';}
     
      if(dia=='sexta'){resultSexta.classList.remove('hide')}
      if(dia=='Sabado'){resultSabado.classList.remove('hide')}

      let chance = Math.random(); 

      if(dia==''){
         if (chance < 0.5){resultSabado.classList.remove('hide')}
         else{resultSexta.classList.remove('hide')}
      }
  }

  function Reload(){
    location.reload()
  }