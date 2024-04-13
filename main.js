// Uma função que devolve os valores que são maiores que a média
function maiorQueMedia (...x) {
    let soma = x.reduce((a,b) => a + b, 0)
    let media = soma / x.length
    return x.filter(n => n > media)
}
const lista = maiorQueMedia(10,1333,234,1244,220)
console.log(lista)

// Uma função que devolva o menor valor da lista
const menorDaLista = (...x) => Math.min(...x)
console.log(menorDaLista(100,2223,3131,22,1))

// Uma função que devolva o valor da soma dos itens da lista
const soma = (...x) => x.reduce((a,b) => a + b, 0)
console.log(soma(1,2,3,4,5,6,7,8,9))

// Uma função que devolva todos os valores que são menores que 20
const menorDoQue20 = (...x) => x.filter(n => n < 20)
console.log(menorDoQue20(122,3134,765,1,3,9,19,312))

// Uma função que vai devolver o primeiro e o último valor da lista
const primeiroEUltimoValor = (...x) => [x[x.length-1], x[0]]
console.log(primeiroEUltimoValor(3445,4145134,36,5645,23434,1))