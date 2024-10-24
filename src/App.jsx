import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux'; 
import Header from './Components/Header'
import Home from "./pages/Home";
import Dashboard from './pages/DashBoard';
import store from './bookstore'
import Footer from './Components/Footer';


function App() {
  return (
    <Provider store={store}> 
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        <Footer />
      </>
    </Provider>
  );
}

export default App;