// Database konten materi sederhana
const dataMateri = {
    Zakat: `
        <p><strong>Zakat</strong> secara bahasa berarti mensucikan atau berkembang. Secara istilah, zakat adalah mengeluarkan sebagian harta tertentu yang telah mencapai syarat wajib (nisab dan haul) kepada golongan yang berhak menerimanya (asnaf delapan).</p>
        <ul class="list-disc pl-5 space-y-1">
            <li><strong>Zakat Fitrah:</strong> Wajib dikeluarkan saat bulan Ramadhan (berupa makanan pokok/uang senilai beras tersebut).</li>
            <li><strong>Zakat Mal:</strong> Zakat atas harta simpanan, perdagangan, emas, pertanian, atau penghasilan setelah mencapai nisab (batas minimal harta).</li>
        </ul>
    `,
    Infaq: `
        <p><strong>Infaq</strong> berasal dari kata <i>anfaqa</i> yang berarti mengeluarkan harta untuk kepentingan sesuatu. Berbeda dengan zakat, infaq tidak memiliki batas nisab maupun haul, serta penerimanya bebas diberikan kepada siapa saja (misal orang tua, kerabat, rumah ibadah, dsb).</p>
        <p>Hukum infaq bisa menjadi wajib (misal menafkahi keluarga) atau sunnah (menyumbang fasilitas umum).</p>
    `,
    Sedekah: `
        <p><strong>Sedekah</strong> memiliki cakupan yang jauh lebih luas daripada zakat maupun infaq. Sedekah tidak melulu soal uang atau materi baku.</p>
        <blockquote>"Senyummu di hadapan saudaramu adalah sedekah." (HR. Tirmidzi)</blockquote>
        <p>Segala bentuk kebaikan yang tulus dilakukan demi mengharap ridha Allah, baik berupa materi, tenaga, ilmu, maupun sikap ramah dikategorikan sebagai sedekah.</p>
    `,
    Wakaf: `
        <p><strong>Wakaf</strong> adalah menahan harta benda yang sifatnya tahan lama (tidak habis sekali pakai) untuk dimanfaatkan manfaat atau hasilnya bagi kepentingan umat dan tujuan sosial.</p>
        <p>Pahala wakaf bersifat <strong>Jariyah</strong> (terus mengalir) meskipun orang yang mewakafkannya sudah wafat, selama aset wakaf tersebut masih memberikan manfaat nyata (seperti tanah untuk masjid, sekolah, atau sumur air bersih).</p>
    `
};

// Fungsi menampilkan modul belajar secara dinamis
function bukaModul(topik) {
    const areaBelajar = document.getElementById('area-belajar');
    const judulMateri = document.getElementById('judul-materi');
    const kontenMateri = document.getElementById('konten-materi');

    // Isi data ke elemen HTML
    judulMateri.innerText = "Modul Pembelajaran: " + topik;
    kontenMateri.innerHTML = dataMateri[topik];

    // Munculkan container area belajar
    areaBelajar.classList.remove('hidden');
    
    // Auto scroll halus ke area belajar agar user tahu kontennya terbuka
    areaBelajar.scrollIntoView({ behavior: 'smooth' });
}

// Fungsi kalkulator zakat profesi dasar (Kadar 2.5%)
function hitungZakat() {
    const gajiInput = document.getElementById('gaji').value;
    const hasilContainer = document.getElementById('hasil-zakat');
    const teksHarga = document.getElementById('teks-harga');

    const gaji = parseFloat(gajiInput);
    
    // Validasi input kosong atau minus
    if (!gaji || gaji <= 0) {
        alert("Mohon masukkan angka pendapatan bulanan yang valid.");
        return;
    }

    // Standard nisab bulanan asumsi tahun 2026 (~Rp 7.000.000)
    const batasNisabPerBulan = 7000000; 

    if (gaji >= batasNisabPerBulan) {
        const besaranZakat = gaji * 0.025; // Kadar zakat 2.5%
        // Format uang ke Rupiah Indonesia
        const formatRupiah = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(besaranZakat);
        teksHarga.innerText = formatRupiah + " / bulan";
    } else {
        teksHarga.innerText = "Rp 0 (Belum mencapai batas Nisab)";
    }

    // Tampilkan box hasil
    hasilContainer.classList.remove('hidden');
}