// baris ini untuk mendapatkan element i "love"
const loveButton = document.querySelector(".fa-heart");

//function ini akan dijalankan saat element i di click, onclick="loveAnimation()"
function loveAnimation() {
  //baris ini untuk menambahkan class startLove pada element i
  loveButton.classList.add("startLove");

  //baris ini untuk menjalankan function resetLove setelah 1 detik
  setTimeout(resetLove, 1000);

  // baris ini adalah decision apakah element i tidak berwarna merah? jika ya, ubah menjadi merah dan jika tidak (berwarna merah) maka ubah menjadi warna hitam
  if (loveButton.style.color !== "red") {
    //baris ini memberikan warna merah pada element i
    loveButton.style.color = "red";
  } else {
    //baris ini memberikan warna hitam pada element i
    loveButton.style.color = "black";
  }
}

//ini adalah function yang bertugas untuk menghilakan class startLove setelah 1 detik
function resetLove() {
  //baris ini menghapus class startLove pada element i
  loveButton.classList.remove("startLove");
}
