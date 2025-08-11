const envelope = document.getElementById('envelope');
const messageBox = document.getElementById('messageBox');
const typingText = document.getElementById('typingText');
const bgMusic = document.getElementById('bgMusic');

const fullText = "Haii... ini adalah pesan spesial yang ingin aku sampaikan. Mungkin kata-kata ini panjang, tapi setiap hurufnya penuh makna. Aku ingin kamu tahu kalau semua perjuangan, semua kenangan, dan semua tawa kita adalah bagian yang tak tergantikan. Terima kasih sudah menjadi bagian dari perjalanan ini...";

let i = 0;

function typeWriter() {
    if (i < fullText.length) {
        typingText.innerHTML += fullText.charAt(i);
        i++;
        setTimeout(typeWriter, 50); // Ubah angka untuk kecepatan
    }
}

envelope.addEventListener('click', () => {
    envelope.style.display = 'none';
    messageBox.style.display = 'block';
    bgMusic.play();
    typeWriter();
});
