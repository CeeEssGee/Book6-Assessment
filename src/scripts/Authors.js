import { getUsers } from "./dataAccess.js"

export const Authors = () => {
    let users = getUsers();
    let html = `
    <h2>Author</h2>
    <select class="authors" id="authors" name="author">
        <option value="">Choose Author</option>

            ${users.map((user) => {
                return `<option value="${user.id}">${user.name}</option>`}).join("")}
    
    </select>`

    return html;
}

