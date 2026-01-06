
import { updateLanguage } from "../utils/main.js";

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
        } else if (this.currentStep === 'analysis') {
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
        <h1 class="text-4xl tablet:text-3xl font-bold text-center mb-10 text-content-primary" data-i18n="${stepData.questionKey}">
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

    render() {
        let content = "";

        if (this.currentStep === 'input') {
            content = this.renderInputStep();
        } else if (this.currentStep === 'analysis') {
            content = this.renderAnalysisStep();
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
