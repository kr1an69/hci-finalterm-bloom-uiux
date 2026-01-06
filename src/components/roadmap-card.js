
export const roadmapCard = (data) => {
  // data props: title, lastActive, progress (number), color (hex/tailwind class), link, icon
  const safeTitle = data.title || "Untitled Roadmap";
  const safeLastActive = data.lastActive || "";
  const safeProgress = data.progress || 0;
  const safeLink = data.link || "#";
  // Icon mặc định nếu không truyền vào
  const safeIcon = data.icon || "solar:map-point-bold-duotone";
  // Màu mặc định cho thanh progress nếu không có
  const safeColorClass = data.color || "bg-brand-primary";

  // Xử lý icon color style nếu có
  const iconStyle = data.iconColor ? `style="color: ${data.iconColor}"` : 'class="text-brand-primary"';

  return `
      <div class="bg-card p-6 rounded-2xl border shadow-sm flex flex-col justify-between h-full bg-white dark:bg-base-800 border-neutral-200 dark:border-neutral-800 transition-shadow hover:shadow-md">
        
        <!-- Header: Icon & Options -->
        <div class="flex justify-between items-start mb-4">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-base-100 dark:bg-base-900">
             <iconify-icon icon="${safeIcon}" class="text-2xl" ${iconStyle}></iconify-icon>
          </div>
          
          <button class="text-content-secondary hover:text-content-primary transition-colors">
            <iconify-icon icon="solar:menu-dots-bold" class="text-xl"></iconify-icon>
          </button>
        </div>
  
        <!-- Body: Title & Info -->
        <div class="mb-6">
          <h3 class="text-lg font-bold text-content-primary mb-1 line-clamp-1" title="${safeTitle}">
            ${safeTitle}
          </h3>
          <p class="text-xs text-content-secondary flex items-center gap-1">
             <span data-i18n="roadmap.lastActive">Last active</span>: ${safeLastActive}
          </p>
        </div>
  
        <!-- Progress Section -->
        <div class="mb-6">
           <div class="flex justify-between items-center mb-2">
              <span class="text-xs font-semibold text-content-secondary" data-i18n="roadmap.progress">Progress:</span>
              <span class="text-xs font-bold text-content-primary">${safeProgress}%</span>
           </div>
           <div class="h-2 w-full bg-base-200 dark:bg-base-700 rounded-full overflow-hidden">
              <div class="h-full rounded-full ${safeColorClass}" style="width: ${safeProgress}%"></div>
           </div>
        </div>
  
        <!-- Footer: Action Button -->
        <a href="${safeLink}" class="block w-full text-center py-2.5 rounded-xl bg-base-100 dark:bg-base-900 hover:bg-base-200 dark:hover:bg-base-700 text-sm font-semibold text-content-primary transition-all active:scale-[0.98]">
             <span data-i18n="roadmap.viewDetails">View Details</span>
        </a>
  
      </div>
    `;
};

