@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
html {
-webkit-text-size-adjust: 100%;
font-family:
Inter,
ui-sans-serif,
system-ui,
-apple-system,
Segoe UI,
Roboto,
Helvetica Neue,
Arial,
Noto Sans,
sans-serif,
Apple Color Emoji,
Segoe UI Emoji,
Segoe UI Symbol,
Noto Color Emoji;
line-height: 1.5;
-moz-tab-size: 4;
tab-size: 4;
}

h1,
h2,
h3,
p,
ul,
li,
table {
@apply dark:text-white;
}

h1 {
@apply text-3xl my-8 text-primary-800 dark:text-primary-400;
}

h2 {
@apply text-2xl my-6;
}

h3 {
@apply text-xl my-5;
}

p {
@apply text-lg my-3;
}

#mainContent > pre {
@apply text-sm rounded-xl overflow-auto w-full my-4 mx-auto bg-gradient-to-r text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6;
}
}
