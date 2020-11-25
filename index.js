var el = document.getElementById("answer-phone")

el.onclick = function () {
  let utterance = new SpeechSynthesisUtterance("What's your name?");
  speechSynthesis.speak(utterance);
  var out = prompt("What's your name?");
  utterance = new SpeechSynthesisUtterance("Hello, " + out + "!");
  speechSynthesis.speak(utterance);
}
