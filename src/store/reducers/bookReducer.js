const initialState = {
    books: []
}

export function book(state = initialState, action = {}) {
    switch (action.type) {
       
        
        // case 'SET_BOOK':
        //     return { ...state, activeBook: action.book };

        // case 'GET_BOOK':
        //     return { ...state, singleUser: action.bookId };

        case 'SET_BOOKS':
            return { ...state, books: action.books };

        // case 'REMOVE_BOOK':
        //     return { ...state, books: state.books.filter(book => book._id !== action.bookId) };
        
        // case 'UPDATE_BOOK':
        //     return { ...state, book: state.books.map(book => (action._book._id === book._id) ? action._book : book) }

        default:
            return state
    }
}