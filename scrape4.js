// scrape4
const urlArray = []
const qtyOfPicsToDownload = 20
let timeoutTime = 903
let picNum = 0
let string = ""
let formattedString
let currentUrl
let vpnSwitchlimit = 1
let timeoutFloor = 3146
let timeoutWidth = 2152
let numPicsBeforeVpnSwitch = 125
let countdownStartTime = 50

// timeoutFloor = 2734
// timeoutWidth = 1209
// numPicsBeforeVpnSwitch = 100
// countdownStartTime = 30

// Go to next picture  ***********************************************************************
function nextPicture() {
  try {
    document.getElementsByClassName("_6CZji")[0].firstElementChild.click()
    // ;[...document.getElementsByClassName("_6CZji")].slice(-1)[0].click()
  } catch (e) {
    if (e instanceof TypeError) {
      document.getElementsByClassName("D1AKJ")[0].lastElementChild.click()
    }
  }

  console.log(`${picNum} - ${Math.round(timeoutTime * 10) / 10}  ${currentUrl}`)
  setTimeout(() => {
    askAboutSubPic()
  }, timeoutTime)

  //   setTimeout(() => {
  //     finishScraping()
  //   }, intervalTime - 50)
}

// Multiple picture post?  ********************************************************************
let subPic = true
let inSubPic = false

function askAboutSubPic() {
  picNum++
  vpnSwitchlimit++
  timeoutTime = Math.random() * timeoutWidth + timeoutFloor

  try {
    document.getElementsByClassName("_6CZji")[0].firstElementChild
    // ;[...document.getElementsByClassName("_6CZji")].slice(-1)[0].click()
  } catch (e) {
    subPic = false
  }
  functionDecider()
}

// Decide picture type ************************************************************************
function functionDecider() {
  if (subPic == false && inSubPic == false) {
    subPic = true
    urlCheckSingle()
  } else if (subPic == false && inSubPic == true) {
    subPic = true
    inSubPic = false
    urlCheckSingle()
  } else if (subPic == true) {
    inSubPic = true
    urlCheckSub()
  }
}

// NO SUB pic URL check  ****************************************************************************
function urlCheckSingle() {
  let singleInt = setInterval(urlExists, 30)
  currentUrl = [...document.getElementsByClassName("FFVAD")].slice(-1)[0].src

  function urlExists() {
    if ([...document.getElementsByClassName("FFVAD")].slice(-1)[0].src === "") {
    } else {
      clearInterval(singleInt)
      urlArray.unshift(currentUrl)

      // for (url in urlArray) {
      //   if (currentUrl === urlArray[url]) {
      //     console.log(`DUPLICATE with Pic ${url}`)
      //   }
      // }

      setTimeout(() => {
        terminateScrapeDecider()
      }, 100)
    }
  }
}

// YES SUB pic URL check  ****************************************************************************
function urlCheckSub() {
  let subInt = setInterval(subUrlExists, 30)
  currentUrl = [...document.getElementsByClassName("FFVAD")].slice(-2, -1)[0]
    .src

  function subUrlExists() {
    if (
      [...document.getElementsByClassName("FFVAD")].slice(-2, -1)[0].src === ""
    ) {
    } else {
      clearInterval(subInt)
      urlArray.unshift(currentUrl)

      // for (url in urlArray) {
      //   if (currentUrl === urlArray[url]) {
      //     console.log(`DUPLICATE with Pic ${url}`)
      //   }
      // }

      setTimeout(() => {
        terminateScrapeDecider()
      }, 100)
    }
  }
}

// Check urlArray length  ****************************************************************************
function terminateScrapeDecider() {
  let backArrowButton = document.getElementsByClassName("D1AKJ")[0]
    .firstElementChild
  let forwardArrowButton = document.getElementsByClassName("D1AKJ")[0]
    .lastElementChild

  // if (urlArray.length <= 10 || backArrowButton !== forwardArrowButton) {
  if (backArrowButton !== forwardArrowButton) {
    // if (urlArray.length <= qtyOfPicsToDownload) {
    if (vpnSwitchlimit !== numPicsBeforeVpnSwitch) {
      setTimeout(() => {
        nextPicture()
      }, 50)
    } else if (vpnSwitchlimit === numPicsBeforeVpnSwitch) {
      vpnSwitchlimit = 0
      let countdownStart = countdownStartTime
      console.log(
        " * * * * * * * * * * Countdown is Starting * * * * * * * * * * * * "
      )
      let theCountdown = setInterval(countdown, 1150)

      function countdown() {
        console.log(countdownStart)
        countdownStart--
        if (countdownStart === 0) {
          clearInterval(theCountdown)
          console.log(urlArray.length)
          setTimeout(() => {
            nextPicture()
          }, 50)
        }
      }
    }
  } else {
    arrayFormatter()
  }
}

// if (backArrowButton !== forwardArrowButton) {
//   setTimeout(() => {
//     nextPicture()
//   }, 50)
// } else {
//   arrayFormatter()
// }
// }

// Format and Terminate ****************************************************************************
const arrayFormatter = () => {
  for (qty in urlArray) {
    string += `'${urlArray[qty]}', `
  }
  formattedString = string
    .split("")
    .slice(0, -2)
    .join("")
  setTimeout(() => {
    allDone()
  }, 2000)
}

const allDone = () => {
  console.log("All Done")
  console.log(formattedString)
}

setTimeout(() => {
  askAboutSubPic()
}, 463)
