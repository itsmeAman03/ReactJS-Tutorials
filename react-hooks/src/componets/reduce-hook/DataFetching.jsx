import React, { useState, useReducer, useEffect } from 'react';
import axios from 'axios';


function DataFetching() {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')
    const [post , setPost]= useState({})

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(respose =>{
                setLoading(false)
                setPost(respose.data)
                setError('')
            })
            .catch(error =>{
                setLoading(false)
                setPost({})
                setError("Somethign went wrong !!!")
            })
    })

  return (
    <div>
        { loading ? 'loading': post.title }
        { error ? error : null }
    </div>
  )
}

export default DataFetching