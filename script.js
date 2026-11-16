// DOM Elements Selection
const themeToggleBtn = document.getElementById('theme-toggle');
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

// 1. Dark Theme Toggle Switch
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        themeToggleBtn.textContent = 'Toggle Dark Mode';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = 'Toggle Light Mode';
    }
});

// 2. Interactive Counter
let count = 0;
incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

function updateCounter() {
    counterValue.textContent = count;
    if (count > 0) {
        counterValue.style.color = '#2ecc71'; // Green for positive numbers
    } else if (count < 0) {
        counterValue.style.color = '#e74c3c'; // Red for negative numbers
    } else {
        counterValue.style.color = 'inherit';
    }
}

// 3. Dynamic List Manager
itemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = itemInput.value.trim();
    if (taskText !== '') {
        createListItem(taskText);
        itemInput.value = '';
    }
});

function createListItem(text) {
    const li = document.createElement('li');
    
    const textSpan = document.createElement('span');
    textSpan.textContent = text;
    li.appendChild(textSpan);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
        li.classList.add('fade-out');
        // Simulate smooth DOM animation removal
        setTimeout(() => {
            li.remove();
        }, 150);
    });
    
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}
