/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import {useEntries} from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".dailyJournal")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("journalEntries", () => {
    // when the cohort's state has changed, clear the cohort container and render the cohort list again
    entryLog.innerHTML = ""
    render()
})


export const render = () => {
    // Use the journal entry data from the data provider component
    const entries = useEntries()

    for (const entry of entries) {

       const journalHTMLRep = JournalEntryComponent(entry)
        entryLog.innerHTML += journalHTMLRep
    }
}

export const EntryListComponent = () => {
render()
}

export default EntryListComponent