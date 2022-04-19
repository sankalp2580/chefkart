import React from "react";
import '../App.css';
import { Header } from './Header';
import { Current } from './Current';
import { Nav } from './Nav';
import { Dishes } from './Dishes';
import { Dropdown } from './Dropdown';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Card } from './Card';
import { Footer } from './Footer';



function Home() {
  return (
    <>
    <div className="Home">
     <div className='fixed'>
     <Header />
      <Current />
      <br/>
      <Nav />
      <Dishes />
     </div>
      <hr/>
      <Dropdown />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Footer />
    </div>
    </>
  );
}

export default Home;
