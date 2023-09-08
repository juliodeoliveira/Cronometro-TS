let seconds: number = 0
let minutes: number = 0
let hours: number = 0

let time: number


let startClicked: number = 0
let pauseClicked: number = 0
let stopClicked: number = 0

let startButton = <HTMLFormElement> document.getElementById("btnStart")

let clock = <HTMLDivElement> document.getElementById("clock")


function startCounter(): void {
   time = setInterval(counter, 1000)
   startClicked = 1
   if (startClicked = 1) {
      startButton.style.pointerEvents = "none"
   }
}

function pauseCounter(): void {
   clearInterval(time)
   pauseClicked = 1

   if (pauseClicked > 0 && seconds != 0 || minutes != 0 || hours != 0) {
      startButton.style.pointerEvents = "auto"
      startButton.value = "Retomar"
   }
}

function stopCounter(): void {
   stopClicked = 1
   location.reload()
}

function digits(num: number) {
   if (num < 10) {
      return ["0"+num]
   } else {
      return num
   }
}
function counter(): void {
   seconds++
   if (seconds == 60) {
      minutes++
      seconds = 0
      
      if (minutes == 60) {
         hours++
         minutes = 0
      }
   }
   // elemento para adicionar no site o resultado
   clock.innerHTML = digits(hours) + ":" + digits(minutes) + ":" + digits(seconds)
}