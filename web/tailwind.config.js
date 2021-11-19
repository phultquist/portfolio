module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      'gray-250': "#dadee2",
    }),
  },
  variants: {
    extend: {
      inline: ["group-hover"],
      block: ["group-hover"],
    },
  },
  plugins: [],
};
