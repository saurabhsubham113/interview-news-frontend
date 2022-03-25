import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";

import './App.css';
import SearchResult from "./pages/searchResult/SearchResult";


function App() {
  return (
    <>
      <div style={{ width: "100%" }}>
        <Header />
      </div>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
    </>
  );
}


export default App;
