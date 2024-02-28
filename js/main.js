import { Modal } from './modal.js'
import { Alert } from './alert.js'
import { IMC, isNumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => Alert.close()
inputHeight.oninput = () => Alert.close()

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = isNumber(weight) || isNumber(height)

    if(weightOrHeightIsNotANumber){
        Alert.open()
        return;
    }

    Alert.close()
    
    const IMCResult = IMC(weight, height)
    Modal.open()
    
    showIMCMessage(IMCResult)
    clearInputs()
})

function showIMCMessage(IMCResult){
    const message = `Seu IMC é de ${IMCResult}`
    Modal.message.innerText = message
}

function clearInputs(){
    inputWeight.value = ''
    inputHeight.value = ''
}


