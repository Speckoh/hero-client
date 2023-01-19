import { indexHero, createHero, showHero,
    updateHero, deleteHero} from "./api.js"
import { 
    onIndexHeroSuccess, 
    onFailure, 
    onCreateHeroSuccess,
    onShowHeroSuccess,
	onUpdateHeroSuccess,
	onDeleteHeroSuccess,
 } from "./ui.js"

const createHeroForm = document.querySelector('#create-hero-form')
const indexHeroContainer = document.querySelector('#index-hero-container')
const showHeroContainer = document.querySelector('#show-hero-container')

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
            heroName: event.target['heroName'].value,
            realName: event.target['realName'].value,
            specialAbility: event.target['ability'].value
        }
    }
    createHero(heroData)
    .then(onCreateHeroSuccess)
    .catch(onFailure)
})

indexHeroContainer.addEventListener('click', (event) =>{
    const id = event.target.getAttribute("data-id")
    console.log(id)
    
    .then((res) => res.json())
	.then((res) => onShowHeroSuccess(res.character))
	.catch(onFailure)
})

showHeroContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const id = event.target.getAttribute('data-id')

	const heroData = {
		hero: {
			heroName: event.target['heroName'].value,
            realName: event.target['realName'].value,
            specialAbility: event.target['ability'].value
		},
	}

	updateHero(heroData, id)
		.then(onUpdateHeroSuccess)
		.catch(onFailure)
})
showHeroContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')
    if (!id) return
	deleteHero(id)
		.then(onDeleteHeroSuccess)
		.catch(onFailure)
})