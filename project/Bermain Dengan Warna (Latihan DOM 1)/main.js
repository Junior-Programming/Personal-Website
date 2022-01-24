		// Study kasus 1 : Membuat sebuah tombol yang dimana tombol ini berfungsi untuk merubah warna pada background body

// 1. Tangkap dulu tombolnya
const tUbahWarna = document.getElementById('tUbahWarna');


// 2. Tangkap elemen yang akan kita tuju

// Khusus untuk body Kita bisa untuk menggunakan document seperti syntak di bawah ini
/*const body = document.getElementsByTagName('body')[0];*/
// Kita bisa langsung menggunkan document.body
/*document.body();*/

// Sekarang kita dengarkan sebuah events, Kita akan menggunakna events ketika tombol di-klik
// Untuk Events kita bisa menggunakan 2 cara :
// 1.  Event Handler
// Kita akan mencoba Event Handler yaitu
tUbahWarna.onclick = function() {
	//Cara 1
	/*document.body.style.backgroundColor = 'lightskyblue';*/

	//Cara 2
	// Kita menggunakan setAttribute karena class adalah atribut dalam html
	// Dalam setAttribute ada 2 parameter :
	// 1. Nama elemen 
	// 2. elemenny apa
	/*document.body.setAttribute('class', 'biru-muda');*/

	// Cara 3
	// Untuk merubahnya kembali menjadi putih, Kita bisa memanipulasi kelas
	document.body.classList.toggle('biru-muda');
}  




























// 2. addEventListener()

		// Study Kasus_2 : Kita akan membuat sebuah tombol yang dimana tombol ini akan merubah warna backgorund pada body kita secara acak

// Kita akan akan membuat elemen HTML-nya dengan Javascript
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');

// fungsi after() tidak jauh beda dengan insert.before() yang dimana after() menaruh elemen setelah elemen yang dipilih

// Dan penempatan tombol-nya pasti berada disamping element sebelumnya karena default-nya adalah inline HTML
tUbahWarna.after(tAcakWarna);


// addEventListener() memiliki 2 parameter : 
// 1. Event-nya apa
// 2. fungsi yang ingin di lakukan apa
tAcakWarna.addEventListener('click', function() {

	// untuk rgb() kita bisa simpan 3 nilai
	// Nilai 1 untuk kadar 'merah'
	// Nilai 2 untuk kadar 'hijau'
	// Nilai 3 untuk kadar 'biru'

	// dan nilainya mulai dari 0 sampai 255(maximal)	

	// 0 Artinya tidak ada warna sama sekali
	// 255 Artinya warna maximal banget

	// Dan sekarang kita butuh angka random!
	// Math.random() fungsi ini akan menghasilkan angka dari 0 sampai 1

	// Kita buat fungsi Math.Random() ini menghasilkan nilai dari 1 sampai 255

	// Kita akan buat nilai rgb ini dalam betuk bulat karena rgb tidak menerima bilangan decimal

	// Fungsi pembulatan ada 3 yaitu :
	// 1. Math.round()
	// 2. Math.floor
	// 3. Math.ceil()
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);

	// Untuk memasukkan var r kedalam String kita butuh Operator concat / concatenasi
	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});





























		// Study Kasus_3 :  Kita akan membuat perbahan warna mengguakan slider dari HTML5

// 1. kita tangkap elemen dari slidernya
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

// 2. Event apa yang bisa kita dengarkan agar pada saat perubahan pada slidernya warnanya blisa berubah

// kita akan menggunakan Event change yang dimana pada saat digeser - geser akan ada aksi
// Jika kita ingin pada saat slider-nya digeser warnanya langsung berubah, Kita gunakan event 'input' karena input ini realtime

// Tapi change haya akan melakukan aksinya ketika kita melepaskan mouse
sMerah.addEventListener('input', function() {
	
	// Kita akan menangkap nilai dari slidernya yang dimana jika berada di paling kanan maka nilainya 255 dan jika dipaling kiri 1

	// value berfungsi untuk mengambil nilai pada elmene input, apapun elemen inputnya
	/*sMerah.value;*/
	const r = sMerah.value;
	const g = sHijau.value;

	document.body.style.backgroundColor = 'rgb('+ r +','+ g +', 100)'
});

sHijau.addEventListener('input', function() {
	
	// Kita akan menangkap nilai dari slidernya yang dimana jika berada di paling kanan maka nilainya 255 dan jika dipaling kiri 1

	// value berfungsi untuk mengambil nilai pada elmene input, apapun elemen inputnya
	/*sMerah.value;*/
	const r = sMerah.value;
	const g = sHijau.value;

	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', 100)'

});

sBiru.addEventListener('input', function() {
	
	// Kita akan menangkap nilai dari slidernya yang dimana jika berada di paling kanan maka nilainya 255 dan jika dipaling kiri 1

	// value berfungsi untuk mengambil nilai pada elmene input, apapun elemen inputnya
	/*sMerah.value;*/
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;

	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';

});




























		// Study Kasus_4 : Ketika kita menggerakkan mousenya warna pada Background-nya akan berubah

// Untuk melakukan ini kita kan bekerja pada posisi dari mouse berada terhadap halaman ini 

// Dan nanti koordinator dari mouse tersebut akan relatif terhadap lebar dan tinggi dari browsernya

// 1. Kita tangkap dulu body-nya!
// mouseover artinya ketika mouse bergerak di dalam body
document.body.addEventListener('mouseover', function(e) {

	//2. Kita harus tau posisi maouse

	// Untuk mengetahui posisi mouse kita bisa meggunakan sebuah method 'clienX' yang dimana akan mencari tau posisi mouse secara Horizontal dan 'clienY' Secara Vertikal
	/*console.log(e.clientX);*/

	// Untuk bisa mengetahui ukuran browser
	/*console.log(window.innerWidth);*/

	const xPos = Math.round((e.clientX / window.innerWidth) * 255);
	
	// Sekarang sumbu x akan mengganri 'red'
	// sumbu y akan menganti 'green'
	// dan untuk hijau kita tetapkan saja 100 (Tergantung keinginan) 


	const yPos = Math.round((e.clientY / window.innerHeight) * 255);

	document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +' ,100)'
});