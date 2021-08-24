import React, { useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/userActions'

const _Contact = () => {
	const dispatch = useDispatch()
	// const [refresh, setRefresh] = useState(0)

	// const books = useSelector((state) => state.book.books);

	// const [currPage, setCurrPage] = useState(1);
	// const [search, setSearch] = useState('');

	useEffect(() => { dispatch(setPageName("Contact")) });

	return (
		<div className="cat-page">
			<h1>Contact Us</h1>
		</div>
	)
}
export const Contact = _Contact
