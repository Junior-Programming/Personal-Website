var tanya = true;
while (tanya) {
	// Menangkap pilihan Player
	var p = prompt('Pilih : Gajah, Semut, Orang');

	// Menangkap pilihan komputer
	// Membangkitkan bilangan komputer
	var comp = Math.random();

	if (comp < 0.34) {
		comp = 'Gajah';
	} else if (comp >= 0.34 && comp < 0.67) {
		comp = 'Orang';
	} else {
		comp = 'Semut';
	}




	var hasil = '';
	// Menetukan rules
	if (p == comp) {
		hasil = 'SERI!';
	} else if (p == 'Gajah') {
		/*if (comp = 'Orang') {
			hasil = 'MENANG!';
		} else {
			hasil = 'KALAH!';
		}*/

		// Menggunakan Operator Ternary
		hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';

	} else if (p == 'Orang') {
		/*if (comp == 'Gajah') {
			hasil = 'KALAH!';
		} else {
			hasil = 'MENANG!';
		}*/

		// Menggunakan Operator Ternary
		hasil = (comp == 'Gajah') ? 'KALAH' : 'MENANG!';

	} else if (p = 'Semut') {
		hasil = (comp = 'Semut') ? 'KALAH!' : 'MENANG';
	} else {
		hasil = 'Anda Memasukkan pilihan yang salah!';
	}	

	// Menampilkan hasilnya 
    alert('Kamu memilih : ' + p + ' Dan komputer memillih : ' + comp + ' \nMaka hasilnya : Kamu ' + hasil);

    tanya = confirm('lagi ?');
}

alert('Terima Kasih sudah bermain !');