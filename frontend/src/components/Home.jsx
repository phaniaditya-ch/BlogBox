import React, { useState } from 'react'
import Card from './Card'

function Home() {
  const [formTitle, setFormTitle] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [cards, setCards] = useState([{
    id: 'id' + Math.random().toString(16).slice(2),
    title: 'card no 1',
    desc: 'this is my first card'
  },
  {
    id: 'id' + Math.random().toString(16).slice(2),
    title: 'card no 2',
    desc: 'this is my second card'
  }
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCards([...cards, { title: e.target.title.value, desc: e.target.description.value }])
  //   const urlTitle = e.target.elements.title.value;
  //   const urlDesc = e.target.description.value;
  //   const url = `localhost:6969/add-blog/${urlTitle}/${urlDesc}`;
  //   fetch(url)
  //     .then((result) => {
  //       if (result.ok)
  //         result.json()
  //           .then((data) => { setCards([...cards, { title: data.title, desc: data.description }]) })
  //           .catch((err) => {'some error : ', console.log(err)})
  //       else 
  //         console.log('not ok status detected');
  //     })
  //     .catch((err) => {'some error : ', console.log(err);})
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
              cards.map((card, index) => {
                return <Card key={index} title={card.title} desc={card.desc} id={card.id} />
              })
            }
          </div>
        </div>
        <div className="form-div">
          <form className='form' onSubmit={handleSubmit}>
            <div className="title">Add new blog</div>
            <input type="text" placeholder="Title" className="input" onChange={handleTitleChange} value={formTitle} name='title' />
            <textarea placeholder="Description" onChange={handleDescChange} value={formDesc} name='description'></textarea>
            <button>Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
