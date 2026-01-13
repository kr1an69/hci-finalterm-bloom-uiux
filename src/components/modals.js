import { translations } from "../langs/lang-db.js";

// 1. ASK BLOOM MODAL HTML
const askBloomModalHTML = (t) => {
  // Nếu URL chứa /src/pages/ thì dùng ../../, còn không (ở root) thì dùng ./
  const imagePath = window.location.pathname.includes('/src/pages/')
    ? "../../public/images/mascot.png"
    : "./public/images/mascot.png";
  return `
  <div id="ask-bloom-modal" class="hidden fixed inset-0 z-[100] flex items-center justify-center bg-base-900/60 backdrop-blur-sm transition-opacity opacity-0">
    <div class="bg-card w-full max-w-md mobile:m-4 rounded-3xl shadow-2xl border border-DEFAULT transform scale-95 transition-transform duration-300 relative overflow-hidden">
     
      <!-- Background Decor -->
      <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-surface/50 to-transparent"></div>
     
      <!-- Close Button -->
      <button onclick="closeModal('ask-bloom-modal')" class="absolute top-4 right-4 text-content-secondary hover:text-error transition-colors z-10">
        <iconify-icon icon="solar:close-circle-bold" class="text-2xl"></iconify-icon>
      </button>


      <div class="p-8 text-center relative z-0">
        <!-- Image Illustration -->
        <div class="w-32 h-32 mx-auto mb-6 bg-brand-surface rounded-full flex items-center justify-center shadow-inner">
           <img 
              src=${imagePath} 
              alt="Bloom Mascot" 
              class="w-full h-full object-contain drop-shadow-sm"/>
           <!-- <iconify-icon icon="solar:stars-minimalistic-bold-duotone" class="text-6xl text-brand-primary"></iconify-icon> -->
        </div>


        <h3 class="text-h3 font-bold text-content-primary mb-3">Hello, I'm Bloom!</h3>
        <p class="text-body-m text-content-secondary mb-8">
          I'm your personal AI learning assistant. I can help you find courses, create roadmaps, and answer your questions.
        </p>


        <button onclick="window.location.href='onboarding.html'" class="w-full py-3 px-6 rounded-xl bg-brand-harmony text-white font-bold text-body-l shadow-lg shadow-brand-primary/25 hover:scale-[1.02] active:scale-95 transition-all">
          Let's Start
        </button>
      </div>
    </div>
  </div>
`;
}

// 2. RE-BLOOM MODAL HTML (Design lại cho đẹp)
const reBloomModalHTML = (t) => `
  <div id="re-bloom-modal" class="hidden fixed inset-0 z-[100] flex items-center justify-center bg-base-900/60 backdrop-blur-sm transition-opacity opacity-0">
    <!-- Modal Container -->
    <div class="bg-page w-full max-w-lg tablet:m-4 rounded-3xl shadow-2xl border border-DEFAULT transform scale-95 transition-transform duration-300 relative overflow-hidden flex flex-col">
      
      <!-- Header với ảnh nền hoặc Gradient -->
      <div class="h-48 w-full bg-secondary-400 dark:bg-primary-700 relative flex flex-col justify-end p-8 overflow-hidden">
         <!-- Hạt lấp lánh decor -->
         <div class="absolute top-[-20px] right-[-20px] w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl"></div>
         
         <button onclick="closeModal('re-bloom-modal')" class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition-all">
            <iconify-icon icon="solar:close-circle-bold" class="text-xl"></iconify-icon>
         </button>

         <div class="relative z-10">
            <div class="flex items-center gap-2 text-brand-primary font-bold bg-white/90 px-3 py-1 rounded-full w-fit mb-2 text-xs shadow-sm">
                <iconify-icon icon="solar:leaf-bold"></iconify-icon> Healing Mode
            </div>
            <h3 class="text-2xl font-bold text-content-primary drop-shadow-sm">Re-Bloom Your Mind</h3>
            <p class="text-content-primary text-sm mt-1 max-w-[80%]">Take a moment to breathe and reset your energy.</p>
         </div>
      </div>

      <!-- Content Actions -->
      <div class="p-6 grid grid-cols-2 gap-4 bg-card">
         
         <!-- Action 1 -->
         <button class="flex flex-col items-center justify-center p-6 rounded-2xl bg-base-50 dark:bg-base-800 border border-transparent hover:border-brand-primary hover:bg-brand-surface/50 dark:hover:bg-brand-primary/10 transition-all group gap-3 text-center">
            <div class="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
               <iconify-icon icon="solar:wind-bold" class="text-3xl"></iconify-icon>
            </div>
            <div>
                <span class="block font-bold text-content-primary">Breathe</span>
                <span class="text-xs text-content-secondary">2 min exercise</span>
            </div>
         </button>

         <!-- Action 2 -->
         <button class="flex flex-col items-center justify-center p-6 rounded-2xl bg-base-50 dark:bg-base-800 border border-transparent hover:border-brand-primary hover:bg-brand-surface/50 dark:hover:bg-brand-primary/10 transition-all group gap-3 text-center">
            <div class="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
               <iconify-icon icon="solar:music-note-bold" class="text-3xl"></iconify-icon>
            </div>
            <div>
                <span class="block font-bold text-content-primary">Lo-Fi Radio</span>
                <span class="text-xs text-content-secondary">Focus music</span>
            </div>
         </button>
         
         <!-- Quote -->
         <div class="col-span-2 p-4 rounded-xl bg-brand-surface/50 border-2 border-brand-surface text-center">
            <p class="font-serif italic text-brand-primary text-quote-xs">"Resting is also part of the journey."</p>
         </div>
      </div>

    </div>
  </div>
`;

// 3. Logic Inject & Toggle
export function initModals() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const currentLang = localStorage.getItem("lang") || "en";
  const t = (key, defaultText) =>
    translations[currentLang]?.[key] || defaultText;

  // Inject HTML nếu chưa có
  if (!document.getElementById("ask-bloom-modal")) {
    document.body.insertAdjacentHTML("beforeend", askBloomModalHTML(t));
    document.body.insertAdjacentHTML("beforeend", reBloomModalHTML(t));
  }

  // Hàm global để mở modal
  window.openModal = (id) => {
    const modal = document.getElementById(id);
    if (!modal) return;

    modal.classList.remove("hidden");
    // Animation
    requestAnimationFrame(() => {
      modal.classList.remove("opacity-0");
      modal.firstElementChild.classList.remove("scale-95");
      modal.firstElementChild.classList.add("scale-100");
    });
  };

  // Hàm global để đóng modal
  window.closeModal = (id) => {
    const modal = document.getElementById(id);
    if (!modal) return;

    modal.classList.add("opacity-0");
    modal.firstElementChild.classList.remove("scale-100");
    modal.firstElementChild.classList.add("scale-95");
    setTimeout(() => modal.classList.add("hidden"), 300);
  };

  // Sự kiện click nút Ask Bloom (Gắn id="btn-ask-bloom" vào nút ở Navbar)
  // Logic: Nếu chưa login -> Chuyển hướng Login. Nếu rồi -> Mở Modal.
  const btnAskReal = document.getElementById("btn-ask-bloom");
  const btnAskMobile = document.getElementById("btn-ask-bloom-mobile");

  // Determine correct login path based on current location
  const isAtLanding = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";
  const stringLogin = isAtLanding ? "src/pages/login.html" : "login.html";

  if (btnAskReal) {
    btnAskReal.onclick = () => {
      if (isLoggedIn) {
        window.openModal("ask-bloom-modal");
      } else {
        window.location.href = stringLogin;
      }
    };
  }

  if (btnAskMobile) {
    btnAskMobile.onclick = () => {
      if (isLoggedIn) {
        window.openModal("ask-bloom-modal");
      } else {
        window.location.href = stringLogin;
      }
    };
  }

  // Sự kiện click nút Re-Bloom (Gán id="btn-rebloom" vào nút ở Sidebar)
  const btnReBloom = document.getElementById("btn-rebloom");
  // Bro cần vào sidebar.js thêm id="btn-rebloom" cho nút đó
  if (btnReBloom) btnReBloom.onclick = () => window.openModal("re-bloom-modal");
}
