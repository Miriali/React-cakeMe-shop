import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import ScrollToTop from './components/scrollToTop';
import Navbar from './components/Navbar/index-navbar';
import Footer from './components/Footer/index-footer';
import About from './Pages/About/about';
import Services from './Pages/Services/services';
import Contact from './Pages/Contact-Us/Contact';
import Home from './Pages/Home/Home';
import Signin from './Pages/SignIn/signin';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
        <Route path='/signin' component={Signin} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;