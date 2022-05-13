
/*const wordInput = document.querySelector("#submitWord");

var request = new XMLHttpRequest();

let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`;

console.log(JSON.parse(request.open('GET', url)));*/

// Add event listener to submit button
    
    // Call functions when submit it pressed



// Store html content areas as variables
const word = document.querySelector("#word");
const wordDefinition = document.querySelector("#definition");
const wordSynonyms = document.querySelector("#synonyms");


// Create the request for data collection using API
var request = new XMLHttpRequest();



// Open the connection to the API
request.open('GET', "https://api.dictionaryapi.dev/api/v2/entries/en/last");

    // Create a function to handle the data loading
    // Running immediately on load because of .onload
    request.onload = function (){

        // Check the outcome of the request
        if(request.status >= 200 && request.status < 400) {

            // Create variable to store response data
            let data = JSON.parse(this.response);

            // If successful, process the data
            data.forEach(function(define){
                renderDefine(define)
            });

            // Call function to display data

        } else {
            // If unsuccessful, inform user
            console.log("API ERROR")
        }

    }

// Send request to API server
request.send();

// Define function to display data
function renderDefine(define){
    console.log(define);
    // The word
    console.log(define.word);
    //The first definition
    console.log(define.meanings[0].definitions[0].definition);
    
    //The first synonym
    console.log(define.meanings[0].synonyms[0]);
}
