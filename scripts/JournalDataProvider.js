let entries = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("journalEntries")

    eventHub.dispatchEvent(entryStateChangedEvent)
}

/*
    Allow other modules to get a copy of the application state
*/
export const useEntries = () => entries.slice()

/*
    Get the state of the notes from the API into the application
*/
export const getEntries = () => {
    return fetch('http://localhost:3000/entries')
        .then(response => response.json())
        .then(parsedEntries => {
            entries = parsedEntries
        })
}

export const saveEntries = (entry) => {
    return fetch('http://localhost:3000/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}