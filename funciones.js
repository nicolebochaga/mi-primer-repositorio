function saludo(nombre, apellido) {
   return 'hola '  + nombre + ' ' + apellido
}

console.log(saludo('nicole', 'bochaga'))

function suma(numeroUno, numeroDos) {
    return numeroUno + numeroDos
}

console.log(suma(2, 2))

function resta(numeroUno, numeroDos) {
    return numeroUno - numeroDos
}

console.log(resta(5, 3))

function multiplicacion(numeroUno, numeroDos) {
    return numeroUno * numeroDos
}
console.log(multiplicacion(7, 8))

function division(numeroUno, numeroDos) {
    return numeroUno / numeroDos
}
console.log(division(10, 2))

function esMayor (numeroUno, numeroDos){
    if (numeroUno>numeroDos)  {
        return numeroUno
    } else {
        return numeroDos
    }
}
console.log( esMayor(50, 9))