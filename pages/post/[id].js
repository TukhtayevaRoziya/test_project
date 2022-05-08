import { useRouter } from 'next/router'
import React from 'react'


const Post = () => {
    const route = useRouter()
    console.log(route.query.id);
    return (
    <div>Post {route.query.id}</div>
  )
}

export default Post