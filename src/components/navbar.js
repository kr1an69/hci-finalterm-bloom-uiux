import { translations } from "../langs/lang-db.js";

export function navbar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const currentLang = localStorage.getItem("lang") || "en";
  const isAtLanding = window.location.pathname.includes("index.html");
  const stringIndex = isAtLanding ? "" : "../../index.html";
  const stringLinkBloom = isLoggedIn ? "home.html" : stringIndex;
  const stringLogin = isAtLanding ? "src/pages/login.html" : "login.html";
  const stringHidden = isAtLanding ? "hidden" : "";

  const stringBgColor = isAtLanding ? "bg-page/80 backdrop-blur-md" : "bg-card";
  const t = (key, defaultText) =>
    translations[currentLang]?.[key] || defaultText;

  // Logic hiển thị Label ngôn ngữ
  const langLabel = currentLang === "en" ? "English" : "Tiếng Việt";

  return `
    <header class="fixed top-0 left-0 w-full h-20 ${stringBgColor} border-b border-DEFAULT z-50 flex items-center px-8 tablet-down:px-6 mobile-down:px-4 transition-colors duration-300">
      
      <!-- 1. LEFT: BURGER (Mobile) & LOGO (Desktop) & EXPLORE (Standard) -->
      <div class="flex items-center gap-10 tablet-down:gap-3 shrink-0">
         
         <!-- Burger Menu (Mobile Only) -->
         <button id="btn-sidebar-toggle" class="${stringHidden} hidden tablet-down:flex items-center justify-center w-10 h-10 rounded-xl hover:bg-base-100 dark:hover:bg-base-800 transition-colors text-content-primary">
            <iconify-icon icon="solar:hamburger-menu-linear" class="text-4xl"></iconify-icon>
         </button>

         <!-- LOGO AREA -->
         <!-- Desktop: Static. Mobile: Absolute Center -->
         <a href="${stringLinkBloom}" class="flex items-center gap-2 cursor-pointer z-10">
             <span class="font-display font-bold text-h3 tracking-wide text-content-primary">BLOOM</span>
         </a>

         <!-- EXPLORE LINK (Desktop Only) -->
         <a href="explore.html" class="${stringHidden} flex tablet-down:hidden items-center gap-2 text-content-secondary hover:text-brand transition-colors cursor-pointer group">
            <iconify-icon icon="solar:compass-outline" class="text-icon-md group-hover:text-brand"></iconify-icon>
            <span class="font-sans font-medium text-body-m group-hover:text-brand" data-i18n="nav.explore">
              ${t("nav.explore", "Explore")}
            </span>
         </a>
      </div>

      <!-- 2. CENTER: SEARCH BAR (Desktop Only) -->
      <div class="flex-1 flex items-center justify-center px-4 gap-4 tablet-down:hidden ${stringHidden}">
        <div class="w-full max-w-[480px] h-12 dark:bg-base-900 dark:border-base-700 bg-base-50 border border-base-200 rounded-full flex items-center px-4 gap-3 transition-all focus-within:border-brand focus-within:ring-2 focus-within:ring-brand-surface">
          <iconify-icon icon="solar:magnifer-linear" class="text-icon-md text-content-secondary"></iconify-icon>
          <input
            type="text"
            data-i18n="nav.searchPlaceholder"
            placeholder="${t("nav.searchPlaceholder", "What do you want to learn today ?")}"
            class="w-full bg-transparent border-none outline-none text-body-m text-content-primary placeholder-content-disabled"
          />
        </div>

        <button id="btn-ask-bloom" class="flex justify-center items-center gap-2 bg-brand-harmony text-white font-sans font-semibold text-body-m px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-sm whitespace-nowrap shrink-0">
          <iconify-icon icon="solar:stars-minimalistic-bold" class="text-icon-md"></iconify-icon>
          <span class="text-h6" data-i18n="nav.askBloom">${t("nav.askBloom", "Ask Bloom")}</span>
        </button>
      </div>  

      <!-- 3. RIGHT ACTIONS -->
      <div class="flex items-center gap-5 tablet-down:gap-3 ml-auto shrink-0 z-20">
        
        ${isLoggedIn
      ? `
          <!-- KHI ĐÃ ĐĂNG NHẬP -->
          <div class="flex items-center gap-3 tablet-down:gap-2 text-content-secondary">
             
             <!-- Desktop Tools: Streak, Cart, Bell, Theme (Hidden on Mobile) -->
             <div class="flex items-center gap-2 tablet-down:hidden">
                <!-- Streak -->
                <div class="flex items-center h-12 gap-1.5 px-2 rounded-lg hover:bg-base-100 dark:hover:bg-base-700 transition-colors cursor-pointer">
                  <span class="text-icon-sm">🔥</span>
                  <span class="font-sans font-bold text-body-l text-content-primary">36</span>
                </div>
                <!-- Cart Button -->
                <button class="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-base-100 dark:hover:bg-base-700 transition-colors relative">
                  <iconify-icon icon="solar:cart-large-2-linear" class="text-icon-md text-content-primary"></iconify-icon>
                  <span class="absolute top-1 right-1 w-4 h-4 bg-error text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white">2</span>
                </button>
                <!-- Bell Button -->
                <button class="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-base-100 dark:hover:bg-base-700 transition-colors">
                  <iconify-icon icon="solar:bell-linear" class="text-icon-md text-content-primary"></iconify-icon>
                </button>
                <!-- Theme Toggle -->
                <button id="theme-toggle-btn" class="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-base-100 dark:hover:bg-base-700 transition-colors">
                   <iconify-icon icon="solar:moon-bold" class="text-icon-md text-content-primary dark:hidden transition-transform hover:rotate-12"></iconify-icon>
                   <iconify-icon icon="solar:sun-2-bold" class="text-icon-md text-warning hidden dark:block transition-transform hover:rotate-90"></iconify-icon>
                </button>
             </div>

            <!-- Profile Dropdown (Always Visible) -->
            <div class="relative ml-1" id="profile-wrapper">
              <!-- Avatar Button -->
              <button
                id="profile-btn"
                class="h-12 flex items-center gap-2 px-2 rounded-lg hover:bg-base-100 dark:hover:bg-base-700 transition-colors focus:outline-none"
              >
                <img
                  src="../../public/images/avatar.jpg"
                  alt="Avatar"
                  class="w-10 h-10 rounded-full border border-base-200 object-cover"
                />
                <!-- Arrow (Desktop Only) -->
                <iconify-icon
                  icon="solar:alt-arrow-down-linear"
                  class="text-icon-sm text-content-secondary transition-transform duration-200 tablet-down:hidden"
                ></iconify-icon>
              </button>

              <!-- Dropdown Menu -->
              <div
                id="profile-dropdown"
                class="hidden absolute top-full right-0 mt-2 w-72 bg-card border border-DEFAULT rounded-2xl shadow-lg shadow-base-200/50 dark:shadow-none overflow-hidden z-50 origin-top-right transition-all duration-200 transform scale-95 opacity-0"
              >
                <!-- Header Info -->
                <div class="p-4 border-b border-DEFAULT flex items-center gap-3 bg-base-50 dark:bg-base-800/50">
                  <img
                    src="../../public/images/avatar.jpg"
                    alt="Avatar"
                    class="w-12 h-12 rounded-full border-2 border-brand-surface"
                  />
                  <div>
                    <h4 class="font-sans font-bold text-body-l text-content-primary">Thu Hà</h4>
                    <p class="text-caption text-content-secondary">thuha@example2.com</p>
                  </div>
                </div>

                <!-- Menu Items -->
                <div class="py-2">
                  <a href="#" class="flex items-center gap-3 px-4 py-3 text-content-secondary hover:bg-base-50 dark:hover:bg-base-700 hover:text-brand-primary transition-colors group">
                    <iconify-icon icon="solar:user-circle-linear" class="text-icon-md group-hover:scale-110 transition-transform"></iconify-icon>
                    <span data-i18n="dropdown.myAccount" class="font-sans text-body-m">
                        ${t("dropdown.myAccount", "My Account")}
                    </span>
                  </a>
                  
                  <!-- LANGUAGE BUTTON (Desktop Only - Hidden Mobile) -->
                  <button id="btn-open-lang" class="w-full flex items-center justify-between px-4 py-3 text-content-secondary hover:bg-base-50 dark:hover:bg-base-700 hover:text-brand-primary transition-colors group tablet-down:hidden">
                      <div class="flex items-center gap-3">
                         <iconify-icon icon="solar:global-linear" class="text-icon-md group-hover:rotate-12 transition-transform"></iconify-icon>
                         <span data-i18n="dropdown.language" class="font-sans font-medium text-body-m">
                            ${t("dropdown.language", "Language")}
                         </span>
                      </div>
                      <span id="dropdown-lang-label" class="text-caption text-brand-primary font-bold bg-brand-surface px-2 py-0.5 rounded-md">
                        ${langLabel}
                      </span>
                  </button>

                  <a href="#" class="flex items-center gap-3 px-4 py-3 text-content-secondary hover:bg-base-50 dark:hover:bg-base-700 hover:text-brand-primary transition-colors group">
                      <iconify-icon icon="solar:settings-linear" class="text-icon-md group-hover:rotate-45 transition-transform"></iconify-icon>
                      <span data-i18n="dropdown.settings" class="font-sans text-body-m">
                        ${t("dropdown.settings", "Settings")}
                      </span>
                  </a>
                  <div class="h-px bg-border-default mx-4 my-1"></div>
                  
                  <button id="btn-logout" class="w-full flex items-center gap-3 px-4 py-3 text-error hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                    <iconify-icon icon="solar:logout-2-linear" class="text-icon-md"></iconify-icon>
                    <span data-i18n="dropdown.logout" class="font-sans font-medium text-body-m">
                        ${t("dropdown.logout", "Log out")}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          `
      : `
          <!-- KHI CHƯA ĐĂNG NHẬP -->
          <div class="flex items-center gap-4 tablet-down:gap-3">
               <!-- Desktop Tools: Theme & Lang (Hidden Mobile) -->
               <div class="flex items-center gap-2 tablet-down:hidden">
                  <button id="theme-toggle-btn" class="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-base-100 dark:hover:bg-base-700 transition-colors">
                     <iconify-icon icon="solar:moon-bold" class="text-icon-md text-content-primary dark:hidden transition-transform hover:rotate-12"></iconify-icon>
                     <iconify-icon icon="solar:sun-2-bold" class="text-icon-md text-warning hidden dark:block transition-transform hover:rotate-90"></iconify-icon>
                  </button>
                  <button id="btn-open-lang" class="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-base-100 dark:hover:bg-base-700 transition-colors">
                      <iconify-icon icon="solar:global-linear" class="text-icon-md text-content-primary transition-transform"></iconify-icon>
                  </button>
               </div>

              <!-- Auth Buttons (Visible Mobile & Desktop) -->
              <a href="${stringLogin}" class="font-sans font-semibold text-body-m mobile:text-body-s mobile:font-bold text-content-primary hover:text-brand transition-colors whitespace-nowrap" data-i18n="auth.login">
                Log In
              </a>
              <a href="${stringLogin}" class="bg-brand-primary text-white font-sans font-bold text-body-m mobile:text-body-s px-5 py-2.5 tablet-down:px-4 tablet-down:py-2 mobile:px-3 mobile:py-1.5 rounded-lg hover:opacity-90 transition-opacity shadow-sm shadow-brand-primary/20 whitespace-nowrap" data-i18n="auth.getStarted">
                Get Started
              </a>
          </div>
          `
    }
      </div>
    </header>
  `;
}

export function initNavbarLogic() {
  console.log("Navbar logic initialized");

  // --- 1. LOGIC TOGGLE THEME ---
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const html = document.documentElement;

      // Toggle class 'dark' trên thẻ html
      if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    });

    // Check trạng thái ban đầu (nên có để đồng bộ icon khi reload)
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }

  // --- 2. LOGIC LOGOUT ---
  const logoutBtn = document.getElementById("btn-logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      // Xóa trạng thái login
      localStorage.setItem("isLoggedIn", "false");
      // Chuyển hướng về trang Explore
      window.location.href = "explore.html";
    });
  }
}