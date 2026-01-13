
export function certificateCard(data) {
  // data expected:
  // {
  //   id: string,
  //   title: "Software Engineering",
  //   issuer: "Bloom Academy",
  //   date: "Oct 2025",
  //   thumbnail: "../public/images/certificate_ai_gene.png",
  //   downloadLink: "#"
  // }

  return `
    <div class="group relative bg-card border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col dark:bg-base-800">
      
      <!-- Certificate Image Wrapper -->
      <div class="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-base-100 dark:bg-base-900 mb-4 border border-neutral-100 dark:border-neutral-700">
        <img 
          src="${data.thumbnail}" 
          alt="${data.title}" 
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        <!-- Overlay on Hover -->
        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
            <a href="#" class="bg-brand-primary text-white font-bold px-auto py-2 w-36 rounded-lg shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-secondary-500 dark:hover:bg-brand-secondary flex items-center justify-center gap-2">
                <span data-i18n="certificates.viewDetails">View Details</span>
            </a>
            <a href="#" class="bg-brand-primary text-white font-bold px-auto py-2 w-36 rounded-lg shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-secondary-500 dark:hover:bg-brand-secondary flex items-center justify-center gap-2">
                <iconify-icon icon="solar:download-minimalistic-bold" class="text-xl"></iconify-icon>
                <span data-i18n="certificates.download">Download</span>
            </a>
        </div>
      </div>

      <!-- Info -->
      <div class="flex-1 flex flex-col">
        <h3 class="text-base font-bold text-content-primary mb-1 line-clamp-2" title="${data.title}">
            ${data.title}
        </h3>
        
        <div class="mt-auto pt-4 flex items-center justify-between text-sm text-content-secondary border-t border-neutral-100 dark:border-neutral-700">
            <div class="flex items-center gap-1.5">
                <iconify-icon icon="solar:medal-ribbon-bold" class="text-brand-secondary"></iconify-icon>
                <span>${data.issuer}</span>
            </div>
            <span class="text-xs font-medium bg-base-100 dark:bg-base-900 px-2 py-1 rounded text-content-secondary">
                ${data.date}
            </span>
        </div>
      </div>
    </div>
  `;
}
