const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/"


//          Search section ----------------------------


// Array and function to store and display history

let g_history = document.getElementById('history')
let arr_history = []

function addHistory(word) {
    arr_history.push(word)
}

g_history.addEventListener('click', () => {
    if (arr_history = []) {
        alert("No History Found")
    } else {
        () => {
            arr_history.map(function (display) {
                let html =
                    `<select>
                <option>${display}</option>
                </select> `
                g_history.innerHTML += html
            })
        }
    }
})

//    Search word function (api request) and alert to display  +  search button event + press enter event

let b_search = document.getElementById('search')

let s_word = document.getElementById('search_word')

b_search.addEventListener('click', async () => {

    let input = document.getElementById('search_word').value

    addHistory(input)

    console.log(input)

    try {
        let response = await fetch(`${BASE_URL}${input}`)

        if (!response.ok) {
            throw new Error("Network Error")
        }

        let word = await response.json()

        let html =
            `<div id="output">
                <div>
                    <div>
                        <h3>${input}</h3>
                    </div>
                    <div id="wrd">
                        <button id="btn"><i id="word-pronounce" class="fa-solid fa-volume"
                                href="pronounce-search"></i>${word.phonetics}</button>
                        <p id="ph">${word.phonetic}</p>
                    </div>
                    <div>
                        <p id="wrd-def">(${word.meanings})</p>
                    </div>
                    <div>
                        <p id="wrd-ex"></p>
                    </div>
                </div>
            </div>`

        document.getElementById('src-wrd').innerHTML += html

        input = ""

        console.log(word)
        console.log(typeof word)

    } catch (error) {
        console.error("Error getting word", error)
    }
})


    //          Word of the Day section ---------------------------

    // speech pronounciation function + word pronounciation function + display
    // random word of the day function + display
    // definition funtion + display
    // retrieve 6 synonyms function +display


    //          Vocab finds section ---------------------------

    // extra section filter function + definition + examples +display




















    // IDEAS-------------------------------

    // function keyPress(event){
    //     if(event.value === "Enter"){
    //         console.log("Key Pressed")
    //     }
    // }

    // s_word.addEventListener("keydown", function(event){
    //     if(event.value === "Enter"){
    //         async () => {

    //             let input = document.getElementById('search_word').value

    //     console.log(input)

    //     try {
    //         let response = await fetch(`${BASE_URL}${input}`)

    //         if (!response.ok) {
    //             console.log("Network Error")
    //         }

    //         let word = await response.json()

    //         console.log(word)

    //         // function displaySearch(){
    //         //     Swal.fire(
    //         //         `
    //         //         `
    //         //     )
    //         // }

    //         input.value = ""


    //     } catch (error){

    //     }}}})


    // Swal.fire(`<div id="pronounce">
    //                         <button aria-label="Pronounciation" id="btn-day"><i class="fa-solid fa-volume"
    //                                 id="day-pronounce" href="pronounce-day"></i>${word.phonetics[2]}</button>
    //                         <h3>${input.value}</h3>
    //                         <p>${word.phonetic}</p>
    //                     </div>
    //                     <div id="defo">
    //                         <span>Definition:${word.meaning.definitions[0]}</span>
    //                     </div>
    //                     <div>
    //                         <p>Example</p>
    //                     </div>`)

    //         console.log(displayWord(word))

    // < div id = "h-output" >
    //     <div>
    //         <div>
    //             <h3>${input}</h3>
    //         </div>
    //         <div id="h-wrd">
    //             <button id="h-btn"><i id="word-pronounce" class="fa-solid fa-volume"
    //                 href="pronounce-search"></i> ${word.phonetics}</button>
    //             <p id="h-ph">${word.phonetic}</p>
    //         </div>
    //         <div>
    //             <p id="h-wrd-def">(${word.meanings})</p>
    //         </div>
    //         <div>
    //             <p id="h-wrd-ex"></p>
    //         </div>
    //     </div>
    //         </div>


