const applicationState = {
}

const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

export const fetchUsers = () => {
    return fetch(`${API}/users`)
    .then(response => response.json())
    .then(
        (data) => {
            applicationState.users = data
        }
    )
}

export const getUsers = () => {
    return applicationState.users.map(user => ({ ...user }))
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
    .then(response => response.json())
    .then(
        (data) => {
            applicationState.topics = data
        }
    )
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({ ...topic }))
}

// export const fetchLetters = () => {
//     return fetch(`${API}/letters`)
//     .then(response => response.json())
//     .then(
//         (data) => {
//             applicationState.letters = data
//         }
//     )
// }

// export const getLetters = () => {
//     return applicationState.letters.map(letter => ({ ...letter }))
// }

// // POST - please create something new -- same as saveCompletion???
export const sendLetter = (completedLetter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completedLetter)
    }

    return fetch(`${API}/letters`, fetchOptions)
    .then(response => response.json())
    .then(
        () => {

            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

// POST - please create something new - may be the same as sendLetter???
export const saveCompletion = (completion) => {
    const fetchOptions = {
        method: "POST", // tells them that it is a POST
        headers: { // tells them what format the data should is int
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completion)
    }

    return fetch(`${API}/completions`, fetchOptions)
        .then(response => response.json())
        .then(
            () => { //We do NOT want to put a variable name in the parentheses - if you don't need what comes back, you leave the variable blank
                // Update your sendRequest() function's fetch call to dispatch the custom event after the POST operation has been completed.
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })

}

// This will retrieve all completion objects from the API
export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.completions = data
            }
        )
}

export const getCompletions = () => {
    return applicationState.completions.map(completion => ({ ...completion }))
}

