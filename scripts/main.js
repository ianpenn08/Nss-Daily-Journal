import EntryListComponent from "./JournalEntryList.js"
import { getEntries} from "./JournalDataProvider.js"
import HTMLForm from "./journalForm.js"

getEntries().then(EntryListComponent)
HTMLForm()
