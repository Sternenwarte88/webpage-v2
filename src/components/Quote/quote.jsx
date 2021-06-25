import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Icon } from 'rsuite';

export default function Quote () {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    axios
      .get('https://quotes.stormconsultancy.co.uk/random.json')
      .then((data) => {
        setQuote({ quote: data.data.quote, author: data.data.author });
      });
  }, ['']);

  return (
    <>
      <p>
        <Icon icon="quote-left" />
        {quote.quote}
        <Icon icon="quote-right" /> <br /> <br />
        {quote.author}
      </p>
    </>
  );
}
