// src/utils/main.js

//import các thành phần từ folder components
import { initSidebarLogic, sidebar } from "../components/sidebar.js";
import { initNavbarLogic, navbar } from "../components/navbar.js";
import { translations } from "../langs/lang-db.js";
import { initProfileLogic } from "../components/profile-logic.js";
import { breadcrumbs } from "../components/breadcrumbs.js";
import { initModals } from "../components/modals.js";
import { createFooter } from "../components/footer.js";

// Hàm render
function renderApp() {
  // Tìm các vị trí đã đánh dấu trong HTML
  const sidebarContainer = document.getElementById("sidebar-container");
  const navbarContainer = document.getElementById("navbar-container");
  const footerContainer = document.getElementById("footer-container");
  const breadcrumbsContainer = document.getElementById("breadcrumbs-container");
  // Debug: In ra xem nó có tìm thấy thẻ div không
  console.log("Sidebar Container:", sidebarContainer);
  console.log("Navbar Container:", navbarContainer);

  // Render HTML
  if (sidebarContainer) sidebarContainer.innerHTML = sidebar(); //Sidebar
  if (navbarContainer) navbarContainer.innerHTML = navbar(); //Navbar
  if (footerContainer) footerContainer.innerHTML = createFooter(); //Footer
  if (breadcrumbsContainer) breadcrumbsContainer.innerHTML = breadcrumbs(); //Breadcrumbs

  updateLanguage();
  // 3. Sau khi HTML đã hiện ra thì mới chạy các logic (như bấm nút toggle)
  initSidebarLogic();
  initNavbarLogic();
  initProfileLogic();
  initModals();
}
// logic khác
// Khởi tạo theme khi vào web
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
  // Set luôn giá trị mặc định vào kho là 'light' để lần sau vào nó nhớ
  localStorage.setItem("theme", "light");
}

export function updateLanguage() {
  // 1. Lấy ngôn ngữ (Mặc định EN)
  const userLang = localStorage.getItem("lang") || "en";

  // 2. Lấy tất cả thẻ có data-i18n
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");

    // Lấy text từ từ điển (Dùng optional chaining ?. để không lỗi nếu key thiếu)
    // Lưu ý: Đổi 'translations' thành 'langDatabase' nếu bro đang đặt tên biến là langDatabase
    const translatedText = translations[userLang]?.[key];

    // Chỉ thực hiện nếu tìm thấy text dịch
    if (translatedText) {
      // --- LOGIC PHÂN LOẠI THẺ ---

      // Trường hợp 1: Là ô nhập liệu (Input / Textarea) -> Gán vào Placeholder
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translatedText;
      }

      // Trường hợp 2: Là ảnh (Img) -> Gán vào Alt (Cái này mở rộng thêm cho xịn)
      else if (el.tagName === "IMG") {
        el.alt = translatedText;
      }

      // Trường hợp 3: Các thẻ văn bản thường (Span, Div, P, Button, H1...) -> Gán vào Nội dung
      else {
        // Dùng innerHTML để hỗ trợ nếu text dịch có thẻ <b> hoặc <i>
        el.innerHTML = translatedText;
      }
    }
  });
}
// Chạy hàm render ngay khi file này được load
renderApp();
