
/* =========================================
   VANESSA BIRTHDAY WEBSITE
   Interactive JavaScript
========================================= */

"use strict";

// =========================================
// PAGE NAVIGATION SYSTEM
// =========================================

const pages = document.querySelectorAll(".page");

let currentPage = 1;

function navigateToPage(pageNumber) {

    if (pageNumber < 1 || pageNumber > pages.length) {
        console.error("Invalid page number.");
        return;
    }

    pages.forEach((page, index) => {

        page.classList.remove("active");

        if (index + 1 === pageNumber) {
            page.classList.add("active");
        }

    });

    currentPage = pageNumber;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// =========================================
// PAGE 1 - SECRET ENTRANCE
// =========================================

const enterButton = document.getElementById("enter-btn");

enterButton.addEventListener("click", () => {

    navigateToPage(2);

});


// =========================================
// PAGE 2 - BIRTHDAY GIFT
// =========================================

const giftButton = document.getElementById("gift-btn");
const giftBox = document.getElementById("gift-box");

let giftOpened = false;

giftButton.addEventListener("click", () => {

    if (giftOpened) return;

    giftOpened = true;

    giftBox.classList.add("gift-opened");

    giftButton.textContent = "Your surprise is ready! 🤍";

    createConfetti();

    setTimeout(() => {

        navigateToPage(3);

    }, 1800);

});


// =========================================
// PAGE 3 - BIRTHDAY LETTER
// =========================================

const cameraButton = document.getElementById("camera-btn");

cameraButton.addEventListener("click", () => {

    navigateToPage(4);

    createFloatingHearts();

});


// =========================================
// PAGE 4 - OUR MEMORIES
// =========================================

const kittyButton = document.getElementById("kitty-btn");
const kittyMessage = document.getElementById("kitty-message");

let kittyClicked = false;

kittyButton.addEventListener("click", () => {

    kittyClicked = !kittyClicked;

    if (kittyClicked) {

        kittyButton.textContent = "😽";

        kittyMessage.textContent =
            "MEOWWW!! ILUVUUU SO MUCHH, BABEOWWW!! 🤍";

        createConfetti();

    } else {

        kittyButton.textContent = "🐱";

        kittyMessage.textContent =
            "Hehehe! Your sleepy kitty is back. 💤";

    }

});

// =========================================
// AUTOMATIC FINAL PAGE REVEAL
// =========================================

const memoriesContent = document.querySelector(".memories-content");

const finalRevealButton = document.createElement("button");

finalRevealButton.className = "primary-btn";

finalRevealButton.textContent = "One Last Surprise 💙";

finalRevealButton.style.marginTop = "25px";

memoriesContent.appendChild(finalRevealButton);

finalRevealButton.addEventListener("click", () => {

    navigateToPage(5);

    createConfetti();

    createFloatingHearts();

});


// =========================================
// PAGE 5 - REPLAY
// =========================================

const replayButton = document.getElementById("replay-btn");

replayButton.addEventListener("click", () => {

    giftOpened = false;

    giftBox.classList.remove("gift-opened");

    giftButton.textContent = "Open Your Present 💙";

    kittyClicked = false;

    kittyButton.textContent = "🐱";

    kittyMessage.textContent =
        "Psst... there's a sleepy kitty here.";

    navigateToPage(1);

});


// =========================================
// CONFETTI EFFECT
// =========================================

function createConfetti() {

    const colors = [
        "#ffffff",
        "#dceeff",
        "#a9d3f5",
        "#609bd0",
        "#315f89"
    ];

    for (let i = 0; i < 65; i++) {

        const particle = document.createElement("span");

        particle.textContent = Math.random() > 0.5 ? "✦" : "♥";

        particle.style.position = "fixed";

        particle.style.left = Math.random() * 100 + "vw";

        particle.style.top = "-20px";

        particle.style.color =
            colors[Math.floor(Math.random() * colors.length)];

        particle.style.fontSize =
            Math.random() * 15 + 10 + "px";

        particle.style.pointerEvents = "none";

        particle.style.zIndex = "9999";

        particle.style.transition =
            `transform ${2 + Math.random() * 2}s ease, opacity 2s ease`;

        document.body.appendChild(particle);

        requestAnimationFrame(() => {

            particle.style.transform =
                `translate(${Math.random() * 180 - 90}px, ${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`;

            particle.style.opacity = "0";

        });

        setTimeout(() => {

            particle.remove();

        }, 4500);

    }

}


// =========================================
// FLOATING HEART EFFECT
// =========================================

function createFloatingHearts() {

    const symbols = ["♡", "♥", "💙", "🤍"];

    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("span");

        heart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.position = "fixed";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize = Math.random() * 20 + 15 + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "999";

        heart.style.transition =
            "transform 5s linear, opacity 5s ease";

        document.body.appendChild(heart);

        requestAnimationFrame(() => {

            heart.style.transform =
                `translateY(-${window.innerHeight + 100}px)`;

            heart.style.opacity = "0";

        });

        setTimeout(() => {

            heart.remove();

        }, 5200);

    }

}


// =========================================
// CONSOLE MESSAGE
// =========================================

console.log(
    "%c HAPPY BIRTHDAY, BABEOWWW!! 😽🤍💙 ",
    "background: #dceeff; color: #315f89; font-size: 18px; padding: 12px;"
);

console.log(
    "Made with love by your Thinnosaurus. 🦖"
);
