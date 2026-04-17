const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/"


//          Search section ----------------------------


// Array and function to store and display history

let g_history = document.getElementById('history')
let arr_history = []

function addHistory(word) {
    arr_history.push(word)
}

g_history.addEventListener('click', () => {
    if (arr_history == []) {
        alert("No History Found")
    }
})



//    Search word function (api request) and alert to display  +  search button event + press enter event

let b_search = document.getElementById('search')

let s_word = document.getElementById('search_word')

// let display = document.getElementById('src-wrd').querySelector(".word-pronounce")

b_search.addEventListener('click', async () => {

    let input = s_word.value

    if(input == ''){
        return alert("Please enter a word")
    }

    try {
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)

        if (!response.ok) {

            return alert("Network Error")
        }

        let word = await response.json()

        let html =
            `<div>
                <div>
                <div class="word-pronounce">

                        <audio controls>
                    <source src="${word[0].phonetics[2].audio}" type="audio/mpeg">
                    Your browser does not support the audio element.
                    </audio>
                    <h3>${input}</h3>
                    </div>
                    <div id="wrd">
                        <p id="ph">${word[0].phonetics[2].text}</p>
                    
                    
                        <p id="wrd-def"><em>(${word[0].meanings[0].partOfSpeech})<em> ${word[0].meanings[0].definitions[0].definition}</p>
                    
                    
                        <p id="wrd-ex"><em>Example: ${word[0].meanings[0].definitions[0].example}<em> </p>
                    </div>
                </div>
            </div>`

        document.getElementById('src-wrd').innerHTML += html

        addHistory([input])
        s_word.value = ""
        // document.getElementById('src-wrd').innerHTML = ""
        console.log(arr_history)
        // display.value = ""

    } catch (error) {
        console.error(error)
        return alert("Definition not available")
    }
})

async function displayWord(input) {

    if(input == ''){
        return alert("Please enter a word")
    }

    try {
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)

        if (!response.ok) {
            console.error("Network error")
        }
        let data = await response.json()

        let html =
            `<div id="clear">
                <div>
                        <div class="word-pronounce">
                        <h3>${input}</h3>

                        <audio controls>
                    <source src="${data[0].phonetics[2].audio}" type="audio/mpeg">
                    Your browser does not support the audio element.
                    </audio>
                    
                    </div>
                    
                    <div id="wrd">
                        <p id="ph">${data[0].phonetic}</p>
                    
                    
                        <p id="wrd-def"><em>(${data[0].meanings[0].partOfSpeech})<em> ${data[0].meanings[0].definitions[0].definition}</p>
                    
                    
                        <p id="wrd-ex"><em>Example: ${data[0].meanings[0].definitions[0].example}<em> </p>
                    </div>
                </div>
            </div>`

        document.getElementById('src-wrd').innerHTML = html
        addHistory(input)
        // s_word.value = ""
        // display.value = ""
        // console.log(arr_history)
    } catch (error) {
        console.error(error)
        return alert("Word not found")
    }
}

    s_word.addEventListener('keydown', async (event) => {
    // console.log(event)
    // console.log(event.key)
    if (event.key === "Enter") {
        // console.log("Enter key pressed")
        let input = s_word.value
        displayWord(input)
    }
})


//  input = ""
//  s_word = ""


//          Word of the Day section ---------------------------

// random word of the day function + display

const words = [
    "spring", "garden", "wonder", "planet", "stream",
    "marble", "wisdom", "bright", "winter", "market",
    "castle", "vivid", "simple", "spirit", "rhythm",
    "velvet", "puzzle", "tunnel", "ocean", "frozen",
    "hazard", "anchor", "desert", "column", "yellow",
    "shadow", "journey", "silver", "mighty", "energy"
]

function randomWord() {
    let c_word = Math.floor(Math.random() * words.length)
    return words[c_word]
}

document.addEventListener('DOMContentLoaded', async () => {

    let new_word = randomWord();

    try {
        let response = await fetch(`${BASE_URL}${new_word}`);

        if (!response.ok) {
            throw new Error("Network Error")
        }

        let word = await response.json()

        newWord = word

        let wWord = `${newWord[0].word}`
        let pPronounce = `${newWord[0].phonetic}`
        let defo = `${newWord[0].meanings[0].definitions[0].definition}`
        let ex = `Example: ${newWord[0].meanings[0].definitions[0].example}`

        if(wWord !== undefined){
            document.getElementById('w-word').innerText += wWord
        }else{
            document.getElementById('w-word').innerText += `Unable to display word`
        }
        if(pPronounce !== undefined){
            document.getElementById('p_pronounce').innerText += pPronounce
        }else{
            document.getElementById('p_pronounce').innerText += ``
        }
        if(defo !== undefined){
            document.getElementById('defo').innerText += defo
        }else{
            document.getElementById('defo').innerText += `Unable to display definition`
        }
        if(ex !== undefined){
            document.getElementById('example').innerText += ex
        }else{
            document.getElementById('example').innerText += `No example available`
        }
    } catch (error) {
        console.error("Error getting word of the day", error)
    }
})



// definition function + display
// retrieve 6 synonyms function +display


//          Vocab finds section ---------------------------

// extra section filter function + definition + examples + display + ------------------- + rotating examples


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

// } else {
        //     () => {
        //         arr_history.forEach(function(show){
        //             let html = 
        //             `<option>${show}</option>
        //             `
        //             document.getElementById('select').innerHTML += html
        //         })
        //     }

        //     if(`${word[0].phonetics[2].audio}`== undefined){
        //     console.log("Audio unavailable")
        //     return `"Pronouniation unavailable"`
        // }else if(`${word[0].phonetics[0].text}` == undefined){
        //     console.log("Phonetic unavailable")
        //     return null
        // }else if(`${word[0].meanings[0].partOfSpeech}` == undefined){
        //     return null
        // }else if(`${word[0].meanings[0].definitions[0].example}`== undefined){
        //     return  null
        // }else if(`${word[0].meanings[0].definitions[0].definition}`=== undefined)
        //     return `Definition not available`

        //     if(`${data[0].phonetics[2].audio}`== undefined){
        //     console.log("Audio unavailable")
        //     return `"Pronouniation unavailable"`
        // }else if(`${data[0].phonetics[0].text}` == undefined){
        //     console.log("Phonetic unavailable")
        //     return null
        // }else if(`${data[0].meanings[0].partOfSpeech}` == undefined){
        //     return null
        // }else if(`${data[0].meanings[0].definitions[0].example}`== undefined){
        //     return null
        // }else if(`${data[0].meanings[0].definitions[0].definition}`=== undefined)
        //     return `Definition not available`

// AUDIO FUNCTIONALITY TROUBLE


