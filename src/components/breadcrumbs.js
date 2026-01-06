import { translations } from "../langs/lang-db.js";

export function breadcrumbs() {
  const currentLang = localStorage.getItem("lang") || "en";
  const t = (key, defaultText) =>
    translations[currentLang]?.[key] || defaultText;

  // Logic lấy tên trang từ URL
  const path = window.location.pathname.split("/").pop().replace(".html", "");

  // Map tên file sang Key ngôn ngữ & Icon
  // parent: tên key của trang cha (nếu có)
  const pageMap = {
    home: { key: "side.home", default: "Home", icon: "solar:home-smile-angle-bold" },
    courses: { key: "side.myCourses", default: "My Courses", icon: "solar:book-bookmark-bold" },
    learning: { key: "learning.breadcrumb", default: "Learning Space", parent: "courses" },
    roadmaps: { key: "side.myRoadmaps", default: "Roadmaps", icon: "solar:point-on-map-bold" },
    achievements: { key: "side.achivements", default: "Achievements", icon: "solar:cup-bold" },
    certificates: { key: "side.certificates", default: "Certificates", icon: "solar:diploma-verified-bold" },
    settings: { key: "side.settings", default: "Settings", icon: "solar:settings-bold" },

    // Sub-pages
    "roadmap-detail": { key: "roadmap.detail", default: "Detail", parent: "roadmaps" },
    "course-detail": { key: "explore.detail", default: "Detail", parent: "explore" },
    explore: { key: "explore.title", default: "Explore", icon: "solar:compass-bold" },
    onboarding: { key: "onboarding.title", default: "Ask Bloom", icon: "solar:stars-minimalistic-bold" },
    "onboarding-result": { key: "onboarding.result", default: "Ask Bloom", icon: "solar:stars-minimalistic-bold" },
  };

  const currentPage = pageMap[path] || pageMap["home"]; // Mặc định là Home nếu không tìm thấy


  // --- LOGIC MỚI: XỬ LÝ SUB-PAGES (CÓ PARENT) ---
  if (currentPage.parent) {
    const parentPage = pageMap[currentPage.parent];
    // Nếu không tìm thấy parent config thì fallback về logic thường
    if (parentPage) {
      return `
            <div class="z-10 bg-slate-50/90 backdrop-blur-sm px-6 py-4  border-b border-neutral-200 dark:border-neutral-800 dark:bg-base-900/90 transition-colors">
              <div class="flex items-center gap-2 text-sm text-content-secondary">
                
               <!-- Parent Link -->
               <a href="${currentPage.parent}.html" class="flex items-center gap-2 hover:text-brand-primary transition-colors">
                  <iconify-icon icon="${parentPage.icon}" class="text-xl text-brand-primary"></iconify-icon>
                  <span class="font-medium" data-i18n="${parentPage.key}">${t(parentPage.key, parentPage.default)}</span>
               </a>
                
                <!-- Separator -->
                <span class="text-content-disabled">/</span>
        
                <!-- Current Page Title -->
                <span class="font-bold text-content-primary text-base" data-i18n="${currentPage.key}">
                   ${t(currentPage.key, currentPage.default)}
                </span>
        
              </div>
            </div>
          `;
    }
  }

  // Nếu là trang Top-level khác Home: [Icon] / Tên trang
  return `
    <div class="z-10 bg-slate-50/90 backdrop-blur-sm px-8 py-4  border-b border-neutral-200 dark:border-neutral-800 dark:bg-base-900/90 transition-colors">
      <div class="flex items-center gap-2 text-sm text-content-secondary">
        
       <!-- Page Icon -->
       <iconify-icon icon="${currentPage.icon}" class="text-xl text-brand-primary"></iconify-icon>
        
        <!-- Separator -->
        <span class="text-content-disabled">/</span>

        <!-- Current Page Title -->
        <span class="font-bold text-content-primary text-base" data-i18n="${currentPage.key}">
           ${t(currentPage.key, currentPage.default)}
        </span>

      </div>
    </div>
  `;
}
