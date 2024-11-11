import Navbar from '../components/Navbar/Navbar';
import { ContextProvider } from '../contexts/ContextProvider';
import { LayoutProps } from '../types/types';

const Layout = ({ children }: LayoutProps) => {

    return (
        <div>
            <ContextProvider>
                <Navbar />
                <main>{children}</main>
            </ContextProvider>

        </div>
    )
}

export default Layout