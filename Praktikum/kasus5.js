class lingkaran{
    constructor(r){ // ini adalah method
        this.jari = r // 'this' -> adalah keyword
    }
    luas = () => {
        return 3.14 * (this.jari ** 2)
    }
    keliling = () =>{
        return 2 * 3.14 * this.jari
    }
}

class tabung extends lingkaran{ //'extends' -> menghubungkan dengan super class
    constructor(r,t){
        super(r) // 'super' -> memanggil method milik super class
        this.tinggi = t
    }
    volume = () => {
        return 3.14 * (this.jari ** 2) * this.tinggi
    }
    luasPermukaan = () => {
        return 3.14 * (this.jari ** 2)
    }
    luasSelimut = () => {
        return 2 * 3.14 * this.jari * this.tinggi
    }
}

class kerucut extends lingkaran{
    constructor(r,t,s){
        super(r)
        this.tinggi = t
    }
    volume = () => {
        return 1/3 * 3.14 * (this.jari ** 2) * this.tinggi
    }
    //sisi miring kerucut
    sisi = () => {
        return (this.jari ** 2) * (this.tinggi ** 2)
    }
    luasPermukaan = () => {
        return 3.14 * this.jari * (this.jari + this.sisi())
    }
    luasSelimut = () => {
        return 3.14 * this.jari * this.sisi()
    }
}

class bola extends lingkaran{
    constructor(r){
        super(r)
    }
    volume = () => {
        return 4/3 * 3.14 * (this.jari ** 3)
    }
    luasPermukaan = () => {
        return 4 * 3.14 * (this.jari ** 2)
    }
}
// Hasil akhir bola
let Bola = new bola(15)
console.log("************* BOLA *************");
console.log("Volume Bola = " + Bola.volume());
console.log("Luas Permukaan Bola = " + Bola.luasPermukaan());
console.log("---------------------------------------------");

//Hasil akhir kerucut
let Kerucut = new kerucut(10,40)
console.log("************ KERUCUT ************");
console.log("Volume Kerucut = " + Kerucut.volume());
console.log("Luas Permukaan Kerucut = " + Kerucut.luasPermukaan());
console.log("Luas Selimut Kerucut = " + Kerucut.luasSelimut());
console.log("---------------------------------------------");

//Hasil akhir tabung
let Tabung = new tabung(7.5,50)
console.log("*************** TABUNG **************");
console.log("Volume Tabung = " + Tabung.volume());
console.log("Luas Permukaan Tabung = " + Tabung.luasPermukaan());
console.log("Luas Selimut Tabung = " + Tabung.luasSelimut());
console.log("----------------------------------------------");