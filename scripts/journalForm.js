import { saveEntries } from "./JournalDataProvider.js"


const formContainer = document.querySelector(".journal_form")

// add an event listener to the form container
formContainer.addEventListener("click", (theEvent) => {
    // check to see if they clicked on the "Add New Cohort" button
    if (theEvent.target.value === "recordJournal") {
        // then take the values of the input fields and create a new cohort object
        const newEntry = {
            date: document.querySelector("#journalDate").value
        }

        // send newly created cohort object to our database.json (baby API)
        saveEntries(newEntry)
    }
})



const contentTarget= document.querySelector(".journalForm")



export const renderForm = () => {
    contentTarget.innerHTML = `
<h1>Daily Journal</h1>
<form action="" class="journalEntries">
    <fieldset class="onTop">
        <label for="journalDate">Date of entry</label>
        <input  type="date" name="journalDate" id="journalDate">
    </fieldset>

    <fieldset class="onTop">
        <label for="conceptsCovered" class="onTop">Concepts Covered</label>
        <input type="text" name="conceptsCovered" id="conceptsCovered" class="onTop">
    </fieldset>

    <fieldset class="onTop">
        <label for="journaEntry">Journal Entry</label>
        <textarea name="" id="" cols="30" rows="4"></textarea>
    </fieldset>

    <fieldset class="onTop">
        <label for="mood">Mood for the Day:</label>
        <select id="mood" name="moodlist" form="moodform">
            <option value="sad">Sad</option>
            <option value="happy">Happy</option>
            <option value="mad">Mad</option>
            <option value="blah">Blah</option>
        </select>
    </fieldset>
    </form>
    <button id="recordJournal">Record Journal Entry</button>
    `
    }


    export const HTMLForm = () => {
        renderForm()
        }
        
        export default HTMLForm