import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

export default {
  darkMode: ["class", "html"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../packages/shared/src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      fontFamily: {
        sans: ["Public Sans", "sans-serif"]
      },
      minHeight: {
        "536": "33.5rem",
        "460": "28.75rem"
      },
      width: {
        "322": "20.125rem"
      },
      maxHeight: {
        "screen-minus-64": "calc(100% - 64px)",
        "screen-minus-45": "calc(100% - 45px)",
        "screen-minus-130": "calc(100% - 130px)",
        "screen-minus-65": "calc(100vh - 42vh)"
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        white: "hsl(var(--white))",
        navBarHighlight: "hsl(var(--navbar-border-highlight))",
        blueDark: "hsl(var(--blue-dark))",
        btnColor: "hsl(var(--btn-color))",
        highlight: "hsl(var(--highlight))",
        hrLineColor: "hsl(var(--hr-line-color))",
        blackMedium: "hsl(var(--black-medium))",
        blackBorder: "hsl(var(--black-border))",
        grayMediumColor: "hsl(var(--gray-medium-color))",
        tableHeaderTextColor: "hsl(var(--table-header-text-color))",
        dividerColor: "hsl(var(--divider-color))",
        grayColor: "hsla(var(--gray-color))",
        grayLightColor: "hsla(var(--gray-light))",
        highlightLightGoldenrodYellow:
          "hsl(var(--highlight-light-goldenrod-yellow))",
        highlightLightLime: "hsl(var(--highlight-light-lime))",
        highlighMintySky: "hsl(var(--highlight-minty-sky))",
        grayLightGreen: "hsl(var(--gray-light-green))",
        blackDark: "hsl(var(--black-dark))",
        HighlightSoftCreamYellow: "hsl(var(--highligh-soft-cream-yellow))",
        HighlightSoftWheatYellow: "hsl(var(--highlight-soft-wheat-yellow))",
        HighlightLightGray: "hsl(var(--highlight-light-gray))",
        HightlightLightCream: "hsl(var(--highlight-light-cream))",
        grayLightWhite: "hsl(var(--gray-light-white))",
        dueRed: "hsl(var(--due-red))",
        highlightRed: "hsl(var(--highlight-red))",
        highlightYellow: "hsl(var(--highlight-yellow))",
        highlightGreen: "hsl(var(--highlight-green))",
        highlightOrange: "hsl(var(--highlight-orange))",
        highlightSoftPurple: "hsl(var(--highlight-soft-purple))",
        highlightPinkRed: "hsl(var(--highlight-pink-red))",
        darkCement: "hsl(var(--dark-cement-color))",
        dividerWhiteColor: "hsl(var(--divider-white-color))",
        darkRedColor: "hsl(var(--dark-red))",
        highlightGreenLight: "hsl(var(--highlight-green-light))",
        highlightLightYellow: "hsl(var(--highlight-light-yellow))",
        textGrayColor: "hsl(var(--text-gray-color))",
        backgroundLightYellow: "hsl(var(--background-yellow-light))",
        borderYellow: "hsl(var(--border-yellow-medium))",
        redLight: "hsl(var(--red-light))",
        redLightBorder: "hsl(var(--red-light-border))",
        backgroundLightLimeGreen: "hsl(var(--background-light-lime-green))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        "template-card": {
          DEFAULT: "hsl(var(--template-card))",
          foreground: "hsl(var(--template-card-foreground))",
          "head-bg": "hsl(var(--template-card-head-bg))",
          "head-fg": "hsl(var(--template-card-head-fg))",
          "price-fg": "hsl(var(--template-card-price-fg))"
        },
        example: {
          DEFAULT: "rgb(var(--example))",
          foreground: "rgb(var(--example-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [animate, require("tailwind-scrollbar")]
} satisfies Config;
