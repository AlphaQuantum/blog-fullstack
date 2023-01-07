import React from 'react'
https://youtu.be/0aPLk2e2Z3g?t=2278
export default function Single() {
  return (
    <div className="post" key={post.id}>
      <div className="img">
        <img src={post.img} alt="" />
      </div>
      <div className="content">
        <Link to={`/post/${post.id}`}>
          <h1>{post.title}</h1>
          <p>{post.desc}</p>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  )
}
