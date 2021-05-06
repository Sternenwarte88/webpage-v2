
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

export default function Quote () {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    axios.get('http://quotes.stormconsultancy.co.uk/random.json').then(data => {
      setQuote({ quote: data.data.quote, author: data.data.author });
    });
  }, ['']);

  return (
    <>
    <p><ImQuotesLeft/>{quote.quote}<ImQuotesRight/> <br/> <br/>
   {quote.author}</p>
    </>
  );
}
