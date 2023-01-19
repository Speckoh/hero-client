const indexHeroContainer = document.querySelector('#index-hero-container')

const messageContainer = document.querySelector('#message-container')

export const onIndexHeroSuccess = (heroes) =>{
    heroes.forEach(hero => {
        const div = document.createElement('div')
        div.innerHTML = `<h3>${hero.heroName}</h3>
        <button data-id="${hero._id}"></button>`
        indexCharacterContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
    <h3>You've got an error! : (</h3>
    <p>${error}</p>
    `
}

export const onCreateHeroSuccess = () => {
    messageContainer.innerText = 'You have created a hero!! : )'
}