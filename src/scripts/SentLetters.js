import { getUsers, getTopics, getCompletions } from "./dataAccess.js"

// using letter as our parameter - we will assign letter to getCompletions() later on
const findMatchingAuthor = (letter) => {
    const users = getUsers()
    // const letter = getCompletions() -- actually assigned later in this module
    // users.find - look through all the users
    // user => for every user that... user.id matches letter.authorId, author = user
    let author = users.find(user => user.id === letter.authorId)
    return author

}

const findMatchingRecipient = (letter) => {
    const users = getUsers()
    // const letter = getCompletions() -- actually assigned later in this module
    let recipient = users.find(user => user.id === letter.recipientId)
    return recipient
}

const findMatchingTopic = (letter) => {
    const topics = getTopics()
    // const letter = getCompletions() -- actually assigned later in this module
    let topic = topics.find(topic => topic.id === letter.topicId)
    return topic
}


const convertLettersToElements = (letter) => {
    // const letter = getCompletions() -- actually assigned later in this module
    const author = findMatchingAuthor(letter)
    const recipient = findMatchingRecipient(letter)
    const topic = findMatchingTopic(letter)

    let html = `
        <div class="letter" id="sentLetter--${letter.id}" value="sent__letter">

            <p>Dear ${recipient.name} (${recipient.email}),</p>

            <p>${letter.letterBody}</p>

            <p>Sincerely, ${author.name} (${author.email})</p>

            <p>Sent on ${letter.sendDate}</p>

            <p id="letter__topic">${topic.name}</p>
            
        </div>`

    return html
}





export const SentLetters = () => {
    const letters = getCompletions()

    let html = `
    <div id="completed__letters">
    ${letters.map(convertLettersToElements).join("")
        }
    </div>
    `

    return html
}


/*
Dear RECIPIENT (RECIPIENT EMAIL),

LETTER BODY

Sincerely, AUTHOR (AUTHOR EMAIL)

Sent on DATE

TOPIC-TAG
*/