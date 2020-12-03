import React from 'react'

import { Link } from 'farrow-react/Link'

export const Create: React.FC = () => {
  return (
    <>
      <header>
        <h1>Farrow Todo List</h1>
        <p>
          <Link href="/">
            <i>Back</i>
          </Link>
        </p>
      </header>
      <main>
        <section>
          <form action="/action/todos/create" method="POST">
            <header>
              <h2>Create Todo</h2>
            </header>
            <label htmlFor="content">content:</label>
            <input type="text" name="content" placeholder="input your todo content" />
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
    </>
  )
}
