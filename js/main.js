const input = document.querySelector('.lists');
const pencil = document.getElementById('pencil');
const ul = document.querySelector('.todos');
///////////////////////////////////////////////////
const all = document.querySelector('.all');
const active = document.querySelector('.active');
const performed = document.querySelector('.performed');
///////////////////////////////////////////////////
const save = document.querySelector('.save');
const clear = document.querySelector('.clear');
const tips = document.querySelector('.tipBtn');
////////////////////////////////////////////////////
const edit = document.querySelector('.edit');

// Hiding / unhiding INPUT
pencil.addEventListener('click', function () {
  input.classList.toggle('display');
});

// adding <li>
input.addEventListener('keypress', (e) => {
  if (e.which === 13) {
    let text = input.value;
    input.value = '';
    add(text);
  }
});

function add(text) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const i = document.createElement('i');
  const btn = document.createElement('button');
  btn.setAttribute('class', 'edit');
  btn.textContent = 'Edit';
  i.setAttribute('class', 'fas fa-trash-alt');
  li.textContent = text;
  span.insertAdjacentElement('afterbegin', i);
  li.insertAdjacentElement('afterbegin', span);
  li.insertAdjacentElement('beforeend', btn);
  ul.insertAdjacentElement('beforeend', li);
}

//Working with e.target
ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
  if (e.target.tagName === 'I') {
    e.target.parentElement.parentElement.remove();
  }
});

// Active

active.addEventListener('click', () => {
  const li = document.querySelectorAll('.todos li');
  for (let i = 0; i < li.length; i++) {
    li[i].style.display = 'list-item';
    if (li[i].className === 'checked') {
      li[i].style.display = 'none';
    }
  }
});

performed.addEventListener('click', () => {
  const li = document.querySelectorAll('.todos li');
  for (let i = 0; i < li.length; i++) {
    li[i].style.display = 'list-item';
    if (li[i].className !== 'checked') {
      li[i].style.display = 'none';
    }
  }
});

all.addEventListener('click', () => {
  const li = document.querySelectorAll('.todos li');
  for (let i = 0; i < li.length; i++) {
    li[i].style.display = 'list-item';
  }
});

clear.addEventListener('click', () => {
  ul.remove();
});

save.addEventListener('click', () => {});

ul.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit')) {
    let change = prompt('Edit current task: ');
    const listItem = e.target.closest('li');
    listItem.innerHTML = `<span><i class="fas fa-trash-alt"></i></span>${change}<button
    class="edit"
  >
    Edit
  </button>`;
  }
});

// Tips
const overlay = document.getElementById('overlay');
const closeBtn = document.querySelector('.closebtn');

tips.addEventListener('click', () => {
  overlay.classList.toggle('active');
});

function closeOverlay() {
  overlay.classList.remove('active');
}

closeBtn.addEventListener('click', () => {
  closeOverlay();
});

document.addEventListener('keydown', (e) => {
  if (e.which === 27) {
    closeOverlay();
  }
});
