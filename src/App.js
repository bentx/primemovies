import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "@material-ui/core/Container";

import "./App.css";
import Header from "./molecules/Header";
import Nav from "./organisms/Nav";
import Trending from "./pages/Trending";
import Search from "./pages/Search";
import Movies from "./pages/Movies";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
        <Container>
          <Routes>
            <Route path='/trending' element={<Trending />} />
            <Route path='/' element={<Movies />} exact />
            <Route path='/series' element={<Movies />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </Container>
      </div>
      <Nav />
    </BrowserRouter>
  );
}

export default App;
