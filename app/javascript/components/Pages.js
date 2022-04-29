import React from 'react';

const url = "http://localhost3000:/pages/";

const Pages = ({ pages }) => (
  <>
  <h1>All Pages</h1>
  <ul>
    { pages.map( p => (
      <li key={p.id}>
        {p.title}
        {" "}{/*space for formatting*/}
        <a href={url +p.id}>show</a>
        </li>
    ))}
  </ul>
  </>
)
export default Pages;