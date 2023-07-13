function Valor(valores){

    resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML += valores
}

function operadores(operador){
calculo = operador;
valor1 = document.getElementById('resultado').innerHTML
document.getElementById('resultado').innerHTML = ""
    
}

function Calcular(){
    valor2 = document.getElementById('resultado').innerHTML;
if(calculo == '+'){
    total = parseInt(valor1) + parseInt(valor2);
} else if (calculo == '-'){
    total = parseInt(valor1) - parseInt(valor2);
}  else if (calculo == '*'){
    total = parseInt(valor1) * parseInt(valor2);
}  else if (calculo == '/'){
    total = parseInt(valor1) / parseInt(valor2);
}

    document.getElementById('resultado').innerHTML = total;
}

function limpar(){
    document.getElementById('resultado').innerHTML = '';
}

function limpa(){
    let resultado = document.getElementById('resultado').innerHTML;
  let novoResultado = resultado.slice(0, -1);
  document.getElementById('resultado').innerHTML = novoResultado;
}