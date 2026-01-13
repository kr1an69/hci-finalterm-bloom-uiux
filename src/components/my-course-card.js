import { translations } from "../langs/lang-db.js";

export const myCourseCard = (data) => {
  const currentLang = localStorage.getItem("lang") || "en";
  const t = (key, defaultText) => translations[currentLang]?.[key] || defaultText;

  return `
    <a href="learning.html" class="bg-card p-4 rounded-2xl border border-DEFAULT shadow-sm flex flex-col gap-6 hover:shadow-md transition-shadow group block">
      <!-- Thumbnail -->
      <div class="relative w-full h-48 shrink-0 overflow-hidden rounded-xl">
        <img src="${data.thumbnail}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="${data.title}" />
        <!-- Play Overlay (Optional) -->
        <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div class="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-brand-primary shadow-lg">
                <iconify-icon icon="solar:play-bold" class="text-xl"></iconify-icon>
            </div>
        </div>
      </div>

      <!-- Content -->
      <div class="flex-1 flex flex-col justify-between py-1">
        <div>
           <div class="flex justify-between items-start mb-2">
            <div>
                 <h3 class="text-xl font-bold text-content-primary line-clamp-1 mb-1">
                  ${data.title}
                </h3>
                 <p class="text-sm text-content-secondary">${data.author}</p>
            </div>
          </div>
          
          <!-- Progress Info -->
          <div class="flex items-center justify-between text-xs text-content-secondary mb-2">
             <span data-i18n="myCourses.completed">${t("myCourses.completed", "Completed")} ${data.completedLessons}/${data.totalLessons} <span data-i18n="myCourses.lessons">lessons</span></span>
             <span class="font-bold text-content-primary">${data.progress}%</span>
          </div>

          <!-- Progress Bar -->
          <div class="h-2.5 bg-base-200 dark:bg-base-700 rounded-full overflow-hidden mb-4 border border-transparent">
            <div class="h-full bg-brand-primary rounded-full transition-all duration-1000" style="width: ${data.progress}%"></div>
          </div>
        </div>

        <!-- Footer -->
        <div class="flex items-start justify-center flex-col mt-auto gap-2">
             <p class="text-xs text-content-disabled flex items-center justify-center gap-1">
                <iconify-icon icon="solar:clock-circle-linear" class="text-icon-xs"></iconify-icon>
                <span data-i18n="myCourses.lastAccessed">${t("myCourses.lastAccessed", "Last accessed")}</span>: ${data.lastAccessed}
             </p>

            <div class="group relative w-full bg-brand-primary group-hover:bg-brand-secondary text-white px-5 py-2 rounded-lg text-md font-bold transition-all shadow-lg shadow-brand-primary/20 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2">
                 <span data-i18n="myCourses.continue">${t("myCourses.continue", "Continue")}</span>
                 <iconify-icon icon="solar:arrow-right-linear"  class="text-icon-md absolute left-24 top-1/2 -translate-y-1/2 transition-all duration-500 ease-out group-hover:left-[calc(100%-2rem)]"></iconify-icon>
            </div>
        </div>
      </div>
    </a>
  `;
};
