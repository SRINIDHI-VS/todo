/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // false or 'media' or 'class'
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // => @media (min-width: 640px) { ... }
      "mob-p": "250px",
      "mob-l": "480px",
      "tab-s": "768px",
      "tab-l": "992px",
      "scr-s": "1280px",
      "scr-m": "1440px",
      "scr-l": "1920px",
    },
    container: {
      center: true,
      screens: {
        "mob-p": "auto",
        "mob-l": "auto",
        "tab-s": "680px",
        "tab-l": "936px",
        "scr-s": "1120px",
        "scr-m": "1216px",
        "scr-l": "1696px",
      },
      padding: {
        DEFAULT: "24px",
        "tab-s": "0",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      "7xl": ["54px", "64px"],
      "6xl": ["48px", "56px"],
      "5xl": ["36px", "44px"],
      "4xl": ["30px", "36px"],
      "3xl": ["27px", "32px"],
      "2xl": ["24px", "28px"],
      xl: ["21px", "28px"],
      lg: ["18px", "28px"],
      lg24: ["18px", "24px"],
      base20: ["15px", "20px"],
      base: ["15px", "24px"],
      sm: ["12px", "20px"],
      xs: ["9px", "16px"],
    },
    extend: {
      gap: {
        4: "4px",
        8: "8px",
        16: "16px",
        20: "20px",
        24: "24px",
        28: "28px",
        32: "32px",
        48: "48px",
        64: "64px",
        80: "80px",
        120: "120px",
        160: "160px",
        200: "200px",
      },
      spacing: {
        8: "8px",
        16: "16px",
        20: "20px",
        24: "24px",
        32: "32px",
        40: "40px",
        48: "48px",
        56: "56px",
        64: "64px",
        80: "80px",
        120: "120px",
        128: "128px",
        160: "160px",
        200: "200px",
      },
      borderRadius: {
        6: "6px",
        8: "8px",
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
      },
      boxShadow: {
        level1: [
          "0px 1px 6px 0px rgba(20, 10, 51, 0.07)",
          "0px 2px 2px 0px rgba(20, 10, 51, 0.03)",
          "0px 1px 2px 0px rgba(20, 10, 51, 0.05)",
        ],
        level2: [
          "0px 4px 10px 0px rgba(20, 10, 51, 0.05)",
          "0px 1px 20px 0px rgba(20, 10, 51, 0.03)",
          "0px 2px 8px 0px rgba(20, 10, 51, 0.07)",
        ],
        level3: [
          "0px 6px 20px 0px rgba(20, 10, 51, 0.05)",
          "0px 1px 36px 0px rgba(20, 10, 51, 0.03)",
          "0px 3px 10px 0px rgba(20, 10, 51, 0.07)",
        ],
        level4: [
          "0px 8px 20px 0px rgba(20, 10, 51, 0.05)",
          "0px 3px 28px 0px rgba(20, 10, 51, 0.03)",
          "0px 5px 10px 0px rgba(20, 10, 51, 0.07)",
        ],
        level5: [
          "0px 16px 48px 0px rgba(20, 10, 51, 0.05)",
          "0px 6px 60px 0px rgba(20, 10, 51, 0.03)",
          "0px 8px 20px 0px rgba(20, 10, 51, 0.07)",
        ],
        level6: [
          "0px 24px 76px 0px rgba(20, 10, 51, 0.05)",
          "0px 9px 92px 0px rgba(20, 10, 51, 0.03)",
          "0px 11px 30px 0px rgba(20, 10, 51, 0.07)",
        ],
      },
      colors: {
        "moi-main": "rgb(var(--colors-moimain) / var(--text-alpha-pure))",
        "moi-dark": "rgb(var(--colors-moidark) / var(--text-alpha-pure))",
        lvl0: "rgb(var(--surfaces-level-0) / var(--text-alpha-pure))",
        lvl1: "rgb(var(--surfaces-level-1) / var(--text-alpha-pure))",
        lvl2: "rgb(var(--surfaces-level-2) / var(--text-alpha-pure))",
        lvl3: "rgb(var(--surfaces-level-3) / var(--text-alpha-pure))",
        lvl4: "rgb(var(--surfaces-level-4) / var(--text-alpha-pure))",
        lvl5: "rgb(var(--surfaces-level-5) / var(--text-alpha-pure))",
        lvl6: "rgb(var(--surfaces-level-6) / var(--text-alpha-pure))",
        action: {
          p: {
            default: "rgb(var(--action-p-default) / var(--text-alpha-pure))",
            hover: "rgb(var(--action-p-hover) / var(--text-alpha-pure))",
            focus: "rgb(var(--action-p-focus) / var(--text-alpha-pure))",
            disabled: "rgb(var(--action-p-disabled) / var(--text-alpha-pure))",
          },
          s: {
            hover: "rgb(var(--action-s-hover) / var(--act-alpha-s-hover))",
            focus: "rgb(var(--action-s-focus) / var(--act-alpha-s-focus))",
          },
          n: {
            inactive:
              "rgb(var(--action-n-inactive) / var(--act-alpha-n-inactive))",
            disabled:
              "rgb(var(--action-n-disabled) / var(--act-alpha-n-disabled))",
          },
        },
        invert: {
          "moi-main":
            "rgb(var(--colors-invert-moimain) / var(--text-alpha-pure))",
          "moi-dark":
            "rgb(var(--colors-invert-moidark) / var(--text-alpha-pure))",
          lvl0: "rgb(var(--surfaces-invert-level-0) / var(--text-alpha-pure))",
          lvl1: "rgb(var(--surfaces-invert-level-1) / var(--text-alpha-pure))",
          lvl2: "rgb(var(--surfaces-invert-level-2) / var(--text-alpha-pure))",
          lvl3: "rgb(var(--surfaces-invert-level-3) / var(--text-alpha-pure))",
          lvl4: "rgb(var(--surfaces-invert-level-4) / var(--text-alpha-pure))",
          lvl5: "rgb(var(--surfaces-invert-level-5) / var(--text-alpha-pure))",
          lvl6: "rgb(var(--surfaces-invert-level-6) / var(--text-alpha-pure))",
          action: {
            p: {
              default:
                "rgb(var(--action-invert-p-default) /  var(--text-alpha-accent))",
              hover:
                "rgb(var(--action-invert-p-hover) /  var(--text-alpha-accent))",
              focus:
                "rgb(var(--action-invert-p-focus) /  var(--text-alpha-accent))",
              disabled:
                "rgb(var(--action-invert-p-disabled) /  var(--text-alpha-accent))",
            },
            s: {
              hover:
                "rgb(var(--action-invert-s-hover) / var(--act-alpha-s-hover))",
              focus:
                "rgb(var(--action-invert-s-focus) / var(--act-alpha-s-focus))",
            },
            n: {
              inactive:
                "rgb(var(--action-invert-n-inactive) / var(--act-alpha-n-inactive))",
              disabled:
                "rgb(var(--action-invert-n-disabled) / var(--act-alpha-n-inactive))",
            },
          },
        },
      },
      textColor: {
        accent: "rgb(var(--text-accent) / var(--text-alpha-accent))",
        pure: "rgb(var(--text-pure) / var(--text-alpha-pure))",
        high: "rgb(var(--text-high) / var(--text-alpha-high))",
        medium: "rgb(var(--text-medium) / var(--text-alpha-medium))",
        low: "rgb(var(--text-low) / var(--text-alpha-low))",
        invert: {
          accent:
            "rgb(var(--text-invert-accent) / var(--text-alpha-invert-accent))",
          high: "rgb(var(--text-invert-high) / var(--text-alpha-invert-high))",
          medium:
            "rgb(var(--text-invert-medium) / var(--text-alpha-invert-medium))",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        /* Buttons here */
        ".btn": {
          "@apply w-fit flex flex-row place-items-center": "",
          transition: "background-color 0.3s ease-in",
          transition: "text-color 0.3s ease-in",
          transition: "padding 0.3s ease-in",
          "&:hover": {
            transition: "background-color 0.15s ease-in",
          },
          "&:focus": {
            transition: "background-color 0.15s ease-in",
          },
        },

        ".btn > .icon": {
          transition: "background-color 0.3s ease-in",
          "&:hover": {
            transition: "background-color 0.15s ease-in",
          },
        },

        ".btn-40": {
          "@apply h-40 px-32 gap-4 label-default rounded-16": "",
        },

        ".btn-48": {
          "@apply h-48 px-32 gap-8 label-big rounded-20": "",
        },

        ".btn-tight": {
          "@apply px-0": "",
          "&:hover": {
            "@apply px-32": "",
          },
          "&:focus": {
            "@apply px-32": "",
          },
        },

        ".btn-primary": {
          "@apply shadow-level2 bg-action-p-default text-invert-high": "",
          "&:hover": {
            "@apply bg-action-p-hover shadow-level4": "",
          },
          "&:focus": {
            "@apply bg-action-p-focus shadow-level4": "",
          },
          "&:disabled": {
            "@apply bg-action-p-disabled text-invert-medium": "",
          },
        },

        ".btn-secondary": {
          "@apply text-accent border-2 border-action-p-default": "",
          "&:hover": {
            "@apply bg-action-s-hover": "",
          },
          "&:focus": {
            "@apply bg-action-s-hover shadow-level4": "",
          },
        },

        ".btn-tertiary": {
          "@apply text-accent": "",
          "&:hover": {
            "@apply bg-action-s-hover text-high": "",
          },
          "&:focus": {
            "@apply bg-action-s-focus text-medium": "",
          },
        },

        ".btn-primary-dark": {
          "@apply py-2 px-8 rounded-1616 shadow-level2 bg-invert-action-p-default text-high":
            "",
          "&:hover": {
            "@apply bg-invert-action-p-hover shadow-level4": "",
          },
          // "&:focus": {
          //   "@apply bg-action-p-focus shadow-level4": "",
          //   transition: "background-color 0.15s ease-in",
          // }
        },

        ".btn-tertiary btn-tight": {
          "@apply text-accent": "",
        },
        /* Action buttons here */
        ".act": {
          "@apply flex items-center justify-center": "",
        },
        ".act-24": {
          "@apply h-24 w-24": "",
        },
        ".act-32": {
          "@apply h-32 w-32 rounded-6": "",
        },
        ".act-40": {
          "@apply h-40 w-40 rounded-8": "",
        },
        ".act-48": {
          "@apply h-48 w-48 rounded-12": "",
        },
        ".act-round": {
          "@apply rounded-full": "",
        },
        ".act-primary": {},
        ".act-secondary": {},
        ".act-tertiary": {
          "@apply bg-none hover:bg-action-s-hover": "",
        },
        /* Fluid Container */
        ".container-fluid": {
          "@apply w-full px-16 tab-s:px-24 scr-s:px-32": "",
        },
        /* Typography classes */
        ".display-1": {
          "@apply text-3xl font-bold": "", // Base styles for font size and padding
          "@media (min-width: 992px) and (max-width: 1919px)": {
            // Adjustments for screens between 992px and 1919px wide
            "@apply text-5xl font-bold": "",
          },
          "@media (min-width: 1920px)": {
            // Adjustments for screens wider than 1920px
            "@apply text-6xl font-bold": "",
            letterSpacing: "-0.5px",
          },
        },

        ".display-2": {
          "@apply text-4xl font-bold": "", // Base styles for font size and padding
          "@media (min-width: 992px) and (max-width: 1919px)": {
            // Adjustments for screens between 992px and 1919px wide
            "@apply text-6xl font-bold": "",
          },
          "@media (min-width: 1920px)": {
            // Adjustments for screens wider than 1920px
            "@apply text-7xl font-bold": "",
            letterSpacing: "-0.5px",
          },
        },

        // This code block defines the styles for the h1 tag, with font size and padding adjusted based on screen size
        h1: {
          "@apply text-3xl font-bold": "", // Base styles for font size and padding
          "@media (min-width: 992px) and (max-width: 1919px)": {
            // Adjustments for screens between 992px and 1919px wide
            "@apply text-5xl font-bold": "",
          },
          "@media (min-width: 1920px)": {
            // Adjustments for screens wider than 1920px
            "@apply text-6xl font-bold": "",
            letterSpacing: "-0.25px",
          },
        },

        // This code block defines the styles for the h2 tag, with font size and padding adjusted based on screen size
        h2: {
          "@apply text-2xl font-bold": "", // Base styles for font size and padding
          "@media (min-width: 992px) and (max-width: 1919px)": {
            // Adjustments for screens between 992px and 1919px wide
            "@apply text-4xl font-bold": "",
          },
          "@media (min-width: 1920px)": {
            // Adjustments for screens wider than 1920px
            "@apply text-5xl font-bold": "",
          },
        },

        // This code block defines the styles for the h3 tag, with font size and padding adjusted based on screen size
        h3: {
          "@apply text-xl font-semibold": "", // Base styles for font size and padding
          letterSpacing: "0.1px",
          "@media (min-width: 992px) and (max-width: 1919px)": {
            // Adjustments for screens between 992px and 1919px wide
            "@apply text-2xl font-semibold": "",
          },
          "@media (min-width: 1920px)": {
            // Adjustments for screens wider than 1920px
            "@apply text-3xl font-semibold": "",
            letterSpacing: "0.1px",
          },
        },

        // This code block defines the styles for the h4 tag, with font size and padding adjusted based on screen size
        h4: {
          "@apply text-lg font-semibold": "", // Base styles for font size and padding
          lineHeight: "24px",
          etterSpacing: "0.1px",

          "@media (min-width: 1920px)": {
            // Adjustments for screens wider than 1920px
            "@apply text-xl font-semibold": "",
          },
        },
        // This code block defines the styles for the h5 tag, with font size, weight and padding adjusted
        h5: {
          "@apply text-base20 font-semibold": "", // Base styles for font size, weight and padding
          letterSpacing: "0.2px",
        },

        // This code block defines styles for paragraphs with large font size and weight
        ".plarge": {
          "@apply text-lg font-medium": "",
          letterSpacing: "0.1px",
        },

        // This code block defines styles for paragraphs with large font size and semi-bold weight
        ".plarge-b": {
          "@apply text-lg font-semibold": "",
          letterSpacing: "0.2px",
        },

        // This code block defines styles for paragraphs with regular font size, normal weight and adjusted letter spacing
        ".pregular": {
          "@apply text-base font-medium": "",
          letterSpacing: "0.25px",
        },

        // This code block defines styles for paragraphs with regular font size, semi-bold weight and adjusted letter spacing
        ".pregular-b": {
          "@apply text-base font-bold": "",
          letterSpacing: "0.25px",
        },

        // This code block defines styles for paragraphs with small font size, normal weight and adjusted letter spacing
        ".psmall": {
          "@apply text-sm font-medium": "",
          letterSpacing: "0.25px",
        },

        // Paragraphs small - emphasis text
        ".psmall-b": {
          "@apply text-sm font-bold": "",
          letterSpacing: "0.25px",
        },

        // Paragraph smaller
        ".psmaller": {
          "@apply text-xs font-medium": "",
          letterSpacing: "0.25px",
        },

        // Paragraph smaller - emphasis text
        ".psmaller-b": {
          "@apply text-xs font-bold": "",
          letterSpacing: "0.25px",
        },

        // This code block defines styles for paragraphs with overlined text, small font size, normal weight, uppercase text and adjusted letter spacing
        ".poverdefault": {
          "@apply text-xs font-semibold": "",
          letterSpacing: "2px",
          textTransform: "uppercase", // Making text uppercase
        },
        //Overline Large text
        ".poverlarge": {
          "@apply text-base font-semibold": "",
          lineHeight: "20px", //Adjust line height
          letterSpacing: "2px",
          textTransform: "uppercase", // Making text uppercase
        },
        //Label Default text
        ".label-default": {
          "@apply text-sm font-semibold": "",
          lineHeight: "24px",
          letterSpacing: ".25px",
        },
        //Overline Large text
        ".label-big": {
          "@apply text-lg24 font-semibold": "",
          lineHeight: "32px",
          letterSpacing: ".25px",
        },
        /* Text labels here */
        ".text_label_small_underline": {
          "@apply text-sm leading-6 underline font-semibold": "",
          letterSpacing: "0.25px",
        },
        ".text_label_big_underline": {
          "@apply text-lg24 leading-8 underline font-semibold": "",
          letterSpacing: "0.15px",
        },
      });
    },
  ],
  // corePlugins: {
  //   // Remove Tailwind CSS's preflight style so it can use the Material UI's preflight instead (CssBaseline).
  //   preflight: false,
  // },
  // Add the important option, using the id of your app wrapper. For example, #__next for Next.js and "#root" for CRA:
  important: "#__next",
};
