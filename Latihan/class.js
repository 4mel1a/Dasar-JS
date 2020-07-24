class persegiPanjang{
    constructor(p, l){
        /*properti atau atribut dari sebuah objek 
        didefinisikan di dalam method construktor*/
        this.panjang = p
        this.lebar = l
    }
    luas = () => {
        return this.panjang * this.lebar
    }
    keliling = () => {
        return 2 * (this.panjang + this.lebar)
    }
}

let tanah = new persegiPanjang(10,50)
console.log("Luas tanah = " + tanah.luas());
console.log("keliling tanah = " + tanah.keliling());