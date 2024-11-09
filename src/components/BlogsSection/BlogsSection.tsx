import { useEffect, useState } from "react"
import styles from "/src/styles/BlogsSection.module.css"
import Blogs from "./Blogs"
import Categories from "./Categories"
import { Blog, Category } from "../../types/types"
import axios from "axios"

const BlogsSection = () => {

  const [categories, setCatogeries] = useState<Category[]>([])
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    axios
      .get('https://blog-backend-5uhs.onrender.com/categories')
      .then(res => setCatogeries(res.data))
      .catch(e => console.log(e))
  }, [])

  function clicked(blogs: Blog[]): void {
    setBlogs(blogs)
  }

  return (
    <section id='blogs'>
      <div className={styles.container}>
        <Categories categories={categories} clicked={clicked} />
        <Blogs blogs={blogs} />
      </div>
    </section>
  )
}

export default BlogsSection