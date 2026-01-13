/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"], // Quét code trong folder src
  darkMode: "class", // Bật chế độ Dark Mode bằng class
  theme: {
    screens: {
      //mobile - tablet - desktop
      //mobile - 4 cols - pd-x-16px gap-16px
      //tablet - 8 cols - pd-x-24px gap-24px
      //desktop - 12 cols - pd-x-32px gap-24px
      'tablet': { 'max': '1023px' },
      'mobile': { 'max': '480px' },
    },
    // Cấu hình Container để có Margin 32px (mỗi bên)
    container: {
      center: true,
      padding: {
        DEFAULT: "32px", // Margin 32px theo yêu cầu
        sm: "32px",
        lg: "32px",
        xl: "32px",
      },
      screens: {
        xl: "1280px", // Giới hạn chiều rộng web cho đẹp, không bị bè quá
      },
    },
    extend: {
      // 1. TYPOGRAPHY
      fontFamily: {
        sans: ["Lexend", "sans-serif"], // Primary Font
        serif: ["Playfair Display", "serif"], // Accent Font
      },
      // Setup Typography chuẩn theo file Figma Design System (Size / Line-height)
      fontSize: {
        // Mapping
        // --- MAPPING (Core System) ---
        // định nghĩa lại các size này để khớp 100% với Figma

        'xs': ['12px', { lineHeight: '160%', fontWeight: '400' }], // Caption
        'sm': ['14px', { lineHeight: '160%', fontWeight: '400' }], // Body Small
        'base': ['16px', { lineHeight: '160%', fontWeight: '400' }], // Body Medium - tiêu chuẩn
        'lg': ['20px', { lineHeight: '160%', fontWeight: '400' }], // H5
        'xl': ['24px', { lineHeight: '140%', fontWeight: '600' }], // H4
        '2xl': ['32px', { lineHeight: '130%', fontWeight: '600' }], // H3
        '3xl': ['40px', { lineHeight: '125%', fontWeight: '700' }], // H2
        '4xl': ['48px', { lineHeight: '120%', fontWeight: '700' }], // H1
        // --- CÁC NGOẠI LỆ (Exceptions) ---
        // Giữ lại hoặc thêm mới các size quá khổ như 8xl, 9xl dùng cho Hero Banner đặc biệt
        '8xl': ['96px', { lineHeight: '1', fontWeight: '900' }],

        // Headings (Lexend)
        h1: ["48px", { lineHeight: "120%", fontWeight: "700" }],
        h2: ["40px", { lineHeight: "125%", fontWeight: "700" }],
        h3: ["32px", { lineHeight: "130%", fontWeight: "600" }],
        h4: ["24px", { lineHeight: "140%", fontWeight: "600" }],
        h5: ["20px", { lineHeight: "160%", fontWeight: "400" }],

        // Body (Lexend)
        "body-l": ["18px", { lineHeight: "160%", fontWeight: "400" }],
        "body-m": ["16px", { lineHeight: "160%", fontWeight: "400" }],
        "body-s": ["14px", { lineHeight: "160%", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "160%", fontWeight: "400" }],

        // Quote (Playfair Display)
        "quote-l": ["48px", { lineHeight: "120%", fontWeight: "400" }],
        "quote-m": ["40px", { lineHeight: "125%", fontWeight: "400" }],
        "quote-s": ["36px", { lineHeight: "130%", fontWeight: "400" }],
        "quote-xs": ["20px", { lineHeight: "150%", fontWeight: "400" }],

        // icon size for iconify-icon - dùng Solar Icons
        "icon-xs": "16px",
        "icon-sm": "20px",
        "icon-md": "24px",
        "icon-lg": "32px",
        "icon-xl": "48px",
      },
      // 1. BASE PALETTES (Dải màu gốc từ Color Tokens)
      // -----------------------------------------------------------------------
      colors: {
        primary: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        secondary: {
          50: "#FAF5FF",
          100: "#F3E8FF",
          200: "#E9D5FF",
          300: "#D8B4FE",
          400: "#C084FC",
          500: "#A855F7",
          600: "#9333EA",
          700: "#7E22CE",
          800: "#6B21A8",
          900: "#581C87",
        },
        base: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172B",
        },
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",

        // === CẤU HÌNH BRAND ===
        brand: {
          DEFAULT: "var(--brand-primary)",
          primary: "var(--brand-primary)",
          secondary: "var(--brand-secondary)",
          accent: "var(--brand-accent)",
          surface: "var(--brand-surface)",
        },
      },

      // 2. SEMANTIC ALIASES (Kết nối với CSS Variables)
      // Tự động đổi màu khi bật Dark Mode
      backgroundColor: {
        page: "var(--bg-page)",
        card: "var(--bg-card)",
      },
      textColor: {
        "content-primary": "var(--text-primary)",
        "content-secondary": "var(--text-secondary)",
        "content-disabled": "var(--text-disabled)",
        "content-quote": "var(--text-quote)",
      },
      borderColor: {
        DEFAULT: "var(--border-default)",
      },
      //3. Gradients
      backgroundImage: {
        "brand-harmony":
          "linear-gradient(45deg, theme('colors.brand.secondary'), theme('colors.brand.primary'))",
        magic:
          "linear-gradient(45deg, theme('colors.secondary.600'), theme('colors.secondary.400'))",
        deepspace:
          "linear-gradient(45deg, theme('colors.secondary.500'), theme('colors.secondary.700'))",
        "sunset-glow":
          "linear-gradient(45deg, theme('colors.brand.accent'), theme('colors.brand.secondary'))",
        oceanic:
          "linear-gradient(135deg, theme('colors.primary.400'), theme('colors.primary.700'))",
        "soft-mist":
          "linear-gradient(to right, theme('colors.primary.50'), theme('colors.secondary.50'))",
      },
    },
  },
  plugins: [],
};
