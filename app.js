const btnTranslate = document.querySelector("#btn-translate")
const inputtext = document.querySelector('#inputtext');
const outputtext = document.querySelector("#outputtext")

let URL = "https://api.funtranslations.com/translate/minion.json"


function clickhandler(){
    let modifiedURL = `${URL}?text=${inputtext.value}`
    fetch(modifiedURL)
      .then((response) => response.json())
      .then((data) => (outputtext.innerHTML = data.contents.translated))
      .catch(errorHandler)
}

function errorHandler(error) {
    console.log('error occured', error.message)
    alert('Please! Try after sometime')
  }

btnTranslate.addEventListener("click" , clickhandler)
