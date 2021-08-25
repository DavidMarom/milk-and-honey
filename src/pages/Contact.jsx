import React, { useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/userActions'

const _Contact = () => {
	const dispatch = useDispatch()
	useEffect(() => { dispatch(setPageName("Contact")) });

	return (
		<div className="cat-page">
			<h1>Contact Us</h1>
		</div>
	)
}
export const Contact = _Contact
