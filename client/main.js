import { initialiseerToggleNav } from "./src/hamburger.js";
import { checkWindowSize } from "./src/hamburger.js";
import { createKlusjesCard } from "./src/klusjesView.js";


// Queryselectors
const verwijderButton = document.querySelector("#verwijder")
const postButton = document.querySelector("#post")
const mijnklusjes = document.getElementById('mijnKlusjes') // test TODO remove

// Test adding function
const klusjes = {
    userName: "Merl Stanley",
    userTime: "Vandaag om 12:33",
    taak: "Boodschappen Delhaize",
    locatie: "Sint-Lievens-Houtem, 9520"
  };

if (mijnklusjes) {
    createKlusjesCard(klusjes, mijnklusjes)
}




// Hamburger menu mobile menu
initialiseerToggleNav()
// Responsive navbar toggle
window.addEventListener("resize", checkWindowSize)

// Posts pagina (index.html)
if (postButton) {
    postButton.addEventListener("click", function() {
        window.location.href = './klus.html'
    })
}