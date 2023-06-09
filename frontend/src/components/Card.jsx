import React from 'react'

function Card(props) {

	const handleDelete = () => {
		console.log('delete clicked')
	}

	return (
		<>
			<div className='card-div'>
				<div className='card-1'>
					<h2>{props.title}</h2>
					<p><i>{props.desc}</i></p>
					<p>{props.id}</p>
				</div>
				<div className="delete-btn card-2">
					<div onClick={handleDelete}>
						<img className='delete-icon' src='src\assets\trashcan icon.png' alt='delete' />
					</div>
				</div>
			</div>
		</>
	)
}

export default Card
