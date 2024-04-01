const main = document.querySelector('#main');
main.remove();
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Your Name is the champion';
newHeader.textContent = newHeader.textContent.replace('Your Name', 'Samuel');

document.body.appendChild(newHeader);
