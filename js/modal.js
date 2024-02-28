export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('h2'),
    button: document.querySelector('button.close'),

    open(){
        Modal.wrapper.classList.add('open')
    },

    close(){
        Modal.wrapper.classList.remove('open')
    }
}

Modal.button.onclick = () => {
    Modal.close()
}