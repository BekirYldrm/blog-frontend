import { Blog } from "../../../types/types"
import styles from '/src/styles/Card.module.css'
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const Card = ({ blog }: { blog: Blog }) => {

  return (
    <div className={styles.card}>

      <div className={styles.top}>
        <img className={styles.img} src={blog.image} alt="blog" />
        <p className={styles.date}>{blog.date.replace("T", " ")}</p>
        <div className={styles.topSubDiv}>
          <h6 className={styles.title}>{blog.title}</h6>
          <p className={styles.content}>{blog.content.substring(0, 100) + "..."}</p>
        </div>

      </div>

      <div className={styles.bottom}>

        <BookmarkSharpIcon className={styles.icon} />
        <ThumbUpOffAltIcon className={styles.icon} />
        <p className={styles.popularity}>{blog.popularity}</p>

      </div>
    </div>
  )
}

export default Card