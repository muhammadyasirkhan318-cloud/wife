// ==========================================
// SMOOTH SCROLL
// ==========================================

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }

}


// ==========================================
// FINAL SURPRISE
// ==========================================

function showFinalMessage() {

    const message = document.getElementById("finalMessage");

    message.classList.toggle("show");

    createHeartExplosion();

}


// ==========================================
// FLOATING HEARTS
// ==========================================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 15 + 10 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    document.getElementById("hearts-container")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}


// Create hearts continuously

setInterval(createHeart, 900);


// ==========================================
// HEART EXPLOSION
// ==========================================

function createHeartExplosion() {

    for (let i = 0; i < 25; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.classList.add("heart");

            heart.innerHTML = "♥";

            heart.style.left = (40 + Math.random() * 20) + "vw";

            heart.style.bottom = "40%";

            heart.style.fontSize =
                Math.random() * 20 + 12 + "px";

            heart.style.animationDuration =
                Math.random() * 3 + 2 + "s";

            document.getElementById("hearts-container")
                .appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 6000);

        }, i * 80);

    }

}


// ==========================================
// MUSIC
// ==========================================
let musicPlaying = false;

function toggleMusic() {

    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicBtn");

    if (music.paused) {

        music.play()
            .then(() => {
                musicPlaying = true;
                button.innerHTML = "❚❚";
            })
            .catch(error => {
                console.error("Audio play error:", error);
                alert("Song play nahi ho raha. Check karo ke Risha.mp3 same folder mein hai.");
            });

    } else {

        music.pause();
        musicPlaying = false;
        button.innerHTML = "♪";

    }
}

// ==========================================
// SCROLL REVEAL
// ==========================================

const cards = document.querySelectorAll(
    ".memory-card, .journey-item, .future-card, .promise, .photo-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(card);

});