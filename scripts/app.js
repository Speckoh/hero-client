import { indexHero, createHero, showHero } from "./api.js"
import { onIndexHeroSuccess, onFailure, onCreateHeroSuccess } from "./ui.js"

const createHeroForm = document.querySelector('#create-hero-form')

indexHero()
.then(res => res.json())
.then(res =>{
    console.log(res)
    onIndexHeroSuccess(res.heroes)
})
.catch(onFailure)

createHeroForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const heroData = {
        hero:{
            firstName: event.target['firstName'].value,
            lastName: event.target['lastName'].value,
            class: event.target['class'].value,
            strength: event.target['strength'].value
        }
    }
    createHero(heroData)
    .then(onCreateHeroSuccess)
    .catch(onFailure)
})

indexHeroContainer.addEventListener('click', (event) =>{
    const id = event.target.getAttribute("data-id")
    console.log(id)
    
    showHero(id)
    .then(console.log)
    .catch(console.error)
})