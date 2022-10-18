const template = document.querySelector('#unified-footer-template');
const clone = template.content.cloneNode(true);
const footer = document.querySelector('#Footer');
footer.innerHTML = '';
footer.appendChild(clone);
