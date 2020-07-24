let nominal = (p,l) =>{
    let luas = p * l / 100 //hitung luas tanah
    let harga = luas * 1500000 //hitung harga seluruh tanah
    return harga + (15 / 100 * harga) //hitung keseluruhan
}

console.log("Total nominal tanah yang dibeli sebesar Rp." + nominal(20.5, 30));
