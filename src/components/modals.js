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


        <h3 class="text-h3 font-bold text-content-primary mb-3" data-i18n="modalAskBloom.title">${t("modalAskBloom.title", "Hello, I'm Bloom!")}</h3>
        <p class="text-body-m text-content-secondary mb-8" data-i18n="modalAskBloom.subtitle">
          ${t(
    "modalAskBloom.subtitle",
    "I'm your personal AI learning assistant. I can help you find courses, create roadmaps, and answer your questions."
  )}
        </p>


        <button onclick="window.location.href='onboarding.html'" class="w-full py-3 px-6 rounded-xl bg-brand-harmony text-white font-bold text-body-l shadow-lg shadow-brand-primary/25 hover:scale-[1.02] active:scale-95 transition-all" data-i18n="modalAskBloom.startButton">
          ${t("modalAskBloom.startButton", "Let's Start")}
        </button>
      </div>
    </div>
  </div>
`;
}

// 2. RE-BLOOM MODAL HTML (Design lại cho đẹp)
const reBloomModalHTML = (t) => {
  const bgPath = window.location.pathname.includes('/src/pages/')
    ? "../../public/images/rebloom-bg.png"
    : "./public/images/rebloom-bg.png";

  return `
  <style>
    @keyframes fall {
      0% { transform: translateY(-20%) rotate(0deg); opacity: 0; }
      10% { opacity: 0.8; }
      100% { transform: translateY(120%) rotate(360deg); opacity: 0; }
    }
    .petal {
        position: absolute;
        width: 12px;
        height: 12px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 100% 0 100% 0;
        animation: fall linear infinite;
    }
  </style>

  <div id="re-bloom-modal" class="hidden fixed inset-0 z-[100] flex items-center justify-center bg-base-900/60 backdrop-blur-sm transition-opacity opacity-0">
    <!-- Modal Container -->
    <div class="bg-page w-full max-w-lg tablet:m-4 rounded-3xl shadow-2xl border border-DEFAULT transform scale-95 transition-transform duration-300 relative overflow-hidden flex flex-col">
      
      <div class="w-full bg-secondary-300 dark:bg-primary-700 relative flex flex-col justify-end p-8 overflow-hidden">
         <div class="absolute top-[-20px] right-[-20px] w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl"></div>
         
         <button onclick="closeModal('re-bloom-modal')" class="absolute top-4 right-4 flex items-center justify-center text-base-600 dark:text-content-secondary hover:text-error hover:dark:text-error transition-colors z-20">
            <iconify-icon icon="solar:close-circle-bold" class="text-icon-lg"></iconify-icon>
         </button>

         <div class="relative z-10">
            <h3 class="text-2xl font-bold text-content-primary drop-shadow-sm" data-i18n="modalReBloom.title">${t("modalReBloom.title", "Re-Bloom Your Mind")}</h3>
            <p class="text-content-primary text-sm mt-1 max-w-[80%]" data-i18n="modalReBloom.subtitle">${t("modalReBloom.subtitle", "Take a moment to breathe and reset your energy.")}</p>
         </div>
      </div>

      <!-- Content Actions -->
      <div class="p-6 flex flex-col gap-4 bg-card">
         
         <!-- Motivation Quote -->
         <div class="relative w-full h-56 rounded-2xl overflow-hidden shadow-md group">
            <!-- Background Image -->
            <img src="${bgPath}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] ease-in-out group-hover:scale-110" alt="Re-bloom Background" />
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-brand-primary/20 mix-blend-overlay"></div>

            <!-- Floating Petals Animation -->
            <div class="absolute inset-0 pointer-events-none overflow-hidden">
                <div class="petal" style="left: 10%; animation-duration: 6s; animation-delay: 0s;"></div>
                <div class="petal" style="left: 30%; animation-duration: 9s; animation-delay: 2s; width: 10px; height: 10px;"></div>
                <div class="petal" style="left: 60%; animation-duration: 7s; animation-delay: 1s;"></div>
                <div class="petal" style="left: 80%; animation-duration: 8s; animation-delay: 4s; width: 14px; height: 14px;"></div>
                <div class="petal" style="left: 50%; animation-duration: 10s; animation-delay: 3s;"></div>
            </div>

            <!-- Text Container -->
            <div class="absolute inset-0 flex items-center justify-center p-6">
                <div class="bg-white dark:bg-black bg-opacity-30 dark:bg-opacity-20 p-6 rounded-xl border border-white/30 shadow-sm max-w-[90%] text-center">
                     <p class="font-serif italic text-content-primary text-xl mobile:text-quote-xs drop-shadow-md leading-relaxed" data-i18n="modalReBloom.quote">${t("modalReBloom.quote", `"Resting is also part of the journey."`)}</p>
                </div>
            </div>
         </div>

         <!-- Lofi Radio (Question Style) -->
         <button class="w-full flex items-center justify-between p-4 rounded-2xl bg-base-50 dark:bg-base-800 border border-transparent hover:border-brand-primary hover:bg-brand-surface/50 dark:hover:bg-brand-primary/10 transition-all group">
            <div class="flex items-center gap-4">
               <div class="w-12 h-12 mobile:w-10 mobile:h-10 shrink-0 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <iconify-icon icon="solar:music-note-bold" class="text-xl mobile:text-lg"></iconify-icon>
               </div>
               <div class="text-left">
                   <span class="block font-bold text-content-primary text-lg mobile:text-base" data-i18n="modalReBloom.lofi">${t("modalReBloom.lofi", "Wanna hear some lofi music?")}</span>
               </div>
            </div>
            <iconify-icon icon="solar:play-circle-bold" class="text-3xl mobile:text-2xl text-brand-primary opacity-50 group-hover:opacity-100 transition-opacity"></iconify-icon>
         </button>
         
      </div>

    </div>
  </div>
`;
}

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
