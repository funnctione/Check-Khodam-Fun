document.addEventListener("DOMContentLoaded", function() {
    // Hide result box and random image on page load
    document.getElementById("resultBox").style.display = "none";
    document.querySelector(".gambar-random").style.display = "none";
});

function generateRandomName() {
    const input = document.querySelector(".input-box").value.trim();
    const names = ["Gayung Love", "Sabun Bolong", "Gerung", "Kotak Amal Masjid", "Ember Bolong", "Jembut Dikepang", "Debu Cisauk", "Mie Lodoh", "Tidak Ada", "Sempol Ayam"];
    const images = {
        "Gayung Love": "https://s1.bukalapak.com/img/1882526513/large/images_4_scaled.jpg",
        "Sabun Bolong": "https://th.bing.com/th/id/OIP.cUIoswTTCXZNurc8fZtLZAAAAA?w=177&h=180&c=7&r=0&o=5&pid=1.7",
        "Gerung": "https://riausky.com/assets/berita/original/16443915897-joget2.jpg",
        "Kotak Amal Masjid": "https://example.com/kotak-amal.jpg",
        "Ember Bolong": "https://example.com/ember-bolong.jpg",
        "Jembut Dikepang": "https://th.bing.com/th/id/OIP.aBsTcNXGguxL1kbPh5ZnJwHaD4?rs=1&pid=ImgDetMain",
        "Debu Cisauk": "https://example.com/debu-cisauk.jpg",
        "Mie Lodoh": "https://example.com/mie-lodoh.jpg",
        "Tidak Ada": "https://example.com/tidak-ada.jpg",
        "Sempol Ayam": "https://example.com/sempol-ayam.jpg"
    };

    if (input) {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomImage = images[randomName];
        document.getElementById("resultBox").textContent = randomName;
        document.getElementById("resultBox").style.display = "block";

        const imageElement = document.querySelector(".gambar-random");
        imageElement.src = randomImage;
        imageElement.style.display = "block";
    } else {
        document.getElementById("resultBox").style.display = "none"; // Hide the result box if input is empty
        document.querySelector(".gambar-random").style.display = "none"; // Hide the image if input is empty
    }
}
