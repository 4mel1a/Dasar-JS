let siswa = [
    {nama_depan : "Jack", nama_belakang : "Ma"},
    {nama_depan : "Jhonny", nama_belakang : "English"},
    {nama_depan : "John", nama_belakang : "Cena"}
]

//Menampilkan nama lengkap dari array
siswa.map(
    (sis, index) => {
        console.log(sis.nama_depan + " " + sis.nama_belakang);
    }
)