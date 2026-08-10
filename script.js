const opening = document.getElementById("opening");
const birthday = document.getElementById("birthday");
const photos = document.getElementById("photos");
const message = document.getElementById("message");


// =========================================
// AMBIL TOMBOL
// =========================================

const startButton = document.getElementById("startButton");
const nextButton = document.getElementById("nextButton");
const messageButton = document.getElementById("messageButton");
const replayButton = document.getElementById("replayButton");


// =========================================
// MUSIK
// =========================================

const birthdayMusic = document.getElementById("birthdayMusic");


// =========================================
// FUNGSI PINDAH HALAMAN
// =========================================

function showPage(page) {

    opening.classList.add("hidden");
    birthday.classList.add("hidden");
    photos.classList.add("hidden");
    message.classList.add("hidden");

    page.classList.remove("hidden");
}


// =========================================
// TOMBOL BUKA
// =========================================

startButton.addEventListener("click", function () {

    showPage(birthday);

    birthdayMusic.play().catch(function () {
        console.log("Musik belum bisa dimainkan.");
    });

});


// =========================================
// TOMBOL LANJUT
// =========================================

nextButton.addEventListener("click", function () {

    showPage(photos);

});


// =========================================
// TOMBOL BUKA PESAN
// =========================================

messageButton.addEventListener("click", function () {

    showPage(message);

});


// =========================================
// TOMBOL ULANGI
// =========================================

replayButton.addEventListener("click", function () {

    showPage(opening);

    birthdayMusic.currentTime = 0;

});