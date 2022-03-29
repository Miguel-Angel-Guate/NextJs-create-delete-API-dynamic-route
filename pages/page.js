import React from 'react'

export default function Page({comments}) {
  console.log("🚀 ~ file: page.js ~ line 4 ~ Page ~ stars", comments)
  return (
    <div>{comments.map((comment) => (
        <div key={comment.id}>
            <p>{comment.body}</p>
        </div>

    ))}</div>
  )
}
Page.getInitialProps = async (ctx) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json()
    console.log("🚀 ~ file: page.js ~ line 11 ~ Page.getInitialProps= ~ data", data)
    return{
        comments: data
    }
}
