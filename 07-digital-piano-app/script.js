function playSound(note) {
  let audio = new Audio(`sounds/${note}.mp3`);
  console.log(audio);
  audio.play();
}
