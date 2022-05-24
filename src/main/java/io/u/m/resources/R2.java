package io.u.m.resources;

import io.u.m.daos.BookService;
import io.u.m.domain.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class R2 {
    @Autowired
    BookService bookService;

    @RequestMapping("/getAllBooks")
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @RequestMapping("/getBook/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookService.getBook(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/addBook")
    public void addBook(@RequestBody Book book) {
        bookService.addBook(book);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/updateBook/{id}")
    public void updateBook(@RequestBody Book book, @PathVariable Long id) {
        bookService.updateBook(id, book);
    }

    @RequestMapping(method = {RequestMethod.DELETE, RequestMethod.GET}, value = "/deleteBook/{id}")
    public void deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
    }
}
