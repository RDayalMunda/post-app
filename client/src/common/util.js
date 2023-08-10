function toggleSignUpModal(){
    let elem = document.createElement('button');
    elem.setAttribute('data-bs-toggle', 'modal')
    elem.setAttribute('data-bs-target', '#sign-up-modal')
    elem.style.display = 'none'
    document.body.append(elem)
    elem.click()
    elem.remove()
}

function toggleSignInModal(){
    let elem = document.createElement('button');
    elem.setAttribute('data-bs-toggle', 'modal')
    elem.setAttribute('data-bs-target', '#sign-in-modal')
    elem.style.display = 'none'
    document.body.append(elem)
    elem.click()
    elem.remove()
}


export {
    toggleSignUpModal,
    toggleSignInModal,
}