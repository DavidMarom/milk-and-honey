import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageName } from '../store/actions/userActions'
import { loadBooks } from '../store/actions/bookActions'
import { ProdCard } from '../cmps/ProdCard'

export const Home = () => {
	const dispatch = useDispatch()
	// const [refresh, setRefresh] = useState(0)
	// const books = useSelector((state) => state.book.books);


	useEffect(() => {
		dispatch(setPageName("Home"));
	});

	useEffect(() => {
		dispatch(loadBooks(5));
	}, []);

	const prods = useSelector((state) => state.book.books);

	console.log(prods);
	return (
		<div className="cat-page">

			<div className="ra">
				<div className="big-image"></div>
			</div>

			<div className="ra">
				<h3>LATEST PRODUCTS </h3>
			</div>

			{
				(prods ?

					prods.map((prod, idx) => {
						return (

							<ProdCard key={idx} prod={prod} />

						)
					})




					:
					<h1>LOADING</h1>
				)
			}

		</div>
	)
}