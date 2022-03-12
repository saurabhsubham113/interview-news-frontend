import { Route, Routes } from "react-router-dom";
import './App.css';
import TextCard from "./components/card/TextCard";
import Header from "./components/header/Header";
import ImageCard from "./components/imageCard/ImageCard";
import Home from "./pages/Home";

function Hello() {
  return (
    <div>Hello</div>
  )
}

function App() {
  return (
    <>
      <Header />
      {/* <TextCard />
      <ImageCard /> */}
      <Routes >
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}


export default App;
