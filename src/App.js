
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from "./component/login/Login.js";
import Signup from './component/signup/Signup.js';
import BlogList from './component/Bloglist/BlogList.js';
import Blog from './component/Blog/Blog.js'
import ProtectedRoute from './ProtectedRoute.js';
// import Text from './component/test/Text.js';
function App() {
  return (
    <BrowserRouter>
        <Routes>
         
          <Route exact path='/blogs' element={<ProtectedRoute/>}>
            <Route exact path='/blogs' element={<BlogList/>}/>
          </Route>
          <Route exact path='/blogs/:id' element={<ProtectedRoute/>}>
          <Route  path="/blogs/:id" element={< Blog />} />
          </Route>
         <Route  path="/" element={< Login />} />
         <Route  path="/signup" element={< Signup />} />
         {/* <Route  path="/text" element={< Text />} /> */}
        
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
