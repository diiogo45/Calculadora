const somar = document.getElementById("somar");

const subtrair = document.getElementById("subtrair");


const multiplicar = document.getElementById("multiplicar");


const n1 = document.getElementById("n1");

const n2 = document.getElementById("n2");

const resultado = document.getElementById("resultado")


somar.addEventListener("click", function(){


resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value);



});

subtrair.addEventListener("click",function (){


resultado.innerHTML =    parseInt(n1.value)  - parseInt(n2.value);



});



multiplicar.addEventListener("click",function (){

resultado.innerHTML = parseInt(n1.value)  * parseInt(n2.value);


});



somar.addEventListener("mouseover", function (){

somar.style.color = 'red';



});

somar.addEventListener("mouseleave",function (){

somar.style.color = 'black';

});

subtrair.addEventListener("mouseover", function (){

subtrair.style.color = 'red';



});

subtrair.addEventListener("mouseleave",function (){

subtrair.style.color = 'black';

});


multiplicar.addEventListener("mouseover", function (){

multiplicar.style.color = 'red';



});

multiplicar.addEventListener("mouseleave",function (){

multiplicar.style.color = 'black';

});