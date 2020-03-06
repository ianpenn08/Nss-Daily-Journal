/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entry) => {
    return `
        <h1>${entry.concept}</h1>
        <ul>
        <li>${entry.date}</li>
        <li>${entry.entry}</li>
        <li>${entry.mood}</li>
        </section>
    `
}

export default JournalEntryComponent