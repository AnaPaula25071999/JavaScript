/*-----------------Calculadora-------------------*/


/*1º Criar os objetos/arrays para os elementos que serão manipulados:*/

const obj_txt_display = document.querySelector('#txt_display')
const array_bt_num = document.querySelectorAll('.bt_num')
const array_botoes = document.querySelectorAll('.botoes')
const obj_bt_calcular = document.querySelector('#bt_calcular')
const obj_bt_limpar = document.querySelector('#bt_limpar')

/*2º Declarar variável para controlar a limpeza do Display. Iniciar com FALSE.*/

let limpa_display = false

/*3º Declarar variável para controlar a quantidade de dígitos no Display. Iniciar com ZERO.*/

let conta_display = 0

/*4º Adicionar o evento para chamar as funções:*/

for(obj_bt_num of array_bt_num) {

    obj_bt_num.addEventListener('click', function() { FunMontaDisplay(this.innerText) } )
}
for (obj_botao of array_botoes) {
    const operacao = obj_botao.getAttribute('data-oper')
    obj_botao.addEventListener('click', function() {FunMontaDisplay(operacao) } )
}
obj_bt_calcular.addEventListener('click', FunCalcularResultado)
obj_bt_limpar.addEventListener('click', FunLimpar)

/*5º Declarar as funções para executar as ações:*/

function FunMontaDisplay(par_txt) {
    if(limpa_display == true) {

        obj_txt_display.value = ''/* jeito facil de limpar display*/
        limpa_display = false
        conta_display = 0
    }
    if(conta_display < 20) {

        obj_txt_display.value += par_txt
        /*obj_txt_display.value = obj_txt_display.value + par_txt*/
        conta_display++
    }else{
        alert('Limite de dígitos!')
    }
}

function FunCalcularResultado() {
    try {
        obj_txt_display.value = eval(obj_txt_display.value)
    }
    catch (erro)/* objeto do tipo erro*/{
        alert('Conta inválida. Erro: ' + erro.message)
    }
    limpa_display = true
}

function FunLimpar() {
    obj_txt_display.value = ''
    conta_display = 0
}



/*------------Redimensionar o Polígono----------------*/

const obj_num_largura = document.querySelector('#num_largura')
const obj_num_altura = document.querySelector('#num_altura')
const obj_div_poligono = document.querySelector('#div_poligono')
const obj_p_perimetro = document.querySelector('#p_perimetro')

/*2º Adicionar os eventos para chamar a função:*/

obj_num_largura.addEventListener('change',   FunRedimensionaPoligono)
obj_num_altura.addEventListener('change', FunRedimensionaPoligono)

/*3º Declarar a função para executar as ações:*/


function FunRedimensionaPoligono() {
    if(obj_num_largura.value < 50 || obj_num_largura.value > 100
        || obj_num_altura.value < 50 || obj_num_altura.value > 100) {
            alert('Valores inválidos')
    }
    else{
        obj_div_poligono.style.width = obj_num_largura.value + 'px'
        /*obj_div_poligono.style.backgroundColor = 'blue'*/
        obj_div_poligono.style.height = obj_num_altura.value + 'px'
        obj_div_poligono.innerText = 'Área: ' + (obj_num_largura.value * obj_num_altura.value) + 'px²'
        obj_p_perimetro.innerText = 'Perímetro: ' + (parseInt(obj_num_largura.value) + parseInt(obj_num_altura.value) + 
        (parseInt(obj_num_largura.value) + parseInt(obj_num_altura.value)) + 'px')
        /*parseInt ou float para ler com numero e não texto e interpretar o + como soma*/
    }
}


/*-----------------Somar e Multiplicar-------------------*/




/*1º Criar os objetos para os elementos que serão manipulados:*/

const obj_valor1 = document.querySelector('#valor1')
const obj_valor2 = document.querySelector('#valor2')
const obj_resultado = document.querySelector('#resultado')
const obj_bt_som = document.querySelector('#bt_som')
const obj_bt_multi = document.querySelector('#bt_multi')

/*2º Adicionar os eventos para chamar as funções:*/

obj_bt_som.addEventListener('click',  FunSoma)
obj_bt_multi.addEventListener('click', FunMultiplica)

/*3º Declarar as funções para executar as ações:*/

function FunSoma(){

    if(obj_valor1.value >= 1 && obj_valor1.value <= 50
        && obj_valor2.value >= 1 && obj_valor2.value <= 50) {

        obj_resultado.value = parseInt( obj_valor1.value) + parseInt(obj_valor2.value)
          

    } else {
        
        alert('Valores inválidos')
    }

}

function FunMultiplica(){
  

    if(obj_valor1.value >= 1 && obj_valor1.value <= 50 
            && obj_valor2.value >= 1 && obj_valor2.value <= 50){

        obj_resultado.value = parseInt( obj_valor1.value) * parseInt( obj_valor2.value)

    } else {
        
        alert('Valores inválidos')
    }
    
}



/*-----------------Aumentar e Diminuir Imagem-------------------*/


/*1º Criar os objetos para os elementos que serão manipulados:*/

const obj_aumentar = document.querySelector('#p_aumentar')
const obj_diminuir = document.querySelector('#p_diminuir')
const obj_img_size = document.querySelector('#img_size')

/*2º Declarar variável para controlar o tamanho da Imagem que será redimensionada.*/

var tam_img = 0

/*3º Adicionar os eventos para chamar as funções:*/

obj_aumentar.addEventListener('click',  FunAumenta)
obj_diminuir.addEventListener('click',  FunDiminui)

/*4º Declarar as funções para executar as ações:*/

function FunAumenta() {

    tam_img = obj_img_size.width
    tam_img = tam_img + 10

    if(tam_img <= 150){

        obj_img_size.style.width = tam_img + 'px'

    } else {
        alert('Esse é o tamanho máximo da imagem.')
    }
    
} 
function FunDiminui() {

    tam_img = obj_img_size.width
    tam_img = tam_img - 10
    
    if(tam_img >= 50){

        obj_img_size.style.width = tam_img + 'px'

    } else {
        alert('Esse é o tamanho mínimo da imagem.')
    }
    
} 

