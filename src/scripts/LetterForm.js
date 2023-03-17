import { Authors } from "./Authors.js"
import { Recipients } from "./Recipients.js"
import { Topics } from "./Topics.js"
import { LetterBody } from "./LetterBody.js"
import { saveCompletion } from "./dataAccess.js"

export const LetterForm = () => {
    let html = `
    <div class="field">
        ${Authors()}
    </div>

    <div class="field">    
        ${LetterBody()}
    </div>    
    
    <div class="field">
        ${Recipients()}
    </div>

    <div class="field">
        ${Topics()}
    </div>
    
    <button class="button" id="sendLetter">Send Letter</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        const userAuthor = parseInt(document.querySelector("select[name='author']").value)
        const userRecipient = parseInt(document.querySelector("select[name='recipient']").value)
        const userTopic = parseInt(document.querySelector("input[name='topic']:checked").value) // add :checked to get the correct topic ID
        const letterBody = document.querySelector("textarea[name='letterText']").value
        

        // Make an object out of the user input
        const dataToSendToAPI = {
            authorId: userAuthor,
            recipientId: userRecipient,
            topicId: userTopic,
            letterBody: letterBody,
            sendDate: new Date().toLocaleDateString('en-US')
        }

        // Send the data to the API for permanent storage
        saveCompletion(dataToSendToAPI)
    }
})