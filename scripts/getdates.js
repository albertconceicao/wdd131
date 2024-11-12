const today = new Date();
const currentYear = document.querySelector('#currentyear');
currentYear.innerHTML = today.getFullYear();

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `<span>Last Modification: ${document.lastModified}</span>`;