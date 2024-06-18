import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginRegister } from "./Components/Screens/LoginRegister";
import { HomePage } from "./Components/Screens/HomePage";
import { MyPosts } from "./Components/Screens/MyPosts";
import { PrivateRoute } from "./Components/functionalComponents/PrivateRoute";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element = {<LoginRegister/>}/>
          <Route path='/HomePage' element = {<HomePage/>}/>
          <Route path='/HomePage' element = {<PrivateRoute/>}/>
          <Route path='/MyPosts' element = {<MyPosts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
