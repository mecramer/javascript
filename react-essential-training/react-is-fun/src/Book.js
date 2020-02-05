import React from 'react';

// moved from App.js and added export so we can send it to Library.js
export const Book = ({title='No Title Provide', author = 'No Author', pages=0, freeBookmark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmark Today: {freeBookmark ? 'yes!' : 'no!'}</p>
    </section>
  )
}