const puzzleForm = document.querySelector(".puzzle")
puzzleForm.addEventListener("submit", event =>{
  event.preventDefault()
  document.querySelector(".response").innerHTML = "Huh? I... I don't know that. Auuuuuuuugh."
})
