import EntryListComponent from "./JournalEntryList.js"
import { getEntries} from "./JournalDataProvider.js"
import HTMLForm from "./journalForm.js"


HTMLForm()
getEntries().then(EntryListComponent)

