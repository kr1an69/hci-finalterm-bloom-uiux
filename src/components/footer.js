export function createFooter() {
   const isAtLoginPage = window.location.pathname.includes("login.html");
   const isAtLanding = window.location.pathname === "/" || window.location.pathname.includes("index.html");
   const stringForMx = (isAtLoginPage || isAtLanding) ? "-mx-0" : "-mx-8 tablet:-mx-6 mobile:-mx-4";
   const stringLinkLogoSVG = isAtLanding ? "./public/images/logoSVG.svg" : "../../public/images/logoSVG.svg";

   const footerHTML = `
  <footer class="bg-card border-t pt-16 pb-8 px-8 tablet:px-6 mobile:px-4 relative overflow-hidden ${stringForMx} -mb-8">
    
    <!-- Decor Background Elements (Subtle/Chill) -->
    <div class="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
        <iconify-icon icon="solar:leaf-bold" class="text-9xl text-base-500 dark:text-base-200"></iconify-icon>
    </div>
    <div class="absolute bottom-0 left-10 opacity-10 pointer-events-none">
         <iconify-icon icon="ph:plant-fill" class="text-8xl text-base-500 dark:text-base-200"></iconify-icon>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Changed mobile grid to 12 cols to allow side-by-side links (col-span-6) -->
      <div class="grid grid-cols-12 gap-10 tablet:gap-6 mobile:gap-4 mb-16">
        
        <!-- Brand / About Column -->
        <div class="col-span-4 tablet:col-span-12 space-y-6">
          <div class="flex items-center gap-2 mb-2">
            <svg class="w-12 h-12 text-brand-primary" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.8774 1.29492C14.097 0.375076 18.2188 -0.531444 27.7466 0.375977C30.278 0.617133 33.5228 1.44699 35.9849 3.39844C38.4809 5.37695 40.1303 8.47854 39.4673 13.1191C39.0056 16.3505 37.994 18.417 36.5054 19.8857C35.4317 20.9449 34.1312 21.666 32.6919 22.2998C37.0888 23.1236 40.1029 24.7624 41.9937 26.876C44.135 29.27 44.7807 32.212 44.4282 35.0908C44.0768 37.9607 42.7345 40.7832 40.8774 43.0029C39.0235 45.2188 36.6174 46.8789 34.105 47.3574C30.9919 47.9503 26.8146 48.062 22.6323 47.9727C18.442 47.8831 14.2106 47.5906 10.98 47.3652L10.5581 47.3359L10.5171 46.916C9.28714 34.469 9.00777 25.9237 9.46338 16.1855C10.0946 17.1855 10.5456 18.0695 10.6509 18.7178C11.0117 20.9397 11.8548 23.8937 12.5796 25.2236C13.815 27.4903 18.3079 29.7036 18.4673 28.8164C18.6258 27.9287 16.1345 23.117 16.7573 23.1816C18.3804 23.3552 19.463 28.202 19.6978 27.9287C20.9061 26.5218 18.2469 20.342 16.062 17.6543C14.5698 15.8187 12.0868 13.5807 9.72021 11.6924C9.92377 8.5988 10.1895 5.32526 10.5161 1.73047L10.5474 1.38867L10.8774 1.29492ZM28.8589 30.3369C26.8602 29.4799 22.3586 30.0065 22.1118 30.04C21.8658 30.0734 20.4964 30.3172 19.9341 30.3867C18.4928 30.5649 23.3055 32.1667 23.0903 32.5742C22.565 33.0764 18.9467 31.694 17.813 31.8525C16.3967 32.0512 20.7183 36.5403 25.231 38.5469C28.8416 40.152 40.2391 37.8315 36.4175 36.7031C32.5957 35.5747 32.7204 31.9927 28.8589 30.3369ZM34.8423 9.77148C33.3204 9.19176 29.9363 8.57246 24.6108 11.6377C19.2853 14.703 20.4897 24.3135 21.2905 23.5117C22.0913 22.7095 23.2167 19.7621 25.6733 18.3447C26.6546 18.5847 21.3905 23.9519 22.812 24.0918C25.0145 23.5905 30.4986 21.8703 31.145 17.958C31.9 13.3874 36.3641 10.3513 34.8423 9.77148ZM3.69775 8.31348C2.57443 6.62779 6.00527 8.72811 9.72021 11.6924C9.61913 13.2287 9.53192 14.7206 9.46338 16.1855C7.84348 13.6194 5.02134 10.2995 3.69775 8.31348Z" fill="currentColor"/>
            </svg>
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
        <div class="col-span-3 col-start-7 tablet:col-span-6 tablet:col-start-auto tablet:w-full mobile:w-full">
          <h4 class="font-bold text-content-primary mb-6" data-i18n="footer.explore">Khám Phá</h4>
          <ul class="space-y-4 text-sm text-content-secondary">
             <li class="hover:text-brand-primary transition-colors cursor-pointer w-fit" data-i18n="footer.newCourses">Khóa học Mới</li>
             <li class="hover:text-brand-primary transition-colors cursor-pointer w-fit" data-i18n="footer.roadmap">Lộ trình học</li>
             <li class="hover:text-brand-primary transition-colors cursor-pointer w-fit" data-i18n="footer.mentors">Mentors hàng đầu</li>
             <li class="hover:text-brand-primary transition-colors cursor-pointer w-fit" data-i18n="footer.blog">Blog</li>
          </ul>
        </div>

        <div class="col-span-3 tablet:col-span-6 tablet:w-full mobile:w-full">
          <h4 class="font-bold text-content-primary mb-6" data-i18n="footer.resources">Tài Nguyên</h4>
          <ul class="space-y-4 text-sm text-content-secondary">
             <li class="hover:text-brand-primary transition-colors cursor-pointer w-fit" data-i18n="footer.freeDocs">Tài liệu miễn phí</li>
             <li class="hover:text-brand-primary transition-colors cursor-pointer w-fit" data-i18n="footer.community">Community</li>
             <li class="hover:text-brand-primary transition-colors cursor-pointer w-fit" data-i18n="footer.events">Events & Workshop</li>
             <li class="hover:text-brand-primary transition-colors cursor-pointer w-fit" data-i18n="footer.helpSupport">Help & Support</li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="border-t pt-8 flex flex-row tablet:flex-col items-center justify-between gap-4">
         <p class="text-sm text-content-secondary text-left tablet:text-center" data-i18n="footer.copyright">
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