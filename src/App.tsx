import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritesPage";
import NavBar from "./components/NavBar";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Flip, ToastContainer} from "react-toastify";

function App() {
  return (
    <div className="bg-blue-300 min-h-screen">
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      <ToastContainer transition={Flip} />
    </div>
  );
}

export default App;
