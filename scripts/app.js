import { indexCharacter, createCharacter, showCharacter } from "./api.js"
import { onIndexCharacterSuccess, onFailure, onCreateCharacterSuccess } from "./ui.js"

const createCharacterForm = document.querySelector('#create-character-form')

indexCharacter()
.then(res => res.json())
.then(res =>{
    console.log(res)
    onIndexCharacterSuccess(res.characters)
})
.catch(onFailure)

createCharacterForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const characterData = {
        character:{
            firstName: event.target['firstName'].value,
            lastName: event.target['lastName'].value,
            class: event.target['class'].value,
            strength: event.target['strength'].value
        }
    }
    createCharacter(characterData)
    .then(onCreateCharacterSuccess)
    .catch(onFailure)
})

indexCharacterContainer.addEventListener('click', (event) =>{
    const id = event.target.getAttribute("data-id")
    console.log(id)
    
    showCharacter(id)
    .then(console.log)
    .catch(console.error)
})