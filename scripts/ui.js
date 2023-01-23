const indexHeroContainer = document.querySelector('#index-hero-container')
const messageContainer = document.querySelector('#message-container')
const showHeroContainer = document.querySelector('#show-hero-container')

export const onIndexHeroSuccess = (heroes) => {
    heroes.forEach(hero => {
        const div = document.createElement('div')
        div.innerHTML = `<h3>${hero.heroName}</h3><h3>${hero.realName}</h3>
        <button data-id="${hero._id}">Show Hero</button>
        `
        indexHeroContainer.appendChild(div)
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

export const onShowHeroSuccess = (hero) => {
    const div = document.createElement('div')
    div.innerHTML = `<h3>${hero.heroName}</h3>
    <p>${hero.specialAbility}</p>
    <p>${hero._id}</p>
    `
    showHeroContainer.appendChild(div)
}