import { createModal, closeModal } from "./modal.js"

export function render (array) {
    const postList = document.querySelector('.post-list')

    postList.innerHTML = ''
    
    array.forEach(posts => {
        const card = createCard(posts)
        postList.appendChild(card)
    });
    
    renderModal(array)
}

export function renderSugestionList (array) {
    const sugestionsList = document.querySelector('.sugestions-list')

    sugestionsList.innerHTML = ''

    array.forEach(users => {
        const sugestionCard = createSugestionList(users)
        sugestionsList.appendChild(sugestionCard)
    })
}

export function createUserInfo(user) {
    const userInfoContainer = document.createElement('div')
    const infoContainer = document.createElement('div')
    const cardImage = document.createElement('img')
    const cardUser = document.createElement('span')
    const cardStack = document.createElement('p')

    userInfoContainer.classList.add('user__card')
    infoContainer.classList.add('info__card')

    cardImage.src = user.img

    cardUser.classList.add('titleStyle-2','grey-color-1')
    cardUser.innerText = user.user

    cardStack.classList.add('textStyle-2', 'grey-color-2')
    cardStack.innerText = user.stack 

    infoContainer.append(cardUser,cardStack)
    userInfoContainer.append(cardImage,infoContainer)

    return userInfoContainer
}

export function createSugestionList(users) {

    const cardContainer = document.createElement('li')
    const cardButtonSugestion = document.createElement('button')

    const userInfoContainer = createUserInfo(users)

    cardContainer.classList.add('sugestions-card')

    cardButtonSugestion.classList.add('outline-button')
    cardButtonSugestion.innerText = "Seguir"

    cardContainer.append(userInfoContainer,cardButtonSugestion)

    return cardContainer

}
function createCard(posts) {
    const cardContainer = document.createElement('li')
    const cardTitle = document.createElement('h2')
    const cardText = document.createElement('p')
    const cardButton = document.createElement('button')
    const cardImgLike = document.createElement('img')
    const cardLikes = document.createElement('span')

    const userInfoContainer = createUserInfo(posts)

    cardContainer.classList.add('card__container')

    cardTitle.classList.add('titleStyle-1','grey-color-1')
    cardTitle.innerText = posts.title

    cardText.classList.add('textStyle-1','grey-color-2')
    cardText.innerText = posts.text
    
    cardButton.classList.add('button__card')
    cardButton.innerText = "Abrir Post"
    cardButton.dataset.postsId = posts.id

    cardImgLike.classList.add('img-like')
    cardImgLike.src = "./src/assets/img/heartLike.svg"
    
    cardImgLike.addEventListener("mouseover", () => cardImgLike.src = "./src/assets/img/heartLikeColor.svg")
    cardImgLike.addEventListener("mouseout", () => cardImgLike.src = "./src/assets/img/heartLike.svg")

    cardLikes.classList.add('card-like')
    cardLikes.innerText = posts.likes

    cardContainer.append(userInfoContainer,cardTitle,cardText,cardButton,cardImgLike,cardLikes)

    return cardContainer
}

export function renderModal(posts) {
    const modal = document.querySelector('.modal__container')
    const buttons = document.querySelectorAll('.button__card')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            
            const modalContent = createModal(button.dataset.postsId, posts)

            modal.innerHTML = ''

            modal.appendChild(modalContent)

            modal.showModal()
            closeModal()
            
        })
    })
}

