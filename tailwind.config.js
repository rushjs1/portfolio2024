/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        //add background images here
        grid: "url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' transform='scale(3)'%3E%3Crect width='100%25' height='100%25' fill='hsl(0, 0%25, 8.5%25)'/%3E%3Cpath fill='none' stroke='hsl(0, 0%25, 11.0%25)' stroke-width='.2' d='M10 0v20ZM0 10h20Z'/%3E%3C/svg%3E')",
        /* bryant2:
          "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8)), url('https://chooseccr.com/media/bryant-ac-1.jpg')",
        fridge1:
          "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8)), url('./fridge1.jpg')",
        smartHome:
          "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        tools:
          "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1663948138866-cd74128c1b1e?q=80&w=3033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", */
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
