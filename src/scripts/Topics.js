import { getTopics } from "./dataAccess.js";

export const Topics = () => {
    let topics = getTopics()
    let html = `<h3>Choose a Topic</h3>`
    html += `<div class="topics_div">`
    for (const topic of topics) {
        html += `<div class="topic-each"><input type="radio" name="topic" value="${topic.id}" /> ${topic.name}
        </div>
        `
    }
   html += `</div>`
   return html 
}