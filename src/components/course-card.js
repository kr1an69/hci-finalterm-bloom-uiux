export function courseCard(data) {
  // data structure expected:
  // {
  //   id: string,
  //   title: string,
  //   author: string,
  //   rating: number,
  //   reviews: number,
  //   tags: string[], 
  //   level: "course.beginner", 
  //   students: string, 
  //   duration: string, 
  //   price: "course.price", 
  //   thumbnail: string 
  // }

  const visibleTagsCount = 2;
  const standardTags = data.tags.slice(0, visibleTagsCount);
  const remainingTagsCount = data.tags.length - visibleTagsCount;

  const renderTags = (tags, showAll = false) => {
    let html = tags.map(tag => `
      <span class="px-2 py-1 bg-base-100 dark:bg-base-500 text-content-primary text-[10px] font-medium rounded-md whitespace-nowrap">
        ${tag}
      </span>
    `).join("");

    if (!showAll && remainingTagsCount > 0) {
      html += `
        <span class="text-xs text-content-secondary font-medium">+${remainingTagsCount}</span>
      `;
    }
    return html;
  };

  // The Card HTML
  // Key Changes for Semantic Design System:
  // bg-white dark:bg-slate-800 -> bg-card
  // border-gray-100 dark:border-slate-700 -> border
  // text-slate-800 dark:text-slate-100 -> text-content-primary
  // text-slate-500 dark:text-slate-400 -> text-content-secondary
  // text-indigo-600 -> text-brand-primary

  return `
    <div class="relative group w-full h-full">
      <!-- STATIC CARD -->
      <div class="bg-card border rounded-2xl p-3 shadow-sm h-full flex flex-col">
        <!-- Thumbnail -->
        <div class="relative h-40 bg-base-200 rounded-xl overflow-hidden mb-3 shrink-0">
          ${data.thumbnail
      ? `<img src="${data.thumbnail}" class="w-full h-full object-cover" alt="${data.title}" />`
      : `<div class="w-full h-full bg-base-300"></div>`
    } 
          <div class="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-lg flex items-center justify-center gap-1">
            <iconify-icon icon="solar:star-bold" class="text-warning"></iconify-icon>
            <span>${data.rating} (${data.reviews})</span>
          </div>
        </div>
        
        <!-- Content -->
        <div class="px-1 flex-1 flex flex-col">
          <h3 class="font-sans font-bold text-lg text-content-primary mb-1 line-clamp-1 group-hover:text-brand-primary transition-colors">
            ${data.title}
          </h3>
          <p class="text-xs text-content-secondary mb-3">${data.author}</p>
          
          <div class="flex flex-wrap items-center gap-2 mb-4">
            ${renderTags(standardTags, false)}
          </div>
          
          <div class="mt-auto">
            <div class="flex flex-wrap items-center gap-4 mb-4 border-b pb-4">
              <div class="flex items-center gap-1.5">
                <iconify-icon icon="solar:chart-2-linear" class="text-content-secondary text-sm"></iconify-icon>
                <span class="text-xs text-content-secondary" data-i18n="${data.level}"></span>
              </div>
              <div class="flex items-center gap-1.5">
                <iconify-icon icon="solar:users-group-rounded-linear" class="text-content-secondary text-sm"></iconify-icon>
                <span class="text-xs text-content-secondary">${data.students}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <iconify-icon icon="solar:clock-circle-linear" class="text-content-secondary text-sm"></iconify-icon>
                <span class="text-xs text-content-secondary">${data.duration}</span>
              </div>
            </div>
            <div class="font-sans font-bold text-lg text-brand-primary">
               <span data-i18n="${data.price}"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- HOVER POPUP CARD -->
      <div class="absolute top-0 left-0 w-full min-h-[110%] bg-card border border-brand-primary rounded-2xl p-3 shadow-xl 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300 z-50 scale-95 group-hover:scale-105 origin-center cursor-pointer"
           onclick="window.location.href='course-detail.html'">
         <!-- Thumbnail -->
        <div class="relative h-40 bg-base-200 rounded-xl overflow-hidden mb-3">
          ${data.thumbnail
      ? `<img src="${data.thumbnail}" class="w-full h-full object-cover" alt="${data.title}" />`
      : `<div class="w-full h-full bg-base-300"></div>`
    } 
          <div class="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-lg flex items-center justify-center gap-1">
            <iconify-icon icon="solar:star-bold" class="text-warning"></iconify-icon>
            <span>${data.rating} (${data.reviews})</span>
          </div>
        </div>

         <!-- Content -->
        <div class="px-1 flex flex-col h-full">
          <div class="font-sans font-bold text-lg mb-1 line-clamp-2 text-brand-primary">${data.title}</div>
          <p class="text-xs text-content-secondary mb-3">${data.author}</p>
          

          <!-- Full Tags in Hover View -->
          <div class="flex flex-wrap items-center gap-2 mb-4">
             ${renderTags(data.tags, true)}
          </div>

           <div class="flex items-center flex-wrap w-full gap-4 mb-4 border-b pb-4">
              <div class="flex items-center gap-1.5">
                <iconify-icon icon="solar:chart-2-linear" class="text-content-secondary text-sm"></iconify-icon>
                <span class="text-xs text-content-secondary" data-i18n="${data.level}"></span>
              </div>
              <div class="flex items-center gap-1.5">
                <iconify-icon icon="solar:users-group-rounded-linear" class="text-content-secondary text-sm"></iconify-icon>
                <span class="text-xs text-content-secondary">${data.students}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <iconify-icon icon="solar:clock-circle-linear" class="text-content-secondary text-sm"></iconify-icon>
                <span class="text-xs text-content-secondary">${data.duration}</span>
              </div>
            </div>

            <div class="font-sans font-bold text-lg text-brand-primary mb-4">
               <span data-i18n="${data.price}"></span>
            </div>
            
            <!-- Add to Cart Button -->
            <button onclick="event.stopPropagation()" class="w-full py-2.5 rounded-xl bg-brand-surface hover:bg-brand-primary hover:text-white text-brand-primary font-semibold text-sm transition-colors flex items-center justify-center gap-2">
                <iconify-icon icon="solar:cart-large-2-linear" class="text-lg"></iconify-icon>
                <span data-i18n="course.addToCart">Add to Cart</span>
            </button>
        </div>
      </div>
    </div>
  `;
}
