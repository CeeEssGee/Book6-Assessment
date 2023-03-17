import { getUsers } from "./dataAccess.js"

export const Recipients = () => {
    let users = getUsers();
    let html =  `
    <h2>Recipient</h2>
    <select class="recipients" id="recipients" name="recipient">
        <option value="">Choose Recipient</option>

            ${users.map((user) => {
                return `<option value="${user.id}">${user.name}</option>`}).join("")}
    
    </select>`

    return html;
}