var tts = require('basic-tts')

var out = prompt("What's your name?")

let utterance = new SpeechSynthesisUtterance("Hello, " + out + "!");
speechSynthesis.speak(utterance).then(() => {
  console.log("The speaker has spoken!");
}).catch((err) => {
  console.trace(err)
  console.log("Sigh...the speaker did not speak :(");
});


console.log("READY!");
console.log(window.speechSynthesis.getVoices());
