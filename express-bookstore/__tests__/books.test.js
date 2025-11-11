process.env.NODE_ENV = "test";

const request = require("supertest");
const app = require("../app");
const db = require("../db");

let testBook;

beforeEach(async function () {
  // Insert a sample book before each test
  const result = await db.query(`
    INSERT INTO books
      (isbn, amazon_url, author, language, pages, publisher, title, year)
      VALUES ('1234567890', 'http://a.co/test', 'Tester', 'english', 150, 'TestPub', 'Test Book', 2000)
      RETURNING isbn, amazon_url, author, language, pages, publisher, title, year
  `);
  testBook = result.rows[0];
});

afterEach(async function () {
  // Clean up after each test
  await db.query("DELETE FROM books");
});

afterAll(async function () {
  await db.end();
});

describe("GET /books", function () {
  test("returns list of books", async function () {
    const resp = await request(app).get("/books");
    expect(resp.statusCode).toBe(200);
    expect(Array.isArray(resp.body.books)).toBe(true);
    expect(resp.body.books.length).toBe(1);
    expect(resp.body.books[0].isbn).toBe(testBook.isbn);
  });
});

describe("GET /books/:isbn", function () {
  test("returns a single book by isbn", async function () {
    const resp = await request(app).get(`/books/${testBook.isbn}`);
    expect(resp.statusCode).toBe(200);
    expect(resp.body.book).toHaveProperty("isbn", testBook.isbn);
  });

  test("404 for invalid isbn", async function () {
    const resp = await request(app).get("/books/9999999999");
    expect(resp.statusCode).toBe(404);
  });
});

describe("POST /books", function () {
  test("creates a new book", async function () {
    const newBook = {
      isbn: "0987654321",
      amazon_url: "http://a.co/new",
      author: "New Author",
      language: "english",
      pages: 300,
      publisher: "NewPub",
      title: "New Book",
      year: 2021,
    };

    const resp = await request(app).post("/books").send(newBook);
    expect(resp.statusCode).toBe(201);
    expect(resp.body.book).toHaveProperty("isbn", newBook.isbn);
  });

  test("400 on missing required fields", async function () {
    const resp = await request(app)
      .post("/books")
      .send({ title: "Incomplete" });
    expect(resp.statusCode).toBe(400);
  });
});

describe("PUT /books/:isbn", function () {
  test("updates a book", async function () {
    const resp = await request(app).put(`/books/${testBook.isbn}`).send({
      amazon_url: "http://a.co/new",
      author: "Updated Author",
      language: "english",
      pages: 200,
      publisher: "UpdatedPub",
      title: "Updated Title",
      year: 2022,
    });
    expect(resp.statusCode).toBe(200);
    expect(resp.body.book.author).toBe("Updated Author");
  });

  test("400 on invalid update data", async function () {
    const resp = await request(app)
      .put(`/books/${testBook.isbn}`)
      .send({ author: 123 });
    expect(resp.statusCode).toBe(400);
  });

  test("404 on invalid isbn", async function () {
    const resp = await request(app).put("/books/9999999999").send({
      amazon_url: "http://a.co/new",
      author: "Updated Author",
      language: "english",
      pages: 200,
      publisher: "UpdatedPub",
      title: "Updated Title",
      year: 2022,
    });
    expect(resp.statusCode).toBe(404);
  });
});

describe("DELETE /books/:isbn", function () {
  test("deletes a book", async function () {
    const resp = await request(app).delete(`/books/${testBook.isbn}`);
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({ message: "Book deleted" });

    // Verify it no longer exists
    const getResp = await request(app).get(`/books/${testBook.isbn}`);
    expect(getResp.statusCode).toBe(404);
  });

  test("404 for invalid isbn", async function () {
    const resp = await request(app).delete("/books/9999999999");
    expect(resp.statusCode).toBe(404);
  });
});
