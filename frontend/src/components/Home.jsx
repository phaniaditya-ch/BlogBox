import React, { useEffect, useState } from 'react'
import Card from './Card'
import Footer from './Footer'
// const querystring = require('querystring');

function Home() {
  const [formTitle, setFormTitle] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:6969/api')
      .then((response) => { return response.json(); })
      .then((data) => {
        setLoading(false);
        setCards(data);
        // console.log('data is this is: ', data);
      })
      .catch(err => console.log('error: ', err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setCards([...cards, { title: e.target.title.value, desc: e.target.description.value }])    // -- tbc
    const urlTitle = e.target.elements.title.value;
    const urlDesc = e.target.description.value;
    // const encodedUrlDesc = encodeURIComponent(urlDesc);
    const url = `http://localhost:6969/add-blog/`//${urlTitle}/${encodedUrlDesc}`;
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: urlTitle, 
        desc: urlDesc, 
      })
    })
      .then((result) => {
        if (result.ok)
          result.json()
            .then((data) => { /* console.log('data: ', data) ;*/setCards([...cards, data]) })
            .catch((err) => { 'some error : ', console.log(err) })
        else
          console.log('not ok status detected');
      })
      .catch((err) => { 'some error : ', console.log(err); })
    // }
  }
  const handleTitleChange = (e) => {
    setFormTitle(e.target.value);
  }

  const handleDescChange = (e) => {
    setFormDesc(e.target.value);
  }

  return (
    <div className='main-div'>
      <div className='home-flex-div'>
        <div className='home-1 cards-div'>
          <div className='heading-div'><h1>HOME PAGE</h1></div>
          <div>
            {
              cards.length ? cards.map((card, index) => {
                return <Card key={index} cardStuff={{ cards: cards, setCards: setCards }} title={card.title} desc={card.description} id={card._id} />
              })
                : (loading ? <div className="loader"></div> : <div className='not-found-div'> <p><i>No blogs found</i></p> </div>)
            }
          </div>
        </div>
        <div className="form-div">
          <form className='form' onSubmit={handleSubmit}>
            <div className="title">Add new blog</div>
            <input type="text" placeholder="Title" className="input-box-1" onChange={handleTitleChange} value={formTitle} name='title' />
            <textarea placeholder="Description" className='input-box-2' onChange={handleDescChange} value={formDesc} name='description'></textarea>
            <button>Add</button>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home