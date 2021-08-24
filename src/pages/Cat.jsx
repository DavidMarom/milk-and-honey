import React, {  useEffect } from 'react'
import { setPageName } from '../store/actions/userActions'
import {  useDispatch } from 'react-redux'

export const Cat = ({ location }) => {

	const dispatch = useDispatch()
	// const [refresh, setRefresh] = useState(0)

	useEffect(() => { dispatch(setPageName(location.state.cat)) });

	return (
		<div className="cat-page">
			<h1>{location.state.cat}</h1>
		</div>
	)
}
