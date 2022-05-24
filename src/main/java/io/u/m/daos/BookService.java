package io.u.m.daos;

import io.u.m.domain.Book;

import java.util.List;

public interface BookService {
    List<Book> getAllBooks();

    Book getBook(Long id);

    void addBook(Book book);

    void updateBook(Long id, Book book);

    void deleteBook(Long id);
}
