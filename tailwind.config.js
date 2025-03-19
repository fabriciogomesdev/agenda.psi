/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			background: "hsl(var(--background))",
			calendar: "hsl(var(--calendar-background))", // Atualizado para --calendar-background
			foreground: "hsl(var(--text-color))", // Atualizado para --text-color
			card: {
			  DEFAULT: "hsl(var(--card))",
			  foreground: "hsl(var(--card-foreground))",
			},
			popover: {
			  DEFAULT: "hsl(var(--popover))",
			  foreground: "hsl(var(--popover-foreground))",
			},
			primary: {
			  DEFAULT: "hsl(var(--primary))",
			  foreground: "hsl(var(--primary-foreground))",
			},
			secondary: {
			  DEFAULT: "hsl(var(--secondary))",
			  foreground: "hsl(var(--secondary-foreground))",
			},
			muted: {
			  DEFAULT: "hsl(var(--muted))",
			  foreground: "hsl(var(--muted-foreground))",
			},
			accent: {
			  DEFAULT: "hsl(var(--accent))",
			  foreground: "hsl(var(--accent-foreground))",
			},
			destructive: {
			  DEFAULT: "hsl(var(--destructive))",
			  foreground: "hsl(var(--destructive-foreground))",
			},
			border: "hsl(var(--border))", // Atualizado para --border-color
			input: "hsl(var(--input))",
			ring: "hsl(var(--ring))",
			warning: {
			  DEFAULT: "hsl(var(--warning))",
			  foreground: "hsl(var(--warning-foreground))",
			},
			event: {
			  DEFAULT: "hsl(var(--event-background))", // Atualizado para --event-background
			  foreground: "hsl(var(--event-text-color))", // Atualizado para --event-text-color
			},
			toolbar: {
			  DEFAULT: "hsl(var(--toolbar-background))", // Nova variável
			  foreground: "hsl(var(--toolbar-text-color))", // Nova variável
			},
			modal: {
			  DEFAULT: "hsl(var(--modal-background))", // Nova variável
			  content: "hsl(var(--modal-content-background))", // Nova variável
			},
			today: "hsl(var(--today-background))", // Nova variável
			chart: {
			  1: "hsl(var(--chart-1))",
			  2: "hsl(var(--chart-2))",
			  3: "hsl(var(--chart-3))",
			  4: "hsl(var(--chart-4))",
			  5: "hsl(var(--chart-5))",
			},
		  }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

