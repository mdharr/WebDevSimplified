const grandParent = document.querySelector('#grand-parent');
const children = grandParent.querySelectorAll('.child');

children.forEach(child => child.style.color = 'red');
