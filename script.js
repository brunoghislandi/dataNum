var num = window.document.querySelector('input#fnum')
var list = window.document.querySelector('select#flist')
var res = window.document.querySelector('div#res')
var values = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function Add() {
    if (isNum(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Vaule ${num.value} added.`
        list.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('Invalid or existing value!')
    }
    num.value = ''
    num.focus()
}

function Done() {
    if (values.length == 0) {
        window.alert('Add values ​​before finalizing.')
    } else {
        var tot = values.length
        var bigger = values[0]
        var smaller = values[0]
        var sum = 0
        var mean = 0 

        for (var pos in values) {

            sum += values[pos]     // Calcula a soma dos elementos da lista

            if (values[pos] > bigger) // Encontra o maior
                bigger = values[pos]

            if (values[pos] < smaller)  // Encontra o menor
                smaller = values[pos]

        }

        mean = sum / tot

        res.innerHTML = '' // Limpa a div resultado
        res.innerHTML += `<p> In total we have ${tot} elements in the list. </p>`
        res.innerHTML += `<p> The greatest value is ${bigger}. </p>`
        res.innerHTML += `<p> The lowest value is ${smaller}. </p>`
        res.innerHTML += `<p> The sum of the elements is ${sum}. </p>`
        res.innerHTML += `<p> The average of the elements is ${mean.toFixed(2)}. </p>`
    }

}