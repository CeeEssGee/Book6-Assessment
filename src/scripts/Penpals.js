import { LetterForm } from "./LetterForm.js";
import { SentLetters } from "./SentLetters.js";

export const Penpals = () => {
    return `
    <h1>Pen Pal Society</h2>
    <section class="letterForm">
        ${LetterForm()}
    </section>
    <section class="sentLetters">
        ${SentLetters()}
    </section>
    `
}