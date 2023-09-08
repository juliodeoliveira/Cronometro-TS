let sec = 0
let min = 0
let hr = 0
let timer
let strtClickeds = 0
let psClickeds = 0
let stClickeds = 0


function start(){
   timer = setInterval(count, 1000)
   strtClickeds = 1

   if (strtClickeds == 1) {
      document.querySelector(".btnStart").style.pointerEvents = "none"
   }
}

function pause() {
   console.log("Paused!")
   clearInterval(timer)
   psClickeds = 1

   if (psClickeds > 0 && sec != 0) {
      document.querySelector(".btnStart").style.pointerEvents = "auto"
      document.querySelector(".btnStart").value = "Retomar"
   }
}

function slow() {
   stClickeds = 1
   console.log("Stopped!")
   location.reload()
}

function digits(num) {
   if (num < 10) {
      return["0"+num]
   }else {
      return num
   }
}

function count() {
   sec++

   if (sec == 60) {
      min++
      sec = 0

      if (min == 60) {
         hr++
         min = 0
      }
   }

   document.getElementById("clock").innerHTML = digits(hr) + ":" + digits(min) + ":" + digits(sec)

}