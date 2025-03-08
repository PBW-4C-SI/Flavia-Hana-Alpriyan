let a = prompt ("masukan nilai a = ");
let b = prompt ("masukan nilai b = ");
let OperasiBilangan = prompt ("Pilih salah satu : penjumlahan (+), pengurangan (-), perkalian (*), pembagian(/), atau modulus (%)")

a = Number (a);
b = Number (b);

if (OperasiBilangan == "+"){
    let tambah = a+b;
    alert(`Hasil Penjumlahan = ${tambah}`);
}else if (OperasiBilangan == "-"){
    let kurang = a-b;
    alert(`Hasil Pengurangan = ${kurang}`);
}else if (OperasiBilangan == "*"){
    let perkalian = a*b;
    alert(`Hasil perkalian = ${perkalian}`);
}else if (OperasiBilangan == "/"){
    let pembagian = a/b;
    alert(`Hasil pembagian = ${pembagian}`);
}else if (OperasiBilangan == "%"){
    let modulus = a%b;
    alert(`Hasil modulus = ${modulus}`);
}
