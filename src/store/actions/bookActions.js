import { bookService } from '../../services/bookService';
// import { loading, doneLoading } from './systemActions';



export function loadBooks(limit) {
  return async dispatch => {
    try {
    //   dispatch(loading());
      const books = await bookService.getBooks(limit);
      dispatch({ type: 'SET_BOOKS', books });
    } catch (err) {
      console.log('BookActions: err in loadBook', err);

    } finally {
    //   dispatch(doneLoading());
    }
  };
}

export function removeBook(bookId) {
  return async dispatch => {
    try {
      await bookService.remove(bookId);
      dispatch({ type: 'REMOVE_BOOK', bookId });
    } catch (err) {
      console.log('BookActions: err in removeUser', err);
    }
  };
}

export function getBookById(userId) {
  return async dispatch => {
    try {
      await bookService.getById(userId);
      dispatch({ type: 'GET_USER', userId });
    } catch (err) {
      console.log('UserActions: err in getUser', err);
    }
  };
}