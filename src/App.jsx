import Banner from './components/Banner';
import Header from './components/Header';
import Hero2 from './components/Hero2';
import Hero3 from './components/Hero3';
import Hero4 from './components/Hero4';
import Product from './components/Product'; 
import Hero5 from './components/Hero5';
import Hero6 from './components/Hero6';
import Footer from './components/Foot';
import './App.css';

const App = () => {
  return (
    <div className="container"> 
    <Header></Header>
    <Banner></Banner>
    <Hero2></Hero2>
    <Hero3></Hero3>
    <Hero4></Hero4>  
    <Product></Product>
    <Hero5></Hero5>
    <Hero6></Hero6>
    <Footer></Footer>

    </div>
  )
};

export default App