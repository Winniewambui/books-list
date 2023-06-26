//adding a heading on top of the booklist
const wrapper = document.querySelector('.wrapper');
let heading = document.querySelector('h2');

if (!heading) {
    heading = document.createElement('h2');
    heading.textContent = 'Books and more...';
    wrapper.insertBefore(heading, wrapper.firstChild);
}


//filtering the books
const searchInput = document.querySelector('#search-bar');
let searchValue;

searchInput.addEventListener('keyup', function (e) {
    e.preventDefault();
    searchValue = searchInput.value.toLowerCase();

    const books = Array.from(document.querySelectorAll('.list li'));

    books.filter(book => {
        const title = book.querySelector('.name').textContent.toLowerCase();
        if (title.includes(searchValue)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});

//hiding all the books
const hideBtn = document.querySelector('#hide');
const booksList = document.querySelector('.list');

hideBtn.addEventListener('change', function (e) {

    if (hideBtn.checked) {
        booksList.style.display = "none";
    } else {
        booksList.style.display = "block"
    }
});


// adding books to the booklist
const addForm = document.querySelector('.add-books-container');
const addBtn = document.querySelector('button');

addBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let userInput = addForm.querySelector('input[type="text"]').value;

    //creating elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const button = document.createElement('button');

    bookName.classList.add('name');
    button.classList.add('delete');

    // Creating a text node for the user input
    const textNode = document.createTextNode(userInput);

    bookName.appendChild(textNode);
    //   bookName.appendChild = userInput;  also works
    button.textContent = 'delete';

    li.appendChild(bookName);
    li.appendChild(button);
    booksList.appendChild(li);

    // Clear the input field
    addForm.querySelector('input[type="text"]').value = "";

    // addDeleteButtonListeners();
});

//deleting books

function addDeleteButtonListeners() {
    const deleteBtn = document.querySelectorAll('.delete');
    Array.from(deleteBtn).forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        });
    });
}

// Call the function to add delete button listeners for existing books
addDeleteButtonListeners();
