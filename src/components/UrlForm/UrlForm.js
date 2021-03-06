import React, { useState } from 'react';

function UrlForm ({ createShortUrl }) {
  const [ urlToShorten, setUrlToShorten ] = useState('')
  const [ title, setTitle ] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    createShortUrl(urlToShorten, title)
    clearInputs();
  }

  const clearInputs = () => {
    setTitle('')
    setUrlToShorten('')
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Title...'
        name='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        name='title'
        value={urlToShorten}
        onChange={e => setUrlToShorten(e.target.value)}
      />

      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
    </form>
  )
}


export default UrlForm;
