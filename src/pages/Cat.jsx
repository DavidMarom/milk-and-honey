import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/userActions'
import { loadBooks, countBooks } from "../store/actions/bookActions";
import { loadAuthors } from "../store/actions/authorActions";

const _Cat = () => {
	const dispatch = useDispatch()
	const [refresh, setRefresh] = useState(0)

	const bookCount = useSelector((state) => state.book.bookCount);
	const books = useSelector((state) => state.book.books);

	const [currPage, setCurrPage] = useState(1);
	const [search, setSearch] = useState('');

	let totalPages = Math.ceil(bookCount / 4)

	// const searchChange = ev => {
	// 	setSearch(ev.target.value);
	// }

	// const doSearch = (ev) => {
	// 	ev.preventDefault();
	// 	dispatch(loadBooks(search));
	// }

	// const doRefresh = () => {
	// 	setRefresh(refresh+1)
	// 	dispatch(loadBooks('', currPage));
	// }

	// useEffect(() => {
	// 	dispatch(loadBooks('', currPage));
	// 	dispatch(loadAuthors());

	// }, [currPage, refresh]);


	// // On mount
	// useEffect(() => {
	// 	dispatch(setPageName('books'));
	// 	dispatch(countBooks());
	// }, []);

	return (

		
				<div className="cat-page">

					<h1>Category</h1>
				</div>

		
	)
}
export const Cat = _Cat
