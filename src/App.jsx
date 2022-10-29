import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import Home from './pages/home/home'
import About from './pages/about/about'
import Tag from './pages/tags/tag'
import Article from './pages/article/Article'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path=':currentPage' element={<Home />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/tags' element={<Tag />} />
        <Route path='/article'>
          <Route index element={<Navigate to='/article/1' />} />
          <Route path=':articleId' element={<Article />} />
        </Route>
        {/* TODO: page 404 */}
      </Routes>
    </Router>
  )
}

export default App
