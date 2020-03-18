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
            <input type="submit" name="recordEntry" value="Record Journal Entry">
    `
    }