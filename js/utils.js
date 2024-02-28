function IMC(weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function isNumber(result){
    return isNaN(result)
}

export { IMC, isNumber }