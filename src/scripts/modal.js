import { createUserInfo } from "./render.js"

export function createModal (id, posts) {
    
    const modalContainer = document.createElement('div')
    
    const modalTitle = document.createElement('h2')
    const modalText = document.createElement('p')
    const modalButton = document.createElement('button')
    
    const post = posts.find(posts => posts.id === Number(id))
    
    modalContainer.classList.add('modal__main')
    const userInfoContainer = createUserInfo(post)
    
    modalTitle.classList.add('titleStyle-1','grey-color-1')
    modalTitle.innerText = post.title

    modalText.classList.add('textStyle-1','grey-color-2')
    modalText.innerText = post.text

    modalButton.classList.add('modal__btn')
    modalButton.innerText = 'X'

    modalContainer.append(userInfoContainer, modalTitle, modalText, modalButton)

    return modalContainer
}

export function closeModal() {
    const modal = document.querySelector('.modal__container')
    const closeButton = document.querySelector('.modal__btn')

    closeButton.addEventListener('click',() => {
        modal.close()
    }) 
}