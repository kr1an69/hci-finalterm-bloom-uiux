
import { roadmapCard } from "./roadmap-card.js";
import { updateLanguage } from "../utils/main.js";
import { renderRoadmapModal } from "./roadmap-detail-modal.js";

export class OnboardingWizard {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.currentStep = 1;
        this.totalSteps = 3;
        this.userAnswers = {};
        this.mascotPath = "../../public/images/mascot.png";

        // Initialize
        this.render();
    }

    // Define steps configuration
    get stepsConfig() {
        return [
            {
                id: 1,
                questionKey: "onboarding.q1.title",
                options: [
                    { key: "onboarding.q1.opt1", value: "career" },
                    { key: "onboarding.q1.opt2", value: "skill" },
                    { key: "onboarding.q1.opt3", value: "hobby" },
                    { key: "onboarding.q1.opt4", value: "academic" },
                ],
            },
            {
                id: 2,
                questionKey: "onboarding.q2.title",
                options: [
                    { key: "onboarding.q2.opt1", value: "15-30m" },
                    { key: "onboarding.q2.opt2", value: "1h" },
                    { key: "onboarding.q2.opt3", value: "2-3h" },
                    { key: "onboarding.q2.opt4", value: "unlimited" },
                ],
            },
            {
                id: 3,
                questionKey: "onboarding.q3.title",
                options: [
                    { key: "onboarding.q3.opt1", value: "video" },
                    { key: "onboarding.q3.opt2", value: "reading" },
                    { key: "onboarding.q3.opt3", value: "quiz" },
                    { key: "onboarding.q3.opt4", value: "project" },
                ],
            },
        ];
    }

    handleOptionSelect(value) {
        this.userAnswers[`q${this.currentStep}`] = value;
        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.render();
        } else {
            this.currentStep = 'input';
            this.render();
        }
    }

    handleInputSubmit(value) {
        if (!value || value.trim() === "") return;
        this.userAnswers['detail'] = value;
        this.currentStep = 'analysis';
        this.render();

        setTimeout(() => {
            window.location.href = "onboarding-result.html";
        }, 1500);
    }

    goBack() {
        if (this.currentStep === 'input') {
            this.currentStep = this.totalSteps;
        } else if (this.currentStep === 'analysis' || this.currentStep === 'result') {
            this.currentStep = 1;
            this.userAnswers = {};
        } else if (this.currentStep > 1) {
            this.currentStep--;
        }
        this.render();
    }

    resetProcess() {
        this.currentStep = 1;
        this.userAnswers = {};
        this.render();
    }

    openRoadmapModal() {
        // Create Modal Container
        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = renderRoadmapModal();
        document.body.appendChild(modalContainer);

        updateLanguage();

        const closeBtn = document.getElementById('close-modal-btn');
        const overlay = document.getElementById('roadmap-modal-overlay');

        const closeModal = () => {
            overlay.classList.remove('animate-fade-in');
            // Simple timeout to allow potential CSS transition if we added one (fade-out)
            // For now just removing is fine as per original request to just work.
            if (document.body.contains(modalContainer)) {
                document.body.removeChild(modalContainer);
            }
        };

        if (closeBtn) closeBtn.onclick = closeModal;
        if (overlay) {
            overlay.onclick = (e) => {
                if (e.target === overlay) closeModal();
            };
        }
    }

    // --- Render Helpers ---

    renderProgressBar() {
        if (typeof this.currentStep !== 'number') return '';

        const progressPercentage = ((this.currentStep) / (this.totalSteps + 1)) * 100;

        return `
      <div class="max-w-xl mx-auto mb-8 animate-fade-in-up">
         <div class="flex justify-between items-end mb-2 px-1">
            <h2 class="text-2xl font-bold">
                <span data-i18n="onboarding.step">Step</span>
                ${this.currentStep}/${this.totalSteps}
            </h2>
         </div>
         <div class="h-3 w-full bg-base-200 dark:bg-base-800 rounded-full overflow-hidden">
            <div class="h-full bg-brand-primary transition-all duration-500 ease-out" style="width: ${progressPercentage}%"></div>
         </div>
      </div>
    `;
    }

    renderQuestionStep(stepData) {
        return `
      ${this.renderProgressBar()}
      <div class="max-w-xl mx-auto animate-fade-in-up bg-white dark:bg-base-900 rounded-3xl p-8 border border-base-200 dark:border-base-800 shadow-sm">
        <h1 class="text-4xl tablet-down:text-3xl font-bold text-center mb-10 text-content-primary" data-i18n="${stepData.questionKey}">
           Question?
        </h1>
        
        <div class="grid gap-4">
           ${stepData.options.map(opt => `
              <button 
                class="w-full p-5 text-left text-lg font-medium rounded-2xl border-2 border-base-200 dark:border-base-800 hover:border-brand-primary dark:hover:border-brand-primary transition-all active:scale-[0.99] flex items-center justify-between group"
                onclick="window.wizardInstance.handleOptionSelect('${opt.value}')"
              >
                 <span data-i18n="${opt.key}">Option</span>
                 <iconify-icon icon="solar:arrow-right-linear" class="opacity-0 group-hover:opacity-100 transition-opacity text-brand-primary text-2xl"></iconify-icon>
              </button>
           `).join('')}
        </div>

        <div class="mt-8 flex justify-start">
           ${this.currentStep > 1 ? `
             <button onclick="window.wizardInstance.goBack()" class="flex items-center gap-2 text-content-secondary hover:text-content-primary px-4 py-2 hover:bg-base-100 dark:hover:bg-base-800 rounded-lg transition-colors">
                <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
                <span data-i18n="onboarding.back">Back</span>
             </button>
           ` : ''}
        </div>
      </div>
    `;
    }

    renderInputStep() {
        return `
      <div class="max-w-xl mx-auto animate-fade-in-up bg-white dark:bg-base-900 rounded-3xl p-8 border border-base-200 dark:border-base-800 shadow-sm">
         <div class="text-center mb-8">
            <div class="w-24 h-24 mx-auto mb-4 relative">
                <img src="${this.mascotPath}" alt="Bloom Mascot" class="w-full h-full object-contain drop-shadow-lg" />
            </div>
            <h2 class="text-2xl font-bold text-content-primary mb-2" data-i18n="onboarding.inputLabel">Tell me details</h2>
         </div>

         <div class="bg-base-100 dark:bg-base-800 p-6 rounded-2xl border border-base-200 dark:border-base-800 shadow-sm focus-within:border-brand-primary transition-colors">
             <textarea 
                id="userInputDetail"
                class="w-full h-32 bg-transparent resize-none outline-none text-content-primary placeholder-gray-400 text-lg"
                data-i18n="onboarding.inputPlaceholder"
             ></textarea>
         </div>

         <div class="flex justify-between items-center mt-8">
             <button onclick="window.wizardInstance.goBack()" class="flex items-center gap-2 text-content-secondary hover:text-content-primary px-4 py-2 hover:bg-base-100 dark:hover:bg-base-800 rounded-lg transition-colors">
                <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
                <span data-i18n="onboarding.back">Back</span>
             </button>

             <button onclick="window.wizardInstance.handleInputSubmit(document.getElementById('userInputDetail').value)" 
                class="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-brand-primary/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                <span data-i18n="onboarding.finish">Finish</span>
                <iconify-icon icon="solar:check-circle-bold"></iconify-icon>
             </button>
         </div>
      </div>
      `;
    }

    renderAnalysisStep() {
        return `
        <div class="flex flex-col items-center justify-center h-[60vh] animate-fade-in">
            <div class="relative w-40 h-40 mb-8">
                <div class="absolute inset-0 bg-brand-primary/20 rounded-full animate-ping"></div>
                <div class="absolute inset-0 bg-brand-primary/10 rounded-full animate-pulse"></div>
                <img src="${this.mascotPath}" alt="Bloom Thinking" class="relative z-10 w-full h-full object-contain animate-bounce-slow" />
            </div>
            
            <h2 class="text-2xl font-bold text-center text-content-primary animate-pulse" data-i18n="onboarding.analyzing">
                Bloom is analyzing...
            </h2>
        </div>
      `;
    }

    renderResultStep() {
        const roadmapData = {
            title: "UX Design Mastery Path",
            lastActive: "Just created",
            progress: 0,
            color: "bg-purple-500",
            link: "javascript:void(0)",
            icon: "solar:pen-new-square-bold-duotone",
            iconColor: "#A855F7"
        };

        let cardHtml = roadmapCard(roadmapData);

        // Inject onclick handler to open modal
        cardHtml = cardHtml.replace(
            `href="javascript:void(0)"`,
            `href="javascript:void(0)" onclick="window.wizardInstance.openRoadmapModal()"`
        );

        return `
        <div class="max-w-5xl mx-auto animate-fade-in-up mt-10">
            <h2 class="text-3xl font-bold text-center mb-12 text-content-primary" data-i18n="onboarding.resultTitle">Here is your roadmap</h2>

            <div class="flex flex-row tablet-down:flex-col gap-12 items-center justify-center">
                
                <!-- Left: Mascot & Bubble -->
                <div class="w-1/3 tablet-down:w-full flex flex-col items-center">
                    <img src="${this.mascotPath}" alt="Bloom Happy" class="w-40 h-40 object-contain mb-6 drop-shadow-xl animate-bounce-slow" />
                    
                    <!-- Bubble -->
                    <div class="bg-base-800 text-white p-6 rounded-2xl border border-base-700 shadow-lg relative bubble-top max-w-xs text-center">
                        <p class="text-base font-medium italic" data-i18n="onboarding.insight">
                             "Based on your inputs..."
                        </p>
                        <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[12px] border-b-base-800"></div>
                    </div>
                </div>

                <!-- Right: Roadmap Card & Actions -->
                <div class="w-1/3 tablet-down:w-full">
                    <!-- The Card -->
                    <div class="transform transition-all hover:scale-[1.02] duration-300">
                        ${cardHtml}
                    </div>

                    <!-- Action Buttons -->
                    <div class="mt-8 flex gap-4">
                        <button onclick="window.wizardInstance.saveRoadmap()" class="flex-1 bg-brand-primary text-white py-3 px-4 rounded-xl font-bold hover:bg-brand-secondary transition-all shadow-lg hover:shadow-brand-primary/25 active:scale-95">
                            <span data-i18n="onboarding.save">Save Roadmap</span>
                        </button>
                        
                         <button onclick="window.wizardInstance.resetProcess()" class="flex-1 px-4 py-3 rounded-xl font-semibold border border-base-300 dark:border-base-700 hover:bg-base-200 dark:hover:bg-base-800 text-content-primary transition-all active:scale-95">
                            <span data-i18n="onboarding.reset">Start Over</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      `;
    }

    saveRoadmap() {
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-fade-in-up z-50';
        toast.innerHTML = `<iconify-icon icon="solar:check-circle-bold" class="text-xl"></iconify-icon> <span data-i18n="onboarding.savedMsg">Saved!</span>`;
        document.body.appendChild(toast);

        updateLanguage();

        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    render() {
        let content = "";

        if (this.currentStep === 'input') {
            content = this.renderInputStep();
        } else if (this.currentStep === 'analysis') {
            content = this.renderAnalysisStep();
        } else if (this.currentStep === 'result') {
            content = this.renderResultStep();
        } else {
            const stepData = this.stepsConfig.find(s => s.id === this.currentStep);
            if (stepData) {
                content = this.renderQuestionStep(stepData);
            }
        }

        this.container.innerHTML = content;

        updateLanguage();

        if (this.currentStep === 'input') {
            const ta = document.getElementById('userInputDetail');
            if (ta && window.translations) {
                const currentLang = localStorage.getItem('language') || 'en';
                const placeholderText = window.translations[currentLang]["onboarding.inputPlaceholder"];
                if (placeholderText) ta.placeholder = placeholderText;
            }
        }
    }
}
