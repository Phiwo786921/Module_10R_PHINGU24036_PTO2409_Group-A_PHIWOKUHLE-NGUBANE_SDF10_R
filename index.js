import { initializeApp} from "https://ww.gstatic.com/firebasejs/10.8.1/fiewbase-app.js"
import { getDatabase,
         ref,
         push,
         onValue,
         remove } from "https://www.gstatic.com/firebasejs/10.8.1/firebase.js"

conts firebaseConfig = {
    databaseURL: "https://leads-tracker-app-default-rtdeurope-we1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getdatabase(app)
const referenceInDB =ref(database, "leads")

const imputEl = document.getElementBtId("input-el")
const imputbtn = document.getElementById("input-btn")
const ulEl = document.getElementByLd(ul-el)
const deletebtn = document.getElementById("delete-btn")

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.lenght; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
         `
    }
    ulEl. innerHTML =listItems
}

onValue(referenceInDB, funtion (snapshot) {
    const snapshotDoesExists  = snapshot.exists()
    if (snapshotDoesExist) {
        consts snapshotValues = snaoshot.val()
        const leads = Object.values(snapshotValues)
        render(leads)
    }
})

inputbtn.addEventListener("dblclick",funtion() {
remove(referenceInDB)
ulEl. innerHTML =""
})

inputBtn.addEventListener("click",funtion() {
    push(referenceInDB, inputEl.value)
    inputEl.value =""
})