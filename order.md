1.  ERD
2.  Create modules
3.  database.json: Add definitive data
4.  dataAccess.js: 
        Add applicationState
        Add const API = "http://localhost:8088"  
5.  index.html
        title 
        container ID
        css/scripts links
6.  dataAccess.js: 
        create and export fetchUsers()
        create and export getUsers()
7.  Authors.js: 
        import getUsers 
        create and export Authors with html
8.  LetterForm: 
        import Authors fx
        create and export LetterForm with html
        insert ${Authors()} where appropriate
        create mainContainer
        create mainContainer.eventListener for button
        process data for dataToSendToAPI fx
9.  Penpals.js:
        import LetterForm fx
        create and export Penpals with ${LetterForm()} + html
10.  main:
        import fetchUsers (works for authors & recipients)
        import Penpals fx
        create mainContainer fx
        create render fx and fetchUsers with .innerHTML = Penpals()
        include EventListener for state changed to re-render
11.  Recipients.js: 
        import getUsers 
        create and export Recipients with html
12. LetterForm: 
        import Recipients rx
        insert ${Recipients()} where appropriate
        add and process data for dataToSendToAPI fx
13. dataAccess.js: 
        create and export fetchTopics()
        create and export getTopics()
14. Topics:
        import getTopics()
        create and export Topics with html for radio buttons - I used for..of loop
15. LetterForm:
        import Topics fx
        insert ${Topics()} where appropriate
        add and process data for dataToSendToAPI fx
16. LetterBody:
        create and export LetterBody fx with html
17. LetterForm:
        import LetterBody fx
        insert ${LetterBody()} where appropriate 
        add and process data for dataToSendToAPI fx
18. main:
        import fetchCompletions 
        .then => fetchCompletions() added to render fx
19. dataAccess:
        create and export 
                saveCompletion
                fetchCompletions
                getCompletions
20. LetterForm:
        added :checked to const userTopic to return the correct topic id
        updated the sendDate to include locale date string
        Tweaked the names of the data returned to API to make them more functional
        parseInt the string id's on the eventListener
21. SentLetters:
        import getUsers, getTopics, getCompletions
        create findMatchingAuthor, findMatchingRecipient, and findMatchingTopic
        create convertLettersToElements  using the 3 fx's above and html to write the letter, return html
        create and export SentLetters where the ${letters.map(convertLettersToElements).join("")} is placed within div's in HTML, and return the HTML
22. Penpals.js:
        import SentLetters fx
        add SentLetters section 
        invoke ${SentLetters()}
23. completed.css
        make it purty
24. main.css
        @import completed.css


