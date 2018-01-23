const puzzleForm = document.querySelector(".puzzle")
puzzleForm.addEventListener("submit", event => {
  event.preventDefault()
  document.querySelector(".response").innerHTML =
    "Huh? I... I don't know that. Auuuuuuuugh."
})

function startTimer(duration, display){
  var timer = duration,
    minutes,
    seconds
  setInterval(function(){
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)

    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    display.textContent = minutes + ":" + seconds

    if(--timer < 0){
      timer = duration
    }
  }, 1000)
}

window.onload = function(){
  var sixtyMinutes = 60 * 60,
    display = document.querySelector("#time")
  startTimer(sixtyMinutes, display)
}
