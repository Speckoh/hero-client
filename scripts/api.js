//INDEX
export  const indexHero = () => {
    return fetch(`http://localhost:8002/heroes`)
}
//CREATE second fetch parameter is options
export const createHero = (data) => {
    return fetch(`http://localhost:8002/heroes`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showHero = (id) => {
    return fetch(`http://localhost:8002/heroes/${id}`)
}

//UPDATE
export const updateHero = (data, id) => {
    return fetch(`http://localhost:8002/heroes/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

//DELETE
export const deleteHero = (id) => {
    return fetch(`http://localhost:8002/heroes/${id}`, {
        method: 'DELETE'
    })
}