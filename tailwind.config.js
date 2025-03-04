/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                about: "url('/src/assets/bg-about.png')",
                aboutTablet: "url('/src/assets/bg-about2.png')",
                radial: "radial-gradient(circle at 50% 30%, rgba(40, 124, 241, 0.3) 0%, rgba(40, 124, 241, 0.2) 15%, rgba(40, 124, 241, 0) 45%)",
                radialDesktop:
                    "radial-gradient(circle at 50% 50%, rgba(40, 124, 241, 0.3) 0%, rgba(40, 124, 241, 0.2) 15%, rgba(40, 124, 241, 0) 40%)",
                radialDesktop2:
                    "radial-gradient(circle at 50% 50%, rgba(40, 124, 241, 0.3) 10%, rgba(40, 124, 241, 0.3) 30%, rgba(40, 124, 241, 0) 100%)",
            },
            // colors: {
            //   blue: {
            //     50: "#eef2ff",
            //     100: "#e0e7ff",
            //     200: "#c7d2fe",
            //     300: "#a5b4fc",
            //     400: "#818cf8",
            //     500: "#6366f1",
            //     600: "#4f46e5",
            //     700: "#4338ca",
            //     800: "#3730a3",
            //     900: "#312e81",
            //     950: "#1e1b4b",
            //   },
            //   border: "hsl(var(--border))",
            //   input: "hsl(var(--input))",
            //   ring: "hsl(var(--ring))",
            //   background: "hsl(var(--background))",
            //   foreground: "hsl(var(--foreground))",
            //   primary: {
            //     DEFAULT: "hsl(var(--primary))",
            //     foreground: "hsl(var(--primary-foreground))",
            //   },
            //   secondary: {
            //     DEFAULT: "hsl(var(--secondary))",
            //     foreground: "hsl(var(--secondary-foreground))",
            //   },
            //   destructive: {
            //     DEFAULT: "hsl(var(--destructive))",
            //     foreground: "hsl(var(--destructive-foreground))",
            //   },
            //   muted: {
            //     DEFAULT: "hsl(var(--muted))",
            //     foreground: "hsl(var(--muted-foreground))",
            //   },
            //   accent: {
            //     DEFAULT: "hsl(var(--accent))",
            //     foreground: "hsl(var(--accent-foreground))",
            //   },
            //   popover: {
            //     DEFAULT: "hsl(var(--popover))",
            //     foreground: "hsl(var(--popover-foreground))",
            //   },
            //   card: {
            //     DEFAULT: "hsl(var(--card))",
            //     foreground: "hsl(var(--card-foreground))",
            //   },
            // },
            // borderRadius: {
            //   lg: "var(--radius)",
            //   md: "calc(var(--radius) - 2px)",
            //   sm: "calc(var(--radius) - 4px)",
            // },
            fontFamily: {
                manrope: ["Manrope", "sans-serif"], // Add Manrope to the font family
            },
        },
    },
    plugins: [],
};
