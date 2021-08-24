import { httpService } from './httpService'



function getBooks(limit) {
    return httpService.get(`products/?limit=${limit}`);
}

// function getById(userId) {
//     return httpService.get(`book/${userId}`)
// }

// function remove(userId) {
//     return httpService.delete(`book/${userId}`)
// }

// function update(book) {
//     return httpService.put(`book/update`, book)
// }

// function findIdxToMark(suggestions, object) {
//     return suggestions.findIndex(suggest => suggest.name === object.name);
// }

export const bookService = {
    getBooks
};