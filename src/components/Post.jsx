import React, { useContext, useRef } from 'react'
import { MdDelete } from "react-icons/md";
import { Context } from '../store/post-list-store';
function Post({ post }) {
  const { del } = useContext(Context);


  return (
    <div style={{ padding: '5%', }}>

      <div className="card" style={{ width: '30rem', height: '50rem', margin: 'auto',boxShadow:'rgb(144 157 176) 2px 2px 7px 3px' }}>
        <img className="card-img-top" src={post.url} alt="Card image cap" style={{ height: '50%' }} />
        {/* <iframe
          className="card-img-top"
          width="100%"
          height="300px"
          src={`${post.url}?autoplay=1&mute=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
        ></iframe> */}




        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
          <MdDelete onClick={() => del(post.id)} />

        </div>
      </div>
    </div>
  )
}

export default Post