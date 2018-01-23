const puzzleForm = document.querySelector(".puzzle")
puzzleForm.addEventListener("submit", event => {
  event.preventDefault()
  document.querySelector(".response").innerHTML =
    "That is correct! There are 72 commemorative bricks. 7 and 2 are also the first two digits of the code to deactivate the missile."
})
