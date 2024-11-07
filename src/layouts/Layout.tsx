import { LayoutProps } from '../types/types'
import Navbar from './Navbar'

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}

export default Layout