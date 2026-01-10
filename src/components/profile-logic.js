// src/components/profile-logic.js
import { translations } from "../langs/lang-db.js";
import { updateLanguage } from "../utils/main.js"; // Import hàm update để gọi lại khi đổi lang

// 1. CHỨC NĂNG INJECT MODAL (Tự động tạo HTML Modal)
function injectLanguageModal() {
  const currentLang = localStorage.getItem("lang") || "en";
  const t = (key) => translations[currentLang]?.[key] || "Choose a language";

  // Kiểm tra nếu modal chưa có thì mới tạo
  if (!document.getElementById("lang-modal")) {
    const modalHTML = `
      <div id="lang-modal" class="hidden fixed inset-0 z-[100] flex items-center justify-center bg-base-900/40 backdrop-blur-sm transition-opacity opacity-0">
        <div class="bg-card w-[320px] rounded-3xl shadow-2xl border border-DEFAULT transform scale-95 transition-transform duration-200" id="lang-modal-card">
            
            <div class="p-5 border-b border-DEFAULT flex justify-between items-center">
                <h3 data-i18n="modalLanguage.chooseLanguage" class="text-h4 text-content-primary">
                    ${t("modalLanguage.chooseLanguage")}
                </h3>
                <button id="btn-close-lang" class="text-content-secondary hover:text-error transition-colors">
                    <iconify-icon icon="solar:close-circle-bold" class="text-icon-lg"></iconify-icon>
                </button>
            </div>

            <div class="p-4 space-y-2">
                <button id="opt-lang-en" class="lang-option w-full flex items-center justify-between p-3 rounded-xl border border-transparent hover:bg-base-50 dark:hover:bg-base-700 transition-all group">
                    <div class="flex items-center gap-3">
                        <img src="https://flagcdn.com/w40/gb.png" class="w-6 h-6 rounded-full object-cover shadow-sm">
                        <span class="font-medium text-content-primary">English</span>
                    </div>
                    <iconify-icon icon="solar:check-circle-bold" class="check-icon text-content-primary text-xl ${currentLang === "en" ? "" : "hidden"
      }"></iconify-icon>
                </button>

                <button id="opt-lang-vi" class="lang-option w-full flex items-center justify-between p-3 rounded-xl border border-transparent hover:bg-base-50 dark:hover:bg-base-700 transition-all group">
                    <div class="flex items-center gap-3">
                        <img src="https://flagcdn.com/w40/vn.png" class="w-6 h-6 rounded-full object-cover shadow-sm">
                        <span class="font-medium text-content-primary">Tiếng Việt</span>
                    </div>
                    <iconify-icon icon="solar:check-circle-bold" class="check-icon text-content-primary text-xl ${currentLang === "vi" ? "" : "hidden"
      }"></iconify-icon>
                </button>
            </div>
        </div>
      </div>
    `;
    // Nhét vào cuối body
    document.body.insertAdjacentHTML("beforeend", modalHTML);
  }
}

// 2. LOGIC CHÍNH
export function initProfileLogic() {
  // Bơm Modal vào trang trước
  injectLanguageModal();

  // --- A. XỬ LÝ DROPDOWN PROFILE ---
  const profileBtn = document.getElementById("profile-btn");
  const dropdown = document.getElementById("profile-dropdown");
  const profileWrapper = document.getElementById("profile-wrapper");

  //logic icon dropdown
  const arrowIcon = profileBtn
    ? profileBtn.querySelector("iconify-icon")
    : null;

  if (profileBtn && dropdown) {
    profileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isHidden = dropdown.classList.contains("hidden");

      if (isHidden) {
        // Mở Dropdown
        dropdown.classList.remove("hidden");

        // Xoay icon
        if (arrowIcon) arrowIcon.classList.add("rotate-180");

        // Animation
        requestAnimationFrame(() => {
          dropdown.classList.remove("opacity-0", "scale-95");
          dropdown.classList.add("opacity-100", "scale-100");
        });
      } else {
        closeDropdown();
      }
    });

    // Click ra ngoài thì đóng dropdown
    document.addEventListener("click", (e) => {
      if (!profileWrapper.contains(e.target)) {
        closeDropdown();
      }
    });
  }

  function closeDropdown() {
    if (!dropdown) return;

    // Xoay mũi tên xuống (Về vị trí cũ)
    if (arrowIcon) arrowIcon.classList.remove("rotate-180");

    dropdown.classList.remove("opacity-100", "scale-100");
    dropdown.classList.add("opacity-0", "scale-95");
    setTimeout(() => dropdown.classList.add("hidden"), 200);
  }

  // --- B. XỬ LÝ MODAL NGÔN NGỮ ---
  const btnOpenLang = document.getElementById("btn-open-lang");
  const modal = document.getElementById("lang-modal");
  const modalCard = document.getElementById("lang-modal-card");
  const btnCloseModal = document.getElementById("btn-close-lang");

  // Mở Modal (Từ nút trong dropdown)
  if (btnOpenLang && modal) {
    btnOpenLang.addEventListener("click", (e) => {
      e.stopPropagation();
      closeDropdown(); // Đóng dropdown menu trước

      modal.classList.remove("hidden");
      setTimeout(() => {
        modal.classList.remove("opacity-0");
        modalCard.classList.remove("scale-95");
        modalCard.classList.add("scale-100");
      }, 10);
    });
  }

  // Đóng Modal
  const closeModal = () => {
    modal.classList.add("opacity-0");
    modalCard.classList.remove("scale-100");
    modalCard.classList.add("scale-95");
    setTimeout(() => modal.classList.add("hidden"), 200);
  };

  if (btnCloseModal) btnCloseModal.addEventListener("click", closeModal);
  if (modal)
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });

  // --- C. XỬ LÝ ĐỔI NGÔN NGỮ ---
  const handleLangChange = (lang) => {
    localStorage.setItem("lang", lang);

    // 1. Cập nhật UI Dropdown Label ngay lập tức
    const dropdownLabel = document.getElementById("dropdown-lang-label");
    if (dropdownLabel)
      dropdownLabel.textContent = lang === "en" ? "English" : "Tiếng Việt";

    // 2. Cập nhật Check icon trong modal
    document
      .querySelectorAll(".check-icon")
      .forEach((icon) => icon.classList.add("hidden"));
    const activeBtn = document.getElementById(
      lang === "en" ? "opt-lang-en" : "opt-lang-vi"
    );
    if (activeBtn)
      activeBtn.querySelector(".check-icon").classList.remove("hidden");

    // 3. Gọi hàm cập nhật toàn trang
    updateLanguage();

    // 4. Cập nhật Mobile Sidebar Label (New)
    const mobileLangText = document.getElementById("mobile-lang-suffix");
    if (mobileLangText) {
      mobileLangText.textContent = `(${lang.toUpperCase()})`;
    }

    closeModal();
  };

  // Gán sự kiện cho 2 nút ngôn ngữ
  const btnEn = document.getElementById("opt-lang-en");
  const btnVi = document.getElementById("opt-lang-vi");

  if (btnEn) btnEn.addEventListener("click", () => handleLangChange("en"));
  if (btnVi) btnVi.addEventListener("click", () => handleLangChange("vi"));
}
