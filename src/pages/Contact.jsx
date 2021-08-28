import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageName, loadDB } from '../store/actions/userActions'
// import { fdbService } from '../services/fdbService'

const _Contact = () => {
	const dispatch = useDispatch()
	useEffect(() => { dispatch(setPageName("Contact")) });

	useEffect(() => { dispatch(loadDB()) }, [dispatch]);


	return (
		<div className="cat-page">
			<h1>Contact Us</h1>
			<h3>David Marom: 058-7077017</h3>
		</div>
	)
}
export const Contact = _Contact
