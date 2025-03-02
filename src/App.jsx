import { useState } from "react"

function App() {
  const [post, setPost] = useState([])
  const [newPost, setNewPost] = useState ('');

  const handleNewPost = (e) => {
    setNewPost(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPost( () => [ ...postMessage, newPost]  )
    setNewPost('')

  }

  return (
    <>
      <div className="container">
        <h2>
          Aggiungi post

        </h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={newPost}
            onChange={handleNewPost}
            placeholder="Inserisci un post"
          />

          <button className="btn btn-primary">Aggiungi post</button>


        </form>

        <h2>Lista Posts</h2>
        {
          post.length > 0 ? (
            <ul>
              {
                post.map( (element, index) => {
                  return (
                    <li key={index}>
                      {element}
                    </li>
                  )

                })
              }
            </ul>
          ) : (
            <h3>Non ci sono posts</h3>
          )
        }
        
      </div>

      
    </>
  )
}

export default App
