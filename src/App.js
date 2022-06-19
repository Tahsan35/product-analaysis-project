import { Route, Routes } from 'react-router-dom';
import Blogs from './component/Blogs/Blogs';
import DashBoard from "./component/DashBoard/DashBoard";
import ErrorPage from './component/ErrorPage/ErrorPage';
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Reviews from "./component/Reviews/Reviews";
function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/reviews" element={<Reviews></Reviews>}></Route>
          <Route path="/dashBoard" element={<DashBoard></DashBoard>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
    </div>
  );
}

export default App;
