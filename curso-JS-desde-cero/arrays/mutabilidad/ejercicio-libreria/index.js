// Crea un programa que simule un stack usando los métodos push() y pop(). El stack debe alojar una colección de libros. Los usuarios pueden:

// 1. Añadir un nuevo libro en la parte superior del stack.

// 2. Eliminar un libro de la parte de arriba del stack.

// 3. Mostrar el estado actual del stack.

// 4. Implementar un loop para permitir al usuario interactuar con estas acciones.


  let books = [];

  // Añadir libro:
    $('#btn_addBook').click(function addBook(){
      books.push($('#bookName').val());
      console.log(books);
      verBookList();
    });


    // Eliminar libro:
    $('#btn_rmBook').click(function removeBook(){
      // let book = books.indexOf($('#bookName').val());
      // books.splice(book, 1); --> No me sirve esta forma de hacerlo porque si se pone un nombre que no es correcto, elimina el último libro de la lista.
      if (books.length === 0) {
        alert('La lista de libros está vacía, no se puede eliminar ningún libro.')
      }
      books = books.filter(function(book) {
        return book != $('#bookName').val();
      });
      console.log(books);
      verBookList();
    });

    // Visualizar listado de libros:
    function verBookList(){
      text = '';
      for (var i=0; i<books.length; i++) {
        text += '<li>' + books[i] + '</li>';
      }
    $(".bookList").html(text);
  }
  verBookList();


