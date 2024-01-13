import { useEffect, useReducer } from "react";

import axios from 'axios'

export default function PostListReducer() {
  const [postsResult, dispatch] = useReducer(reducer, {
    loading: true,
    posts: [],
    error: ''
  })

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(response => {
        console.log(response)
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data})
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: 'FETCH_ERROR', payload: error.message})
      })
  }, [])

  return (
    <div>
      {postsResult.loading ? (<div>Loading posts...</div>) :(
        postsResult.posts.map(post => (
          <div key={post.id}>
            <h3>Post #{post.id}: {post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  )
}
function reducer (postsResult, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, posts: action.payload, error: "" };
    case "FETCH_ERROR":
      return { loading: false, posts: [], error: action.payload };
    default:
      return { ...postsResult, loading: false };
  }
}
