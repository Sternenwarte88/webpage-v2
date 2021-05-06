
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Quote () {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    axios.get('http://quotes.stormconsultancy.co.uk/random.json').then(data => {
      setQuote({ quote: data.data.quote, author: data.data.author });
    });
  }, ['']);

  return (
    <>
    <p>{quote.quote} <br/> <br/>
   {quote.author}</p>
    </>
  );
}
