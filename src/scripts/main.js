import { fetchUsers, fetchTopics, fetchCompletions } from "./dataAccess.js"
import { Penpals } from "./Penpals.js"

// pushing HTML to the index.html page to the section with the container ID
const mainContainer = document.querySelector("#container")

const render = () => {
    fetchUsers()
    .then(() => fetchTopics()) 
    .then(() => fetchCompletions())
    .then(
        () => {
            mainContainer.innerHTML = Penpals()
        }
    )
}

render()


// Now your main module has to listen for the custom event and invoke the render() function to build all the HTML again.
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)