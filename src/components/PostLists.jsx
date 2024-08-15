import React, { useContext } from 'react'
import Post from './Post';
import { Context as psData } from '../store/post-list-store';
import "../App.css"

function PostLists() {
  const { arr } = useContext(psData);

  return (
    <div className='Postlist'>
      {arr.map((post, index) => (
        <div >
          <Post key={index}
            post={post}
          />
        </div>
      ))}
    </div>
  )
}

export default PostLists;