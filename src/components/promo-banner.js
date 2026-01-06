export function promoBanner() {
    return `
    <div class="relative w-full rounded-3xl overflow-hidden shadow-lg mb-10 group cursor-pointer">
        <!-- Background Image -->
        <div class="absolute inset-0">
            <img src="../../public/images/topCourse_AI_Gene.png" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                 alt="Editor's Pick Background">
            <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 tablet:p-8 p-12 flex flex-col items-start h-full justify-center max-w-2xl">
            <span class="px-3 py-1 bg-brand-accent text-white text-xs font-bold rounded-full mb-4 animate-pulse">
                Editor's Pick This Month
            </span>
            
            <h2 class="tablet:text-3xl text-5xl font-bold text-white mb-4 leading-tight">
                Generative AI: <br>
                <span class="text-brand-primary">Unlock the Future</span>
            </h2>
            
            <p class="text-gray-200 tablet:text-sm text-base mb-8 line-clamp-2">
                Master the art of prompt engineering and image generation with our top-rated course. 
                Designed for creative professionals and tech enthusiasts.
            </p>

            <button class="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-brand-primary/50 flex items-center gap-2 group-hover:gap-3">
                <span data-i18n="home.continueExploring">Start Learning</span>
                <iconify-icon icon="solar:arrow-right-linear" class="text-xl"></iconify-icon>
            </button>
        </div>
    </div>
    `;
}
