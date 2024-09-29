function openNav() {
    document.getElementById("mySidebar").style.width = "250px"; // Membuka sidebar
    document.getElementById("main").style.marginRight = "250px"; // Menggeser konten utama
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0"; // Menutup sidebar
    document.getElementById("main").style.marginRight = "0"; // Mengembalikan konten utama
}
