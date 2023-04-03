let familia = {
    entradas: [3200, 1700, 350],
    saidas: [2000, 900, 500]
}

function soma(array){
    let total = 0
    for (let valor of array){
        total += valor
    }
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
