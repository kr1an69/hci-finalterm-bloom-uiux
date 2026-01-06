export function createFooter() {
   const isAtLoginPage = window.location.pathname.includes("login.html");
   const isAtLanding = window.location.pathname.includes("index.html");
   const stringForMx = (isAtLoginPage || isAtLanding) ? "-mx-0" : "-mx-8 tablet-down:-mx-6 mobile:-mx-4";

   const footerHTML = `
  <footer class="bg-card border-t pt-16 pb-8 px-12 tablet-down:px-8 relative overflow-hidden ${stringForMx} -mb-8">
    
    <!-- Decor Background Elements (Subtle/Chill) -->
    <div class="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
        <iconify-icon icon="solar:leaf-bold" class="text-9xl text-base-500 dark:text-base-200"></iconify-icon>
    </div>
    <div class="absolute bottom-0 left-10 opacity-10 pointer-events-none">
         <iconify-icon icon="ph:plant-fill" class="text-8xl text-base-500 dark:text-base-200"></iconify-icon>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Changed mobile grid to 12 cols to allow side-by-side links (col-span-6) -->
      <div class="grid grid-cols-12 gap-10 mb-16">
        
        <!-- Brand / About Column -->
        <div class="col-span-4 tablet-down:col-span-12 space-y-6">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-2xl font-bold tracking-tight text-content-primary">Bloom</span>
          </div>
          <p class="text-content-secondary leading-relaxed max-w-sm" data-i18n="footer.slogan">
            Học tập nhẹ nhàng, hiệu quả tối đa. Nền tảng E-learning phong cách tối giản dành cho Gen Z. 
            <br>Just chill and study.
          </p>
          
          <!-- Socials (Minimal Circle) -->
          <div class="flex items-center gap-3 pt-2">
             <button class="w-10 h-10 rounded-full bg-base-100 dark:bg-base-200 hover:bg-brand-primary dark:hover:bg-brand-primary text-base-700 hover:text-white text-content-secondary transition-all flex items-center justify-center">
                <iconify-icon icon="ri:facebook-fill" class="text-lg"></iconify-icon>
             </button>
             <button class="w-10 h-10 rounded-full bg-base-100 dark:bg-base-200 hover:bg-brand-primary dark:hover:bg-brand-primary text-base-700 hover:text-white text-content-secondary transition-all flex items-center justify-center">
                <iconify-icon icon="ri:instagram-line" class="text-lg"></iconify-icon>
             </button>
             <button class="w-10 h-10 rounded-full bg-base-100 dark:bg-base-200 hover:bg-brand-primary dark:hover:bg-brand-primary text-base-700 hover:text-white text-content-secondary transition-all flex items-center justify-center">
                <iconify-icon icon="ri:twitter-x-line" class="text-lg "></iconify-icon>
             </button>
             <button class="w-10 h-10 rounded-full bg-base-100 dark:bg-base-200 hover:bg-brand-primary dark:hover:bg-brand-primary text-base-700 hover:text-white text-content-secondary transition-all flex items-center justify-center">
                <iconify-icon icon="ri:discord-fill" class="text-lg"></iconify-icon>
             </button>
          </div>
        </div>

        <!-- Links Columns -->
        <!-- Desktop: start at 7 (creates gap), span 3. Mobile: span 6 (side-by-side) -->
        <div class="col-span-3 col-start-7 tablet-down:col-span-6 tablet-down:col-start-auto">
          <h4 class="font-bold text-content-primary mb-6" data-i18n="footer.explore">Khám Phá</h4>
          <ul class="space-y-4 text-sm text-content-secondary">
             <li class="hover:text-brand-primary transition-colors cursor-pointer w-fit" data-i18n="footer.newCourses">Khóa học Mới</li>
             <li class="hover:text-brand-primary transition-colors cursor-pointer w-fit" data-i18n="footer.roadmap">Lộ trình học</li>
             <li class="hover:text-brand-primary transition-colors cursor-pointer w-fit" data-i18n="footer.mentors">Mentors xịn</li>
             <li class="hover:text-brand-primary transition-colors cursor-pointer w-fit" data-i18n="footer.blog">Blog chia sẻ</li>
          </ul>
        </div>

        <div class="col-span-3 tablet-down:col-span-6">
          <h4 class="font-bold text-content-primary mb-6" data-i18n="footer.resources">Tài Nguyên</h4>
          <ul class="space-y-4 text-sm text-content-secondary">
             <li class="hover:text-brand-primary transition-colors cursor-pointer w-fit" data-i18n="footer.freeDocs">Tài liệu miễn phí</li>
             <li class="hover:text-brand-primary transition-colors cursor-pointer w-fit" data-i18n="footer.community">Community</li>
             <li class="hover:text-brand-primary transition-colors cursor-pointer w-fit" data-i18n="footer.events">Events & Workshop</li>
             <li class="hover:text-brand-primary transition-colors cursor-pointer w-fit" data-i18n="footer.tools">Study Tools</li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="border-t pt-8 flex flex-row tablet-down:flex-col items-center justify-between gap-4">
         <p class="text-sm text-content-secondary text-left tablet-down:text-center" data-i18n="footer.copyright">
            © 2025 Bloom E-Learning. Designed properly for HCI.
         </p>
         <div class="flex gap-6 text-sm text-content-secondary font-medium">
            <span class="hover:text-content-primary cursor-pointer transition-colors" data-i18n="footer.privacy">Privacy</span>
            <span class="hover:text-content-primary cursor-pointer transition-colors" data-i18n="footer.terms">Terms</span>
            <span class="hover:text-content-primary cursor-pointer transition-colors" data-i18n="footer.cookies">Cookies</span>
         </div>
      </div>

    </div>
  </footer>
  `;
   return footerHTML;
}