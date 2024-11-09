import { LayoutProps } from '../types/types'
import Navbar from './Navbar'
import styles from '/src/styles/Layout.module.css'

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.container}>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}

export default Layout