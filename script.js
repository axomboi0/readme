let currentPage = 1;

const bgMusic = document.getElementById("bgMusic");
let musicStarted = false;

// Page navigation
function goToPage(pageNum) {

    // START MUSIC when going to page 2 first time
    if (!musicStarted && pageNum === 2 && bgMusic) {
        bgMusic.volume = 0.20; // soft volume
        bgMusic.play().catch(() => {});
        musicStarted = true;
    }

    document.getElementById(`page${currentPage}`).classList.remove('active');
    currentPage = pageNum;
    document.getElementById(`page${pageNum}`).classList.add('active');

    // Hearts animation on final page
    if (pageNum === 4) {
        createHeartsAnimation();
    }
}

// Hearts animation
function createHeartsAnimation() {
    const heartsContainer = document.getElementById('hearts');
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💝'];

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent =
                heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 0.5 + 's';

            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, i * 200);
    }
}
