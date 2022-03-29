import { useState } from "react"

const commentsPage = () => {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    // console.log("🚀 ~ file: index.js ~ line 6 ~ commentsPage ~ comment", comment)
    const fetchCommentsAPI = async () => {
        const res = await fetch('/api/comments')
        const data = await res.json()
        console.log("🚀 ~ file: index.js ~ lin e 5 ~ fetchCommentsAPI ~ data", data)
        setComments(data)
        
    }
    const submitComment = async(e) => {
        e.preventDefault()
        const res = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()
        console.log("🚀 ~ file: index.js ~ line 25 ~ submitComment ~ data", data)
        
    }

    const deleteComment = async (commentId) => {
        const res = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE',
        })
        const data = await res.json()
        console.log("🚀 ~ file: index.js ~ line 34 ~ deleteComment ~ data", data)
        fetchCommentsAPI()
        
    }

     return ( <>
     <button onClick={fetchCommentsAPI}>Load comments</button>
     <div>
         <input 
         type="text"  
         value={comment}
         onChange={(e)=> setComment(e.target.value)}
         />
         <button onClick={submitComment}>submit comment</button>
     </div>
     {comments.map((commentGet)=> (
         <div key={commentGet.id}>
             {commentGet.id}
            <p>{commentGet.text}</p>
            <button onClick={()=> deleteComment(commentGet.id)}>delete</button>
         </div>
     ))}
    </> );
}
 
export default commentsPage;
