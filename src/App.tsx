import { Routes, Route } from 'react-router-dom'
import AuthorLogin from './pages/AuthorLogin'
import AuthorProfile from './pages/AuthorProfile'
import Authors from './pages/Authors'
import AuthorSignUp from './pages/AuthorSignUp'
import Blog from './pages/Blog'
import CreateBlog from './pages/CreateBlog'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import UpdateBlog from './pages/UpdateBlog'
import UserLogin from './pages/UserLogin'
import UserProfile from './pages/UserProfile'
import UserSignUp from './pages/UserSignUp'
import Home from './pages/Home'
import Layout from './layouts/Layout'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/authors' element={<Authors />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/user/signup' element={<UserSignUp />} />
        <Route path='/author/signup' element={<AuthorSignUp />} />
        <Route path='/user/login' element={<UserLogin />} />
        <Route path='/author/login' element={<AuthorLogin />} />
        <Route path='/user/profile' element={<UserProfile />} />
        <Route path='/author/profile' element={<AuthorProfile />} />
        <Route path='/create/blog' element={<CreateBlog />} />
        <Route path='/update/blog' element={<UpdateBlog />} />
      </Routes>
    </Layout>

  )
}

export default App