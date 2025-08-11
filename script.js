const envelope = document.getElementById('envelope');
const messageBox = document.getElementById('messageBox');
const typingText = document.getElementById('typingText');
const bgMusic = document.getElementById('bgMusic');

const fullText = "
Haii adik-adik… Besok pagi kita ketemu lagi. Tapi besok itu beda… Bukan sekadar latihan. Bukan sekadar kita maju serempak sambil teriak aba-aba. Besok… kita berdiri buat mengingat semua yang udah kita lalui bareng-bareng. Semua keringat, semua rasa capek, panas yang bikin kulit gosong, sampai sakit kaki … tapi kita tetap lanjut.  Ingat nggak waktu pertama kali latihan? Ada yang jalannya masih ngaco, ada yang bilang Kak, capek… mau istirahat…, ada yang mukanya udah kayak habis lari maraton. Tapi apa yang kita lakukan? Kita bangkit lagi. Kita atur napas lagi. Kita maju lagi. Karena di hati kita… ada satu momen yang kita kejar. Satu momen yang bakal kita kenang sampai tua nanti. Sekarang tinggal satu hari lagi… Satu hari terakhir sebelum kita tunjukin ke semua orang kalau kita ini bukan pasukan ecek-ecek. Kita ini satu tim, yang hatinya nyatu, langkahnya kompak, dan semangatnya… nggak bisa dipatahkan. Rabu, 13 Agustus… itu hari kita. Hari di mana semua mata bakal lihat. Tapi inget… mereka bukan cuma lihat kaki kita yang melangkah. Mereka bakal lihat hati kita yang bergerak bareng. Mereka nggak akan menghitung berapa kuat tenaga kita… tapi mereka bakal merasakan betapa besar jiwa kita dalam setiap langkah. Besok, kita latihan sekali lagi. Bukan sekadar latihan, tapi pemanasan terakhir sebelum pertunjukan besar kita. Nanti pas hari itu datang… kk mau kalian maju dengan kepala tegak, dada dibusungkan, senyum yang bilang:  Ini loh… pasukan yang udah berjuang mati-matian! Kita nggak cuma mau pulang bawa piala atau medali… Kita mau pulang bawa cerita. Cerita tentang tawa kita, lelah kita, dan kebanggaan yang cuma bisa dirasain sama orang-orang yang pernah berjuang bareng kayak kita. Jadi besok… ayo kita gas pol. Latihan terakhir harus jadi yang terbaik. Karena setelah itu… kita tinggal punya dua pilihan: Menang, atau pulang dengan kepala tetap tegak. Ingat ya… Langkah kita satu. Tujuan kita satu. Hati kita satu. Dan di Rabu nanti… kita bakal teriak bareng KITA PASUKAN YANG NGGAK BISA DIKALAHKAN!";

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
