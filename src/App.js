import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <Navbar></Navbar>
        <BookList></BookList>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
