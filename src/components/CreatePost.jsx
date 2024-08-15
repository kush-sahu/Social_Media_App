import React, { useContext, useRef } from 'react'
import { Context as psData } from '../store/post-list-store'
function CreatePost() {
 const {add}= useContext(psData);
 const handleurl=useRef();
 const handletitle=useRef();
const handledesc=useRef();

const handleadd=(event)=>{
event.preventDefault();
const url=handleurl.current.value;

const title=handletitle.current.value;
const body=handledesc.current.value;
add(url,title,body);
}

  return (
    <div>
  <form style={{ width: '30vw', padding: '2vw' }} onSubmit={handleadd}>
    <div className="form-group">
      <label htmlFor="imageUrl">Image URL</label>
      <input
        ref={handleurl}
        type="text"
        className="form-control"
        id="imageUrl"
        placeholder="Enter image URL"
      />
      <small id="imageUrlHelp" className="form-text text-muted">
        Enter the URL of the image you want to add
      </small>
    </div>
    <div className="form-group">
      <label htmlFor="postTitle">Title</label>
      <input
        ref={handletitle}
        type="text"
        className="form-control"
        id="postTitle"
        placeholder="Enter post title"
      />
      <small id="postTitleHelp" className="form-text text-muted">
        Enter the title of your post
      </small>
    </div>
    <div className="form-group">
      <label htmlFor="postDescription">Description</label>
      <textarea
       ref={handledesc}
        className="form-control"
        id="postDescription"
        rows="3"
        placeholder="Enter post description"
      />
      <small id="postDescriptionHelp" className="form-text text-muted">
      
      </small>
    </div>
    
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
</div>

  )
}
// import { PostList } from '../store/post-list-store'

export default CreatePost