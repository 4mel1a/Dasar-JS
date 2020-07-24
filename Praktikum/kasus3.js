let tb = 1.7, bb = 90
//hitung BMI
hitung_bmi = () => {
    return bb / (tb ** 2)
}
//percabangan if..else if..else untuk status berat badan
if(hitung_bmi() < 18.5){
    console.log(hitung_bmi() + " = Kekurangan berat badan");
} else if(hitung_bmi() >= 18.5 && hitung_bmi() <= 24.9){
    console.log(hitung_bmi() + " = Normal(ideal)");
} else if(hitung_bmi() >= 25.0 && hitung_bmi() <= 29.9){
    console.log(hitung_bmi() + " = Kelebihan berat badan");
} else {
    console.log(hitung_bmi() + " = Kegemukan (obesitas)");
}