import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  const posts = [
    { id: 1, title: "Hey Hoy", desc: "Lorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consesctetur", img: "https://i.picsum.photos/id/532/200/300.jpg?hmac=77wsdhKY-O9QmZj8Fmkuc_h3fj6nJXCxQcXCRhX4Vos" },
    { id: 2, title: "Hey Hoy", desc: "Lorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consesctetur", img: "https://i.picsum.photos/id/532/200/300.jpg?hmac=77wsdhKY-O9QmZj8Fmkuc_h3fj6nJXCxQcXCRhX4Vos" },
    { id: 3, title: "Hey Hoy", desc: "Lorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consesctetur", img: "https://i.picsum.photos/id/532/200/300.jpg?hmac=77wsdhKY-O9QmZj8Fmkuc_h3fj6nJXCxQcXCRhX4Vos" },
    { id: 4, title: "Hey Hoy", desc: "Lorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consesctetur", img: "https://i.picsum.photos/id/532/200/300.jpg?hmac=77wsdhKY-O9QmZj8Fmkuc_h3fj6nJXCxQcXCRhX4Vos" },
    { id: 5, title: "Hey Hoy", desc: "Lorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consesctetur", img: "https://i.picsum.photos/id/532/200/300.jpg?hmac=77wsdhKY-O9QmZj8Fmkuc_h3fj6nJXCxQcXCRhX4Vos" },
    { id: 6, title: "Hey Hoy", desc: "Lorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consesctetur", img: "https://i.picsum.photos/id/532/200/300.jpg?hmac=77wsdhKY-O9QmZj8Fmkuc_h3fj6nJXCxQcXCRhX4Vos" },
    { id: 7, title: "Hey Hoy", desc: "Lorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consescteturLorem ipsum dolor sit amet consesctetur", img: "https://i.picsum.photos/id/532/200/300.jpg?hmac=77wsdhKY-O9QmZj8Fmkuc_h3fj6nJXCxQcXCRhX4Vos" },
  ]
  return (
    <div className="home">
      <div className="posts"> 
      {posts.map((post) => (
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
      ))}
      </div>
    </div>
  );
};