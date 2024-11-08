import { CategoriesProps, Category } from "../../../types/types"
import styles from "/src/styles/Categories.module.css"

const Categories = ({ categories, clicked }: CategoriesProps) => {

  return (
    <div className={styles.container}>
      {
        categories.map((category: Category, index) => (
          <div
            onClick={() => clicked(category.blogs)}
            className={styles.categoryItem}
            key={index}
          >
            {category.categoryName}
          </div>
        ))
      }
    </div>
  )
}

export default Categories