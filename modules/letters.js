import { fillLetter } from './stages.js'
import { stage } from '../main.js'

function getWord() {
const words = ['ARRAY', 'ART','COMPUTER', 'PENCIL','BEACH', 'BOOK', 'SOCCER', 'EVENT', 'PRANK', 'PUPPY','CLIMATE', 'SUBTRACTION',
'MOBILE','FOOD','BACKPACK', 'CANDY','SANDWICH', 'MAKEUP','WIPES','AIRPLANE','TAXI', 'BUS','BEAR','PAW','WOODS','FOREST','PHONE']
return words[Math.floor(Math.random() * words.length)]
}

function CreateLetters (word) {
  const alphabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'

  const letters = alphabet.split(' ')

  for (let i = 0; i < letters.length; ++i) {
    const button = document.createElement('input')
    button.type = 'button'
    button.value = letters[i]
    button.classList = 'btn btn-primary text-3xl'

    const btnIsDisabled = window.localStorage.getItem(button.value)

    // only change the button's disabled property if the button's disabled
    // property value was saved in the local storage.
    if (btnIsDisabled !== null) {
      button.disabled = btnIsDisabled
    }

    document.getElementById('letters').appendChild(button)
    button.addEventListener('click', function () {
      if (!fillLetter(word, button.value)) {
        stage.changeStage(stage.getStage() + 1)
        if(stage.getStage() === 12) {
          gameLost(word)
        }
      }

      button.disabled = true

      // save the button.disabled value into local storage
      window.localStorage.setItem(button.value, button.disabled)
    })
  }
}

function gameLost(word) {
  document.getElementById('word-holder').innerHTML = ' You Lost!!!'
  document.getElementById('letters').innerHTML = 'The answer was: ' + word
}
export { CreateLetters }
