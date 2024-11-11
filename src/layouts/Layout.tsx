import { ContextProvider } from '../contexts/ContextProvider';
import { LayoutProps } from '../types/types';
import Navbar from '../components/Navbar/Navbar';
import styles from '/src/styles/Layout.module.css';

const Layout = ({ children }: LayoutProps) => {

    return (
        <div className={styles.container}>
            <ContextProvider>
                <Navbar />
                <main style={{ margin: 0 }}>{children}</main>
            </ContextProvider>

        </div>
    )
}

export default Layout