import React from 'react'
import Post from './Post'
import { styles } from 'refire-app'
import { Spinner } from 'elemental'

const Posts = ({
  posts,
  user,
  locked,
  isAdmin,
  deletePost,
  updateQuote,
  styles
}) => {
  if (!posts.length) {
    return (
      <div className={styles.spinnerContainer}>
        <Spinner />
      </div>
    )
  } else {
    return (
      <div>
        {
          posts.map(({ key, value: post}) => {
            return (
              <Post
                key={key}
                postKey={key}
                post={post}
                user={user}
                locked={locked}
                isAdmin={isAdmin}
                deletePost={deletePost}
                updateQuote={updateQuote} />
            )
          })
        }
      </div>
    )
  }
}

const css = {
  spinnerContainer: {
    padding: "30px 0",
  }
}

export default styles(css, Posts)
