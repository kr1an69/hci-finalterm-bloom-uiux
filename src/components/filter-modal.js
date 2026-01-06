import { translations } from "../langs/lang-db.js";

const filterModalHTML = (t) => `
<div id="filter-modal" class="hidden fixed inset-0 z-[100] flex items-center justify-center bg-base-900/60 backdrop-blur-sm transition-opacity opacity-0">
    <div class="bg-card w-full max-w-2xl tablet-down:h-[70vh] tablet-down:m-4 h-auto max-h-[85vh] rounded-3xl shadow-2xl border border-DEFAULT transform scale-95 transition-transform duration-300 relative flex flex-col">
        
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b border-DEFAULT shrink-0">
            <h3 class="text-xl font-bold text-content-primary flex items-center gap-2">
                <iconify-icon icon="solar:filter-bold-duotone" class="text-brand-primary"></iconify-icon>
                <span data-i18n="filter.title">${t("filter.title", "Filter")}</span>
            </h3>
            <button onclick="closeModal('filter-modal')" class="text-content-secondary hover:text-error transition-colors p-2 rounded-full">
                <iconify-icon icon="solar:close-circle-bold" class="text-2xl"></iconify-icon>
            </button>
        </div>

        <!-- Scrollable Content -->
        <div class="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
            
            <!-- 1. Level -->
            <div>
                <h4 class="text-sm font-bold text-content-secondary uppercase tracking-wider mb-3" data-i18n="filter.level">${t("filter.level", "Level")}</h4>
                <div class="flex flex-wrap gap-3">
                    <label class="cursor-pointer">
                        <input type="checkbox" class="peer sr-only" checked>
                        <div class="px-4 py-2 rounded-xl bg-base-100 dark:bg-base-700 border border-transparent text-content-primary peer-checked:bg-brand-primary/10 peer-checked:text-brand-primary peer-checked:border-brand-primary transition-all font-medium text-sm">
                            <span data-i18n="filter.allLevels">All Levels</span>
                        </div>
                    </label>
                    <label class="cursor-pointer">
                        <input type="checkbox" class="peer sr-only">
                        <div class="px-4 py-2 rounded-xl bg-base-100 dark:bg-base-700 border border-transparent text-content-primary peer-checked:bg-brand-primary/10 peer-checked:text-brand-primary peer-checked:border-brand-primary transition-all font-medium text-sm">
                            <span data-i18n="course.beginner">Beginner</span>
                        </div>
                    </label>
                    <label class="cursor-pointer">
                        <input type="checkbox" class="peer sr-only">
                        <div class="px-4 py-2 rounded-xl bg-base-100 dark:bg-base-700 border border-transparent text-content-primary peer-checked:bg-brand-primary/10 peer-checked:text-brand-primary peer-checked:border-brand-primary transition-all font-medium text-sm">
                            <span data-i18n="filter.intermediate">Intermediate</span>
                        </div>
                    </label>
                    <label class="cursor-pointer">
                        <input type="checkbox" class="peer sr-only">
                        <div class="px-4 py-2 rounded-xl bg-base-100 dark:bg-base-700 border border-transparent text-content-primary peer-checked:bg-brand-primary/10 peer-checked:text-brand-primary peer-checked:border-brand-primary transition-all font-medium text-sm">
                            <span data-i18n="filter.expert">Expert</span>
                        </div>
                    </label>
                </div>
            </div>

            <!-- 2. Rating -->
            <div>
                <h4 class="text-sm font-bold text-content-secondary uppercase tracking-wider mb-3" data-i18n="filter.rating">${t("filter.rating", "Rating")}</h4>
                <div class="space-y-3">
                    <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="rating" class="w-5 h-5 text-brand-primary border-gray-300 focus:ring-brand-primary">
                        <div class="flex items-center gap-1 text-yellow-400 text-lg">
                            <iconify-icon icon="solar:star-bold"></iconify-icon>
                            <iconify-icon icon="solar:star-bold"></iconify-icon>
                            <iconify-icon icon="solar:star-bold"></iconify-icon>
                            <iconify-icon icon="solar:star-bold"></iconify-icon>
                            <iconify-icon icon="solar:star-linear" class="text-content-disabled"></iconify-icon>
                        </div>
                        <span class="text-sm text-content-primary font-medium group-hover:text-brand-primary transition-colors">4.0 & up</span>
                    </label>
                     <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="rating" class="w-5 h-5 text-brand-primary border-gray-300 focus:ring-brand-primary">
                        <div class="flex items-center gap-1 text-yellow-400 text-lg">
                            <iconify-icon icon="solar:star-bold"></iconify-icon>
                            <iconify-icon icon="solar:star-bold"></iconify-icon>
                            <iconify-icon icon="solar:star-bold"></iconify-icon>
                            <iconify-icon icon="solar:star-linear" class="text-content-disabled"></iconify-icon>
                             <iconify-icon icon="solar:star-linear" class="text-content-disabled"></iconify-icon>
                        </div>
                        <span class="text-sm text-content-primary font-medium group-hover:text-brand-primary transition-colors">3.0 & up</span>
                    </label>
                </div>
            </div>

            <!-- 3. Duration -->
             <div>
                <h4 class="text-sm font-bold text-content-secondary uppercase tracking-wider mb-3" data-i18n="filter.duration">${t("filter.duration", "Duration")}</h4>
                <div class="grid grid-cols-2 gap-3">
                    <label class="cursor-pointer">
                        <input type="checkbox" class="peer sr-only">
                        <div class="px-4 py-3 rounded-xl bg-base-100 dark:bg-base-700 border border-transparent text-content-primary peer-checked:bg-brand-primary/10 peer-checked:text-brand-primary peer-checked:border-brand-primary transition-all text-sm flex items-center gap-2">
                             <iconify-icon icon="solar:clock-circle-linear" class="text-lg"></iconify-icon>
                            <span>0-2 Hours</span>
                        </div>
                    </label>
                     <label class="cursor-pointer">
                        <input type="checkbox" class="peer sr-only">
                        <div class="px-4 py-3 rounded-xl bg-base-100 dark:bg-base-700 border border-transparent text-content-primary peer-checked:bg-brand-primary/10 peer-checked:text-brand-primary peer-checked:border-brand-primary transition-all text-sm flex items-center gap-2">
                             <iconify-icon icon="solar:clock-circle-linear" class="text-lg"></iconify-icon>
                            <span>3-6 Hours</span>
                        </div>
                    </label>
                     <label class="cursor-pointer">
                        <input type="checkbox" class="peer sr-only">
                        <div class="px-4 py-3 rounded-xl bg-base-100 dark:bg-base-700 border border-transparent text-content-primary peer-checked:bg-brand-primary/10 peer-checked:text-brand-primary peer-checked:border-brand-primary transition-all text-sm flex items-center gap-2">
                             <iconify-icon icon="solar:clock-circle-linear" class="text-lg"></iconify-icon>
                            <span>7-16 Hours</span>
                        </div>
                    </label>
                     <label class="cursor-pointer">
                        <input type="checkbox" class="peer sr-only">
                        <div class="px-4 py-3 rounded-xl bg-base-100 dark:bg-base-700 border border-transparent text-content-primary peer-checked:bg-brand-primary/10 peer-checked:text-brand-primary peer-checked:border-brand-primary transition-all text-sm flex items-center gap-2">
                             <iconify-icon icon="solar:clock-circle-linear" class="text-lg"></iconify-icon>
                            <span>17+ Hours</span>
                        </div>
                    </label>
                </div>
            </div>

            <!-- 4. Language (Native Names) -->
             <div>
                <h4 class="text-sm font-bold text-content-secondary uppercase tracking-wider mb-3" data-i18n="filter.language">${t("filter.language", "Language")}</h4>
                <div class="grid tablet-down:grid-cols-2 grid-cols-3 gap-3">
                    <label class="flex items-center gap-3 cursor-pointer p-2 hover:bg-base-100 dark:hover:bg-base-700 rounded-lg transition-colors">
                        <input type="checkbox" class="w-5 h-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary">
                        <span class="text-sm text-content-primary">English</span>
                        <span class="text-xs text-content-secondary ml-auto">(10,000)</span>
                    </label>
                     <label class="flex items-center gap-3 cursor-pointer p-2 hover:bg-base-100 dark:hover:bg-base-700 rounded-lg transition-colors">
                        <input type="checkbox" class="w-5 h-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary">
                        <span class="text-sm text-content-primary">Tiếng Việt</span>
                        <span class="text-xs text-content-secondary ml-auto">(608)</span>
                    </label>
                     <label class="flex items-center gap-3 cursor-pointer p-2 hover:bg-base-100 dark:hover:bg-base-700 rounded-lg transition-colors">
                        <input type="checkbox" class="w-5 h-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary">
                        <span class="text-sm text-content-primary">日本語</span>
                         <span class="text-xs text-content-secondary ml-auto">(4,378)</span>
                    </label>
                     <label class="flex items-center gap-3 cursor-pointer p-2 hover:bg-base-100 dark:hover:bg-base-700 rounded-lg transition-colors">
                        <input type="checkbox" class="w-5 h-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary">
                        <span class="text-sm text-content-primary">Español</span>
                         <span class="text-xs text-content-secondary ml-auto">(3,174)</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer p-2 hover:bg-base-100 dark:hover:bg-base-700 rounded-lg transition-colors">
                        <input type="checkbox" class="w-5 h-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary">
                        <span class="text-sm text-content-primary">한국어</span>
                         <span class="text-xs text-content-secondary ml-auto">(3,083)</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer p-2 hover:bg-base-100 dark:hover:bg-base-700 rounded-lg transition-colors">
                        <input type="checkbox" class="w-5 h-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary">
                        <span class="text-sm text-content-primary">Français</span>
                         <span class="text-xs text-content-secondary ml-auto">(2,392)</span>
                    </label>
                     <label class="flex items-center gap-3 cursor-pointer p-2 hover:bg-base-100 dark:hover:bg-base-700 rounded-lg transition-colors">
                        <input type="checkbox" class="w-5 h-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary">
                        <span class="text-sm text-content-primary">Deutsch</span>
                         <span class="text-xs text-content-secondary ml-auto">(2,237)</span>
                    </label>
                     <label class="flex items-center gap-3 cursor-pointer p-2 hover:bg-base-100 dark:hover:bg-base-700 rounded-lg transition-colors">
                        <input type="checkbox" class="w-5 h-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary">
                        <span class="text-sm text-content-primary">中文</span>
                         <span class="text-xs text-content-secondary ml-auto">(1,397)</span>
                    </label>
                </div>
            </div>

        </div>

        <!-- Footer -->
        <div class="rounded-b-3xl p-6 border-t border-DEFAULT flex items-center justify-between shrink-0 bg-base-100 dark:bg-base-900/50">
            <button onclick="closeModal('filter-modal')" class="text-content-secondary hover:text-content-primary text-sm font-semibold px-4 py-2 transition-colors" data-i18n="filter.clear">
                ${t("filter.clear", "Clear All")}
            </button>
            <button onclick="closeModal('filter-modal')" class="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-brand-primary/25 hover:scale-105 active:scale-95 transition-all" data-i18n="filter.apply">
                ${t("filter.apply", "Apply Filter")}
            </button>
        </div>
    </div>
</div>
`;

export function initFilterModal() {
    const currentLang = localStorage.getItem("lang") || "en";
    const t = (key, defaultText) => translations[currentLang]?.[key] || defaultText;

    if (!document.getElementById("filter-modal")) {
        document.body.insertAdjacentHTML("beforeend", filterModalHTML(t));
    }
}
