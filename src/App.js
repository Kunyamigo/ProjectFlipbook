import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import Gallery from './pages/Gallery/Panel';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home} />
        <Route path={["/galeria"]} component={Gallery}/>
        <Route path='/sobre-mi' component={About} />
        <Route path='/contacto' component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
