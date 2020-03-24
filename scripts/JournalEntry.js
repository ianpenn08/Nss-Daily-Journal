/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entry) => {
    return `
        <section>
        <div>${entry.date}</div>
        <div>${entry.concept}</div>
        <div>${entry.entry}</div>
        <div>${entry.mood}</div>
        </section>
    `
}

export default JournalEntryComponent