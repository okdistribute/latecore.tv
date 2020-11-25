var out = prompt("What's your name?")
let utterance = new SpeechSynthesisUtterance("Hello, " + out + "!");
speechSynthesis.speak(utterance)
