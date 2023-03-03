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

function finalizar() {

    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
        
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let posição in valores) { 
            soma += valores[posição]
            if (valores[posição] > maior)
            maior = valores[posição]
            if (valores[posição] < menor)
            menor = valores[posição]
        }

        media = soma / total

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo temos ${total} números cadastrados!</p>`
        resultado.innerHTML += `<p>O <u>maior</u> número encontrado é ${maior}.</p>`
        resultado.innerHTML += `<p>O <u>menor</u> número encontrado é ${menor}.<p>`
        resultado.innerHTML += `<p>A <u>soma</u> dos números é ${soma}.<p>`
        resultado.innerHTML += `<p>A <u>média</u> dos valores é ${media}.<p>`
    }
}