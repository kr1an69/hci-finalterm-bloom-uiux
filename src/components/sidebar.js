import { translations } from "../langs/lang-db.js";

export function sidebar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const stringBorderLoggedIn = isLoggedIn ? "border-t border-DEFAULT mt-2 pt-2" : "";
  const isAtLanding = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";
  const stringHidden = isAtLanding ? "hidden" : "";

  const currentLang = localStorage.getItem("lang") || "en";
  const t = (key, defaultText) =>
    translations[currentLang]?.[key] || defaultText;

  // Logic Desktop Collapse
  const isCollapsed = localStorage.getItem("sidebar_collapsed") === "true";

  // 1. CẤU HÌNH CLASS GIAO DIỆN
  // SỬA: Thêm prefix 'tablet:...' để FORCE hiển thị đầy đủ trên mobile
  // bất kể Desktop đang collapse hay không.

  const widthClass = isCollapsed ? "w-20" : "w-64";
  // (Container đã có tablet:w-72 đè lên w-20 rồi nên ok)

  const hideTextClass = isCollapsed ? "hidden tablet:block" : "block";
  const justifyClass = isCollapsed ? "justify-center tablet:justify-start" : "justify-start";
  const footerPaddingClass = isCollapsed ? "px-2 tablet:px-4" : "px-4";
  const btnWidthClass = isCollapsed ? "w-12 tablet:w-full" : "w-full";

  const rotateIconClass = isCollapsed ? "rotate-180" : "";
  const toggleIcon = "solar:alt-arrow-left-linear";

  // 2. DATA MENU
  const menuItems = [
    {
      icon: "solar:home-smile-angle-bold",
      key: "side.home",
      defaultText: "Home",
      link: "home.html",
    },
    {
      icon: "solar:book-bookmark-bold",
      key: "side.myCourses",
      defaultText: "My Courses",
      link: "courses.html",
    },
    {
      icon: "solar:point-on-map-bold",
      key: "side.myRoadmaps",
      defaultText: "My Roadmaps",
      link: "roadmaps.html",
    },
    {
      icon: "solar:cup-star-bold",
      key: "side.achivements",
      defaultText: "Achievements",
      link: "achievements.html",
    },
    {
      icon: "solar:diploma-verified-bold",
      key: "side.certificates",
      defaultText: "Certificates",
      link: "certificates.html",
    },
  ];

  const currentPath = window.location.pathname.split("/").pop() || "home.html";
  const containerVisibility = isLoggedIn ? "flex" : "hidden tablet:flex";

  return `
    <!-- BACKDROP (Mobile Only) -->
    <div id="sidebar-backdrop" class="fixed inset-0 bg-black/50 z-40 hidden tablet:block opacity-0 pointer-events-none transition-opacity duration-300"></div>

    <!-- SIDEBAR WRAPPER -->
    <aside id="sidebar-wrapper" class="${containerVisibility} flex-col h-full bg-card border-r border-DEFAULT transition-all duration-300 ease-in-out relative group pb-4 ${widthClass}
        tablet:fixed tablet:inset-y-0 tablet:left-0 tablet:z-50 tablet:w-72 tablet:-translate-x-full tablet:shadow-2xl">
      
      <!-- TOGGLE BTN (Desktop Only) -->
      ${isLoggedIn ? `
      <button id="sidebar-toggle" class="absolute -right-3 top-8 bg-card border border-DEFAULT text-content-primary p-1 rounded-full shadow-sm hover:text-brand-primary transition-colors z-20 tablet:hidden flex items-center justify-center w-6 h-6">
        <iconify-icon icon="${toggleIcon}" class="text-base font-bold transition-transform duration-300 ${rotateIconClass}"></iconify-icon>
      </button>
      ` : ''}

      <!-- HEADER MOBILE ONLY -->
      <div class="h-20 flex items-center justify-between px-6 border-b border-DEFAULT hidden tablet:flex shrink-0">
          <div class="flex items-center gap-3">
             <span class="font-display font-bold text-h3 tracking-tight text-content-primary">BLOOM</span>
          </div>
          <button id="btn-close-sidebar" class="w-10 h-10 rounded-full hover:bg-base-100 dark:hover:bg-base-700 flex items-center justify-center text-content-secondary">
              <iconify-icon icon="solar:close-circle-bold" class="text-2xl"></iconify-icon>
          </button>
      </div>

      <!-- MAIN SCROLLABLE AREA -->
      <nav class="flex-1 flex flex-col gap-2 mobile:gap-0 py-2 tablet:py-0 overflow-y-auto overflow-x-hidden scrollbar-hide">
        
        <!-- MENU ITEMS -->
        ${isLoggedIn ? menuItems.map((item) => {
    const isActive = (currentPath === item.link || (currentPath === "" && item.link === "home.html")) && item.link !== "#";
    const activeClass = isActive
      ? "text-brand bg-base-100 dark:bg-base-700 font-semibold before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-brand"
      : "text-content-secondary hover:bg-base-100 dark:hover:bg-base-700 hover:text-brand";

    return `
              <a href="${item.link}" class="relative h-12 flex items-center ${justifyClass} px-5 transition-all duration-200 shrink-0 group/item ${activeClass}">
                <iconify-icon icon="${item.icon}" class="text-icon-md shrink-0 transition-transform duration-300 group-hover/item:scale-110"></iconify-icon>
                <span data-i18n="${item.key}" class="sidebar-text text-body-m ml-3 whitespace-nowrap overflow-hidden transition-opacity duration-200 ${hideTextClass}">
                  ${t(item.key, item.defaultText)}
                </span>
              </a>
            `;
  }).join("") : ''}

        <!-- MOBILE TOOLS -->
        <div class="${stringBorderLoggedIn} tablet:block hidden">
             
             <!-- Mobile Explore -->
             <a href="explore.html" class="${stringHidden} w-full h-12 flex items-center px-5 text-content-secondary hover:text-brand transition-colors text-left">
                  <iconify-icon icon="solar:compass-outline" class="text-icon-md shrink-0"></iconify-icon>
                  <span class="ml-3 font-sans text-body-m" data-i18n="nav.explore">${t("nav.explore", "Explore")}</span>
             </a>

             <!-- Mobile Search -->
             <button id="btn-mobile-search" class="${stringHidden} w-full h-12 flex items-center px-5 text-content-secondary hover:text-brand transition-colors text-left">
                  <iconify-icon icon="solar:magnifer-linear" class="text-icon-md shrink-0"></iconify-icon>
                  <span class="ml-3 font-sans text-body-m" data-i18n="side.search">${t("side.search", "Search")}</span>
             </button>
             <!-- Mobile Theme -->
             <button id="btn-mobile-theme" class="w-full h-12 flex items-center px-5 text-content-secondary hover:text-brand transition-colors text-left">
                  <iconify-icon icon="solar:moon-bold" class="text-icon-md shrink-0 text-content-secondary dark:hidden"></iconify-icon>
                  <iconify-icon icon="solar:sun-2-bold" class="text-icon-md shrink-0 text-warning hidden dark:block"></iconify-icon>
                  <span class="ml-3 font-sans text-body-m" data-i18n="side.theme">${t("side.theme", "Theme")}</span>
             </button>
             <!-- Mobile Lang -->
             <button id="btn-mobile-lang" class="w-full h-12 flex items-center px-5 text-content-secondary hover:text-brand transition-colors text-left">
                  <iconify-icon icon="solar:global-linear" class="text-icon-md shrink-0"></iconify-icon>
                  <span class="ml-3 font-sans text-body-m flex items-center gap-1">
                    <span data-i18n="side.language">${t("side.language", "Language")}</span>
                    <span id="mobile-lang-suffix">(${currentLang.toUpperCase()})</span>
                  </span>
             </button>
             <!-- Mobile Ask Bloom -->
             <div class="px-5 mt-2">
                <button id="btn-ask-bloom-mobile" class="${stringHidden} w-full flex justify-center items-center gap-2 bg-brand-harmony text-white font-sans font-semibold text-body-m py-2 rounded-full hover:opacity-90 transition-opacity shadow-sm whitespace-nowrap shrink-0">
                      <iconify-icon icon="solar:stars-minimalistic-bold" class="text-icon-md"></iconify-icon>
                      <span class="text-base" data-i18n="nav.askBloom">${t("nav.askBloom", "Ask Bloom")}</span>
                </button>
             </div>
        </div>

      </nav>

      <!-- FOOTER BUTTONS -->
      ${isLoggedIn ? `
      <div id="sidebar-footer" class="${footerPaddingClass} space-y-3 mt-auto transition-all duration-300">
        <div class="h-px w-full bg-base-200 dark:bg-base-700 mb-3"></div>

        <button class="footer-btn ${btnWidthClass} ${justifyClass} flex items-center h-12 rounded-xl border border-DEFAULT text-content-secondary hover:bg-base-50 dark:hover:bg-base-700 transition-all duration-300 mx-auto group/btn">
          <div class="w-12 h-full flex items-center justify-center shrink-0">
             <iconify-icon icon="solar:settings-bold" class="text-icon-md group-hover/btn:rotate-45 transition-transform duration-500"></iconify-icon>
          </div>
          <span data-i18n="side.settings" class="sidebar-text pr-4 font-medium whitespace-nowrap overflow-hidden ${hideTextClass}">Settings</span>
        </button>

        <button id="btn-rebloom" class="footer-btn ${btnWidthClass} ${justifyClass} flex items-center h-12 rounded-xl bg-deepspace text-white hover:opacity-90 shadow-lg shadow-primary-500/20 transition-all duration-300 mx-auto group/bloom">
          <div class="w-12 h-full flex items-center justify-center shrink-0">
            <iconify-icon icon="solar:leaf-bold" class="text-icon-md group-hover/bloom:animate-pulse"></iconify-icon>
          </div>
          <span class="sidebar-text pr-4 font-bold whitespace-nowrap overflow-hidden ${hideTextClass}">Re-Bloom</span>
        </button>
      </div>
      ` : ''}

    </aside>

        <!-- MOBILE SEARCH MODAL (Fixed Full Screen) -->
    <dialog id="mobile_search_modal" class="modal">
      <!-- Dùng fixed inset-0 w-screen h-screen để ép full màn hình tuyệt đối -->
      <div class="fixed inset-0 w-screen h-screen max-w-none max-h-none bg-page z-50 flex flex-col p-0 m-0 rounded-none shadow-none">
          
          <!-- HEADER -->
          <div class="flex items-center gap-3 p-4 border-b border-DEFAULT bg-card shrink-0 h-16">
              <!-- Back Button -->
              <button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-base-100 dark:hover:bg-base-700 text-content-secondary transition-colors shrink-0" onclick="document.getElementById('mobile_search_modal').close()">
                  <iconify-icon icon="solar:arrow-left-linear" class="text-2xl"></iconify-icon>
              </button>
              
              <!-- Search Input -->
              <div class="flex-1 h-10 bg-base-100 dark:bg-base-800 rounded-lg flex items-center px-3 gap-2 border border-transparent focus-within:border-brand-primary transition-all">
                  <iconify-icon icon="solar:magnifer-linear" class="text-lg text-content-secondary shrink-0"></iconify-icon>
                  <input 
                    type="text" 
                    placeholder="Search courses..." 
                    class="w-full bg-transparent border-none outline-none text-body-m text-content-primary placeholder-content-tertiary"
                    autofocus
                  >
              </div>
          </div>

          <!-- BODY -->
          <div class="flex-1 overflow-y-auto p-4 content-start bg-page">
              <!-- Empty State -->
              <div class="flex flex-col items-center justify-center mt-20 text-content-tertiary opacity-60">
                  <iconify-icon icon="solar:minimalistic-magnifer-linear" class="text-6xl mb-4 text-content-secondary"></iconify-icon>
                  <p class="text-body-m font-medium text-content-secondary">Browse thousands of courses</p>
              </div>
          </div>
      </div>
      
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  `;
}

export function initSidebarLogic() {
  const sidebarContainer = document.getElementById("sidebar-wrapper");

  // 1. Logic Desktop Collapse
  const toggleBtn = document.getElementById("sidebar-toggle");
  if (toggleBtn && sidebarContainer) {
    toggleBtn.addEventListener("click", () => {
      // 1. Toggle biến trạng thái
      const isCollapsed = localStorage.getItem("sidebar_collapsed") === "true";
      const newState = !isCollapsed;
      localStorage.setItem("sidebar_collapsed", newState);
      // 2. Xử lý Sidebar Wrapper (Độ rộng)
      if (newState) {
        sidebarContainer.classList.remove("w-64");
        sidebarContainer.classList.add("w-20");
      } else {
        sidebarContainer.classList.remove("w-20");
        sidebarContainer.classList.add("w-64");
      }
      // 3. Xử lý Icon Mũi tên (Xoay)
      const icon = toggleBtn.querySelector("iconify-icon");
      if (icon) {
        if (newState) icon.classList.add("rotate-180");
        else icon.classList.remove("rotate-180");
      }
      // 4. Xử lý Ẩn/Hiện Text (.sidebar-text)
      const texts = document.querySelectorAll(".sidebar-text");
      texts.forEach(span => {
        if (newState) {
          span.classList.remove("block");
          // Chú ý: Giữ tablet:block để mobile luôn hiện
          span.classList.add("hidden", "tablet:block");
        } else {
          span.classList.remove("hidden", "tablet:block");
          span.classList.add("block");
        }
      });
      // 5. Xử lý căn chỉnh Items (Justify start/center)
      const items = document.querySelectorAll("#sidebar-wrapper a, .footer-btn");
      items.forEach(item => {
        if (newState) {
          item.classList.remove("justify-start");
          // Giữ tablet:justify-start cho mobile
          item.classList.add("justify-center", "tablet:justify-start");

          // Xử lý nút footer bị thu nhỏ
          if (item.classList.contains("footer-btn")) {
            item.classList.remove("w-full");
            item.classList.add("w-12", "tablet:w-full");
            item.classList.remove("px-4");
            item.classList.add("px-2", "tablet:px-4");
          }
        } else {
          item.classList.remove("justify-center", "tablet:justify-start");
          item.classList.add("justify-start");
          if (item.classList.contains("footer-btn")) {
            item.classList.remove("w-12", "tablet:w-full");
            item.classList.add("w-full");
            item.classList.remove("px-2", "tablet:px-4");
            item.classList.add("px-4");
          }
        }
      });
    });
  }

  // 2. Logic Mobile Drawer
  const backdrop = document.getElementById("sidebar-backdrop");
  const mobileToggleBtn = document.getElementById("btn-sidebar-toggle");
  const closeBtn = document.getElementById("btn-close-sidebar");

  // FIX: Dùng đúng class 'tablet:-translate-x-full' để remove/add
  function openSidebar() {
    if (!sidebarContainer || !backdrop) return;
    sidebarContainer.classList.remove("tablet:-translate-x-full");
    backdrop.classList.remove("hidden", "opacity-0", "pointer-events-none");
    backdrop.classList.add("opacity-100", "pointer-events-auto");
  }

  function closeSidebar() {
    if (!sidebarContainer || !backdrop) return;
    sidebarContainer.classList.add("tablet:-translate-x-full");
    backdrop.classList.remove("opacity-100", "pointer-events-auto");
    backdrop.classList.add("opacity-0", "pointer-events-none");
    setTimeout(() => {
      backdrop.classList.add("hidden");
    }, 300);
  }

  if (mobileToggleBtn) mobileToggleBtn.addEventListener("click", openSidebar);
  if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
  if (backdrop) backdrop.addEventListener("click", closeSidebar);

  // 3. Logic Mobile Tools
  const btnSearch = document.getElementById("btn-mobile-search");
  const btnTheme = document.getElementById("btn-mobile-theme");
  const btnLang = document.getElementById("btn-mobile-lang");
  const mobileSearchModal = document.getElementById("mobile_search_modal");

  if (btnSearch && mobileSearchModal) {
    btnSearch.addEventListener("click", () => {
      mobileSearchModal.showModal();
      // closeSidebar();
    });
  }
  if (btnTheme) {
    btnTheme.addEventListener("click", () => {
      const navThemeBtn = document.getElementById("theme-toggle-btn");
      if (navThemeBtn) navThemeBtn.click();
    });
  }
  if (btnLang) {
    btnLang.addEventListener("click", () => {
      // FIX: Tìm đúng ID 'lang-modal' do profile-logic.js tạo ra
      const langModal = document.getElementById("lang-modal");
      const langModalCard = document.getElementById("lang-modal-card");

      if (langModal && langModalCard) {
        // Logic mở modal thủ công bằng class (thay vì showModal)
        langModal.classList.remove("hidden");
        // Animation
        setTimeout(() => {
          langModal.classList.remove("opacity-0");
          langModalCard.classList.remove("scale-95");
          langModalCard.classList.add("scale-100");
        }, 10);

        // closeSidebar();
      }
    });
  }
}
