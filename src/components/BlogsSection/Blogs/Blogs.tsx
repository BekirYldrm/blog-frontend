import React from 'react'
import styles from '/src/styles/Blogs.module.css'
import Card from './Card'
import { Blog } from '../../../types/types'

const Blogs = ({ blogs }: { blogs: Blog[] }) => {

  return (

    <div className={styles.container}>
      {
        blogs.map((blog: Blog, index) => (
          <Card key={index} blog={blog} />
        ))
      }
    </div>
  )
}

export default Blogs