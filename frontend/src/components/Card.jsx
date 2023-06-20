import React from 'react'

function Card(props) {

	const handleDelete = () => {
		fetch(`http://localhost:6969/deleteblog/${props.id}`, { method: 'DELETE' })
			.then(response => {
				if(response.ok){	
					// console.log(response);
					console.log('blog deleted successfully');
					let temp = props.cardStuff.cards.filter((obj) => obj._id !== props.id);
					// console.log('temp: ', temp);
					props.cardStuff.setCards(temp);
				}
				else{
					console.log('error deleting blog', response.status);
				}
			})
			.catch(err => {
				console.log('error is happenendedend: ', err);
			})
	}
	// console.log(props);

	return (
		<>
			<div className='card-div'>
				<div className='card-1'>
					<h2>{props.title}</h2>
					<p><i>{props.desc}</i></p>
					{/* <p>{props.id}</p> */}
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
