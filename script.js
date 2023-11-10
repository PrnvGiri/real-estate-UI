const typedSpan = document.getElementById("typed")
const totype = ["help you find your dream home effortlessly.", "connect you with your ideal property.", 
"simplify your real estate search.", "turn your property dreams into reality."]

const delayTyping_char = 80;
const delayErasing_text = 50;
const delayTyping_text = 1000;

let totypeIndex = 0;
let charIndex = 0;

function typeText() {
	if (charIndex < totype[totypeIndex].length) {
		typedSpan.textContent += totype[totypeIndex].charAt(charIndex);
		charIndex++;
		setTimeout(typeText, delayTyping_char);
	}
	else {
		setTimeout(eraseText, delayTyping_text);
	}
}

function eraseText() {
	if (charIndex > 0) {
		typedSpan.textContent = totype[totypeIndex].substring(0, charIndex-1);
		charIndex = charIndex-1;
		setTimeout(eraseText, delayErasing_text);
	}
	else {
		totypeIndex++;

		if (totypeIndex >= totype.length)
			totypeIndex = 0;
			setTimeout(typeText, delayTyping_text);
	}
}

window.onload = function() {
	if (totype[totypeIndex].length) setTimeout(typeText, delayTyping_text);
}
// cursor
const cursor = document.getElementById("cursor-custom"),
  radius = cursor.offsetHeight / 2;

document.addEventListener("mousemove", (e) => {
  let top = e.clientY - radius,
    left = e.clientX - radius;

  cursor.style = `top: ${top}px; left: ${left}px`;
});
 function changeHeader() {
      const header = document.querySelector("header");
      const imageArray = [
        "pic1.jpg",
        "pic2.jpg",
        "pic3.jpg",
        "pic4.jpg",
        "pic5.jpg",
        "pic6.jpg",
      ];
      const randomIndex = Math.floor(Math.random() * imageArray.length);
      header.style.backgroundImage = `url("images/${imageArray[randomIndex]}")`;
    }
    const changeColorButton = document.getElementById("changeColorButton");
    changeColorButton.addEventListener("click", changeHeader);