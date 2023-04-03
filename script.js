"Versão chat gpt"

// let saldoFamiliar = {
//     incomes: [1300, 500, 300],
//     expenses: [700, 850]
// }
// function rendaFamiliar(){
//     let incomes = saldoFamiliar.incomes.reduce((total, income) => total + income)
//     let expenses = saldoFamiliar.expenses.reduce((total, expense) => total + expense)

//     if (incomes - expenses >= 0){
//         console.log("Saldo positivo")
//     } else {
//         console.log("Saldo negativo")
//     }
//     return saldoFamiliar
// }
// rendaFamiliar()

let familia = {
    entradas: [3200, 1700, 350],
    saidas: [2000, 900, 500]
}

function soma(array){
    let total = 0
    for (let valor of array){
        total += valor
    }
    //aqui é o FOR OF que faz com que a função saiba que é um array, o que não tem nada a ver com os nomes da variáveis que declarei

    return total
}

function calculoFamiliar(){
    const calcularEntradas = soma(familia.entradas)
    const calcularSaidas = soma(familia.saidas)

    const rendaFamiliar = calcularEntradas - calcularSaidas
    if (rendaFamiliar >= 0){
        console.log(`Seu saldo é positivo, no valor de ${rendaFamiliar}`)
    } else {
        console.log(`Seu saldo é negativo, no valor de ${rendaFamiliar}`)
    }

}
calculoFamiliar()
