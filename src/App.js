import Home from './components/Home';
import About from './components/About';
import DisplayAllItems from './components/DisplayAllItems';
import UpdateItem from './components/UpdateItem';
import AddNewItem from './components/AddNewItem';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Pricing from './components/Pricing';
import Features from './components/Features';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Menu />

    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/DisplayAllItems" element={<DisplayAllItems />} />
      <Route path="/updateitem/:id" element={<UpdateItem />} />
      <Route path="/AddNewItem" element={<AddNewItem />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Features" element={<Features />} />
      <Route path="/Pricing" element={<Pricing />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
