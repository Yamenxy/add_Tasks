window.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const addInput = document.getElementById("addInput");
    const addButton = document.getElementById("addButton");
    const bookList = document.getElementById("bookList");
  
    let books = [];
  
    const renderBooks = (filteredBooks = books) => {
      bookList.innerHTML = "";
  
      filteredBooks.forEach((book, index) => {
        const li = document.createElement("li");
        li.textContent = book;
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", () => {
            
          deleteBook(index);
        });
  
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-button");
        editButton.addEventListener("click", () => {
          editBook(index);
        });
        
        li.appendChild(editButton);

        li.appendChild(deleteButton);
        
        bookList.appendChild(li);
      });
    };
  
    const addBook = () => {
      const newBook = addInput.value.trim();
      
      if (newBook !== "") {
        books.push(newBook);
        addInput.value = "";
        renderBooks();
      }
    };
  
    const searchBooks = () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredBooks = books.filter((book) =>
        book.toLowerCase().includes(searchTerm)
      );
  
      renderBooks(filteredBooks);
    };
  
    const deleteBook = (index) => {
      books.splice(index, 1);
      renderBooks();
    };
  
    const editBook = (index) => {
        const newTitle = prompt("Enter the modification of The Task:");
        if (newTitle !== null) {
          books[index] = newTitle.trim();
          renderBooks();
        }
      };
  
    searchInput.addEventListener("input", searchBooks);
  
    addButton.addEventListener("click", addBook);
  });