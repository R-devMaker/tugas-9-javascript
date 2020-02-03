function panggilObj() {
    var petugas = {
        nama : "Edi",
        umur : 25,
        jabatan : "CS (Customer Services)",
        pengalaman : "5 Tahun",
        Gaji : 4500000,
    }

    for(var x in petugas) {
        console.log(petugas[x]);
    }
}

panggilObj();