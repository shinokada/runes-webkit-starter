const config = {
content: [
'./src/**/*.{html,js,svelte,ts}',
'./node_modules/svelte-5-ui-lib/**/*.{html,js,svelte,ts}',
'./node_modules/svelte-rune-highlight/**/*.{html,js,svelte,ts}',
'./node_modules/runes-webkit/**/*.{html,js,svelte,ts}'
],

darkMode: 'class',

theme: {
extend: {
colors: {
// purple
primary: {"50":"#faf5ff","100":"#f3e8ff","200":"#e9d5ff","300":"#d8b4fe","400":"#c084fc","500":"#a855f7","600":"#9333ea","700":"#7e22ce","800":"#6b21a8","900":"#581c87"}
}
}
}
};

module.exports = config;
