// Lấy nút toggle theme thông qua ID
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

// Lắng nghe sự kiện click trên nút
themeBtn.addEventListener('click', () => {
    // Kiểm tra trạng thái hiện tại
    if (body.getAttribute('data-theme') === 'dark') {
        // Nếu đang là Dark Mode -> Chuyển về Light Mode
        body.removeAttribute('data-theme');
        themeBtn.textContent = '🌙 Dark Mode';

        // Lưu trạng thái vào localStorage để nhớ theme khi reload web
        localStorage.setItem('theme', 'light');
    } else {
        // Nếu không -> Chuyển sang Dark Mode
        body.setAttribute('data-theme', 'dark');
        themeBtn.textContent = '☀️ Light Mode';

        localStorage.setItem('theme', 'dark');
    }
});

// Chạy code này khi vừa tải lại trang để duy trì theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeBtn.textContent = '☀️ Light Mode';
}

// ==========================================
// TÍNH NĂNG THU PHÓNG ẢNH ĐẠI DIỆN
// ==========================================
const modal = document.getElementById("image-modal");
const profileImg = document.querySelector(".profile-img");
const modalImg = document.getElementById("zoomed-img");
const closeModal = document.querySelector(".close-modal");

// Mở modal khi click vào ảnh
profileImg.addEventListener("click", () => {
    modal.style.display = "flex"; // dùng flex để căn giữa
    modalImg.src = profileImg.src;
});

// Đóng modal khi click nút X
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Đóng modal khi click ra ngoài ảnh (vùng xám nền)
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});