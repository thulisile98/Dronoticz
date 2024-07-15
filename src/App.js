import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutUsSection from './Components/AboutUsSection';
import SubscribeSection from './Components/SubscribeSection';
import ArticlesSection from './Components/ArticleSection';
import './index.css';


function App() {
  return (
    <div className="App">
      <Header />
      <ArticlesSection />
      <AboutUsSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default App;
