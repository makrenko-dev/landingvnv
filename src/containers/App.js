import React from 'react';
import './App.css';
import Header from '../components/Header';
import Main from '../containers/Main';
import Advantages from '../containers/Advantages';
import {adv} from '../components/Adv_list';
import Tabs from '../containers/Tabs';
import LeadMagnet from '../components/LeadMagnet';
import Contact from '../components/Contact';
import Portfolio from '../containers/Portfolio';
import FAQ from '../containers/FAQ';
import SocialFollow from '../components/SocialFollow';
import Reviews from '../containers/Reviews';
import Roulette from '../containers/Roulette';
import Footer from '../components/Footer';



function App() {
  return (
    <div style={{backgroundColor:'black'}}>
      <Header />
      <Main />
      <Advantages adv={adv}/>
      <Tabs />
      <LeadMagnet />
      <Contact />
      <Portfolio />
      <FAQ />
      <SocialFollow />
      <Reviews />
      <Roulette />
      <Footer />
    </div>
  );
}

export default App;
