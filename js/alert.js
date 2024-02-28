export const Alert = {
    wrapper: document.querySelector('.alert-error'),
    
    open(){
        Alert.wrapper.classList.add('open')
    },

    close(){
        Alert.wrapper.classList.remove('open')
    }
}