import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";

import './App.css';


function App() {
  return (
    <>
      <Header />
      {/* <TextCard />
      <ImageCard /> */}
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
      </Routes>
    </>
  );
}


export default App;
