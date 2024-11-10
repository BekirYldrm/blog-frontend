import { BlogProvider } from '../context/BlogContext';
import { LayoutProps } from '../types/types';
import Navbar from './Navbar';
import styles from '/src/styles/Layout.module.css';

const Layout = ({ children }: LayoutProps) => {

    return (
        <div className={styles.container}>
            <BlogProvider>
                <Navbar />
                <main style={{ margin: 0 }}>{children}</main>
            </BlogProvider>

        </div>
    )
}

export default Layout