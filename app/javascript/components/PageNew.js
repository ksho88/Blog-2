import React from 'react';

const PageNew = ({ page }) => {

  const { title, body, author } = page;
  const defaultTitle = title ? title : "";
  const defaultBody = body ? body : ""; 
  const defaultAuthor = author ? author : "";
  return (
    <>
    <h1>New Page</h1>
    <form action="/pages" method="post"></form>
    <input
    placeholder="Title"
    type="text"
    defaultValue={defaultTitle}
    name="page[title]"
    />
    <input 
    placeholder="body"
    type="text"
    defaultValue={defaultBody}
    name="page[body]"
    />
    <input
    placeholder="author"
    type="text"
    defaultValue={defaultAuthor}
    name="page[author]"
    />
    <button type="submit">Add Page</button>
</>
  )
}

export default PageNew;