const axios = require('axios');

const BASE_URL = 'http://localhost:5000';


// Task 1 - Get all books
async function getAllBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/`);
        console.log(response.data);
    } catch (error) {
        console.log("Error retrieving all books:", error.message);
    }
}


// Task 2 - Get book by ISBN
async function getBooksByISBN(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
        console.log(response.data);
    } catch (error) {
        console.log("Error retrieving book by ISBN:", error.message);
    }
}


// Task 3 - Get books by author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(
            `${BASE_URL}/author/${encodeURIComponent(author)}`
        );
        console.log(response.data);
    } catch (error) {
        console.log("Error retrieving books by author:", error.message);
    }
}


// Task 4 - Get books by title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(
            `${BASE_URL}/title/${encodeURIComponent(title)}`
        );
        console.log(response.data);
    } catch (error) {
        console.log("Error retrieving books by title:", error.message);
    }
}


// Run function according to command-line argument
const operation = process.argv[2];

async function main() {

    switch (operation) {

        case "all":
            await getAllBooks();
            break;

        case "isbn":
            await getBooksByISBN(process.argv[3]);
            break;

        case "author":
            await getBooksByAuthor(process.argv[3]);
            break;

        case "title":
            await getBooksByTitle(process.argv[3]);
            break;

        default:
            console.log("Usage:");
            console.log("node general.js all");
            console.log("node general.js isbn <isbn>");
            console.log("node general.js author <author>");
            console.log("node general.js title <title>");
    }
}
 
main();