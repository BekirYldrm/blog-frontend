import { LayoutProps } from '../types/types'
import Navbar from './Navbar'

const Layout = ({ children }: LayoutProps) => {
    return (
        <div style={{width:'100%'}}>
            <Navbar />
            <main style={{margin:"1rem 3rem"}}>{children}</main>
        </div>
    )
}

export default Layout