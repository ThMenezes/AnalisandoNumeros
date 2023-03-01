const numero = document.getElementById('numero')
const lista = document.getElementById('lista')
const resultado = document.getElementById('resultado')
const valores = [];

function inNumero(num){
    if(Number(num) >= 1 && Number(num)<=100) {
        return true
    } else {
        return false
    }
}

function inLista(num, list) {
    if(list.indexOf(Number(num)) != -1) { // indica que o valor não foi encontrado na lista
        return true
    } else {
        return false
    }
}

function adicionar() {   

    if(inNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value)) 
        let item = document.createElement('option')
        item.text = ` Valor ${numero.value} adicionado`
        item.value = `lista ${valores}`
        lista.appendChild(item) 
              
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }  

    numero.value = '' // limpar após incluir número
    numero.focus()   // deixar piscando no input
}